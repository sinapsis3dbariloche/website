import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const dir = '/app/applet';

async function main() {
    const files = fs.readdirSync(dir).filter(f => f.startsWith('Captura de pantalla') && f.endsWith('.png'));
    const results = [];
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(`Analyzing ${file}... (${i+1}/${files.length})`);
        try {
            const filePath = path.join(dir, file);
            const fileData = fs.readFileSync(filePath).toString('base64');
            const part = { inlineData: { data: fileData, mimeType: 'image/png' } };
            
            const prompt = `Analyze this image of a product/service from a 3D printing and graphic design shop.
            Return a JSON object with the following schema:
            {
                "filename": "A short, SEO-friendly filename in lowercase with hyphens, ending in .png",
                "title": "A short, attractive title",
                "description": "A 2-sentence description highlighting personalization",
                "category": "Choose one: 'Impresión 3D', 'Gráfica', or 'Hogar y Decoración'",
                "tags": ["tag1", "tag2", "tag3"]
            }
            ONLY RETURN VALID JSON, no markdown formatting.`;
            
            const response = await ai.models.generateContent({
                model: 'gemini-1.5-flash',
                contents: [prompt, part]
            });
            
            let text = response.text.trim();
            if (text.startsWith('```json')) text = text.replace(/```json/g, '');
            if (text.endsWith('```')) text = text.replace(/```/g, '');
            text = text.trim();
            
            const result = JSON.parse(text);
            result.originalFile = file;
            results.push(result);
            fs.writeFileSync('analysis_results.json', JSON.stringify(results, null, 2));
            console.log(`Successfully analyzed: ${result.filename}`);
        } catch (e) {
            console.error(`Error analyzing ${file}:`, e.message);
        }
        await new Promise(r => setTimeout(r, 1000));
    }
    console.log('Done!');
}

main();

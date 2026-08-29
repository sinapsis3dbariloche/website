import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const dir = '/app/applet/public/images';

async function main() {
    const files = fs.readdirSync(dir).filter(f => f.startsWith('Captura de pantalla') && f.endsWith('.png'));
    let results = [];
    if (fs.existsSync('analysis_results_batch2.json')) {
        results = JSON.parse(fs.readFileSync('analysis_results_batch2.json'));
    }
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (results.some(r => r.originalFile === file)) {
            console.log(`Skipping already processed: ${file}`);
            continue;
        }
        
        console.log(`Analyzing ${file}... (${i+1}/${files.length})`);
        try {
            const filePath = path.join(dir, file);
            const stats = fs.statSync(filePath);
            if (stats.size === 0) {
               console.log(`${file} is 0 bytes! Skipping image analysis.`);
               continue;
            }

            const fileData = fs.readFileSync(filePath).toString('base64');
            const part = { inlineData: { data: fileData, mimeType: 'image/png' } };
            
            const prompt = `Analyze this image of a product/service from a 3D printing and graphic design shop.
            Return a JSON object with the following schema:
            {
                "filename": "A short, SEO-friendly filename in lowercase with hyphens, ending in .png",
                "title": "A short, attractive title",
                "description": "A 2-sentence description highlighting personalization",
                "category": "Choose exactly one from this list: 'Souvenirs y Cumpleaños', 'Corporativo y Marcas', 'Deportivos y Premios', 'Hogar y Decoración'",
                "tags": ["tag1", "tag2", "tag3"]
            }
            ONLY RETURN VALID JSON, no markdown formatting.`;
            
            const response = await ai.models.generateContent({
                model: 'gemini-3.6-flash',
                contents: [prompt, part]
            });
            
            let text = response.text.trim();
            if (text.startsWith('```json')) text = text.replace(/```json/g, '');
            if (text.endsWith('```')) text = text.replace(/```/g, '');
            text = text.trim();
            
            const result = JSON.parse(text);
            result.originalFile = file;
            results.push(result);
            fs.writeFileSync('analysis_results_batch2.json', JSON.stringify(results, null, 2));
            console.log(`Successfully analyzed: ${result.filename}`);
        } catch (e) {
            console.error(`Error analyzing ${file}:`, e.message);
        }
    }
    console.log('Done!');
}

main();

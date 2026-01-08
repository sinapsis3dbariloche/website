
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getLatestNews = async () => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Genera 3 noticias breves y emocionantes sobre 'Sinapsis 3D Bariloche' (un taller de impresión 3D). Menciona nuevos diseños, trabajos personalizados y la ubicación en Bariloche. Devuelve en formato JSON.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              title: { type: Type.STRING },
              content: { type: Type.STRING },
              date: { type: Type.STRING },
            },
            required: ["id", "title", "content", "date"]
          }
        }
      }
    });
    
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error fetching news from Gemini:", error);
    // Fallback static data
    return [
      {
        id: '1',
        title: '¡Nuevos Diseños en MakerWorld!',
        content: 'Ya están disponibles nuestras últimas creaciones. ¡Corre a descargarlas!',
        date: 'Reciente'
      },
      {
        id: '2',
        title: 'Pedidos Personalizados Abiertos',
        content: '¿Tenés una idea en mente? En Sinapsis 3D la hacemos realidad con la mejor precisión.',
        date: 'Esta semana'
      },
      {
        id: '3',
        title: 'Directo desde el Taller',
        content: 'Nuestra granja de impresoras en Altos del Cóndor está trabajando sin parar.',
        date: 'Hoy'
      }
    ];
  }
};


import { GoogleGenAI, Type } from "@google/genai";

export const getLatestNews = async () => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.warn("API_KEY no configurada. Usando datos locales.");
    return { news: getFallbackNews(), sources: [] };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: "Investiga el perfil de Instagram 'https://www.instagram.com/sinapsis3dbariloche/'. Identifica las 3 actividades o publicaciones más recientes (pueden ser Reels, Posts o novedades de tienda). Devuelve un JSON con un array de objetos: id, type (REEL, POST o STORE), title, content (resumen corto), y date (ej: 'Hoy', 'Ayer', 'Hace 3 días').",
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              type: { type: Type.STRING },
              title: { type: Type.STRING },
              content: { type: Type.STRING },
              date: { type: Type.STRING },
            },
            required: ["id", "type", "title", "content", "date"]
          }
        }
      }
    });
    
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const news = JSON.parse(response.text);
    
    return { news, sources };
  } catch (error) {
    console.error("Error al obtener noticias de Gemini con Search:", error);
    return { news: getFallbackNews(), sources: [] };
  }
};

const getFallbackNews = () => [
  {
    id: '1',
    type: 'POST',
    title: 'Soluciones Industriales',
    content: 'Fabricación de repuestos y prototipos con precisión para empresas locales.',
    date: 'Destacado'
  },
  {
    id: '2',
    type: 'REEL',
    title: 'Detrás de Escena',
    content: 'Mira cómo nuestras Bambu Lab trabajan 24/7 en tus pedidos personalizados.',
    date: 'Reciente'
  },
  {
    id: '3',
    type: 'STORE',
    title: 'Catálogo Actualizado',
    content: 'Nuevos diseños de toppers y souvenirs disponibles en nuestra bio.',
    date: 'Ahora'
  }
];

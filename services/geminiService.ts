
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
      contents: "Accede ahora mismo a 'https://www.instagram.com/sinapsis3dbariloche/'. Identifica los 3 posts o reels más recientes. Para cada uno extrae: 1. Un título corto. 2. Un resumen del contenido (máximo 100 caracteres). 3. La fecha relativa (ej: Hace 5 horas, Ayer). 4. El enlace directo al post si está disponible. Devuelve un JSON estructurado.",
      config: {
        tools: [{ googleSearch: {} }],
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
              url: { type: Type.STRING, description: "URL directa del post de Instagram" }
            },
            required: ["id", "title", "content", "date"]
          }
        }
      }
    });
    
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const news = JSON.parse(response.text);
    
    return { news, sources };
  } catch (error) {
    console.error("Error al sincronizar con Instagram:", error);
    return { news: getFallbackNews(), sources: [] };
  }
};

const getFallbackNews = () => [
  {
    id: '1',
    title: 'Producción Activa',
    content: 'Nuestras impresoras no descansan. ¡Consultá por tus pedidos mayoristas!',
    date: 'Hace poco',
    url: 'https://www.instagram.com/sinapsis3dbariloche/'
  },
  {
    id: '2',
    title: 'Nuevos Diseños',
    content: 'Acabamos de subir nuevos modelos a nuestro catálogo. ¡No te los pierdas!',
    date: 'Reciente',
    url: 'https://www.instagram.com/sinapsis3dbariloche/'
  },
  {
    id: '3',
    title: 'Envíos Despachados',
    content: 'Saliendo nuevos pedidos para todo el país. ¡Gracias por confiar!',
    date: 'Hoy',
    url: 'https://www.instagram.com/sinapsis3dbariloche/'
  }
];

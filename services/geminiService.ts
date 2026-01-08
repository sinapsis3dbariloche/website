
import { GoogleGenAI, Type } from "@google/genai";

export const getLatestNews = async () => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.warn("API_KEY no configurada. Usando datos locales.");
    return getFallbackNews();
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Genera 3 noticias breves y emocionantes sobre 'Sinapsis 3D Bariloche'. Menciona impresión 3D, regalos personalizados, venta mayorista y souvenirs para eventos. Devuelve en formato JSON.",
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
    console.error("Error al obtener noticias de Gemini:", error);
    return getFallbackNews();
  }
};

const getFallbackNews = () => [
  {
    id: '1',
    title: '¡Venta Mayorista Disponible!',
    content: 'Potenciamos tu negocio con producciones en serie de alta calidad.',
    date: 'Destacado'
  },
  {
    id: '2',
    title: 'Souvenirs para Eventos',
    content: 'Creamos toppers y recuerdos personalizados para que tu fiesta sea inolvidable.',
    date: 'Novedad'
  },
  {
    id: '3',
    title: 'Envíos a Domicilio',
    content: 'Recibí tus pedidos en la puerta de tu casa en Bariloche o cualquier punto del país.',
    date: 'Info'
  }
];


import { GoogleGenAI } from "@google/genai";

export const getLatestNews = async () => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    return { news: getFallbackNews(), sources: [] };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    // Usamos gemini-3-pro-preview para mayor capacidad de razonamiento y búsqueda
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: "Busca en Google el perfil de Instagram 'sinapsis3dbariloche'. Identifica las 3 publicaciones más recientes. Para cada una, necesito: un título representativo del producto (ej: Topper My Melody, Adorno León, etc), la fecha aproximada y una descripción de 15 palabras. Responde ÚNICAMENTE con un array de objetos JSON encerrado entre etiquetas ```json ... ```.",
      config: {
        tools: [{ googleSearch: {} }],
        // No forzamos responseMimeType aquí porque suele entrar en conflicto con la herramienta de búsqueda en algunos modelos preview
      }
    });
    
    const text = response.text;
    const jsonMatch = text.match(/```json([\s\S]*?)```/);
    const news = jsonMatch ? JSON.parse(jsonMatch[1]) : parseLooseJson(text);
    
    return { 
      news: news.length > 0 ? news : getFallbackNews(), 
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || [] 
    };
  } catch (error) {
    console.error("Error en sincronización IG:", error);
    return { news: getFallbackNews(), sources: [] };
  }
};

// Función auxiliar para intentar parsear si el modelo no pone las etiquetas
const parseLooseJson = (text: string) => {
  try {
    const start = text.indexOf('[');
    const end = text.lastIndexOf(']') + 1;
    if (start >= 0 && end > start) {
      return JSON.parse(text.substring(start, end));
    }
  } catch (e) {
    return getFallbackNews();
  }
  return getFallbackNews();
};

const getFallbackNews = () => [
  {
    id: 'fb-1',
    title: 'Topper My Melody',
    content: 'Diseño personalizado de My Melody con arcoíris para tortas infantiles. ¡Súper tierno!',
    date: 'Reciente',
    url: 'https://www.instagram.com/sinapsis3dbariloche/'
  },
  {
    id: 'fb-2',
    title: 'Adorno León 3D',
    content: 'Topper de León con detalles en capas. Ideal para temáticas de selva y safari.',
    date: 'Reciente',
    url: 'https://www.instagram.com/sinapsis3dbariloche/'
  },
  {
    id: 'fb-3',
    title: 'Topper Elefante Baby',
    content: 'Delicado adorno de elefante con globos y corazones. Perfecta combinación de colores.',
    date: 'Reciente',
    url: 'https://www.instagram.com/sinapsis3dbariloche/'
  }
];

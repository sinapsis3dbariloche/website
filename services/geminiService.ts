
import { GoogleGenAI } from "@google/genai";

// Function to fetch the latest news from Instagram using Gemini Search Grounding
export const getLatestNews = async () => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    return { news: getFallbackNews(), sources: [] };
  }

  try {
    // Initializing Gemini client with named parameter as required
    const ai = new GoogleGenAI({ apiKey });
    // Using gemini-3-pro-preview for advanced search results integration
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: "Analyze the Instagram profile 'sinapsis3dbariloche' using Google Search and identify the 3 most recent product posts. For each post, provide: 1) A clear product title in Spanish, 2) A 20-word description in Spanish highlighting the 3D print quality, 3) The relative date (e.g., 'Hace 2 días'), 4) A suggested FontAwesome 6 icon class (e.g., 'fa-cake-candles', 'fa-award', 'fa-puzzle-piece', 'fa-trophy', 'fa-shapes') that matches the product type. Return strictly a JSON array of objects inside markdown code blocks.",
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: "You are a social media analyst. Your task is to provide accurate, up-to-date information from the specified Instagram profile. If you cannot find recent posts, return the fallback JSON structure based on toppers, trophies and custom prints."
      }
    });
    
    // Accessing response text property directly
    const text = response.text || "";
    const jsonMatch = text.match(/```json([\s\S]*?)```/) || text.match(/\[([\s\S]*?)\]/);
    let news = [];
    try {
      if (jsonMatch) {
        const rawJson = jsonMatch[1] || jsonMatch[0];
        news = JSON.parse(rawJson.replace(/```json|```/g, '').trim());
      }
    } catch (e) {
      console.warn("Parsing failed, using fallback");
      news = getFallbackNews();
    }
    
    // Extracting grounding chunks for display to satisfy transparency requirements
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    return { 
      news: news.length > 0 ? news : getFallbackNews(), 
      sources: groundingChunks
    };
  } catch (error) {
    console.error("Error syncing with IG:", error);
    return { news: getFallbackNews(), sources: [] };
  }
};

// Provides default content if the search or API call fails
const getFallbackNews = () => [
  {
    id: 'fb-1',
    title: 'Topper My Melody Custom',
    content: 'Elegante topper de torta con diseño de My Melody. Impresión multicolor de alta definición para eventos infantiles.',
    date: '3 días atrás',
    icon: 'fa-cake-candles',
    url: 'https://www.instagram.com/sinapsis3dbariloche/'
  },
  {
    id: 'fb-2',
    title: 'Trofeo León de Selva',
    content: 'Trofeo temático con texturas detalladas. Ideal para premiaciones deportivas o eventos escolares en Bariloche.',
    date: '1 semana atrás',
    icon: 'fa-trophy',
    url: 'https://www.instagram.com/sinapsis3dbariloche/'
  },
  {
    id: 'fb-3',
    title: 'Adorno Elefante Baby',
    content: 'Tierno adorno decorativo en 3D. Acabado suave y colores pastel, perfecto para baby showers.',
    date: '2 semanas atrás',
    icon: 'fa-shapes',
    url: 'https://www.instagram.com/sinapsis3dbariloche/'
  }
];

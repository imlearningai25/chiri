import { GoogleGenAI, Type } from "@google/genai";
import { Review, SentimentAnalysis } from '../types';

export const analyzeReviews = async (reviews: Review[]): Promise<SentimentAnalysis> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key not found in environment variables.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Limit to last 20 reviews to avoid token limits if database grows large in this demo
  const reviewsToAnalyze = reviews.slice(0, 20).map(r => `Rating: ${r.rating}/5, Comment: "${r.comment}"`).join("\n");

  const prompt = `
    You are a food critic and business analyst. Analyze the following customer reviews for "Chiri's Momo Delight" food truck.
    Provide a structured summary containing:
    1. A brief executive summary of what people think.
    2. A list of specific dishes that are frequently praised.
    3. Constructive feedback or areas for improvement mentioned.
    4. An overall sentiment classification (Positive, Neutral, or Negative).
    
    Here are the reviews:
    ${reviewsToAnalyze}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            highlightedDishes: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            areasForImprovement: { type: Type.STRING },
            overallSentiment: { type: Type.STRING, enum: ["Positive", "Neutral", "Negative"] }
          }
        }
      }
    });

    const text = response.text;
    if (!text) {
        throw new Error("No response from Gemini");
    }
    
    return JSON.parse(text) as SentimentAnalysis;

  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
};
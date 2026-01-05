
import { GoogleGenAI, Type } from "@google/genai";

// Initialize using process.env.API_KEY directly as per SDK guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Fix: Added missing export getClinicalAssistantResponse used in ChatBot.tsx
export const getClinicalAssistantResponse = async (message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: "Você é a assistente virtual do CCIAPM (Centro Clínico de Investigação e Apoio Psicológico Moderno). Seja empática, profissional e informativa. Forneça informações gerais sobre a clínica, especialidades e incentive o agendamento de consultas. Importante: Não forneça diagnósticos ou conselhos médicos específicos.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Assistant API Error:", error);
    return "Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente mais tarde.";
  }
};

export const getResearchInsights = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Resuma o estado atual da pesquisa científica sobre: ${topic}. Foque em achados recentes e implicações práticas na psicologia.`,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: "Você é um pesquisador sênior em psicologia. Forneça resumos baseados em evidências científicas.",
      },
    });
    
    const text = response.text;
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || "Fonte",
      uri: chunk.web?.uri || "#"
    })) || [];

    return { text, sources };
  } catch (error) {
    console.error("Research API Error:", error);
    return { text: "Não foi possível realizar a pesquisa no momento.", sources: [] };
  }
};

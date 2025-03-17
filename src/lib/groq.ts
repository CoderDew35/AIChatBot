import Groq from 'groq-sdk';
import { Message } from '../types/chat';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Enable browser usage
});

export async function getChatCompletion(messages: Message[]) {
  try {
    const completion = await groq.chat.completions.create({
      messages,
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1024,
    });

    return completion.choices[0]?.message?.content || "";
  } catch (error) {
    console.error('Error getting chat completion:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to get response from Groq');
  }
}
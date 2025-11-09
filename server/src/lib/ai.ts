import { embed } from 'ai';
import { openai } from '@ai-sdk/openai';

/**
 * Generate embedding vector for text
 * Used to convert questions into vectors for similarity search
 * 
 * @param text - Text to convert to embedding
 * @returns Array of 1536 numbers (embedding vector)
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const { embedding } = await embed({
      model: openai.embedding('text-embedding-3-small'),
      value: text,
    });
    return embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw new Error('Failed to generate embedding');
  }
}

/**
 * OpenAI model instance for chat
 * Using GPT-4 Turbo for high-quality responses
 */
export { openai };

import { Pinecone } from '@pinecone-database/pinecone';

/**
 * Pinecone client instance
 * Connects to vector database storing Octant documentation
 */
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

/**
 * Pinecone index containing documentation embeddings
 */
const index = pinecone.index(process.env.PINECONE_INDEX_NAME || 'octant-docs');

/**
 * Search documentation using vector similarity
 * 
 * @param embedding - Question embedding vector
 * @param topK - Number of results to return (default: 5)
 * @returns Array of relevant documentation chunks
 */
export async function searchDocumentation(embedding: number[], topK: number = 5) {
  try {
    const results = await index.query({
      vector: embedding,
      topK,
      includeMetadata: true,
    });
    
    return results.matches.map(match => ({
      content: match.metadata?.content as string || '',
      title: match.metadata?.title as string || 'Unknown',
      source: match.metadata?.source as string || 'Unknown',
      score: match.score || 0,
    }));
  } catch (error) {
    console.error('Error searching Pinecone:', error);
    throw new Error('Failed to search documentation');
  }
}

export { pinecone, index };

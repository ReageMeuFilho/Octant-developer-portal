import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Simple ping endpoint to verify Vercel Functions are working
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).send('ok');
}

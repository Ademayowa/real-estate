import { client } from '@/lib/sanity.client';
import { allPropertyQuery } from '@/utils/queries';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const query = allPropertyQuery();

    const data = await client.fetch(query);
    res.status(200).json(data);
  }
}

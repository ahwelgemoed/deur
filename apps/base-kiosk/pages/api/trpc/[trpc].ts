import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('req.url', req.url);
}

// export default createTRPCServerClient<CloudAppRouter>(`http://127.0.0.1:3030/trpc`);

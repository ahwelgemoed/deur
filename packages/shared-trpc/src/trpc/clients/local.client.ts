import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

import { LocalAppRouter } from '../routers/local.router';
export const setLocalTRPCClient = (connectionUrl: string) => {
  const trpcBaseLocalClient = createTRPCProxyClient<LocalAppRouter>({
    transformer: superjson,
    links: [
      httpBatchLink({
        url: connectionUrl,
      }),
    ],
  });
  return trpcBaseLocalClient;
};

import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

export const createTRPCServerClient = <T>(connectionUrl: string) => {
  // @ts-ignore
  const trpcBaseLocalClient = createTRPCProxyClient<T>({
    transformer: superjson,
    links: [
      httpBatchLink({
        url: connectionUrl,
      }),
    ],
  });
  return trpcBaseLocalClient;
};

import { CloudAppRouter } from '@deur/cloud-trpc';
import { LocalAppRouter } from '@deur/local-trpc';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import superjson from 'superjson';

export const trpcCloud = createTRPCNext<CloudAppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        httpBatchLink({
          url: 'http://127.0.0.1:3030/trpc',
        }),
      ],
    };
  },
  ssr: false,
});
export const trpcLocal = createTRPCNext<LocalAppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        httpBatchLink({
          url: 'http://127.0.0.1:3033/trpc',
        }),
      ],
    };
  },
  ssr: false,
});

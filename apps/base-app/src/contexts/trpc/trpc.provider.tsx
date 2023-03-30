import { MergedAppRouter } from '@deur/local-trpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { useState } from 'react';
import superjson from 'superjson';

export const mergedTrpcApi = createTRPCReact<MergedAppRouter>();

export const TRPCProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  const [cloudTrpcClient] = useState(() =>
    mergedTrpcApi.createClient({
      transformer: superjson,
      links: [
        (runtime) => {
          const servers = {
            local: httpBatchLink({ url: 'http://localhost:3033/trpc' })(runtime),
            cloud: httpBatchLink({ url: 'http://localhost:3030/trpc' })(runtime),
          };
          return (ctx) => {
            const { op } = ctx;
            const pathParts = op.path.split('.');
            const serverName = pathParts.shift() as string as keyof typeof servers;
            const path = pathParts.join('.');
            console.log(`> calling ${serverName} on path ${path}`, {
              input: op.input,
            });
            const link = servers[serverName];
            return link({
              ...ctx,
              op: {
                ...op,
                path,
              },
            });
          };
        },
      ],
    })
  );

  return (
    <mergedTrpcApi.Provider client={cloudTrpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </mergedTrpcApi.Provider>
  );
};

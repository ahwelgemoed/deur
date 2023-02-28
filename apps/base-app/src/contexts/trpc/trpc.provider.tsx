import { CloudAppRouter } from '@deur/cloud-trpc';
import { LocalAppRouter } from '@deur/local-trpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { useState } from 'react';
import superjson from 'superjson';

export const localTrpcApi = createTRPCReact<LocalAppRouter>();
export const cloudTrpcApi = createTRPCReact<CloudAppRouter>();

export const TRPCProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [localTrpcClient] = useState(() =>
    localTrpcApi.createClient({
      transformer: superjson,
      links: [
        httpBatchLink({
          url: `http://localhost:3030/trpc`,
        }),
      ],
    })
  );
  const [cloudTrpcClient] = useState(() =>
    cloudTrpcApi.createClient({
      transformer: superjson,
      links: [
        httpBatchLink({
          url: `http://localhost:3033/trpc`,
        }),
      ],
    })
  );
  return (
    <cloudTrpcApi.Provider client={cloudTrpcClient} queryClient={queryClient}>
      <localTrpcApi.Provider client={localTrpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </localTrpcApi.Provider>
    </cloudTrpcApi.Provider>
  );
};

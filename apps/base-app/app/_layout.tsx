/**
 * All Global Configs and Layouts from here
 */

import { DeviceStateProvider } from '@deur/shared-hooks';
import { LocalAppRouter } from '@deur/shared-trpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { Navigator, Slot, useRouter } from 'expo-router';
import { useState } from 'react';
import superjson from 'superjson';

import AxiosInstance from '../src/api/AxiosInstance';
import { IdleStateProvider } from '../src/contexts/IdleState.Context';

export const api = createTRPCReact<LocalAppRouter>();

export const TRPCProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    api.createClient({
      transformer: superjson,
      links: [
        httpBatchLink({
          url: `http://localhost:3033/trpc`,
        }),
      ],
    })
  );
  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </api.Provider>
  );
};

export default function Layout() {
  return (
    <TRPCProvider>
      <DeviceStateProvider useRouter={useRouter} setupUrl={'/initial-device-setup'}>
        <IdleStateProvider>
          <AxiosInstance>
            <RootLayout />
          </AxiosInstance>
        </IdleStateProvider>
      </DeviceStateProvider>
    </TRPCProvider>
  );
}

function RootLayout() {
  return (
    <Navigator>
      <Slot />
    </Navigator>
  );
}

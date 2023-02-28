import { DeviceStateProvider } from '@deur/shared-hooks';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';

import '../styles/global.css';
import { trpc, trpcLocal } from '../utlis/trpc';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <DeviceStateProvider useRouter={useRouter} setupUrl={'/setup-device'}>
        <Component {...pageProps} />
      </DeviceStateProvider>
    </ThemeProvider>
  );
}

export default trpcLocal.withTRPC(trpc.withTRPC(MyApp));

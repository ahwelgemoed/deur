import { DeviceStateProvider } from '@deur/shared-hooks';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { trpcCloud, trpcLocal } from '../utils/trpc';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DeviceStateProvider useRouter={useRouter} setupUrl={'/setup-device'}>
      <Component {...pageProps} />
    </DeviceStateProvider>
  );
}

export default trpcLocal.withTRPC(trpcCloud.withTRPC(MyApp));

'client';
import { DeviceStateProvider } from '@deur/shared-hooks';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';

import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <DeviceStateProvider useRouter={useRouter} setupUrl={'/setup-device'}>
        {typeof window === 'undefined' ? null : <Component {...pageProps} />}
      </DeviceStateProvider>
    </ThemeProvider>
  );
}

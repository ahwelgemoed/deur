import { DeviceStateProvider } from '@deur/shared-hooks';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';

import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <DeviceStateProvider useRouter={useRouter} setupUrl={'/setup-device'}>
        <Component {...pageProps} />
      </DeviceStateProvider>
    </ThemeProvider>
  );
}

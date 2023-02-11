import { DeviceStateProvider } from '@deur/shared-hooks';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <DeviceStateProvider>
        <Component {...pageProps} />
      </DeviceStateProvider>
    </ThemeProvider>
  );
}

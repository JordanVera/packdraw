import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { PacksProvider } from '@/providers/UserProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PacksProvider>
      <Component {...pageProps} />
    </PacksProvider>
  );
}

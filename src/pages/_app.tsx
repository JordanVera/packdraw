import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { PacksProvider } from '@/providers/PackProvider';
import { UserProvider } from '@/providers/UserProvider';
import AuthProvider from '@/providers/SessionProvider';

import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider session={null}>
      <UserProvider>
        <PacksProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PacksProvider>
      </UserProvider>
    </AuthProvider>
  );
}

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { PacksProvider } from '@/providers/PackProvider';

import { UserProvider } from '@/providers/UserProvider';
import Navbar from '@/components/Navbar';
import LoginModal from '@/components/modals/LoginModal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <PacksProvider>
        <Navbar />
        <Component {...pageProps} />
        <LoginModal />
      </PacksProvider>
    </UserProvider>
  );
}

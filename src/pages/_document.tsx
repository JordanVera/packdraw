import Navbar from '@/components/Navbar';
import { Html, Head, Main, NextScript } from 'next/document';
import LoginModal from '@/components/modals/LoginModal';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

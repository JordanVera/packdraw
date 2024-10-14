import Image from 'next/image';
import localFont from 'next/font/local';
import NewPacks from '@/components/NewPacks';
import { usePacks } from '@/providers/UserProvider';

export default function Home() {
  return (
    <div>
      <main className="max-w-screen-lg mx-auto m-10 border border-red-600">
        <h1>Hello World</h1>

        <NewPacks />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

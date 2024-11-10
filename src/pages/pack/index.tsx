import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import PacksPageNav from '@/components/nav/PacksPageNav';
import { usePacks } from '@/providers/PackProvider';

const Pack = () => {
  const [isPacksOpen, setIsPacksOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const { allPacks } = usePacks();

  return (
    <main className="max-w-screen-xl mx-auto m-5 flex gap-5">
      <PacksPageNav
        isPacksOpen={isPacksOpen}
        setIsPacksOpen={setIsPacksOpen}
        isPriceOpen={isPriceOpen}
        setIsPriceOpen={setIsPriceOpen}
      />
      <div className="flex w-60 gap-5 border border-green-500">
        Live PULLSSSSS
      </div>
    </main>
  );
};

export default Pack;

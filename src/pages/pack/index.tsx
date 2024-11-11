import { useState, useEffect } from 'react';
import PacksPageNav from '@/components/nav/PacksPageNav';
import { usePacks } from '@/providers/PackProvider';
import PackCard_Main from '@/components/cards/PackCard_Main';

const Pack = () => {
  const [isPacksOpen, setIsPacksOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const { allPacks } = usePacks();

  return (
    <main className="max-w-screen-xl mx-auto  flex gap-5">
      <div className="flex flex-col gap-5 flex-1 items-stretch">
        <PacksPageNav
          isPacksOpen={isPacksOpen}
          setIsPacksOpen={setIsPacksOpen}
          isPriceOpen={isPriceOpen}
          setIsPriceOpen={setIsPriceOpen}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 flex-1">
          {allPacks.map((pack) => (
            <PackCard_Main key={pack.id} pack={pack} />
          ))}
        </div>
      </div>
      <div className="flex w-60 gap-5 border border-green-500">
        Live PULLSSSSS
      </div>
    </main>
  );
};

export default Pack;

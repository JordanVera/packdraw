import { usePacks } from '@/providers/PackProvider';
import React from 'react';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import PackCard_Main from './cards/PackCard_Main';

const NewPacks = () => {
  const { allPacks } = usePacks();

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">New Packs</h2>
        <Link
          href="/pack"
          className="text-sm font-semibold px-3 py-2 rounded-md backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors duration-200 ease-in-out"
        >
          View All Packs
        </Link>
      </div>
      <div className="flex flex-wrap gap-4">
        {[...allPacks].slice(0, 5).map((pack) => (
          <PackCard_Main key={pack.id} pack={pack} />
        ))}
      </div>
    </div>
  );
};

export default NewPacks;

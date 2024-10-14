import React from 'react';
import { usePacks } from '@/providers/UserProvider';

const NewPacks = () => {
  const { allPacks } = usePacks();

  console.log(allPacks);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">New Packs</h2>
      <div className="flex flex-wrap gap-4">
        {allPacks.map((pack) => (
          <div key={pack.id} className="flex flex-col gap-5">
            <img src={pack.coverImage} alt={pack.name} className="w-48" />
            <h4 className="text-xl font-semibold text-center">${pack.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPacks;

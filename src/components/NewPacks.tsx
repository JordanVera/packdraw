import React from 'react';
import { usePacks } from '@/providers/UserProvider';

const NewPacks = () => {
  const { allPacks } = usePacks();

  console.log(allPacks);

  return (
    <div>
      <h2>New Packs</h2>
      <div className="flex flex-wrap gap-4">
        {allPacks.map((pack) => (
          <div key={pack.id}>
            <img src={pack.coverImage} alt={pack.name} className="h-52" />
            <h4 className="text-xl font-bold text-center">${pack.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPacks;

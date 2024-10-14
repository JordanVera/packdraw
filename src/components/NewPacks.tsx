import React from 'react';
import { usePacks } from '@/providers/UserProvider';

const NewPacks = () => {
  const { allPacks } = usePacks();

  console.log(allPacks);

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">New Packs</h2>
        <button className="text-sm font-semibold px-3 py-1 rounded-md bg-blue-600">
          View All
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {[...allPacks, ...allPacks].slice(0, 5).map((pack) => (
          <div key={pack.id} className="flex flex-col gap-5">
            <img
              src={pack.coverImage}
              alt={pack.name}
              className="w-full max-w-[186px] card"
            />
            <h4 className="text-xl font-semibold text-center">${pack.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPacks;

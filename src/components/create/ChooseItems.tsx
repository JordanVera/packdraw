import { useState, useEffect } from 'react';
import { usePacks } from '@/providers/PackProvider';
import ItemCard from './ItemCard';

const ChooseItems = () => {
  const { allItems } = usePacks();

  useEffect(() => {
    console.log({ allItems });
  }, [allItems]);

  return (
    <div className="flex flex-col gap-5 rounded-lg bg-zinc-900 p-5">
      <div className="flex  items-center gap-5">
        <h2 className="flex items-center justify-center text-xl font-bold bg-zinc-900 rounded-lg h-10 w-10">
          1
        </h2>
        <h2 className="text-xl font-bold">Choose Items</h2>

        <p className="text-sm text-zinc-400">(50 items max)</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
        {allItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ChooseItems;

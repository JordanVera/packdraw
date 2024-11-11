import { useState } from 'react';
import { setItemRarity } from '../../utils/setItemRarity';
import { PackItem } from '@/types/PackItem';

const ItemCardMinimal = ({ packItem }: { packItem: PackItem }) => {
  console.log(setItemRarity(Number(packItem.quantity)));

  

  return (
    <div
      key={packItem.item.id}
      className="aspect-square bg-zinc-800 bg-opacity-50 rounded-lg shadow-md p-4 flex flex-col justify-between"
    >
      <p className="text-xs font-semibold text-gray-400 text-center">
        {Number(packItem.quantity).toFixed(4)}%
      </p>
      <div className="flex-grow flex items-center justify-center relative">
        {/* Added glow pseudo-element */}

        <div
          className={`h-24 w-24 absolute  left-7 top-2 rounded-full bg-gradient-radial ${setItemRarity(
            Number(packItem.quantity)
          )} to-transparent blur-xl`}
        />
        <img
          src={packItem.item.image}
          alt={packItem.item.name}
          className="z-[9999] h-20 w-20 max-w-full max-h-full object-contain rounded-md"
        />
      </div>
      <div>
        <h3 className="text-sm font-bold truncate text-center">
          {packItem.item.name}
        </h3>
        <p className="text-sm text-zinc-400 text-center">
          ${packItem.item.price}
        </p>
      </div>
    </div>
  );
};

export default ItemCardMinimal;

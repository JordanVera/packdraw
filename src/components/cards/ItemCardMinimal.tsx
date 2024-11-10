import { useState } from 'react';

const ItemCardMinimal = ({ packItem }) => {
  const [bgColor, setBgColor] = useState('');

  const setItemRarity = (quantity: number) => {
    switch (true) {
      case quantity >= 10:
        return 'bg-zinc-400/30'; // Common: 10% or higher
      case quantity >= 5:
        return 'bg-emerald-500/30'; // Uncommon: 5-10%
      case quantity >= 1:
        return 'bg-purple-500/30'; // Rare: 2-5%
      case quantity >= 0.1:
        return 'bg-red-500/30'; // Epic: 0.1-2%
      default:
        return 'bg-yellow-500/30'; // Legendary: Less than 0.1%
    }
  };

  console.log({ packItem });

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
          className={`h-24 w-24 absolute left-7 top-2  rounded-full bg-gradient-radial ${setItemRarity(
            Number(packItem.quantity)
          )} to-transparent blur-xl`}
        />
        <img
          src={packItem.item.image}
          alt={packItem.item.name}
          className="z-[9999] h-20 w-20 max-w-full max-h-full object-contain rounded-md relative"
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

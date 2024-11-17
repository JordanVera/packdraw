// import { setItemRarity } from '@/utils/setItemRarity';
import { PackItem } from '@/types/PackItem';

const SellItemCard = ({ packItem }: { packItem: PackItem }) => {
  return (
    <div
      key={packItem.item.id}
      className="aspect-square bg-zinc-800 bg-opacity-50 rounded-lg shadow-md p-4 flex flex-col justify-between max-h-52 max-w-52"
    >
      <div className="flex-grow flex items-center justify-center relative">
        <div
          className={`h-24 w-24 absolute left-7 top-0 rounded-full bg-gradient-radial to-transparent blur-xl`}
        />
        <img
          src={packItem.item.image}
          alt={packItem.item.name}
          className="z-20 h-20 w-20 max-w-full max-h-full object-contain rounded-md"
        />
      </div>
      <div>
        <h3 className="text-sm font-bold truncate text-center">
          {packItem.item.name}
        </h3>
        <p className="text-sm text-zinc-400 text-center">
          ${packItem.item.price}
        </p>

        <button className="bg-red-500 text-white px-2 py-1 rounded-md w-full">
          sell
        </button>
      </div>
    </div>
  );
};

export default SellItemCard;

import { useState, useEffect } from 'react';
import { Eye, X } from 'lucide-react'; // Replace Icon1 and Icon2 with actual icon names you choose
import { Item } from '@/types/Item';
import { formatNumberWithCommas } from '@/utils/formatNumbers';

const SelectedItemCard = ({
  item,
  setSelectedItems,
  totalQuantityOfItems,
  handleQuantityChange,
}: {
  item: Item;
  setSelectedItems: React.Dispatch<React.SetStateAction<Item[]>>;
  totalQuantityOfItems: number;
  handleQuantityChange: (itemId: string, newQuantity: number) => void;
}) => {
  const [quantity, setQuantity] = useState(item.quantity || 1.002);

  useEffect(() => {
    setQuantity(item.quantity || 1.002);
  }, [item.quantity]);

  const handleQuantityUpdate = (newQuantity: number) => {
    setQuantity(newQuantity);
    handleQuantityChange(item.id, newQuantity);
  };

  const handleRemoveItem = () => {
    setSelectedItems((prev: Item[]) =>
      prev.filter((i: Item) => i.id !== item.id)
    );
  };

  return (
    <div
      key={item.id}
      className={`relative w-full max-w-xs aspect-square bg-zinc-800 bg-opacity-50 rounded-lg shadow-md p-4 flex flex-col justify-between`}
    >
      {/* Upper Left Icon Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          // Add your handler here
        }}
        className="absolute top-2 left-2 p-1 bg-zinc-700 bg-opacity-50 rounded-full hover:bg-zinc-600 transition-colors duration-300"
      >
        <Eye className="h-4 w-4 text-white" />
      </button>

      {/* Upper Right Icon Button */}
      <button
        onClick={handleRemoveItem}
        className="absolute top-2 right-2 p-1 bg-zinc-700 bg-opacity-50 rounded-full hover:bg-zinc-600 transition-colors duration-300"
      >
        <X className="h-4 w-4 text-white" />
      </button>

      <div className="flex-grow flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="h-20 w-20 max-w-full max-h-full object-contain rounded-md"
        />
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-bold truncate text-center">{item.name}</h3>
        <p className="text-sm text-zinc-400 text-center">
          ${formatNumberWithCommas(item.price.toFixed(2))}
        </p>
      </div>

      <input
        value={quantity.toFixed(4)}
        onChange={(e) => {
          const value = e.target.value;
          // Allow direct editing by converting string to number
          const newQuantity = value === '' ? 0 : Number(value);
          handleQuantityUpdate(newQuantity);
        }}
        type="number"
        min="0"
        step="1"
        // Add these attributes to allow decimal places while keeping step=1
        inputMode="decimal"
        pattern="[0-9]*(.[0-9]{0,4})?"
        className="px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
};

export default SelectedItemCard;

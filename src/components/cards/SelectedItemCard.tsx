import { useState, useEffect } from 'react';
import { Eye, X } from 'lucide-react';
import { Item } from '@/types/Item';
import { formatNumberWithCommas } from '@/utils/formatNumbers';
import TextField from '@mui/material/TextField';

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
  const [quantity, setQuantity] = useState<number>(item.quantity || 1.0);

  const formatInputValue = (value: number): string => {
    return value.toFixed(4);
  };

  const [inputValue, setInputValue] = useState<string>(
    formatInputValue(item.quantity || 1.0)
  );

  useEffect(() => {
    setQuantity(item.quantity || 1.0);
    setInputValue(formatInputValue(item.quantity || 1.0));
  }, [item.quantity]);

  // Helper function to format the input value as a string with exactly four decimal places

  const handleQuantityUpdate = (newQuantity: number) => {
    setQuantity(newQuantity);
    handleQuantityChange(item.id, newQuantity);
    setInputValue(formatInputValue(newQuantity));
  };

  const handleRemoveItem = () => {
    setSelectedItems((prev: Item[]) =>
      prev.filter((i: Item) => i.id !== item.id)
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow inputs like .0020, 0.0020, 1.0200, etc.
    if (/^(\d*\.\d{0,4})?$/.test(value)) {
      setInputValue(value);

      // Parse the input to a number; if it's just a '.', treat it as 0
      const parsed = parseFloat(value);
      const newQuantity = isNaN(parsed) ? 0 : parsed;

      setQuantity(newQuantity);
      handleQuantityChange(item.id, newQuantity);
    }
  };

  const handleInputBlur = () => {
    // Format the input value to exactly four decimal places
    setInputValue(formatInputValue(quantity));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !/[\d.]/.test(e.key) &&
      !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)
    ) {
      e.preventDefault();
    }
    // Prevent multiple decimal points
    if (
      e.key === '.' &&
      (e.currentTarget.value.includes('.') || e.currentTarget.value === '')
    ) {
      e.preventDefault();
    }
  };

  const incrementQuantity = () => {
    handleQuantityUpdate(quantity + 1);
  };

  const decrementQuantity = () => {
    handleQuantityUpdate(quantity - 1);
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

      <div className="flex items-center space-x-2">
        {/* Decrement Button */}
        <button
          onClick={decrementQuantity}
          className="px-3 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-600 transition-colors duration-300"
        >
          -
        </button>

        {/* Quantity Input */}
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          onKeyDown={handleKeyDown}
          onBlur={handleInputBlur}
          placeholder="0.0000"
          className="flex-1 w-24 px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        {/* Increment Button */}
        <button
          onClick={incrementQuantity}
          className="px-3 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-600 transition-colors duration-300"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SelectedItemCard;

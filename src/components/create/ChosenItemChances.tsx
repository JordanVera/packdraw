import { useState, useEffect } from 'react';
import { Item } from '@/types/Item';
import SelectedItemCard from '@/components/cards/SelectedItemCard';
import ProgressBar from '@ramonak/react-progress-bar';
import { formatNumberWithCommas } from '@/utils/formatNumbers';

const ChosenItemChances = ({
  selectedItems,
  setSelectedItems,
  totalQuantityOfItems,
  handleQuantityChange,
  computedPackPrice,
  setComputedPackPrice,
  commission,
}: {
  selectedItems: Item[];
  setSelectedItems: React.Dispatch<React.SetStateAction<Item[]>>;
  totalQuantityOfItems: number;
  handleQuantityChange: (itemId: string, newQuantity: number) => void;
  computedPackPrice: number;
  setComputedPackPrice: React.Dispatch<React.SetStateAction<number>>;
  commission: number;
}) => {
  useEffect(() => {
    // Calculate expected value based on probabilities
    const expectedValue = selectedItems.reduce((total, item) => {
      // Convert quantity to probability (quantity of 1 = 1% chance)
      const probability = item.quantity / 100;
      // Multiply item price by probability to get expected value contribution
      return total + item.price * probability;
    }, 0);

    // 546,941.85

    // Add 10% commission please creators commission
    const vig = 1.1 + commission / 100;

    const packPrice = expectedValue * vig;

    setComputedPackPrice(packPrice);
  }, [selectedItems, setComputedPackPrice, commission]);

  const remainingPercentage = 100 - totalQuantityOfItems;
  const progressBarColor = totalQuantityOfItems === 100 ? '#22c55e' : '#ef4444';

  return (
    <section className="flex flex-col gap-5 rounded-lg bg-zinc-900 p-5 max-h-[700px]  h-full">
      <header className=" top-0 z-10 bg-zinc-900 pb-5">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-5 w-full">
            <h2 className="flex items-center justify-center text-xl font-bold text-orange-500 bg-opacity-30 bg-orange-500 rounded-lg h-8 w-8">
              2
            </h2>
            <h2 className="text-lg font-semibold">Set Drop Chances</h2>
          </div>
          <div className="flex items-center gap-5 w-full justify-between">
            <p className="text-xs font-semibold ">Must be 100% in total</p>
            <p className="text-sm font-semibold">
              {remainingPercentage.toFixed(4)}%
            </p>
          </div>
          <ProgressBar
            completed={totalQuantityOfItems}
            maxCompleted={100}
            className="w-full"
            bgColor={progressBarColor}
          />
        </div>
      </header>

      <div className="overflow-y-auto no-scrollbar flex-1 flex flex-col gap-3">
        {selectedItems.length > 0 ? (
          selectedItems.map((item) => (
            <SelectedItemCard
              key={item.id}
              item={item}
              setSelectedItems={setSelectedItems}
              totalQuantityOfItems={totalQuantityOfItems}
              handleQuantityChange={handleQuantityChange}
            />
          ))
        ) : (
          <p className="bg-zinc-800 h-full rounded-lg flex items-center justify-center text-zinc-500 font-semibold">
            Select at least two items
          </p>
        )}
      </div>

      <footer className=" bottom-0 z-10 bg-zinc-900 pt-2">
        <div className="flex justify-between items-center">
          <p className="text-sm text-zinc-400 font-semibold">
            Computed pack price
          </p>
          <p className="text-lg text-white font-semibold">
            ${formatNumberWithCommas(computedPackPrice.toFixed(2))}
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ChosenItemChances;

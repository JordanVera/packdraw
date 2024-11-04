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
  commision,
}: {
  selectedItems: Item[];
  setSelectedItems: React.Dispatch<React.SetStateAction<Item[]>>;
  totalQuantityOfItems: number;
  handleQuantityChange: (itemId: string, newQuantity: number) => void;
  computedPackPrice: number;
  setComputedPackPrice: React.Dispatch<React.SetStateAction<number>>;
  commision: number;
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

    // Add 10% commission please creators commision
    const vig = 1.1 + commision / 100;

    const packPrice = expectedValue * vig;

    setComputedPackPrice(packPrice);
  }, [selectedItems, setComputedPackPrice, commision]);

  const remainingPercentage = 100 - totalQuantityOfItems;
  const progressBarColor = totalQuantityOfItems === 100 ? '#22c55e' : '#ef4444';

  return (
    <section className="flex flex-col gap-5 rounded-lg bg-zinc-900 p-5 max-h-[700px] h-full overflow-y-auto no-scrollbar">
      <header className="flex flex-col items-center gap-5">
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
      </header>

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

      <footer className="flex justify-between items-center">
        <p className="text-sm text-zinc-400 font-semibold">
          Computed pack price
        </p>

        <p className="text-lg text-white font-semibold">
          ${formatNumberWithCommas(computedPackPrice.toFixed(2))}
        </p>
      </footer>
    </section>
  );
};

export default ChosenItemChances;

import { useState } from 'react';
import { Item } from '@/types/Item';
import SelectedItemCard from '@/components/cards/SelectedItemCard';
import ProgressBar from '@ramonak/react-progress-bar';

const ChosenItemChances = ({
  selectedItems,
  setSelectedItems,
}: {
  selectedItems: Item[];
}) => {
  return (
    <section className="flex flex-col gap-5 rounded-lg bg-zinc-900 p-5 max-h-[700px] h-full overflow-y-auto no-scrollbar">
      <header className="flex flex-col items-center gap-5">
        <div className="flex items-center gap-5 w-full">
          <h2 className="flex items-center justify-center text-xl font-bold text-orange-500 bg-opacity-30 bg-orange-500 rounded-lg h-10 w-10">
            2
          </h2>

          <h2 className="text-lg font-semibold">Set Drop Chances</h2>
        </div>
        <div className="flex items-center gap-5 w-full justify-between">
          <p className="text-xs font-semibold ">Must be 100% in total</p>

          <p className="text-sm font-semibold">5.0000%</p>
        </div>

        <ProgressBar
          completed={50}
          maxCompleted={100}
          className="w-full"
          bgColor="#ff0000"
        />
      </header>

      {selectedItems.map((item) => (
        <SelectedItemCard
          key={item.id}
          item={item}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      ))}

      <footer className="flex justify-between items-center">
        <p className="text-sm text-zinc-400 font-semibold">
          Computed pack price
        </p>

        <p className="text-lg text-white font-semibold">$100</p>
      </footer>
    </section>
  );
};

export default ChosenItemChances;

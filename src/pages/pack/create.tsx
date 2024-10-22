import { useState, useEffect } from 'react';
import ChooseItems from '@/components/create/ChooseItems';
import ChosenItemChances from '@/components/create/ChosenItemChances';
import { Item } from '@/types/Item';
import NameYourPack from '@/components/create/NameYourPack';
import SetCommision from '@/components/create/SetCommision';
import ChoosePackImage from '@/components/create/ChoosePackImage';
const CreatePack = () => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const handleSelectItem = (item: Item) => {
    setSelectedItems((prev) => {
      const itemIndex = prev.findIndex((i) => i.id === item.id);
      if (itemIndex === -1) {
        return [...prev, item]; // Item not in array, add it
      } else {
        return prev.filter((i) => i.id !== item.id); // Item already in array, remove it
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto m-5 p-5 flex flex-col gap-5">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-3/4">
          <ChooseItems
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            handleSelectItem={handleSelectItem}
          />
        </div>
        <div className="w-full md:w-1/4">
          <ChosenItemChances
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            handleSelectItem={handleSelectItem}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full flex md:w-1/2">
          <NameYourPack />
        </div>
        <div className="w-full flex md:w-1/2">
          <SetCommision />
        </div>
      </div>

      <ChoosePackImage />
    </div>
  );
};

export default CreatePack;

import { useState, useEffect } from 'react';
import ChooseItems from '@/components/create/ChooseItems';
import ChosenItemChances from '@/components/create/ChosenItemChances';
import { Item } from '@/types/Item';

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
    <div className="max-w-screen-xl mx-auto m-5">
      <div className="flex gap-5">
        <div className="w-3/4">
          <ChooseItems
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            handleSelectItem={handleSelectItem}
          />
        </div>
        <div className="w-1/4">
          <ChosenItemChances
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            handleSelectItem={handleSelectItem}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePack;

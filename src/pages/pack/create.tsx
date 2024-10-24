import { useState, useEffect } from 'react';
import ChooseItems from '@/components/create/ChooseItems';
import ChosenItemChances from '@/components/create/ChosenItemChances';
import { Item } from '@/types/Item';
import NameYourPack from '@/components/create/NameYourPack';
import SetCommision from '@/components/create/SetCommision';
import ChoosePackImage from '@/components/create/ChoosePackImage';

const CreatePack = () => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [totalQuantityOfItems, setTotalQuantityOfItems] = useState(0);
  const [name, setName] = useState<string>('');
  const [commision, setCommision] = useState<number>(0.5);

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

  const updateTotalQuantity = () => {
    const newTotal = selectedItems.reduce(
      (acc, item) => acc + (item.quantity || 0),
      0
    );
    setTotalQuantityOfItems(newTotal);
  };

  useEffect(() => {
    updateTotalQuantity();
  }, [selectedItems]);

  useEffect(() => {
    console.log({ totalQuantityOfItems });
  }, [totalQuantityOfItems]);

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  useEffect(() => {
    console.log({ name });
  }, [name]);

  useEffect(() => {
    console.log({ commision });
  }, [commision]);

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
            totalQuantityOfItems={totalQuantityOfItems}
            handleQuantityChange={handleQuantityChange}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full flex md:w-1/2">
          <NameYourPack name={name} setName={setName} />
        </div>
        <div className="w-full flex md:w-1/2">
          <SetCommision commision={commision} setCommision={setCommision} />
        </div>
      </div>

      <ChoosePackImage />

      <button className="w-full py-5 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-700 transition-colors">
        Create Pack
      </button>
    </div>
  );
};

export default CreatePack;

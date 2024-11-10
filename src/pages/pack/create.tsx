import { useState, useEffect } from 'react';
import ChooseItems from '@/components/create/ChooseItems';
import ChosenItemChances from '@/components/create/ChosenItemChances';
import { Item } from '@/types/Item';
import NameYourPack from '@/components/create/NameYourPack';
import SetCommission from '@/components/create/SetCommission';
import ChoosePackImage from '@/components/create/ChoosePackImage';
import PackService from '@/services/PackService';
import { useUser } from '@/providers/UserProvider';
import { showSuccessToast, showErrorToast } from '@/utils/toast';

const CreatePack = () => {
  const { user } = useUser();
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [totalQuantityOfItems, setTotalQuantityOfItems] = useState(0);
  const [name, setName] = useState<string>('');
  const [commission, setCommission] = useState<number>(0.5);
  const [computedPackPrice, setComputedPackPrice] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const [disabledCreateButton, setDisabledCreateButton] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    setDisabledCreateButton(
      totalQuantityOfItems !== 100 || selectedItems.length < 2
    );
  }, [totalQuantityOfItems, selectedItems]);

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleCreatePack = async () => {
    try {
      setIsLoading(true);

      if (name.length < 3 || name.length > 30) {
        showErrorToast('Pack name must be between 3 and 30 characters');
        return;
      }

      const response = await PackService.createPack({
        name,
        description: 'yessss',
        price: computedPackPrice,
        coverImage: `version${selectedImage}.webp`,
        items: selectedItems.map((item) => ({
          itemId: item.id,
          quantity: item.quantity || 0,
        })),
        userId: user.id,
        commission: commission,
      });

      console.log({ response });

      if (response.id) {
        showSuccessToast('Pack created successfully');
      }
    } catch (error) {
      console.error('Error creating pack:', error);
      showErrorToast('Error creating pack');
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   console.log({ name });
  // }, [name]);

  // useEffect(() => {
  //   console.log({ commission });
  // }, [commission]);

  return (
    <div className="max-w-screen-xl mx-auto  flex flex-col gap-5">
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
            computedPackPrice={computedPackPrice}
            setComputedPackPrice={setComputedPackPrice}
            commission={commission}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full flex md:w-1/2">
          <NameYourPack name={name} setName={setName} />
        </div>
        <div className="w-full flex md:w-1/2">
          <SetCommission
            commission={commission}
            setCommission={setCommission}
          />
        </div>
      </div>

      <ChoosePackImage
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />

      <button
        onClick={handleCreatePack}
        className="w-full py-5 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50"
        disabled={isLoading || disabledCreateButton}
      >
        {isLoading ? 'Creating...' : 'Create Pack'}
      </button>
    </div>
  );
};

export default CreatePack;

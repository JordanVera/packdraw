import PackService from '@/services/PackService';
import { Pack } from '@/types/Pack';
import { Item } from '@/types/Item';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

// Define the shape of your context
interface PacksContextType {
  allPacks: Pack[];
  allItems: Item[];
  setAllPacks: (packs: Pack[]) => void;
  setAllItems: (items: Item[]) => void;
}

const PacksContext = createContext<PacksContextType | undefined>(undefined);
export const PacksProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [allPacks, setAllPacks] = useState<Pack[]>([]);
  const [allItems, setAllItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchAllPacks();
    fetchAllItems();
  }, []);

  const fetchAllPacks = async () => {
    try {
      const packs = await PackService.getAllPacks();
      setAllPacks(packs);
    } catch (error) {
      console.error('Error fetching packs:', error);
      // You might want to set an error state here and handle it in your UI
    }
  };

  const fetchAllItems = async () => {
    try {
      const items = await PackService.getAllItems();
      setAllItems(items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <PacksContext.Provider
      value={{ allPacks, allItems, setAllItems, setAllPacks }}
    >
      {children}
    </PacksContext.Provider>
  );
};

export const usePacks = () => {
  const context = useContext(PacksContext);
  if (context === undefined) {
    throw new Error('usePacks must be used within a PacksProvider');
  }
  return context;
};

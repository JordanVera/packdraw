import PackService from '@/services/PackService';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

// Define the shape of your context
interface PacksContextType {
  allPacks: any[]; // Replace 'any' with a more specific type if you know the structure of your packs
}

const PacksContext = createContext<PacksContextType | undefined>(undefined);
export const PacksProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [allPacks, setAllPacks] = useState<any[]>([]); // Again, replace 'any' with a more specific type if possible

  useEffect(() => {
    fetchAllPacks();
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

  return (
    <PacksContext.Provider value={{ allPacks }}>
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

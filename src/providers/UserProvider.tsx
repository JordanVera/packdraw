import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

// Define the shape of your context
interface UserContextType {
  openLoginModal: boolean;
  handleOpenLoginModal: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleOpenLoginModal = () => setOpenLoginModal((prev) => !prev);

  return (
    <UserContext.Provider value={{ handleOpenLoginModal, openLoginModal }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

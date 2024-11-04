import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { useSession } from 'next-auth/react';

// Define the shape of your context
interface UserContextType {
  openLoginModal: boolean;
  handleOpenLoginModal: () => void;
  user: any;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleOpenLoginModal = () => setOpenLoginModal((prev) => !prev);

  const { data: session, status } = useSession();
  const isLoading = status === 'loading';
  const user = session?.user || null;

  useEffect(() => {
    console.log({ user });
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        handleOpenLoginModal,
        openLoginModal,
        user,
        isLoading,
      }}
    >
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

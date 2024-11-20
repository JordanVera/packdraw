import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { useSession } from 'next-auth/react';
import UserService from '@/services/UserService';
import { User } from '@/types/User';
import { Pack } from '@/types/Pack';

interface UserContextType {
  openLoginModal: boolean;
  handleOpenLoginModal: () => void;
  user: User | null;
  isLoading: boolean;
  openPackItemsModal: boolean;
  handleOpenPackItemsModal: (pack: Pack) => void;
  openedPack: Pack | null;
  openCartModal: boolean;
  handleOpenCartModal: () => void;
  refreshUser: () => void;
  updateUserBalance: (newBalance: number) => void;
}

// Add default context value
const UserContext = createContext<UserContextType>({
  openLoginModal: false,
  handleOpenLoginModal: () => {},
  user: null,
  isLoading: false,
  openPackItemsModal: false,
  handleOpenPackItemsModal: () => {},
  openedPack: null,
  openCartModal: false,
  handleOpenCartModal: () => {},
  refreshUser: () => {},
  updateUserBalance: () => {},
});

// Make sure to export the provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openPackItemsModal, setOpenPackItemsModal] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [openedPack, setOpenedPack] = useState<Pack | null>(null);
  const handleOpenLoginModal = () => setOpenLoginModal((prev) => !prev);
  const handleOpenPackItemsModal = (pack: Pack) => {
    setOpenPackItemsModal((prev) => !prev);

    setOpenedPack(pack);
  };
  const handleOpenCartModal = () => setOpenCartModal((prev) => !prev);
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (session?.user?.id) {
      UserService.getUserById(session.user.id).then((user) => {
        console.log({ user });
        setUser(user);
      });
    } else {
      setUser(null);
    }
  }, [session?.user?.id]);

  const refreshUser = async () => {
    if (session?.user?.id) {
      try {
        const updatedUser = await UserService.getUserById(session.user.id);
        setUser(updatedUser);
      } catch (error) {
        console.error('Error refreshing user data:', error);
      }
    }
  };

  const updateUserBalance = (newBalance: number) => {
    setUser((prev) => (prev ? { ...prev, balance: newBalance } : null));
  };

  // useEffect(() => {
  //   console.log({ openedPack });
  // }, [openedPack]);

  return (
    <UserContext.Provider
      value={{
        handleOpenLoginModal,
        openLoginModal,
        user,
        isLoading,
        handleOpenPackItemsModal,
        openPackItemsModal,
        openedPack,
        handleOpenCartModal,
        openCartModal,
        refreshUser,
        updateUserBalance,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Export the hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

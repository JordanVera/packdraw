import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { useSession } from 'next-auth/react';
import { User } from '@/types/User';
import UserService from '@/services/UserService';

// Define the shape of your context
interface UserContextType {
  openLoginModal: boolean;
  handleOpenLoginModal: () => void;
  user: User | null;
  isLoading: boolean;
}

// Add default context value
const UserContext = createContext<UserContextType>({
  openLoginModal: false,
  handleOpenLoginModal: () => {},
  user: null,
  isLoading: false,
});

// Make sure to export the provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleOpenLoginModal = () => setOpenLoginModal((prev) => !prev);

  const { data: session, status } = useSession();
  const isLoading = status === 'loading';

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log({ session: session?.user });
  }, [session]);

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

// Export the hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

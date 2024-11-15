import Navbar from '@/components/Navbar';
import LoginModal from '@/components/modals/LoginModal';
import PackItemsModal from '@/components/modals/PackItemsModal';
import { ToastContainer } from 'react-toastify';
import CartModal from '@/components/modals/CartModal';
import 'react-toastify/dist/ReactToastify.css';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-5">{children}</div>
      <LoginModal />
      <PackItemsModal />
      <CartModal />
      <ToastContainer />
    </>
  );
}

import Navbar from '@/components/Navbar';
import LoginModal from '@/components/modals/LoginModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto py-5">{children}</div>
      <LoginModal />
      <ToastContainer />
    </>
  );
}

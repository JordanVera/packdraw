import React from 'react';
import { PackageOpen, Swords, Copy } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@/providers/UserProvider';
import { Avatar } from '@mui/material';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

const Navbar = () => {
  const { user } = useUser();
  const { handleOpenLoginModal } = useUser();

  const { data: session } = useSession();
  return (
    <header className="flex justify-between items-center max-w-screen-xl mx-auto p-5">
      <div className="flex items-center gap-5">
        {/* <img src="/logo.svg" alt="logo" /> */}

        <Link href="/" className="flex items-center gap-2">
          <Copy fill="white" />
          <h3 className="text-lg font-bold">Pack Draw</h3>
        </Link>
        <Link href="/pack" className="flex items-center gap-2">
          <PackageOpen fill="white" />
          <h3 className="text-sm font-semibold">Packs</h3>
        </Link>
        <button className="flex items-center gap-2">
          <Swords fill="white" />
          <h3 className="text-sm font-semibold">Battles</h3>
        </button>
      </div>
      <div className="flex items-center gap-2">
        <Avatar src={user?.image} alt={user?.name} />

        {session ? (
          <button
            onClick={() => signOut()}
            className="text-sm font-semibold px-3 py-1 rounded-md bg-blue-600"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleOpenLoginModal}
            className="text-sm font-semibold px-3 py-1 rounded-md bg-blue-600"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;

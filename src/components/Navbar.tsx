import React from 'react';
import { PackageOpen, Swords, Copy } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@/providers/UserProvider';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { Avatar, Menu, MenuItem } from '@mui/material';

import {
  formatNumberWithCommas,
  roundToTwoDecimals,
} from '@/utils/formatNumbers';

const Navbar = () => {
  const { user } = useUser();
  const { handleOpenLoginModal, handleOpenCartModal } = useUser();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data: session } = useSession();
  return (
    <nav className="flex justify-between items-center max-w-screen-xl mx-auto p-5">
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
        <p className="text-sm font-semibold">
          ${formatNumberWithCommas(roundToTwoDecimals(user?.balance))}
        </p>
        <button
          onClick={handleOpenCartModal}
          className="text-sm font-semibold px-5 py-1.5 rounded-full bg-blue-600 capitalize"
        >
          cart
        </button>
        <button
          // onClick={handleOpenCartModal}
          className="text-sm font-semibold px-5 py-1.5 rounded-full bg-blue-600 capitalize"
        >
          Deposit
        </button>

        <Avatar
          src={user?.image}
          alt={user?.name}
          onClick={handleClick}
          sx={{ cursor: 'pointer' }}
        />
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
        >
          {session ? (
            <MenuItem onClick={() => signOut()}>Logout</MenuItem>
          ) : (
            <MenuItem onClick={handleOpenLoginModal}>Login</MenuItem>
          )}
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;

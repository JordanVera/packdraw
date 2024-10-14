import React from 'react';
import { PackageOpen, Swords } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center max-w-screen-xl mx-auto py-5">
      <div className="flex items-center gap-5">
        {/* <img src="/logo.svg" alt="logo" /> */}

        <button className="flex items-center gap-2">
          <img src="/icon.svg" alt="logo" />
          <h3 className="text-lg font-bold">Pack Draw</h3>
        </button>
        <button className="flex items-center gap-2">
          <PackageOpen />
          <h3 className="text-sm font-semibold">Packs</h3>
        </button>
        <button className="flex items-center gap-2">
          <Swords />
          <h3 className="text-sm font-semibold">Battles</h3>
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-sm font-semibold px-3 py-1 rounded-md bg-blue-600">
          Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;

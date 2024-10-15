import { useState, useEffect } from 'react';
import Link from 'next/link';

const Pack = () => {
  return (
    <main className="max-w-screen-xl mx-auto m-5 flex gap-5">
      <div className="flex flex-1 items-stretch gap-6 border border-red-500">
        <input type="search" placeholder="Search" />

        <Link href="/pack/create" className="bg-blue-500">
          Create Pack
        </Link>
      </div>
      <div className="flex w-60 gap-5">Live PULLSSSSS</div>
    </main>
  );
};

export default Pack;

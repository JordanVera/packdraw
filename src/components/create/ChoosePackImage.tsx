import { useState } from 'react';

const ChoosePackImage = () => {
  return (
    <section className="flex flex-col gap-5 rounded-lg bg-zinc-900 p-5 flex-1">
      <header className="flex items-center gap-5">
        <h2 className="flex items-center justify-center text-xl font-bold text-orange-500 bg-opacity-30 bg-orange-500 rounded-lg h-10 w-10">
          5
        </h2>

        <h2 className="text-xl font-bold">Choose Pack Image</h2>
      </header>
    </section>
  );
};

export default ChoosePackImage;

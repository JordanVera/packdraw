import { useState } from 'react';

const ChosenItemChances = () => {
  return (
    <section className="flex flex-col gap-5 rounded-lg bg-zinc-900 p-5 max-h-[700px] h-full overflow-y-auto no-scrollbar">
      <div className="flex  items-center gap-5">
        <h2 className="flex items-center justify-center text-xl font-bold bg-zinc-950 rounded-lg h-10 w-10">
          2
        </h2>

        <h2 className="text-lg font-semibold">Set Drop Chances</h2>
      </div>
    </section>
  );
};

export default ChosenItemChances;

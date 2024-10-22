import { useState } from 'react';

const SetCommision = () => {
  return (
    <section className="flex flex-col gap-5 rounded-lg bg-zinc-900 p-5 flex-1">
      <header className="flex items-center gap-5">
        <h2 className="flex items-center justify-center text-xl font-bold text-orange-500 bg-opacity-30 bg-orange-500 rounded-lg h-10 w-10">
          4
        </h2>

        <h2 className="text-xl font-bold">Set Pack Commission</h2>
      </header>

      <label className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-sm text-white font-semibold">Commission</p>
          <p className="text-sm text-zinc-400 font-semibold">(0.5% to 3.0%)</p>
        </div>

        <select className="w-full p-2 rounded-md bg-zinc-800" defaultValue="1">
          <option value="0.5">0.5%</option>
          <option value="1">1%</option>
          <option value="1.5">1.5%</option>
          <option value="2">2%</option>
          <option value="2.5">2.5%</option>
          <option value="3">3%</option>
        </select>
      </label>

      <p className="text-xs text-zinc-400 font-semibold">
        You will receive $0.00 for each pack open.
      </p>
    </section>
  );
};

export default SetCommision;

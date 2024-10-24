import { useState } from 'react';

const NameYourPack = ({
  name,
  setName,
}: {
  name: string;
  setName: (name: string) => void;
}) => {
  return (
    <section className="flex flex-col gap-5 rounded-lg bg-zinc-900 p-5 flex-1">
      <header className="flex items-center gap-5">
        <h2 className="flex items-center justify-center text-xl font-bold text-orange-500 bg-opacity-30 bg-orange-500 rounded-lg h-10 w-10">
          3
        </h2>

        <h2 className="text-xl font-bold">Pack Name</h2>
      </header>

      <label className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-sm text-white font-semibold">Pack Name</p>
          <p className="text-sm text-zinc-400 font-semibold">
            (max 30 characters)
          </p>
        </div>

        <input
          type="text"
          placeholder="Name your pack"
          className="w-full p-2 rounded-md bg-zinc-800"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <p className="text-xs text-zinc-400 font-semibold">
        Your pack name must not include any special characters, profanities, or
        slurs.
      </p>
    </section>
  );
};

export default NameYourPack;

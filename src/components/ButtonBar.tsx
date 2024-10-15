import { RotateCw, Zap } from 'lucide-react';
import React from 'react';

const ButtonBar = ({ pack }: { pack: any }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <button className="bg-blue-500 rounded-lg py-2 px-5">
          Open For ${pack.price}
        </button>
        <button className="bg-zinc-800 rounded-lg py-2 px-5 flex items-center gap-2">
          <RotateCw />
          Demo Spin
        </button>
      </div>
      <div className="flex gap-2 items-center">
        <button className="bg-zinc-800 rounded-lg py-2 px-5">
          <Zap fill="white" />
        </button>
        <button className="bg-zinc-800 rounded-lg py-2 px-5">
          <Zap fill="white" />
        </button>
      </div>
    </div>
  );
};

export default ButtonBar;

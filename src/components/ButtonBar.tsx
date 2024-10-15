import { RotateCw, Zap } from 'lucide-react';
import React from 'react';

interface ButtonBarProps {
  pack: any;
  spinning: boolean;
  spinReel: (demo: boolean) => void;
}

const ButtonBar = ({ pack, spinning, spinReel }: ButtonBarProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <button
          onClick={() => spinReel(false)}
          disabled={spinning}
          className="bg-blue-500 rounded-lg py-2 px-5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Open For ${pack.price}
        </button>
        <button
          onClick={() => spinReel(true)}
          disabled={spinning}
          className="bg-zinc-800 rounded-lg py-2 px-5 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
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

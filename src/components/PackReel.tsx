import React, { useState, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';

import { Zap, FileText } from 'lucide-react';

interface Item {
  id: string;
  name: string;
  image: string;
  price: number;
  rarity: number;
  value: number;
}

interface PackReelProps {
  items: Item[];
  onOpen: (item: Item) => void;
  packPrice: number;
}

export default function PackReel({ items, onOpen, packPrice }: PackReelProps) {
  const [spinning, setSpinning] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [winner, setWinner] = useState<Item | null>(null);

  const totalItems = items.length;
  const visibleItems = 7; // Number of items visible in the reel

  const [springProps, api] = useSpring(() => ({
    from: { x: 0 },
    config: { duration: 5000 },
  }));

  const getWinningItem = useCallback(() => {
    const totalRarity = items.reduce((sum, item) => sum + item.rarity, 0);
    const randomValue = Math.random() * totalRarity;
    let cumulativeRarity = 0;

    for (const item of items) {
      cumulativeRarity += item.rarity;
      if (randomValue <= cumulativeRarity) {
        return item;
      }
    }

    return items[items.length - 1]; // Fallback to last item if something goes wrong
  }, [items]);

  const spinReel = (demo: boolean = false) => {
    if (spinning) return;

    setSpinning(true);
    setWinner(null);

    const winningItem = demo
      ? items[Math.floor(Math.random() * items.length)]
      : getWinningItem();
    const winningIndex = items.indexOf(winningItem);
    const totalSpins = totalItems * 3 + winningIndex; // Spin 3 full rotations plus the winning position

    api.start({
      from: { x: 0 },
      to: async (next) => {
        // Continuous spinning animation
        await next({ x: -totalSpins * 100, config: { duration: 5000 } });
      },
      onRest: () => {
        setSpinning(false);
        setSelectedIndex(winningIndex);
        setWinner(winningItem);
        if (!demo) onOpen(winningItem);
      },
    });
  };

  const displayItems = [...items, ...items, ...items]; // Triple the items to ensure smooth looping

  return (
    <div className="w-full max-w-4xl mx-auto bg-zinc-800 p-6 rounded-lg shadow-lg">
      <div className="relative overflow-hidden h-48 mb-4">
        <animated.div
          className="flex items-center absolute left-0 top-0 bottom-0"
          style={{
            width: `${displayItems.length * 100}%`,
            transform: springProps.x.to(
              (x) => `translateX(${x % (totalItems * 100)}%)`
            ),
          }}
        >
          {displayItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={`w-48 h-48 flex-shrink-0 mx-2 ${
                index % totalItems === selectedIndex
                  ? 'border-4 border-yellow-400'
                  : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </animated.div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-0 h-0 border-l-[25px] border-l-transparent border-b-[50px] border-b-yellow-400 border-r-[25px] border-r-transparent"></div>
        </div>
      </div>
      {winner && (
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-white">{winner.name}</h2>
          <p className="text-xl text-yellow-400">${winner.value.toFixed(2)}</p>
          <p className="text-sm text-gray-400">
            Rarity: {winner.rarity.toFixed(2)}%
          </p>
        </div>
      )}
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => spinReel(false)}
          disabled={spinning}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Open for ${packPrice.toFixed(2)}
        </button>
        <button
          onClick={() => spinReel(true)}
          disabled={spinning}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Demo Spin
        </button>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button>
          <Zap className="h-4 w-4" />
          <span className="sr-only">Quick open</span>
        </button>
        <button>
          <FileText className="h-4 w-4" />
          <span className="sr-only">View details</span>
        </button>
      </div>
    </div>
  );
}

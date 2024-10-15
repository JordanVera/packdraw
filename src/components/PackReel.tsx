import React, { useState, useCallback, useRef, useEffect } from 'react';
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
  const [winner, setWinner] = useState<Item | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemWidth = 200; // Width of each item in pixels
  const visibleItems = 5; // Number of items visible in the reel

  const [springProps, api] = useSpring(() => ({
    from: { x: 0 },
    config: { mass: 5, tension: 350, friction: 40 },
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

    // Calculate the exact distance to the winning item
    const totalItems = items.length;
    const centerOffset = Math.floor(visibleItems / 2);
    const initialSpins = 4 * totalItems; // 4 full rotations
    const spinDistance =
      (initialSpins + winningIndex - centerOffset) * itemWidth;
    const overshoot = itemWidth * 0.5; // Overshoot by half an item width

    api.start({
      from: { x: 0 },
      to: [
        {
          x: -(spinDistance + overshoot),
          config: { duration: 4000, easing: easeInOutCubic },
        },
        { x: -spinDistance, config: { duration: 1000, easing: easeOutBack } },
      ],
      onRest: () => {
        setSpinning(false);
        setWinner(winningItem);
        if (!demo) onOpen(winningItem);
      },
    });
  };

  // Add these easing functions at the top of your component or in a separate utils file
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const easeOutBack = (t: number) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  };

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const itemsToShow = Math.floor(containerWidth / itemWidth);
      containerRef.current.style.setProperty(
        '--visible-items',
        itemsToShow.toString()
      );
    }
  }, []);

  // Ensure the reel always shows the items in the correct order
  const displayItems = [...items, ...items, ...items, ...items, ...items]; // Triple the items to ensure smooth looping

  return (
    <div className="w-full max-w-4xl mx-auto bg-zinc-800 p-6 rounded-lg shadow-lg">
      <div ref={containerRef} className="relative overflow-hidden h-48 mb-4">
        <animated.div
          className="flex items-center absolute left-0 top-0 bottom-0"
          style={{
            width: `${displayItems.length * itemWidth}px`,
            transform: springProps.x.to(
              (x) => `translateX(${x % (items.length * itemWidth)}px)`
            ),
          }}
        >
          {displayItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[200px] h-48 p-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </animated.div>
        <div className="absolute left-1/2 top-0 bottom-0 w-[200px] border-4 border-yellow-400 -translate-x-1/2 pointer-events-none" />
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
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Open for ${packPrice.toFixed(2)}
        </button>
        <button
          onClick={() => spinReel(true)}
          disabled={spinning}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Demo Spin
        </button>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="text-white hover:text-gray-300">
          <Zap className="h-4 w-4" />
          <span className="sr-only">Quick open</span>
        </button>
        <button className="text-white hover:text-gray-300">
          <FileText className="h-4 w-4" />
          <span className="sr-only">View details</span>
        </button>
      </div>
    </div>
  );
}

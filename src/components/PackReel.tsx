import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useSpring, animated } from 'react-spring';
import { Zap, FileText } from 'lucide-react';

interface Item {
  id: string;
  name: string;
  image: string;
  price: number;
  description?: string;
  brand?: string;
}

interface Pack {
  id: string;
  name: string;
  description?: string;
  price: number;
  coverImage?: string;
  items: { item: Item }[];
}

interface PackReelProps {
  pack: Pack;
  onOpen: (item: Item) => void;
  spinning: boolean;
  setSpinning: (spinning: boolean) => void;
}

export interface PackReelRef {
  spinReel: (demo: boolean) => void;
}

const PackReel = forwardRef<PackReelRef, PackReelProps>(
  ({ pack, onOpen, spinning, setSpinning }, ref) => {
    const [winner, setWinner] = useState<Item | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const itemWidth = 200; // Width of each item in pixels
    const visibleItems = 6; // Number of items visible in the reel

    const [springProps, api] = useSpring(() => ({
      from: { x: 0 },
      config: { mass: 5, tension: 350, friction: 40 },
    }));

    const getWinningItem = useCallback(() => {
      const items = pack.items.map((pi) => pi.item);
      // Since we don't have rarity, we'll use a simple random selection
      return items[Math.floor(Math.random() * items.length)];
    }, [pack.items]);

    const spinReel = (demo: boolean = false) => {
      if (spinning) return;

      setSpinning(true);
      setWinner(null);

      const winningItem = getWinningItem();
      const winningIndex = pack.items.findIndex(
        (pi) => pi.item.id === winningItem.id
      );

      // Calculate the exact distance to the winning item
      const totalItems = pack.items.length;
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

    // Easing functions (unchanged)
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
    const displayItems = [
      ...pack.items,
      ...pack.items,
      ...pack.items,
      ...pack.items,
      ...pack.items,
    ]; // Quintuple the items to ensure smooth looping

    useImperativeHandle(ref, () => ({
      spinReel: (demo: boolean) => {
        if (spinning) return;
        spinReel(demo);
      },
    }));

    return (
      <div className="w-full max-w-screen-xl mx-auto bg-zinc-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
        <div ref={containerRef} className="relative overflow-hidden h-48 mb-4">
          <animated.div
            className="flex items-center absolute left-0 top-0 bottom-0"
            style={{
              width: `${displayItems.length * itemWidth}px`,
              transform: springProps.x.to(
                (x) => `translateX(${x % (pack.items.length * itemWidth)}px)`
              ),
            }}
          >
            {displayItems.map((packItem, index) => (
              <div
                key={`${packItem.item.id}-${index}`}
                className="flex-shrink-0 w-[200px] h-48 p-2"
              >
                <img
                  src={packItem.item.image}
                  alt={packItem.item.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </animated.div>
          <div className="absolute left-[calc(50%+110px)] top-0 bottom-0 w-[200px] border-4 border-yellow-400 -translate-x-1/2 pointer-events-none" />
        </div>
        {winner && (
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-white">{winner.name}</h2>
            <p className="text-xl text-yellow-400">
              ${winner.price.toFixed(2)}
            </p>
            {winner.brand && (
              <p className="text-sm text-gray-400">Brand: {winner.brand}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

export default PackReel;

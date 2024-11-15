import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useSpring, animated } from 'react-spring';
import { setItemRarity } from '../utils/setItemRarity';
import { Triangle } from 'lucide-react';
import PackService from '@/services/PackService';
import { OpenPack } from '@/types/OpenPack';
import { Pack } from '@/types/Pack';
import { Item } from '@/types/Item';

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
    const itemWidth = 96; // 24 * 4px (6rem = 96px)
    const [visibleItems, setVisibleItems] = useState(6);

    const [springProps, api] = useSpring(() => ({
      from: { x: 0 },
      config: { mass: 5, tension: 350, friction: 40 },
    }));

    const getWinningItem = useCallback(() => {
      const items = pack.items;

      // Calculate total of all probabilities (keeping 4 decimal precision)
      const totalProbability = items.reduce(
        (sum, pi) => sum + parseFloat(Number(pi.quantity).toFixed(4)),
        0
      );

      // Generate a random number between 0 and total probability with 4 decimal places
      const random = parseFloat((Math.random() * totalProbability).toFixed(4));

      console.log({ random });

      // Find the winning item based on probability ranges
      let currentSum = 0;
      for (const packItem of items) {
        currentSum = parseFloat(
          (currentSum + Number(packItem.quantity)).toFixed(4)
        );
        if (random <= currentSum) {
          console.log('winning item: ', packItem.item.name);
          return packItem.item;
        }
      }

      // Fallback to last item
      return items[items.length - 1].item;
    }, [pack.items]);

    const spinReel = async (isRealMoney: boolean = false) => {
      if (spinning) return;

      setSpinning(true);
      setWinner(null);

      const winningItem = getWinningItem();
      const winningIndex = pack.items.findIndex(
        (pi) => pi.item.id === winningItem.id
      );

      const totalItems = pack.items.length;
      const itemFullWidth = itemWidth + 16; // Item width plus gap
      const initialSpins = 4 * totalItems;

      // Calculate the exact position needed to center the winning item
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const winningOffset =
        initialSpins * itemFullWidth +
        winningIndex * itemFullWidth -
        (containerWidth / 2 - itemWidth / 2);

      try {
        await PackService.openPack(pack.id, winningItem.id, isRealMoney);
      } catch (error) {
        console.error('Error opening pack:', error);
      }

      api.start({
        from: { x: 0 },
        to: [
          {
            x: -(winningOffset + itemFullWidth * 0.5),
            config: { duration: 4000, easing: easeInOutCubic },
          },
          { x: -winningOffset, config: { duration: 800, easing: easeOutBack } },
        ],
        onRest: () => {
          setSpinning(false);
          setWinner(winningItem);

          if (!isRealMoney) onOpen(winningItem);
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

    // Simplified resize handler
    useEffect(() => {
      const updateDimensions = () => {
        if (containerRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          setVisibleItems(Math.floor(containerWidth / itemWidth));
        }
      };

      updateDimensions();
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // Ensure the reel always shows the items in the correct order
    const displayItems = [
      ...pack.items,
      ...pack.items,
      ...pack.items,
      ...pack.items,
      ...pack.items,
      ...pack.items,
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
      <div className="w-full max-w-screen-xl mx-auto bg-zinc-800 bg-opacity-50 py-3 rounded-lg shadow-lg">
        <div ref={containerRef} className="relative overflow-hidden h-48 mb-4">
          <animated.div
            className="flex items-center gap-x-4 absolute left-0 top-0 bottom-0"
            style={{
              width: `${displayItems.length * (itemWidth + 16)}px`,
              transform: springProps.x.to((x) => `translateX(${x}px)`),
            }}
          >
            {displayItems.map((packItem, index) => (
              <div
                className={`flex-shrink-0 relative flex items-center justify-center w-24 h-24 ${
                  winner?.id === packItem.item.id ? 'winning-item' : ''
                }`}
              >
                <div
                  className={`absolute top-5 left-4 rounded-full bg-gradient-radial z-[-1] ${setItemRarity(
                    Number(packItem.quantity)
                  )} to-transparent blur-xl h-16 w-16`}
                />
                <img
                  src={packItem.item.image}
                  alt={packItem.item.name}
                  className="w-24 h-24 object-contain z-[1] relative p-2 "
                />
              </div>
            ))}
          </animated.div>
          <Triangle
            fill="#fff"
            className="w-4 h-4  absolute top-0 bottom-0 !rotate-180 left-1/2 -translate-x-1/2"
          />
          <Triangle
            fill="#fff"
            className="w-4 h-4  absolute top-42 bottom-0 left-1/2 -translate-x-1/2 "
          />

          {/* UNCOMMENT THIS TO SEE THE WINNING ITEM BOX */}
          {/* <div
            className="absolute top-0 bottom-0 border-4 border-yellow-400 pointer-events-none w-24"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          /> */}
          {winner && (
            <div className="text-center mb-4 absolute top-32 left-1/2 -translate-x-1/2 bg-black/50 p-1 rounded-lg">
              <h2 className="text-sm font-bold text-white">{winner.name}</h2>
              <p className="text-xs text-yellow-400">
                ${winner.price.toFixed(2)}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default PackReel;

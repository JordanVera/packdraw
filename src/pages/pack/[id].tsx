import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import PackService from '@/services/PackService';
import ButtonBar from '@/components/ButtonBar';
import PackReel from '@/components/PackReel';

export default function PackPage() {
  const router = useRouter();
  const { id } = router.query;
  const [pack, setPack] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [spinning, setSpinning] = useState(false);
  const packReelRef = useRef<{ spinReel: (demo: boolean) => void } | null>(
    null
  );

  const fetchPackData = async (packId: string) => {
    setLoading(true);
    try {
      const pack = await PackService.getPackById(packId);
      console.log(pack);
      setPack(pack);
    } catch (error) {
      console.error('Error fetching pack data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id && typeof id === 'string') {
      fetchPackData(id);
    }
  }, [id]);

  const handleSpinReel = (demo: boolean) => {
    if (spinning) return;
    setSpinning(true);
    packReelRef.current?.spinReel(demo);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white bg-zinc-900">
        Loading...
      </div>
    );
  }

  if (!pack)
    return (
      <div className="flex justify-center items-center h-screen text-white ">
        Pack not found
      </div>
    );

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8  text-white min-h-screen">
      <div className="flex flex-col gap-10 my-10">
        <PackReel
          ref={packReelRef}
          items={pack.items}
          onOpen={(item) => {
            console.log(`Won item: ${item.name}, Rarity: ${item.rarity}%`);
            setSpinning(false);
          }}
          packPrice={pack.price}
          spinning={spinning}
          setSpinning={setSpinning}
          spinReel={handleSpinReel}
        />
        <ButtonBar pack={pack} spinning={spinning} spinReel={handleSpinReel} />
      </div>

      <div className="flex flex-col gap-5 my-10">
        <h1 className="text-xl font-bold">
          {pack.name} - ${pack.price}
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {pack.items.map((item: any) => (
            <div
              key={item.id}
              className="aspect-square bg-zinc-800 bg-opacity-50 rounded-lg shadow-md p-4 flex flex-col justify-between"
            >
              <p className="text-xs font-semibold text-gray-400 text-center">
                {item.rarity}
              </p>
              <div className="flex-grow flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 max-w-full max-h-full object-contain rounded-md"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold truncate text-center">
                  {item.name}
                </h3>
                <p className="text-sm text-zinc-400 text-center">
                  ${item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

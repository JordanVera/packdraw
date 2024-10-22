import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import prisma from '../../lib/prisma';
import PackReel, { PackReelRef } from '../../components/PackReel';
import ButtonBar from '@/components/ButtonBar';

interface PackPageProps {
  pack: any; // Use the Pack interface from PackReel
}

export default function PackPage({ pack }: PackPageProps) {
  const [spinning, setSpinning] = useState(false);
  const reelRef = useRef<PackReelRef>(null);
  const router = useRouter();

  const handleOpen = (item: any) => {
    // Handle the opened item (e.g., show a modal, update user inventory, etc.)
    console.log('Opened item:', item);
  };

  const handleSpin = () => {
    if (reelRef.current) {
      reelRef.current.spinReel(false);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col gap-10">
      <PackReel
        ref={reelRef}
        pack={pack}
        onOpen={handleOpen}
        spinning={spinning}
        setSpinning={setSpinning}
      />

      <ButtonBar pack={pack} spinReel={handleSpin} spinning={spinning} />

      <section>
        <h1 className="text-3xl font-bold mb-4">
          {pack.name} - ${pack.price.toFixed(2)}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {pack.items.map((i: any) => (
            <div
              key={i.item.id}
              className="aspect-square bg-zinc-800 bg-opacity-50 rounded-lg shadow-md p-4 flex flex-col justify-between"
            >
              <p className="text-xs font-semibold text-gray-400 text-center">
                {i.item.rarity}
              </p>
              <div className="flex-grow flex items-center justify-center">
                <img
                  src={i.item.image}
                  alt={i.item.name}
                  className="h-20 w-20 max-w-full max-h-full object-contain rounded-md"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold truncate text-center">
                  {i.item.name}
                </h3>
                <p className="text-sm text-zinc-400 text-center">
                  ${i.item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  const pack = await prisma.pack.findUnique({
    where: { id },
    include: {
      items: {
        include: {
          item: true,
        },
      },
    },
  });

  if (!pack) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pack: JSON.parse(JSON.stringify(pack)),
    },
  };
};

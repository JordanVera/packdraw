import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import prisma from '../../lib/prisma';
import PackReel, { PackReelRef } from '../../components/PackReel';
import ButtonBar from '@/components/ButtonBar';
import ItemCardMinimal from '@/components/cards/ItemCardMinimal';

interface PackPageProps {
  pack: any; // Use the Pack interface from PackReel
}

export default function PackPage({ pack }: PackPageProps) {
  const [spinning, setSpinning] = useState(false);
  const reelRef = useRef<PackReelRef>(null);

  const handleOpen = (item: any) => {
    // Handle the opened item (e.g., show a modal, update user inventory, etc.)
    console.log('Opened item:', item);
  };

  const handleSpin = () => {
    if (reelRef.current) {
      reelRef.current.spinReel(false);
    }
  };

  useEffect(() => {
    console.log(pack);
  }, [pack]);

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
          {pack.items
            .sort((a: any, b: any) => a.quantity - b.quantity) // Sort by quantity in descending order
            .map((packItem: any) => (
              <ItemCardMinimal key={packItem.item.id} packItem={packItem} />
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

import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import { EyeIcon } from 'lucide-react';
import { useUser } from '@/providers/UserProvider';
import { Pack } from '@/types/Pack';
import {
  formatNumberWithCommas,
  roundToTwoDecimals,
} from '@/utils/formatNumbers';

export default function PackCard_Main({ pack }: { pack: Pack }) {
  const { handleOpenPackItemsModal } = useUser();

  return (
    <Link
      key={pack.id}
      href={`/pack/${pack.id}`}
      className="flex flex-col gap-5 relative group"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.5}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="20px"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
      >
        <img
          src={`/images/packs/${pack.coverImage}`}
          alt={pack.name}
          className="w-full max-w-[186px] card"
        />
      </Tilt>

      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleOpenPackItemsModal(pack);
        }}
        className="absolute top-2 right-2 bg-zinc-800 p-2 rounded-md hover:bg-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <EyeIcon className="w-4 h-4" />
      </button>
      <div className="gap-2 flex flex-col">
        <h2 className="text-xl text-white font-semibold text-center">
          {pack.name}
        </h2>
        <h4 className="text-sm text-center">
          ${formatNumberWithCommas(roundToTwoDecimals(pack.price))}
        </h4>
      </div>
    </Link>
  );
}

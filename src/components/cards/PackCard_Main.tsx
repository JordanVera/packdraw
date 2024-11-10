import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import {
  formatNumberWithCommas,
  roundToTwoDecimals,
} from '@/utils/formatNumbers';

export default function PackCard_Main({ pack }) {
  return (
    <Link
      key={pack.id}
      href={`/pack/${pack.id}`}
      className="flex flex-col gap-5"
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

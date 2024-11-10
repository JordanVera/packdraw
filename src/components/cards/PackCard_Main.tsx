import Link from 'next/link';
import Tilt from 'react-parallax-tilt';


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
      <h4 className="text-xl font-semibold text-center">${pack.price}</h4>
    </Link>
  );
}

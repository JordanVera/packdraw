import React from 'react';
import { usePacks } from '@/providers/PackProvider';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';

const NewPacks = () => {
  const { allPacks } = usePacks();

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">New Packs</h2>
        <button className="text-sm font-semibold px-3 py-1 rounded-md bg-blue-600">
          View All
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {[...allPacks].slice(0, 5).map((pack) => (
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
                src={pack.coverImage}
                alt={pack.name}
                className="w-full max-w-[186px] card"
              />
            </Tilt>
            <h4 className="text-xl font-semibold text-center">${pack.price}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewPacks;

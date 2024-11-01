import React from 'react';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';
const HowItWorks = () => {
  const threeSteps = [
    {
      image:
        'https://packdraw.com/_next/image?url=%2Fimages%2FopenPacks.png&w=256&q=75',
      alt: 'Open Packs',
      number: 1,
      title: 'Open Packs',
      description:
        'Find your perfect packs & experience the online excitement!',
    },
    {
      image:
        'https://packdraw.com/_next/image?url=%2Fimages%2FwinItems.png&w=256&q=75',
      alt: 'Win Items',
      number: 2,
      title: 'Win Items',
      description: 'Uncover one item per pack from top brands you know & love!',
    },
    {
      image:
        'https://packdraw.com/_next/image?url=%2Fimages%2FcashOrClaim.png&w=384&q=75',
      alt: 'Cash or Claim',
      number: 3,
      title: 'Cash or Claim',
      description:
        'Sell back unwanted items, cash them out, or have them delivered!',
    },
  ];

  return (
    <section>
      <div className="flex items-center gap-2 mb-5">
        <MessageCircle fill="white" />
        <h2 className="text-xl font-bold">How it Works</h2>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {threeSteps.map((item) => (
          <div key={item.number} className="bg-zinc-800 p-5 rounded-md ">
            <h3 className="flex items-center justify-center text-xl font-bold text-orange-500 bg-opacity-30 bg-orange-500 rounded-lg h-8 w-8">
              {item.number}
            </h3>

            <div className="flex flex-col gap-3 justify-center items-center">
              <Image src={item.image} alt={item.alt} width={100} height={100} />
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              <p className="text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

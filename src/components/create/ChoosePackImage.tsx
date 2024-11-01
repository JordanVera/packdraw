import { useState } from 'react';

const ChoosePackImage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="flex flex-col gap-5 rounded-lg bg-zinc-900 p-5 flex-1">
      <header className="flex items-center gap-5">
        <h2 className="flex items-center justify-center text-xl font-bold text-orange-500 bg-opacity-30 bg-orange-500 rounded-lg h-8 w-8">
          5
        </h2>

        <h2 className="text-xl font-bold">Choose Pack Image</h2>
      </header>
      <div className="flex gap-5">
        <div className="w-1/4">
          <img
            src={`/images/packs/version${selectedImage + 1}.webp`}
            alt="Pack Image"
          />
        </div>

        <div className="flex flex-wrap gap-5 w-3/4">
          {Array.from({ length: 14 }).map((_, index) => (
            <button
              onClick={() => setSelectedImage(index)}
              key={index}
              className="w-[80px] h-[121px] rounded-lg"
            >
              <img
                src={`/images/packs/version${index + 1}.webp`}
                alt="Pack Image"
                className={`w-full object-cover`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoosePackImage;

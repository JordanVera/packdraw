import { useState } from 'react';

const NameYourPack = () => {
  const [name, setName] = useState('');

  return (
    <div className="flex flex-col gap-5 rounded-lg bg-zinc-900 p-5">
      NameYourPack
    </div>
  );
};

export default NameYourPack;

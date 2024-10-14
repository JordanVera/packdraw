import React from 'react';
import { usePacks } from '@/providers/UserProvider';

const NewPacks = () => {
  const { allPacks } = usePacks();

  console.log(allPacks);

  return <div>NewPacks</div>;
};

export default NewPacks;

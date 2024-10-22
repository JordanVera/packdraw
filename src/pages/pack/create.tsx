import { useState, useEffect } from 'react';
import ChooseItems from '@/components/create/ChooseItems';
import ChosenItemChances from '@/components/create/ChosenItemChances';

const CreatePack = () => {
  return (
    <div className="max-w-screen-xl mx-auto m-5">
      <div className="flex gap-5">
        <div className="w-3/4">
          <ChooseItems />
        </div>
        <div className="w-1/4">
          <ChosenItemChances />
        </div>
      </div>
    </div>
  );
};

export default CreatePack;

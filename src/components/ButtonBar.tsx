import React from 'react';

const ButtonBar = ({ pack }: { pack: any }) => {
  return (
    <div className="flex gap-2 items-center">
      <button className="bg-blue-500 rounded-lg">Open For {pack.price}</button>
    </div>
  );
};

export default ButtonBar;

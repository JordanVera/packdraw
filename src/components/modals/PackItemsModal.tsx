import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { useUser } from '@/providers/UserProvider';
import ItemCardMinimal from '../cards/ItemCardMinimal';

export default function PackItemsModal() {
  const { handleOpenPackItemsModal, openPackItemsModal, openedPack } =
    useUser();

  return (
    <Modal
      open={openPackItemsModal}
      onClose={() => handleOpenPackItemsModal(openedPack)}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 text-gray-100 p-8 rounded-lg shadow-xl max-w-3xl">
        <h2 className="font-bold text-lg text-center mb-5">
          {openedPack?.name} - ${openedPack?.price.toFixed(2)}
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {openedPack?.items.map((item) => (
            <div key={item.item.id} className="w-[160px] h-[160px]">
              <ItemCardMinimal packItem={item} />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

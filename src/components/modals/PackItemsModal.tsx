import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { useUser } from '@/providers/UserProvider';
import ItemCardMinimal from '../cards/ItemCardMinimal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function PackItemsModal() {
  const { handleOpenPackItemsModal, openPackItemsModal, openedPack } =
    useUser();

  return (
    <div>
      <Modal
        open={openPackItemsModal}
        onClose={() => handleOpenPackItemsModal(openedPack)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 text-gray-100 p-8 rounded-lg shadow-xl max-w-xl">
          <h2 className="font-bold text-lg text-center mb-5">
            {openedPack?.name} - ${openedPack?.price.toFixed(2)}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3   gap-5">
            {openedPack?.items.map((item) => (
              <ItemCardMinimal key={item.id} packItem={item} />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}

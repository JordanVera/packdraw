import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { useUser } from '@/providers/UserProvider';
import { OpenPack } from '@prisma/client';
import { User } from '@/types/User';
import SellItemCard from '@/components/cards/SellItemCard';

export default function CartModal() {
  const { handleOpenCartModal, openCartModal, user } = useUser();
  const [filteredItems, setFilteredItems] = useState<OpenPack[]>([]);
  const [totalPriceInCart, setTotalPriceInCart] = useState(0);

  useEffect(() => {
    if (user?.OpenPack) {
      const filteredItems = user.OpenPack.filter(
        (op) => op.isRealMoney && !op.isRedeemed
      );

      console.log('filteredItems', filteredItems);

      const totalPrice = filteredItems.reduce((acc, op) => {
        return acc + op.item.price;
      }, 0);

      setTotalPriceInCart(totalPrice);

      setFilteredItems(filteredItems);
    }
  }, [user?.OpenPack]);

  return (
    <Modal open={openCartModal} onClose={handleOpenCartModal}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 text-gray-100 p-8 rounded-lg shadow-xl max-w-5xl max-h-[90vh] overflow-y-auto">
        <h2 className="font-bold text-2xl mb-5">Your Cart</h2>
        <p className="text-sm text-zinc-400">
          Total price: ${totalPriceInCart.toFixed(2)}
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          {filteredItems?.map((op) => (
            <div key={op.id} className="flex items-center gap-5">
              <SellItemCard packItem={op} />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

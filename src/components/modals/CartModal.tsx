import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { useUser } from '@/providers/UserProvider';
import { OpenPack } from '@prisma/client';
import { User } from '@/types/User';
import SellItemCard from '@/components/cards/SellItemCard';
import { formatNumberWithCommas } from '@/utils/formatNumbers';
import PackService from '@/services/PackService';

export default function CartModal() {
  const { handleOpenCartModal, openCartModal, user, increaseUserBalance } =
    useUser();
  const [filteredItems, setFilteredItems] = useState<OpenPack[]>([]);
  const [totalPriceInCart, setTotalPriceInCart] = useState(0);

  console.log('balance', user?.balance);

  const filterItems = (items: OpenPack[]) => {
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
  };

  useEffect(() => {
    filterItems(user?.OpenPack);
  }, [user?.OpenPack]);

  const handleSellAll = async () => {
    try {
      // console.log('selling all items', filteredItems);

      const totalPriceOfAllItems = filteredItems.reduce((acc, op) => {
        return acc + op.item.price;
      }, 0);

      console.log('totalPriceOfAllItems', totalPriceOfAllItems);

      const openPackIds = filteredItems.map((item) => item.id);

      const response = await PackService.redeemCartItems(openPackIds);

      if (response.success) {
        increaseUserBalance(totalPriceOfAllItems);
        setFilteredItems([]);
      }
    } catch (error) {
      console.error('Error selling all items:', error);
    }
  };

  const handleSingleSellSuccess = () => {
    console.log('single sell success');
    // Refresh user data through UserProvider
    // if (user?.refresh) {
    //   user.refresh();
    // }
  };

  return (
    <Modal open={openCartModal} onClose={handleOpenCartModal}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 text-gray-100 p-8 rounded-lg shadow-xl max-w-5xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl mb-5">Your Cart</h2>
          <p className="text-sm text-zinc-400">
            Your balance: ${formatNumberWithCommas(Number(user?.balance))}
          </p>
        </div>

        <div className="flex justify-between items-center mb-5">
          <p className="text-sm text-zinc-400">
            Total price: ${totalPriceInCart.toFixed(2)}
          </p>
          {filteredItems.length > 0 && (
            <button
              onClick={handleSellAll}
              className="bg-red-500 hover:bg-red-600 transition-colors text-white px-4 py-2 rounded-md"
            >
              Sell All Items
            </button>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {filteredItems?.map((op) => (
            <div key={op.id} className="flex items-center gap-5">
              <SellItemCard
                packItem={op}
                onSellSuccess={handleSingleSellSuccess}
              />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

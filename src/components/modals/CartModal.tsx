import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { useUser } from '@/providers/UserProvider';
import { OpenPack } from '@prisma/client';
import { User } from '@/types/User';
import SellItemCard from '@/components/cards/SellItemCard';
import { formatNumberWithCommas } from '@/utils/formatNumbers';
import PackService from '@/services/PackService';

export default function CartModal() {
  const {
    handleOpenCartModal,
    openCartModal,
    user,
    increaseUserBalance,
    totalPriceInCart,
    setTotalPriceInCart,
    filteredItems,
    setFilteredItems,
  } = useUser();

  console.log('balance', user?.balance);

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 text-gray-100 p-8 rounded-lg shadow-xl min-w-[700px] max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-bold text-2xl ">Your Cart</h2>

          <p className="text-md text-white">
            Value in Cart: ${totalPriceInCart.toFixed(2)}
          </p>
        </div>

        <div className="flex justify-between items-center mb-5 bg-zinc-800 p-5 rounded-lg">
          <button className="text-white capitalize font-semibold">
            Select All
          </button>

          <div className="flex gap-2.5 items-center">
            {filteredItems.length > 0 && (
              <>
                <button
                  onClick={handleSellAll}
                  className="bg-red-500 hover:bg-red-600 transition-colors text-white px-4 py-2 rounded-md"
                >
                  Sell All Items
                </button>
                <button
                  onClick={handleSellAll}
                  className="bg-red-500 hover:bg-red-600 transition-colors text-white px-4 py-2 rounded-md"
                >
                  Withdrawl
                </button>
              </>
            )}
          </div>
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

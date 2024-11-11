export const setItemRarity = (quantity: string | number) => {
  const numericQuantity = Number(quantity);

  switch (true) {
    case numericQuantity >= 10:
      return 'bg-zinc-400/30'; // Common: 10% or higher
    case numericQuantity >= 5:
      return 'bg-emerald-500/30'; // Uncommon: 5-10%
    case numericQuantity >= 1:
      return 'bg-purple-500/30'; // Rare: 2-5%
    case numericQuantity >= 0.1:
      return 'bg-red-500/30'; // Epic: 0.1-2%
    default:
      return 'bg-yellow-500/30'; // Legendary: Less than 0.1%
  }
};

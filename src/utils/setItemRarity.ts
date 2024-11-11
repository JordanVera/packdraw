export const setItemRarity = (quantity: string | number) => {
  const numericQuantity = Number(quantity);

  switch (true) {
    case numericQuantity >= 10:
      return 'from-zinc-400/30'; // Common: 10% or higher
    case numericQuantity >= 5:
      return 'from-emerald-500/30'; // Uncommon: 5-10%
    case numericQuantity >= 2:
      return 'from-purple-500/30'; // Rare: 2-5%
    case numericQuantity >= 0.1:
      return 'from-red-500/30'; // Epic: 0.1-2%
    default:
      return 'from-yellow-500/30'; // Legendary: Less than 0.1%
  }
};

const ItemCardMinimal = ({ packItem }) => {
  return (
    <div
      key={packItem.item.id}
      className="aspect-square bg-zinc-800 bg-opacity-50 rounded-lg shadow-md p-4 flex flex-col justify-between"
    >
      <p className="text-xs font-semibold text-gray-400 text-center">
        {packItem.quantity}
      </p>
      <div className="flex-grow flex items-center justify-center">
        <img
          src={packItem.item.image}
          alt={packItem.item.name}
          className="h-20 w-20 max-w-full max-h-full object-contain rounded-md"
        />
      </div>
      <div>
        <h3 className="text-sm font-bold truncate text-center">
          {packItem.item.name}
        </h3>
        <p className="text-sm text-zinc-400 text-center">
          ${packItem.item.price}
        </p>
      </div>
    </div>
  );
};

export default ItemCardMinimal;

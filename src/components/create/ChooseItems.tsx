import { useState, useEffect } from 'react';
import { usePacks } from '@/providers/PackProvider';
import ItemCard from '../cards/ItemCard';
import { Item } from '@/types/Item';

const ChooseItems = ({
  selectedItems,
  handleSelectItem,
  
}) => {
  const { allItems } = usePacks();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined); // Added state for max price

  const itemsPerPage = 32;
  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  useEffect(() => {
    console.log({ allItems });

    // Apply both search and max price filters
    let updatedItems = allItems;

    // Apply search filter if needed (assuming searchTerm is handled elsewhere)
    // You can integrate searchTerm state similarly if necessary

    // Apply max price filter
    if (maxPrice !== undefined && maxPrice !== null && maxPrice !== 0) {
      updatedItems = updatedItems.filter(
        (item: Item) => item.price <= maxPrice
      );
    }

    setFilteredItems(updatedItems);
    setCurrentPage(1); // Reset to first page whenever filters change
  }, [allItems, maxPrice]);

  useEffect(() => {
    console.log({ selectedItems });
  }, [selectedItems]);

  return (
    <section className="flex flex-col gap-5 rounded-lg bg-zinc-900 p-5 max-h-[700px] overflow-y-auto no-scrollbar">
      <header className="flex flex-col gap-2">
        <div className="flex  items-center gap-5">
          <h2 className="flex items-center justify-center text-xl font-bold text-orange-500 bg-opacity-30 bg-orange-500 rounded-lg h-8 w-8">
            1
          </h2>
          <h2 className="text-xl font-bold">Choose Items</h2>

          <p className="text-sm text-zinc-400">(50 items max)</p>
        </div>

        <div className="flex items-center justify-between">
          <input
            type="search"
            placeholder="Search items..."
            onChange={(e) => {
              const searchTerm = e.target.value.toLowerCase();
              const filtered = allItems.filter((item) =>
                item.name.toLowerCase().includes(searchTerm)
              );

              // Apply max price filter if set
              const finalFiltered = maxPrice
                ? filtered.filter((item: Item) => item.price <= maxPrice)
                : filtered;

              setCurrentPage(1);
              setFilteredItems(finalFiltered);
            }}
            className="px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="number"
            placeholder="Max price..."
            name=""
            id=""
            className="px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={maxPrice || ''}
            onChange={(e) => {
              const value = e.target.value;
              const parsedValue = value ? parseFloat(value) : undefined;
              setMaxPrice(parsedValue);
            }}
          />
        </div>

        <PaginationControls
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          allItems={filteredItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {currentItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            selectedItems={selectedItems}
            handleSelectItem={handleSelectItem}
          />
        ))}
      </div>

      <PaginationControls
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        allItems={filteredItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  );
};

const PaginationControls = ({
  indexOfFirstItem,
  indexOfLastItem,
  allItems,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold">
        Showing {indexOfFirstItem + 1} -{' '}
        {Math.min(indexOfLastItem, allItems.length)} of {allItems.length}
      </span>
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-800 rounded-md disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-800 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ChooseItems;

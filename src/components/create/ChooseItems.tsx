import { useState, useEffect } from 'react';
import { usePacks } from '@/providers/PackProvider';
import ItemCard from '../cards/ItemCard';
import { Item } from '@/types/Item';

const ChooseItems = ({ selectedItems, setSelectedItems, handleSelectItem }) => {
  const { allItems } = usePacks();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 32;
  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  useEffect(() => {
    console.log({ allItems });
  }, [allItems]);

  useEffect(() => {
    console.log({ selectedItems });
  }, [selectedItems]);

  return (
    <section className="flex flex-col gap-5 rounded-lg bg-zinc-900 p-5 max-h-[700px] overflow-y-auto no-scrollbar">
      <header className="flex flex-col gap-2">
        <div className="flex  items-center gap-5">
          <h2 className="flex items-center justify-center text-xl font-bold bg-zinc-950 rounded-lg h-10 w-10">
            1
          </h2>
          <h2 className="text-xl font-bold">Choose Items</h2>

          <p className="text-sm text-zinc-400">(50 items max)</p>
        </div>

        <PaginationControls
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          allItems={allItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
        allItems={allItems}
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

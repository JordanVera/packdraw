import { useState } from 'react';
import { Search } from 'lucide-react';
export default function PacksPageNav({
  isPacksOpen,
  setIsPacksOpen,
  isPriceOpen,
  setIsPriceOpen,
}) {
  return (
    <nav className="flex flex-1 items-stretch gap-6 backdrop-blur-sm px-4 py-2 border border-red-500">
      <div className="w-full flex items-center gap-4">
        {/* Search Input - now with flex-grow */}
        <div className="flex-grow">
          <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search"
            className="w-full bg-transparent border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-600"
          />
        </div>

        {/* Right-aligned items wrapper */}
        <div className="flex items-center gap-4">
          {/* Official Packs Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsPacksOpen(!isPacksOpen)}
              className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Official Packs
              <svg
                className={`w-4 h-4 transition-transform ${
                  isPacksOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isPacksOpen && (
              <div className="absolute top-full mt-2 w-48 bg-gray-900 rounded-lg shadow-lg py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  Pack 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  Pack 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  Pack 3
                </a>
              </div>
            )}
          </div>

          {/* Price Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsPriceOpen(!isPriceOpen)}
              className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Price High to Low
              <svg
                className={`w-4 h-4 transition-transform ${
                  isPriceOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isPriceOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  Price High to Low
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  Price Low to High
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  Most Popular
                </a>
              </div>
            )}
          </div>

          {/* Create Pack Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
            Create Pack
          </button>
        </div>
      </div>
    </nav>
  );
}

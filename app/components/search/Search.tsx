"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface SearchFilterProps {
  onSearch: (filters: { location: string; propertyType: string; price: string }) => void;
}

export default function SearchFilter({ onSearch }: SearchFilterProps) {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [price, setPrice] = useState("");

  const handleSearch = () => {
    onSearch({ location, propertyType, price });
    // const queryParams = new URLSearchParams('')
    // const url = new URL('/properties', )
  };

  return (
    <div className="backdrop-blur-md bg-white/60 rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center gap-4">
      {/* Location */}
      <div className="flex-1">
        <label className="block text-gray-600 text-sm mb-1 text-left">
          Location
        </label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
        >
          <option>Choose from the list</option>
          <option>Lekki</option>
          <option>Victoria Island</option>
          <option>Ikeja</option>
        </select>
      </div>

      {/* Property Type */}
      <div className="flex-1">
        <label className="block text-gray-600 text-sm mb-1 text-left">
          Property Type
        </label>
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
        >
          <option>Choose from the list</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Land</option>
        </select>
      </div>

      {/* Price */}
      <div className="flex-1">
        <label className="block text-gray-600 text-sm mb-1 text-left">
          Price
        </label>
        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
        >
          <option>Choose from the list</option>
          <option>₦5M - ₦10M</option>
          <option>₦10M - ₦50M</option>
          <option>₦50M+</option>
        </select>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="mt-6 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold p-2 rounded-md transition-all"
      >
        <Search size={18} /> Search
      </button>
    </div>
  );
}

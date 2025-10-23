"use client";

import Image from "next/image";
import SearchFilter from "../search/Search";

export default function Hero() {
  const handleSearch = (filters: { location: string; propertyType: string; price: string }) => {
    console.log(filters);
  };

  return (
    <section className="relative h-[70vh] md:h-screen flex items-center justify-center text-white bg-black">
      <Image
        src="/assets/house.jpg"
        alt="Hero Background"
        fill
        className="object-cover opacity-80"
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center max-w-4xl p-8">
        <h5 className="text-sm font-semibold uppercase tracking-wider mb-2">
          The Best Way To
        </h5>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Dream Home
        </h1>
        <p className="text-sm mb-8">
          We’ve more than 750+ verified apartments, places & plots
        </p>

        {/* Reusable Search Filter Component */}
        <SearchFilter onSearch={handleSearch} />
      </div>
    </section>
  );
}

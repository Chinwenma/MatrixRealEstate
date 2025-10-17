"use client";

import { useState } from "react";
import {  Search } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    
      <section className="relative h-[70vh] md:h-screen flex items-center justify-center text-white bg-black">
        <Image
          src="/assets/house.jpg"
          alt="Hero Background"
          layout="fill"
          className="opacity-80"
        />

        {/* Overlay Content */}
        <div className="relative z-10 text-center max-w-xl  p-16">
          <h5 className="text-sm font-semibold uppercase tracking-wider mb-2">The Best Way To</h5>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-sm mb-6">We’ve more than 750+ verified apartments, places & plots</p>

          {/* Search Box */}
          <div className="bg-white text-black rounded-lg shadow-md p-4">
            {/* Tabs */}
            <div className="flex gap-4 text-sm mb-3">
              {["all", "for sale", "for rent"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize px-4 py-1 rounded-md ${
                    activeTab === tab ? "bg-red-500 text-white" : "text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2">
              <Search className="text-gray-400" />
              <input
                type="text"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
                className="flex-1 outline-none px-2"
              />
              <button className="bg-gray-100 px-4 py-1 rounded-md text-sm">Advanced</button>
            </div>
          </div>
        </div>
      </section>
  );
}

// function Dropdown({ label }: { label: string }) {
//   return (
//     <div className="relative group">
//       <button className="flex items-center gap-1 hover:text-red-500">
//         {label} <ChevronDown size={14} />
//       </button>
//     </div>
//   );
// }

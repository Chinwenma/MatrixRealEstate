"use client";

import Image from "next/image";

export default function FooterBanner() {
  return (
    <section className="w-full flex justify-center items-center py-10">
      <div className="flex flex-col md:flex-row items-center bg-[#F5F7F9] rounded-2xl overflow-hidden shadow-sm max-w-6xl w-full">
        {/* Left Section */}
        <div className="flex-1 p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Give us a shot
          </h2>
          <p className="text-gray-700 mb-6">
            Join over 4,000 clients who already bought with Perfect Property.
          </p>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-5 py-2 rounded-md transition">
            Learn more
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 w-full h-64 md:h-auto relative">
          <Image
            src="/assets/house.jpg"
            alt="Happy client meeting"
            width={400}
            height={400}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}

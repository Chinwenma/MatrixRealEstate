"use client";

import Image from "next/image";
import { LucideIcon, Hammer, PiggyBank, Home } from "lucide-react";

type Feature = {
  id: number;
  title: string;
  text: string;
  icon: LucideIcon;
  color: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Exceptional Craftsmanship",
    text: "Our homes are more than structures – they’re crafted with unparalleled attention to detail.",
    icon: Hammer,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Smart Investment",
    text: "Our properties not only offer a dream living space but also promise a sound investment for your future.",
    icon: PiggyBank,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    title: "Effortless Ownership",
    text: "Enjoy a hassle-free homebuying journey with our dedicated team guiding you every step of the way.",
    icon: Home,
    color: "bg-green-100 text-green-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto px-6">
      {/* Left Image */}
      <div className="flex-1 w-full relative h-[420px] rounded-2xl overflow-hidden shadow-md">
        <Image
          src="/assets/house1.jpg"
          alt="Luxury apartment"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Text Section */}
      <div className="flex-1 w-full">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
          Why choose us for the purchase of your dream home?
        </h2>

        <div className="space-y-6">
          {features.map(({ id, title, text, icon: Icon, color }) => (
            <div key={id} className="flex items-start gap-4">
              <div
                className={`flex items-center justify-center w-28 h-28 p-8 rounded-full ${color}`}
              >
                <Icon className=" h-20 w-20" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{title}:</h3>
                <p className="text-gray-600 text-sm md:text-base">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-8 bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-md font-medium transition">
          Learn More
        </button>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
};

const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Apartment in Lekki",
    location: "Lekki, Lagos",
    price: "₦120,000,000",
    image: "/assets/house1.jpg",
  },
  {
    id: 2,
    title: "Modern Duplex in Abuja",
    location: "Gwarinpa, Abuja",
    price: "₦95,000,000",
    image: "/assets/house.jpg",
  },
  {
    id: 3,
    title: "Cozy Bungalow in Enugu",
    location: "Independence Layout, Enugu",
    price: "₦45,000,000",
    image: "/assets/house.jpg",
  },
  {
    id: 4,
    title: "Elegant Villa in Port Harcourt",
    location: "GRA, Port Harcourt",
    price: "₦180,000,000",
    image: "/assets/house.jpg",
  },
  {
    id: 5,
    title: "Smart Home in Owerri",
    location: "New Owerri, Imo State",
    price: "₦75,000,000",
    image: "/assets/house.jpg",
  },
  {
    id: 6,
    title: "Beachfront Apartment in Lagos",
    location: "Victoria Island, Lagos",
    price: "₦250,000,000",
    image: "/assets/house1.jpg",
  },
  {
    id: 7,
    title: "Modern Townhouse in Asaba",
    location: "Okpanam Road, Asaba",
    price: "₦55,000,000",
    image: "/assets/house.jpg",
  },
  {
    id: 8,
    title: "Stylish Condo in Enugu",
    location: "Independence Layout, Enugu",
    price: "₦65,000,000",
    image: "/assets/house1.jpg",
  },
];

interface FeaturedPropertiesProps {
  limit?: number;
}

export default function FeaturedProperties({ limit }: FeaturedPropertiesProps) {
  const displayedProperties = limit ? properties.slice(0, limit) : properties;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Featured Properties
        </h2>
        <p className="text-gray-600 mb-10">
          Explore our hand-picked selection of premium properties.
        </p>

        {/* Property Grid */}
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {displayedProperties.map(({ id, title, location, price, image }) => (
            <div
              key={id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>

              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1 text-rose-500" />
                  {location}
                </div>
                <p className="text-rose-600 font-semibold mb-4">{price}</p>
                <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-md text-sm transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

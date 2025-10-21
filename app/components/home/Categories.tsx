
"use client";

import { Building2, Home, LandPlot, Warehouse } from "lucide-react";

type Category = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
};

const categories: Category[] = [
  {
    id: 1,
    title: "Apartments",
    description: "Modern apartments with premium amenities and comfort.",
    icon: Building2,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Houses",
    description: "Spacious family homes in serene and secure environments.",
    icon: Home,
    color: "bg-rose-100 text-rose-600",
  },
  {
    id: 3,
    title: "Lands",
    description: "Verified land properties ready for development or investment.",
    icon: LandPlot,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    title: "Commercial",
    description: "Shops, warehouses, and office spaces for business use.",
    icon: Warehouse,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function PropertyCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Explore by Property Type
        </h2>
        <p className="text-gray-600 mb-10">
          Find the perfect property category that matches your needs.
        </p>

        {/* Category Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {categories.map(({ id, title, description, icon: Icon, color }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-left group"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${color} mb-4 group-hover:scale-110 transition`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

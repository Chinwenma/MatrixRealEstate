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
    title: "Property Sales",
    description:
      "We help clients buy and sell properties with confidence. Whether you’re looking for your dream home or want to sell your property at the best market value, our team ensures a smooth and transparent transaction from start to finish.",
    icon: Building2,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Property Rentals",
    description:
      "Finding the perfect place to rent shouldn’t be stressful. We connect tenants with verified landlords and quality properties that fit every budget and lifestyle.",
    icon: Home,
    color: "bg-rose-100 text-rose-600",
  },
  {
    id: 3,
    title: "Property Management",
    description:
      "We take the stress out of property ownership by offering reliable management services. From tenant screening and rent collection to maintenance and inspections, we ensure your property is well taken care of while maximizing your returns.",
    icon: LandPlot,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    title: "Real Estate Consultation",
    description:
      "Our experts provide personalized real estate consultation services to help you make informed decisions. Whether you’re investing, buying, selling, or developing, we offer insights on market trends, property value.",
    icon: Warehouse,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function PropertyCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          What We Do
        </h2>
        <p className="text-gray-600 mb-10">
     Explore our range of real estate services crafted to meet your needs.
        </p>

        {/* Category Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {categories.map(({ id, title, description, icon: Icon, color }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 px-6 py-4 group "
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${color} mb-4 group-hover:scale-110 transition`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed tracking-wide text-justify">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

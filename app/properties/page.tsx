

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Search } from "lucide-react";
import React from "react";
import PropertyCard from "../components/property/PropertyCard";
import { properties } from "lib/properties";

const PropertiesPage: React.FC = () => {
  const [query, setQuery] = React.useState("");
  const [minPrice, setMinPrice] = React.useState<number | "">("");
  const [maxPrice, setMaxPrice] = React.useState<number | "">("");

  const filtered = React.useMemo(() => {
    return properties.filter((p) => {
      const matchesQuery = [p.title, p.location]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesMin = minPrice === "" || p.price >= Number(minPrice);
      const matchesMax = maxPrice === "" || p.price <= Number(maxPrice);
      return matchesQuery && matchesMin && matchesMax;
    });
  }, [query, minPrice, maxPrice]);

  return (
    <main className="container mx-auto px-4 md:px-8 py-20">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold">Properties</h1>
        <p className="text-slate-600 mt-2">
          Explore available homes, apartments and lands.
        </p>
      </header>

      <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        <div className="md:col-span-1 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <label className="flex items-center gap-2 bg-slate-50 p-2 rounded-md">
            <Search size={16} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title or location"
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </label>

          <div className="mt-4 grid gap-2">
            <label className="text-xs text-slate-600">Min price (NGN)</label>
            <input
              type="number"
              value={minPrice as any}
              onChange={(e) =>
                setMinPrice(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
            <label className="text-xs text-slate-600">Max price (NGN)</label>
            <input
              type="number"
              value={maxPrice as any}
              onChange={(e) =>
                setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="w-full rounded-md border px-3 py-2 text-sm"
            />

            <button
              onClick={() => {
                setQuery("");
                setMinPrice("");
                setMaxPrice("");
              }}
              className="mt-2 text-sm text-slate-700 underline"
            >
              Reset filters
            </button>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-slate-600">
              Showing <span className="font-semibold">{filtered.length}</span>{" "}
              results
            </p>
            <div className="flex items-center gap-2">
              <button className="text-sm px-3 py-2 rounded-lg border">
                List
              </button>
              <button className="text-sm px-3 py-2 rounded-lg border">
                Map
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 text-center text-slate-600">
              No properties match your search.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default PropertiesPage;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import FeaturedProperties from "app/components/featured/FeaturedPrioperty";
import SearchFilter from "app/components/search/Search";
import React from "react";

const PropertiesPage: React.FC = () => {
  const handleSearch = (filters: { location: string; propertyType: string; price: string }) => {
    console.log("Filters from Properties Page:", filters);
    // Later, you can use these filters to fetch or filter property listings dynamically.
  };

  return (
    <main>
      <div className="container mx-auto px-4 md:p-12 my-16 bg-black ">
        <SearchFilter onSearch={handleSearch} />
      </div>

      <section className="container mx-auto px-4 md:px-8 py-20">
        <FeaturedProperties />
      </section>
    </main>
  );
};

export default PropertiesPage;

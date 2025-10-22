/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import PageBanner from "app/components/banner/PageBanner";
import FeaturedProperties from "app/components/featured/FeaturedPrioperty";
import React from "react";
const PropertiesPage: React.FC = () => {
  return (
    <main>
      <PageBanner title="properties" subtitle="lorem jncxkckvcj hjcjcv " />
      <section className="container mx-auto px-4 md:px-8 py-20">
        <FeaturedProperties />
      </section>
    </main>
  );
};

export default PropertiesPage;

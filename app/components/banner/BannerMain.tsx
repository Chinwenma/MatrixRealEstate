"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Banner: React.FC = () => {
  return (
    <section className="relative w-full h-[30vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src="/assets/bannermain.png"
          alt="Modern houses background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/40" />

      {/* Text + CTA */}
      <motion.div
        className="relative z-10 text-center text-white px-6 md:px-12 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4 leading-snug"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Discover a place you&apos;ll love to live
        </motion.h1>

        <motion.p
          className="text-gray-200 mb-6 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Explore stunning properties and find your perfect home today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 bg-rose-500 text-black px-6 py-3 rounded-md font-medium hover:bg-rose-600 transition-all duration-300"
          >
            View Properties <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;

'use client';

// import { cormorant } from '@/font';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

export default function PageBanner({
  title,
  subtitle,
  backgroundImage = '/assets/house1.jpg', // ← your default background
}: PageBannerProps) {
  return (
    <section className="relative w-full h-40 md:h-60 lg:h-70 overflow-hidden bg-gray-900 ">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover object-center opacity-70"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-80" />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 my-4"
      >
        <h1 className="text-2xl md:text-5xl font-extrabold text-white drop-shadow-md" >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-lg md:text-xl text-gray-200 drop-shadow-sm">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}

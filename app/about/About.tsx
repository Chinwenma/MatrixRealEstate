"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="py-20 bg-rose-50">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/house2.png"
            alt="About Us"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a forward-thinking real estate company dedicated to helping
            individuals and businesses find their ideal spaces. From luxury
            homes and modern apartments to strategic commercial properties, we
            connect you to opportunities that match your goals.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to simplify the property journey by providing expert
            advice, transparent service, and innovative digital solutions that
            make property transactions smooth and rewarding.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

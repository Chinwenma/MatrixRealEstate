"use client";

import { motion } from "framer-motion";
import { Home, CreditCard, CheckSquare } from "lucide-react";

const steps = [
  {
    icon: <Home className="h-6 w-6 text-white" />,
    title: "Find Home",
    description:
      "Our properties are located at prime areas where there won’t be problem with transportation.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-white" />,
    title: "Make payments",
    description:
      "Our estates come with good network, portable water, 24hrs light and round-the-clock security.",
  },
  {
    icon: <CheckSquare className="h-6 w-6 text-white" />,
    title: "Make it Official",
    description:
      "We have been in business for over 32 years. For clients outside the country, you can trust us to deliver well.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-semibold text-gray-900 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How it works.
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          This is how our product works
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="rounded-2xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-rose-400 mb-4 mx-auto">
                {step.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

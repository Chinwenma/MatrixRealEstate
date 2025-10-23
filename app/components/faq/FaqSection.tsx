'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { AccordionItem } from "./AccordionItem";

const faqData = [
  {
    question: "Let’s Do The Right Thing Now",
    answer: "Support a cause today and make a positive impact.",
  },
  {
    question: "Can I Donate Anonymously?",
    answer: "Yes, anonymous donations are allowed through our platform.",
  },
  {
    question: "Join Your Hand With Us For a Better Life",
    answer: "Partner with us and help spread kindness around the world.",
  },

  {
    question: "What Payment Methods Are Accepted?",
    answer:
      "We accept debit cards, credit cards, and bank transfers. More options coming soon!",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl text-gray-500 mb-4">Have Any Question?</h2>
        <h1 className="text-3xl md:text-5xl font-bold mb-10 bg-gradient-to-b from-black to-orange-500 text-transparent bg-clip-text">Frequently Asked Questions</h1>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Animated Image */}
          <motion.div
            className="bg-[#ace7f8] rounded-lg overflow-hidden shadow"
            initial={{ scale: 0.9, rotate: -2 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 10 }}
          >
            <Image
              src="/assets/house.jpg"
              width={600}
              height={400}
              alt="faq illustration"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Animated FAQ Panel */}
          <motion.div
            className="bg-orange-50 text-black rounded-lg p-6 shadow space-y-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <AccordionItem
              question="Make A Difference In The Life Of A Child"
              answer="Your contribution can help provide essentials like food, education, and shelter."
            />
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

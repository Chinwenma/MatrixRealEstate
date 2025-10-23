"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
// import { useState } from "react";
// import FaqSection from "app/components/faq/FaqSection";
// import PageBanner from "app/components/banner/PageBanner";

const ContactPage: React.FC = () => {
  //   const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <main>
      {/* <PageBanner
        title=" Get In Touch"
        subtitle="Have questions or want to discuss your real estate needs? Reach out to
          us — we’d love to hear from you!"
      /> */}
      <section>
        <div className="relative overflow-hidden container mx-auto px-6 md:px-12 py-10 md:py-14 ">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('assets/house.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center text-white space-y-4 md:space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-2 md:mb-4">
                Contact Information
              </h3>
              <p className="text-gray-200 text-sm md:text-base">
                We’re here to help you find your dream property or answer any
                questions about our services.
              </p>

              <div className="space-y-3 text-sm md:text-lg">
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-400" /> +234
                  810 000 9999
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />{" "}
                  info@matrixrealestate.com
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />{" "}
                  Lagos, Nigeria
                </p>
              </div>
            </motion.div>

            {/* Glassy Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-lg bg-white/20 rounded-2xl shadow-xl p-6 md:p-8 border border-white/30"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-4 md:space-y-5">
                <div>
                  <label className="block text-gray-100 mb-2 text-sm md:text-base">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-100 mb-2 text-sm md:text-base">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-100 mb-2 text-sm md:text-base">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-36 bg-rose-600/80 text-white py-2.5 md:py-3 rounded-lg hover:bg-rose-700 transition font-semibold text-sm md:text-base"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section (plain background) */}
        {/* <div className="mt-20">
        <FaqSection />
      </div> */}
      </section>
    </main>
  );
};

export default ContactPage;

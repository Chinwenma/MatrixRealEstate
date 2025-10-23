"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { JSX } from "react";

type MissionVisionItem = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  borderColor: string;
  bgColor: string;
};

const missionVisionData: MissionVisionItem[] = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "To connect people with their ideal homes and properties through a seamless, transparent, and trusted real estate platform that simplifies buying, selling, and renting experiences.",
    icon: <Target className="w-7 h-7 text-green-600" />,
    borderColor: "border-green-500",
    bgColor: "bg-green-50",
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "To become the most reliable and user-friendly real estate marketplace, empowering individuals and businesses to make confident property decisions with ease and innovation.",
    icon: <Eye className="w-7 h-7 text-blue-900" />,
    borderColor: "border-blue-900",
    bgColor: "bg-blue-50",
  },
];

const MissionVision: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionVisionData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`bg-white rounded-2xl shadow-sm p-8 border-l-4 ${item.borderColor} hover:shadow-md transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl ${item.bgColor}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

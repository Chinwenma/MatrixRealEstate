"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Powell",
    role: "Service Support",
    image: "/assets/team1.png",
  },
  {
    id: 2,
    name: "Thomas Powell",
    role: "Marketing",
    image: "/assets/team2.png",
  },
  {
    id: 3,
    name: "Tom Wilson",
    role: "Designer",
    image: "/assets/team3.png",
  },
  {
    id: 4,
    name: "Samuel Palmer",
    role: "Marketing",
    image: "/assets/team4.png",
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="team">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Team Of Experts
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover
            the amazing people who make our company great.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 hover:cursor-pointer">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="relative w-full h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="py-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Offering {
  text: string;
}

    export default function OfferingsSection() {
  const offerings: Offering[] = [
    { text: "Career Discovery workshops" },
    { text: "Podcast shoots with industry experts" },
    { text: "1:1 mentorship with top professionals" },
    { text: "Scientifically build academic score" },
    { text: "Forge bonds with similarly driven teens" },
    { text: "Weekly mentorship from Harvard & UCL professionals" },
    { text: "Monthly career counsellor meetings" },
    { text: "Build resilience" },
    { text: "Build empathy" }
  ];

  return (
    <section className="min-h-screen py-32 px-4 bg-[#f5f5f0]">
      <motion.h2 
        className="text-6xl font-black text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        WHAT WE OFFER
      </motion.h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {offerings.map((offering, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="relative group cursor-pointer"
          >
            <div className="absolute inset-0  from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="relative bg-white p-8 rounded-2xl border-2 border-gray-200 group-hover:border-purple-500 transition-colors duration-300 h-full flex items-center justify-center min-h-[200px] shadow-lg">
              <p className="text-xl md:text-2xl font-bold text-center text-black">{offering.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


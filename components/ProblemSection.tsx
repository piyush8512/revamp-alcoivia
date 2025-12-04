"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection = () => {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-6">
          PROBLEMS STUDENTS FACE TODAY
        </h2>
        <p className="text-xl md:text-2xl font-light opacity-80 max-w-3xl mx-auto">
          We understand the challenges. That's why we built Alcovia.
        </p>
      </motion.div>
    </section>
  );
};

export default ProblemSection;
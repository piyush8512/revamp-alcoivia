// ============================================
// FILE: components/ToggleSection.tsx
// ============================================
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToggleContent {
  title: string;
  description: string;
}

export default function ToggleSection() {
  const [isAtSchool, setIsAtSchool] = useState<boolean>(true);

  const content: Record<'school' | 'outside', ToggleContent> = {
    school: {
      title: 'AT SCHOOL',
      description: 'How Alcovia helps students ace school.'
    },
    outside: {
      title: 'OUTSIDE OF SCHOOL',
      description: 'How Alcovia fulfills its mission of building differentiation for each Alcovian.'
    }
  };

  const currentContent = isAtSchool ? content.school : content.outside;

  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-4 bg-black text-white">
      <div className="max-w-5xl w-full">
        <div className="flex justify-center gap-4 mb-16">
          <motion.button
            onClick={() => setIsAtSchool(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 ${
              isAtSchool 
                ? 'bg-white text-black' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            At School
          </motion.button>
          <motion.button
            onClick={() => setIsAtSchool(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 ${
              !isAtSchool 
                ? 'bg-white text-black' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            Outside of School
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={isAtSchool ? 'school' : 'outside'}
            initial={{ opacity: 0, x: isAtSchool ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isAtSchool ? 100 : -100 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              className="bg-gradient-to-br from-purple-900 to-blue-900 p-12 rounded-3xl"
              layoutId="content-box"
            >
              <h3 className="text-4xl md:text-5xl font-black mb-6">
                {currentContent.title}
              </h3>
              <p className="text-2xl md:text-3xl font-light leading-relaxed">
                {currentContent.description}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
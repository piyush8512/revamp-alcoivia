'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Space_Grotesk, Inter } from 'next/font/google';

// 1. Font Configuration
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '600'],
  variable: '--font-space', 
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-inter',
});

interface ManifestoWord {
  text: string;
  highlight?: boolean;
}

export default function ManifestoSection() {
  const manifestoWords: ManifestoWord[] = [
    { text: "UNPRECEDENTED", highlight: false },
    { text: "LEARNINGS,", highlight: true }, 
    { text: "FAILING REGULARLY,", highlight: false },
    { text: "BUILDING WITH", highlight: true },
    { text: "FRIENDS,", highlight: false },
    { text: "WHILE BEING ON A", highlight: false },
    { text: "JOURNEY OF SELF", highlight: false },
    { text: "DISCOVERY", highlight: true }
  ];

  return (
    <section 
      className={`min-h-screen flex items-center justify-center py-32 px-4 relative overflow-hidden bg-[#050201] text-white ${inter.variable} ${spaceGrotesk.variable} font-sans`}
    >
        
        {/* 2. Orange Ambient Glow Background */}
        <div className="absolute inset-0  from-black via-[#1a0a00] to-black opacity-80" />
        {/* Orange spot light top center */}
        <div className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[500px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Noise overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-7xl w-full"
        >
          {/* Main Manifesto Heading */}
          <h2 className="font-space text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-center uppercase cursor-default">
            {manifestoWords.map((word, idx) => (
              <motion.span 
                key={idx}
                // Hydration Fix: Using strict conditional styling instead of passing dynamic strings
                className={`block transition-colors duration-300 ${word.highlight ? 'text-[#FF4D00]' : 'text-white/90'}`}
                
                initial={{ opacity: 0, y: 50, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                    duration: 0.8, 
                    delay: idx * 0.1,
                    ease: [0.2, 0.65, 0.3, 0.9] 
                }}
                
                // 3. THE COOL HOVER EFFECT
                whileHover={{ 
                    scale: 1.05, 
                    skewX: -10, // Slants the text dynamically
                    color: "#FF4D00", // Force Orange on hover
                    textShadow: "0px 0px 20px rgba(255, 77, 0, 0.6)", // Glowing effect
                    transition: { duration: 0.2 }
                }}
                suppressHydrationWarning // Prevents errors from extensions like Grammarly
              >
                {word.text}
              </motion.span>
            ))}
          </h2>

          {/* Subtitle / CTA */}
          <motion.div
            className="w-full flex justify-center mt-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="font-inter text-xl md:text-2xl text-center text-gray-400 font-light max-w-2xl leading-relaxed">
              Get on a legacy building journey today, <br className="hidden md:block"/> 
              to build the <span className="text-orange-500 font-medium">future of tomorrow.</span>
            </p>
          </motion.div>

        </motion.div>
    </section>
  );
}
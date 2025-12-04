'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

export default function Navigation(){
  const navItems: NavItem[] = [
    { label: 'About Us', href: '#about-us' },
    { label: 'Contact Us', href: '#contact-us' }
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-40 bg-[#f5f5f0]/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full animate-pulse" />
            <div className="absolute inset-1 bg-[#f5f5f0] rounded-full flex items-center justify-center">
              <span className="text-xl font-black">A</span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight">alcovia</h1>
            <p className="text-xs tracking-wider opacity-60">SHAPE OF THE FUTURE</p>
          </div>
        </motion.div>

        <div className="flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm font-medium tracking-wide relative group"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

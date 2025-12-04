"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-32 pb-12 overflow-hidden">
      {/* TOP GRADIENT FADE (Blends with previous section) */}
      <div className="absolute inset-x-0 -top-1 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="border-t border-white/10 my-12 mx-6 md:mx-12 origin-center"
      />

      {/* BOTTOM SECTION */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6 items-center text-sm tracking-wide">
          {/* Address (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-2 text-gray-400 font-medium text-center lg:text-left"
          >
            <p>WeWork, Two Horizon Centre,</p>
            <p>DLF Phase 5, Gurugram</p>
            <div className="pt-2 space-y-1">
              <p className="hover:text-white transition-colors duration-300 cursor-pointer">
                Call Us - +91 9070606050
              </p>
              <p className="hover:text-white transition-colors duration-300 cursor-pointer">
                Email Us - info@alcovia.life
              </p>
            </div>
          </motion.div>

          {/* Logo Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-24 h-24 mb-6">
              <Image
                src="/assets/logo2.png" // Ensure this is your white/transparent logo
                alt="Alcovia Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Gradient Text to match Hero Section */}
            <p className="uppercase tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-xs font-bold">
              Ahead of the Curve.
            </p>
          </motion.div>

          {/* Footer Links (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center lg:items-end gap-3 font-medium"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="uppercase text-xs tracking-widest text-gray-400 hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="border-t border-white/10 my-8 mx-6 md:mx-12 origin-center"
      />

      {/* COPYRIGHT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center text-[10px] md:text-xs uppercase tracking-[0.35em] text-gray-600 font-semibold"
      >
        Alcovia © 2025. Ahead of the Curve.
      </motion.div>
    </footer>
  );
}

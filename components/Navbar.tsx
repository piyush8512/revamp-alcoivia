
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "./CursorContext";
import Image from "next/image";

const Navbar = () => {
  const { textEnter, textLeave } = useCursor();

  // State
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      // Trigger animations after 50px of scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Removed "Home" as requested
  const navLinks = [
    { name: "About Us", href: "#about-us" },
    { name: "Contact Us", href: "#contact-us" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md py-3 border-b border-white/10"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Main Container - Relative is crucial for absolute positioning of links */}
        <div className="max-w-7xl mx-auto px-6 relative flex items-center justify-between h-12">
          
          {/* --- LEFT: LOGO --- */}
          <div className=" z-20">
            <motion.div
              className="relative w-32 h-10 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onHoverStart={textEnter}
              onHoverEnd={textLeave}
            >
              <Image
                src="/assets/logo.png"
                alt="Alcovia"
                fill
                className="object-contain object-left"
                priority
              />
            </motion.div>
          </div>

          {/* --- DESKTOP NAV LINKS (ANIMATED POSITION) --- */}
          {/* Logic: 
              - Position Absolute to move freely.
              - When NOT scrolled: left: 100%, x: -100% (Aligns right edge to container right edge).
              - When SCROLLED: left: 50%, x: -50% (Aligns center to container center).
              - padding-right: 60px ensures it doesn't overlap the hamburger on mobile or touch right edge too closely 
          */}
          <motion.div
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 gap-8 z-10"
            initial={false}
            animate={{
              left: isScrolled ? "50%" : "100%",
              x: isScrolled ? "-50%" : "-100%",
              paddingRight: isScrolled ? "0px" : "20px" // Add subtle padding when on the right
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {navLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm text-white font-medium tracking-wide relative group opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap"
                onHoverStart={textEnter}
                onHoverEnd={textLeave}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#f5440e] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* --- RIGHT: JOIN BUTTON & HAMBURGER --- */}
          <div className="flex-1 flex justify-end items-center gap-4 z-20">
            
            {/* Join Button - Appears ONLY when scrolled (fills the gap left by links) */}
            <AnimatePresence>
              {isScrolled && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block px-6 py-2 bg-[#ff3700] text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white transition-colors"
                  onHoverStart={textEnter}
                  onHoverEnd={textLeave}
                >
                  Join Now
                </motion.button>
              )}
            </AnimatePresence>

            {/* Mobile Hamburger (Always visible on mobile) */}
            <motion.button
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onHoverStart={textEnter}
              onHoverEnd={textLeave}
            >
              <motion.span
                className="w-6 h-0.5 bg-white rounded-full origin-center"
                animate={isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white rounded-full origin-center"
                animate={isMobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-4xl font-black text-white uppercase tracking-tighter hover:text-[#ee680f] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}

            <motion.button
              className="mt-8 px-8 py-3 bg-[#ff0000] text-black font-bold uppercase rounded-full text-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              Join Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
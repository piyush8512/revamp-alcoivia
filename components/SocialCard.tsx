"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

// Define card data with education-related images
const cards = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=600&fit=crop", 
    color: "from-purple-600 to-blue-600", 
    icon: Instagram, 
    label: "Instagram",
    link: "https://instagram.com"
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=600&fit=crop", 
    color: "from-blue-700 to-cyan-600", 
    icon: Linkedin, 
    label: "LinkedIn",
    link: "https://linkedin.com"
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=600&fit=crop", 
    color: "from-red-600 to-rose-600", 
    icon: Youtube, 
    label: "YouTube",
    link: "https://youtube.com"
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=600&fit=crop", 
    color: "from-pink-500 to-rose-500", 
    icon: Instagram, 
    label: "Instagram",
    link: "https://instagram.com"
  },
  { 
    id: 5, 
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=600&fit=crop", 
    color: "from-blue-800 to-indigo-900", 
    icon: Linkedin, 
    label: "LinkedIn",
    link: "https://linkedin.com"
  },
];

export default function SocialsAndFooter() {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  return (
    <div className="w-full min-h-screen flex flex-col bg-black text-white relative overflow-hidden font-sans">
      
      {/* SECTION: SOCIALS SLIDE */}
      <section className="flex-1 flex flex-col items-center justify-center relative z-10 pt-32  overflow-hidden">
        
        {/* Decorative Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative z-20"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            What's Up <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
              On Socials
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg tracking-wide">
            Follow the journey behind the scenes
          </p>
        </motion.div>

        {/* Fanned Cards Container */}
        <motion.div 
          className="relative w-full max-w-sm h-[450px] flex items-center justify-center cursor-pointer"
          style={{ perspective: "1000px" }}
          initial="initial"
          whileHover="hover"
          whileTap="hover"
        >
          {cards.map((card, index) => {
            const centerIndex = 2; 
            const offset = index - centerIndex;
            
            // Calculate Z-Index
            const zIndex = hoveredIndex === index ? 50 : (centerIndex === index ? 10 : 10 - Math.abs(offset));

            return (
              <motion.a
                key={card.id}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                
                className="absolute w-64 h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900"
                style={{ 
                  zIndex,
                  transformOrigin: "bottom center"
                }}
                
                variants={{
                  initial: { 
                    rotate: offset * 3, 
                    x: offset * 10,     
                    y: Math.abs(offset) * 5, 
                    scale: 1 - Math.abs(offset) * 0.05,
                  },
                  hover: {
                    rotate: offset * 12, 
                    x: offset * 140,     
                    y: -20,              
                    scale: 1,            
                    transition: { type: "spring", stiffness: 260, damping: 20 }
                  }
                }}
                animate={{
                    scale: hoveredIndex === index ? 1.15 : 1,
                    y: hoveredIndex === index ? -40 : undefined,
                }}
                transition={{
                  scale: { duration: 0.3 },
                  y: { duration: 0.3 }
                }}
              >
                {/* Card Background Image */}
                <div className="relative w-full h-full">
                   <img 
                     src={card.src} 
                     alt={`${card.label} post`}
                     className="absolute inset-0 w-full h-full object-cover"
                   />
                   
                   {/* Gradient Overlay */}
                   <div className={`absolute inset-0 bg-gradient-to-br ${card.color} mix-blend-multiply opacity-60`} />

                   {/* Content Overlay */}
                   <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                      <div className="flex items-center justify-between">
                         {/* Icon Wrapper */}
                         <div className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg">
                            <card.icon className="w-5 h-5 text-white" />
                         </div>
                         
                         {/* Label - shows on card hover */}
                         <motion.span 
                           className="text-xs font-bold uppercase tracking-widest text-white"
                           initial={{ opacity: 0, x: -10 }}
                           animate={{ 
                             opacity: hoveredIndex === index ? 1 : 0,
                             x: hoveredIndex === index ? 0 : -10
                           }}
                           transition={{ duration: 0.2 }}
                         >
                            {card.label}
                         </motion.span>
                      </div>
                   </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Social Links Row */}
        <div className="mt-20 flex gap-8 justify-center text-sm font-bold uppercase tracking-[0.2em] relative z-20">
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300"
            >
                Instagram
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300"
            >
                LinkedIn
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300"
            >
                YouTube
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
            </a>
        </div>
      </section>
    </div>
  );
}
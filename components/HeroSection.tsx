// // "use client";

// // import React, { useRef } from "react";
// // import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// // import { useCursor } from "./CursorContext";

// // const HeroSection = () => {
// //   const { textEnter, textLeave } = useCursor();
// //   const heroRef = useRef<HTMLDivElement>(null);

// //   const { scrollYProgress } = useScroll({
// //     target: heroRef,
// //     offset: ["start start", "end start"],
// //   });

// //   const smoothProgress = useSpring(scrollYProgress, {
// //     stiffness: 100,
// //     damping: 30,
// //     restDelta: 0.001,
// //   });

// //   const heroY = useTransform(smoothProgress, [0, 1], [0, 200]); // Reduced parallax distance
// //   const heroOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0]);
// //   const heroScale = useTransform(smoothProgress, [0, 1], [1, 1.1]); // Reduced scale effect

// //   return (
// //     <section
// //       ref={heroRef}
// //       // CHANGE 1: Reduced min-h-screen to min-h-[85vh] and reduced padding
// //       className="relative min-h-[85vh] pt-24 pb-16 overflow-hidden 
// //       bg-gradient-to-br from-[#0b0b0d] via-[#050505] to-[#000000] flex items-center"
// //     >
// //       {/* ----------- BACKGROUND GLOWS ----------- */}
// //       <div className="absolute inset-0 pointer-events-none overflow-hidden">
// //         {/* LEFT PINK GLOW - Slightly smaller */}
// //         <motion.div
// //           className="absolute bottom-[-150px] left-[-100px] w-[350px] h-[350px] 
// //           bg-pink-500/25 blur-[120px] rounded-full"
// //           animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.15, 1] }}
// //           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
// //         />

// //         {/* RIGHT YELLOW GLOW - Slightly smaller */}
// //         <motion.div
// //           className="absolute top-[100px] right-[-100px] w-[350px] h-[350px] 
// //           bg-yellow-400/20 blur-[120px] rounded-full"
// //           animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.1, 1] }}
// //           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //       </div>

// //       {/* ------------ MAIN CONTAINER ------------ */}
// //       <div className="max-w-7xl mx-auto px-6 w-full">
// //         {/* CHANGE 2: Reduced gap from 12 to 8 */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
// //           {/* LEFT CONTENT */}
// //           <motion.div
// //             style={{ y: heroY, opacity: heroOpacity }}
// //             className="relative z-10"
// //           >
// //             <motion.div
// //               initial={{ opacity: 0, y: 50 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.2 }}
// //             >
// //               {/* CHANGE 3: Reduced Font Sizes (6xl/7xl/8xl -> 5xl/6xl/7xl) */}
// //               <motion.h1
// //                 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 text-white"
// //                 onHoverStart={textEnter}
// //                 onHoverEnd={textLeave}
// //               >
// //                 <motion.span
// //                   className="block"
// //                   initial={{ opacity: 0, x: -50 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   transition={{ duration: 0.6, delay: 0.3 }}
// //                 >
// //                   Dare to
// //                 </motion.span>

// //                 <motion.span
// //                   className="block text-orange-500"
// //                   initial={{ opacity: 0, x: -50 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   transition={{ duration: 0.6, delay: 0.4 }}
// //                 >
// //                   become
// //                 </motion.span>

// //                 <motion.span
// //                   className="block"
// //                   initial={{ opacity: 0, x: -50 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   transition={{ duration: 0.6, delay: 0.5 }}
// //                 >
// //                   everything you
// //                 </motion.span>

// //                 <motion.span
// //                   className="block"
// //                   initial={{ opacity: 0, x: -50 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   transition={{ duration: 0.6, delay: 0.6 }}
// //                 >
// //                   were born to be.
// //                 </motion.span>
// //               </motion.h1>

// //               <motion.div
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.8, delay: 0.8 }}
// //                 className="w-16 h-1 bg-white/60 mb-6"
// //               />

// //               {/* CHANGE 4: Reduced paragraph size and margin */}
// //               <motion.p
// //                 className="text-base md:text-lg leading-relaxed max-w-lg font-light text-white/80 mb-8"
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.8, delay: 0.9 }}
// //               >
// //                 Alcovia is a premier community of passion-driven teenagers
// //                 (11-16 years) for whom we are providing the right exposure and
// //                 exploration opportunities through professional mentorships, peer
// //                 learning and hyper-personalised career guidance.
// //               </motion.p>

// //               <motion.div
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.8, delay: 1 }}
// //                 className="flex flex-wrap gap-4"
// //               >
// //                 {/* CHANGE 5: Compact Buttons (px-6 py-3 instead of px-8 py-4) */}
// //                 <motion.button
// //                   className="px-6 py-3 bg-white text-black rounded-full font-bold text-base relative overflow-hidden group"
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                   onHoverStart={textEnter}
// //                   onHoverEnd={textLeave}
// //                 >
// //                   <span className="relative z-10">Join Alcovia</span>
// //                 </motion.button>

// //                 <motion.button
// //                   className="px-6 py-3 border-2 border-white text-white rounded-full font-bold text-base"
// //                   whileHover={{
// //                     scale: 1.05,
// //                     backgroundColor: "white",
// //                     color: "black",
// //                   }}
// //                   whileTap={{ scale: 0.95 }}
// //                   onHoverStart={textEnter}
// //                   onHoverEnd={textLeave}
// //                 >
// //                   Learn More
// //                 </motion.button>
// //               </motion.div>
// //             </motion.div>
// //           </motion.div>

// //           {/* RIGHT IMAGE */}
// //           <motion.div style={{ scale: heroScale }} className="relative z-10 flex justify-center lg:justify-end">
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
// //               animate={{ opacity: 1, scale: 1, rotate: 0 }}
// //               transition={{ duration: 1, delay: 0.4 }}
// //               className="relative w-full max-w-md" // Added max-w-md to constrain image size
// //             >
// //               <motion.div
// //                 className="relative rounded-[2rem] overflow-hidden shadow-2xl"
// //                 whileHover={{ scale: 1.02, rotate: -2 }}
// //                 transition={{ duration: 0.4 }}
// //               >
// //                 <div className="aspect-[4/5] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
// //                   <div className="absolute inset-0 flex items-center justify-center">
// //                     <div className="w-56 h-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
// //                       <svg
// //                         className="w-24 h-24 text-white opacity-50"
// //                         fill="currentColor"
// //                         viewBox="0 0 24 24"
// //                       >
// //                         <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
// //                       </svg>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <motion.div
// //                   className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
// //                   initial={{ opacity: 0 }}
// //                   whileHover={{ opacity: 1 }}
// //                   transition={{ duration: 0.3 }}
// //                 />
// //               </motion.div>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </div>

// //       {/* Scroll Indicator */}
// //       <motion.div
// //         className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white"
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8, delay: 1.2 }}
// //       >
// //         <motion.div
// //           animate={{ y: [0, 8, 0] }}
// //           transition={{ duration: 1.5, repeat: Infinity }}
// //           className="flex flex-col items-center gap-1 cursor-pointer"
// //         >
// //           <span className="text-[10px] font-medium tracking-wider">SCROLL</span>
// //           <svg
// //             width="20"
// //             height="20"
// //             viewBox="0 0 24 24"
// //             fill="none"
// //             stroke="currentColor"
// //             strokeWidth="2"
// //           >
// //             <path d="M12 5v14M19 12l-7 7-7-7" />
// //           </svg>
// //         </motion.div>
// //       </motion.div>
// //     </section>
// //   );
// // };

// // export default HeroSection;


// "use client";

// import { useRef, useState } from "react";
// import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

// const HeroSection = () => {
//   const heroRef = useRef(null);
//   const imageRef = useRef(null);
  
//   // Mouse position tracking for 3D effect
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   const heroY = useTransform(smoothProgress, [0, 1], [0, 200]);
//   const heroOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0]);
//   const heroScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);

//   // 3D Transform values
//   const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
//     stiffness: 300,
//     damping: 30
//   });
//   const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
//     stiffness: 300,
//     damping: 30
//   });

//   const handleMouseMove = (e) => {
//     if (!imageRef.current) return;
//     const rect = imageRef.current.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
//     const percentX = (e.clientX - centerX) / (rect.width / 2);
//     const percentY = (e.clientY - centerY) / (rect.height / 2);
    
//     mouseX.set(percentX);
//     mouseY.set(percentY);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     mouseX.set(0);
//     mouseY.set(0);
//   };

//   return (
//     <section
//       ref={heroRef}
//       className="relative min-h-[85vh] pt-24 pb-16 overflow-hidden 
//       bg-gradient-to-br from-[#0b0b0d] via-[#050505] to-[#000000] flex items-center"
//     >
//       {/* Background Glows */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <motion.div
//           className="absolute bottom-[-150px] left-[-100px] w-[350px] h-[350px] 
//           bg-pink-500/25 blur-[120px] rounded-full"
//           animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.15, 1] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         />

//         <motion.div
//           className="absolute top-[100px] right-[-100px] w-[350px] h-[350px] 
//           bg-yellow-400/20 blur-[120px] rounded-full"
//           animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.1, 1] }}
//           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       {/* Main Container */}
//       <div className="max-w-7xl mx-auto px-6 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
//           {/* Left Content */}
//           <motion.div
//             style={{ y: heroY, opacity: heroOpacity }}
//             className="relative z-10"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 text-white">
//                 <motion.span
//                   className="block"
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                 >
//                   Dare to
//                 </motion.span>

//                 <motion.span
//                   className="block text-orange-500"
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.4 }}
//                 >
//                   become
//                 </motion.span>

//                 <motion.span
//                   className="block"
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.5 }}
//                 >
//                   everything you
//                 </motion.span>

//                 <motion.span
//                   className="block"
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.6 }}
//                 >
//                   were born to be.
//                 </motion.span>
//               </motion.h1>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.8 }}
//                 className="w-16 h-1 bg-white/60 mb-6"
//               />

//               <motion.p
//                 className="text-base md:text-lg leading-relaxed max-w-lg font-light text-white/80 mb-8"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.9 }}
//               >
//                 Alcovia is a premier community of passion-driven teenagers
//                 (11-16 years) for whom we are providing the right exposure and
//                 exploration opportunities through professional mentorships, peer
//                 learning and hyper-personalised career guidance.
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 1 }}
//                 className="flex flex-wrap gap-4"
//               >
//                 <motion.button
//                   className="px-6 py-3 bg-white text-black rounded-full font-bold text-base relative overflow-hidden group"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <span className="relative z-10">Join Alcovia</span>
//                 </motion.button>

//                 <motion.button
//                   className="px-6 py-3 border-2 border-white text-white rounded-full font-bold text-base"
//                   whileHover={{
//                     scale: 1.05,
//                     backgroundColor: "white",
//                     color: "black",
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Learn More
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           {/* Right Image with 3D Effect */}
//           <motion.div 
//             style={{ scale: heroScale }} 
//             className="relative z-10 flex justify-center lg:justify-end"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
//               animate={{ opacity: 1, scale: 1, rotate: 0 }}
//               transition={{ duration: 1, delay: 0.4 }}
//               className="relative w-full max-w-md"
//               style={{ perspective: 1000 }}
//             >
//               <motion.div
//                 ref={imageRef}
//                 className="relative rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer"
//                 onMouseMove={handleMouseMove}
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={handleMouseLeave}
//                 style={{
//                   rotateX: isHovered ? rotateX : 0,
//                   rotateY: isHovered ? rotateY : 0,
//                   transformStyle: "preserve-3d",
//                 }}
//                 transition={{ duration: 0.1 }}
//               >
//                 {/* Main Image */}
//                 <div className="aspect-[4/5] relative">
//                   <img
//                     src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=750&fit=crop"
//                     alt="Students learning together"
//                     className="w-full h-full object-cover"
//                   />
                  
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
//                   {/* 3D Floating Badge */}
//                   <motion.div
//                     className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl"
//                     style={{
//                       transform: isHovered ? "translateZ(40px)" : "translateZ(0px)",
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     Live Sessions
//                   </motion.div>

//                   {/* 3D Floating Stats */}
//                   <motion.div
//                     className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md text-white px-4 py-3 rounded-2xl shadow-xl"
//                     style={{
//                       transform: isHovered ? "translateZ(30px)" : "translateZ(0px)",
//                     }}
//                     transition={{ duration: 0.3, delay: 0.05 }}
//                   >
//                     <div className="text-2xl font-bold">500+</div>
//                     <div className="text-xs opacity-80">Active Students</div>
//                   </motion.div>

//                   {/* Shimmer effect on hover */}
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
//                     initial={{ x: "-100%" }}
//                     animate={isHovered ? { x: "100%" } : { x: "-100%" }}
//                     transition={{ duration: 0.8 }}
//                   />
//                 </div>

//                 {/* Glow effect behind image */}
//                 <motion.div
//                   className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-[2rem] blur-xl -z-10"
//                   animate={{
//                     opacity: isHovered ? 0.6 : 0.3,
//                     scale: isHovered ? 1.05 : 1,
//                   }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.div>

//               {/* Floating Elements around the image */}
//               <motion.div
//                 className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-2xl"
//                 animate={{
//                   y: [0, -10, 0],
//                   scale: [1, 1.1, 1],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
              
//               <motion.div
//                 className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl"
//                 animate={{
//                   y: [0, 10, 0],
//                   scale: [1, 1.15, 1],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 1.2 }}
//       >
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="flex flex-col items-center gap-1 cursor-pointer"
//         >
//           <span className="text-[10px] font-medium tracking-wider">SCROLL</span>
//           <svg
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path d="M12 5v14M19 12l-7 7-7-7" />
//           </svg>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

const HeroSection = () => {
  // FIX 1: Explicitly type the refs so TypeScript knows they are HTML elements
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroY = useTransform(smoothProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const heroScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);

  // 3D Transform values
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  // FIX 2: Type the event correctly
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    // Now TypeScript knows getBoundingClientRect exists!
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(percentX);
    mouseY.set(percentY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] pt-24 pb-16 overflow-hidden 
      bg-gradient-to-br from-[#0b0b0d] via-[#050505] to-[#000000] flex items-center"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute bottom-[-150px] left-[-100px] w-[350px] h-[350px] 
          bg-pink-500/25 blur-[120px] rounded-full"
          animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-[100px] right-[-100px] w-[350px] h-[350px] 
          bg-yellow-400/20 blur-[120px] rounded-full"
          animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 text-white">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Dare to
                </motion.span>

                <motion.span
                  className="block text-orange-500"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  become
                </motion.span>

                <motion.span
                  className="block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  everything you
                </motion.span>

                <motion.span
                  className="block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  were born to be.
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-16 h-1 bg-white/60 mb-6"
              />

              <motion.p
                className="text-base md:text-lg leading-relaxed max-w-lg font-light text-white/80 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Alcovia is a premier community of passion-driven teenagers (11-16
                years) for whom we are providing the right exposure and
                exploration opportunities through professional mentorships, peer
                learning and hyper-personalised career guidance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  className="px-6 py-3 bg-white text-black rounded-full font-bold text-base relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Join Alcovia</span>
                </motion.button>

                <motion.button
                  className="px-6 py-3 border-2 border-white text-white rounded-full font-bold text-base"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "white",
                    color: "black",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image with 3D Effect */}
          <motion.div
            style={{ scale: heroScale }}
            className="relative z-10 flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full max-w-md"
              style={{ perspective: 1000 }}
            >
              <motion.div
                ref={imageRef}
                className="relative rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX: isHovered ? rotateX : 0,
                  rotateY: isHovered ? rotateY : 0,
                  transformStyle: "preserve-3d",
                }}
                transition={{ duration: 0.1 }}
              >
                {/* Main Image */}
                <div className="aspect-[4/5] relative">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=750&fit=crop"
                    alt="Students learning together"
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* 3D Floating Badge */}
                  <motion.div
                    className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl"
                    style={{
                      transform: isHovered
                        ? "translateZ(40px)"
                        : "translateZ(0px)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Live Sessions
                  </motion.div>

                  {/* 3D Floating Stats */}
                  <motion.div
                    className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md text-white px-4 py-3 rounded-2xl shadow-xl"
                    style={{
                      transform: isHovered
                        ? "translateZ(30px)"
                        : "translateZ(0px)",
                    }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  >
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-xs opacity-80">Active Students</div>
                  </motion.div>

                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={isHovered ? { x: "100%" } : { x: "-100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                {/* Glow effect behind image */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-[2rem] blur-xl -z-10"
                  animate={{
                    opacity: isHovered ? 0.6 : 0.3,
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Floating Elements around the image */}
              <motion.div
                className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-2xl"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1 cursor-pointer"
        >
          <span className="text-[10px] font-medium tracking-wider">SCROLL</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
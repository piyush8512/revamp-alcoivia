// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { useCursor } from "./CursorContext";

// // const CustomCursor = () => {
// //   const { cursorVariant } = useCursor();

// //   const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({
// //     x: 0,
// //     y: 0,
// //   });

// //   useEffect(() => {
// //     const handleMouseMove = (e: MouseEvent) => {
// //       setCursorPos({ x: e.clientX, y: e.clientY });
// //     };

// //     window.addEventListener("mousemove", handleMouseMove);
// //     return () => window.removeEventListener("mousemove", handleMouseMove);
// //   }, []);

// //   return (
// //     <motion.div
// //       className="fixed pointer-events-none z-[9999]"
// //       animate={{
// //         x: cursorPos.x - 30,
// //         y: cursorPos.y - 30,
// //       }}
// //       transition={{
// //         type: "spring",
// //         stiffness: 500,
// //         damping: 30,
// //       }}
// //     >
// //       <div className="relative w-16 h-16">

// //         {/* Outer glow ring */}
// //         <motion.div
// //           className="absolute inset-0 rounded-full border-2 border-white/40"
// //           animate={{
// //             scale: cursorVariant === "hover" ? 3 : 1,
// //             opacity: cursorVariant === "hover" ? 0.8 : 0.4,
// //           }}
// //           transition={{ duration: 0.35 }}
// //         />

// //         {/* Inner dot */}
// //         <motion.div
// //           className="absolute inset-0 bg-white rounded-full"
// //           animate={{
// //             scale: cursorVariant === "hover" ? 0.6 : 0.35,
// //             opacity: cursorVariant === "hover" ? 1 : 0.8,
// //           }}
// //           transition={{ duration: 0.3 }}
// //         />

// //         {/* Wing Icon */}
// //         <motion.div
// //           className="absolute -right-4 top-1/2 -translate-y-1/2"
// //           animate={{
// //             x: [0, 5, 0],
// //             rotate: [0, 12, 0],
// //             scale: cursorVariant === "hover" ? 1.4 : 1,
// //             opacity: cursorVariant === "hover" ? 1 : 0.7,
// //           }}
// //           transition={{
// //             x: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
// //             rotate: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
// //             scale: { duration: 0.3 },
// //           }}
// //         >
// //           {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
// //             <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
// //           </svg> */}
// //           src="/assets/logo2.png"
// //         </motion.div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default CustomCursor;

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useCursor } from "./CursorContext";

// const CustomCursor = () => {
//   const { cursorVariant } = useCursor();

//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setCursorPos({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <motion.div
//       className="fixed pointer-events-none z-[9999]"
//       animate={{
//         x: cursorPos.x - 30,
//         y: cursorPos.y - 30,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 500,
//         damping: 30,
//       }}
//     >
//       <div className="relative w-16 h-16">
//         {/* Outer glow ring */}
//         <motion.div
//           className="absolute inset-0 rounded-full border-2 border-white/40"
//           animate={{
//             scale: cursorVariant === "hover" ? 3 : 1,
//             opacity: cursorVariant === "hover" ? 0.8 : 0.4,
//           }}
//           transition={{ duration: 0.35 }}
//         />

//         {/* Inner dot */}
//         <motion.div
//           className="absolute inset-0 bg-white rounded-full"
//           animate={{
//             scale: cursorVariant === "hover" ? 0.6 : 0.35,
//             opacity: cursorVariant === "hover" ? 1 : 0.8,
//           }}
//           transition={{ duration: 0.3 }}
//         />

//         {/* Wing Image Animation */}
//         <motion.div
//           className="absolute -right-4 top-1/2 -translate-y-1/2"
//           animate={{
//             x: [0, 5, 0],
//             rotate: [0, 12, 0],
//             scale: cursorVariant === "hover" ? 1.4 : 1,
//             opacity: cursorVariant === "hover" ? 1 : 0.7,
//           }}
//           transition={{
//             x: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
//             rotate: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
//             scale: { duration: 0.3 },
//           }}
//         >
//           <Image
//             src="/assets/logo2.png" // ✅ Your image placed correctly
//             width={30}
//             height={30}
//             alt="cursor-icon"
//             className="object-contain"
//           />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default CustomCursor;

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCursor } from "./CursorContext";

const CustomCursor = () => {
  const { cursorVariant } = useCursor();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // New state to track if mouse is currently moving
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let movementTimer: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // 1. Set moving to true immediately
      setIsMoving(true);

      // 2. Clear the previous timer
      clearTimeout(movementTimer);

      // 3. Set a new timer to turn off 'isMoving' after 150ms of inactivity
      movementTimer = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(movementTimer);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={{
        x: cursorPos.x - 30, // Centering logic
        y: cursorPos.y - 30,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30, // Smooth follow physics
      }}
    >
      <div className="relative w-16 h-16">
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/40"
          animate={{
            // LOGIC: If hovering, be huge (3).
            // If just moving, be slightly bigger (1.5).
            // Otherwise, default (1).
            scale: cursorVariant === "hover" ? 3 : isMoving ? 1.5 : 1,
            opacity: cursorVariant === "hover" ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Inner dot */}
        <motion.div
          className="absolute inset-0 bg-white rounded-full"
          animate={{
            // LOGIC: If hovering, Scale 0.6.
            // If moving, shrink slightly for "speed" effect (looks better) OR grow.
            // Let's keep it 0.35 normally, and 0.45 when moving.
            scale: cursorVariant === "hover" ? 0.6 : isMoving ? 0.45 : 0.35,
            opacity: cursorVariant === "hover" ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Wing Image Animation */}
        <motion.div
          className="absolute -right-4 top-1/2 -translate-y-1/2"
          animate={{
            x: [0, 5, 0],
            rotate: isMoving ? 15 : 0, // Tilt the wing when moving
            scale: cursorVariant === "hover" ? 1.4 : isMoving ? 1.2 : 1, // Grow wing slightly on move
            opacity: cursorVariant === "hover" ? 1 : 0.7,
          }}
          transition={{
            x: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
            // Make the tilt/scale snappy
            rotate: { duration: 0.2 },
            scale: { duration: 0.3 },
          }}
        >
          <Image
            src="/assets/logo2.png"
            width={30}
            height={30}
            alt="cursor-icon"
            className="object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CustomCursor;

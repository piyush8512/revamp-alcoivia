"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

// Keep your exact data structure
const offerings = [
  {
    title: "Career Discovery",
    description: "Workshops to explore your passion",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=500&fit=crop",
    size: "large",
  },
  {
    title: "Podcast Shoots",
    description: "With industry leaders",
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop",
    size: "medium",
  },
  {
    title: "1:1 Mentorship",
    description: "Personalized guidance",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    size: "wide",
  },
  {
    title: "Academic Excellence",
    description: "Performance improvement",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=500&fit=crop",
    size: "tall",
  },
  {
    title: "Forge Bonds",
    description: "Connect with driven peers",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=300&fit=crop",
    size: "medium",
  },
  {
    title: "Harvard/UCL Mentorship",
    description: "Weekly guidance sessions",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    size: "wide",
  },
  {
    title: "Counsellor Meetings",
    description: "Monthly check-ins",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop",
    size: "medium",
  },
  {
    title: "Build Resilience",
    description: "Mental strength training",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=500&fit=crop",
    size: "tall",
  },
  {
    title: "Build Empathy",
    description: "Emotional intelligence",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&h=300&fit=crop",
    size: "medium",
  },
];
type TextRevealProps = {
  children: React.ReactNode;
  delay?: number;
};

const TextReveal = ({ children, delay = 0 }: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function OfferingsHorizontal() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  // 1. Capture the scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. Add "Spring" Physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 3. Map the smoothed scroll to horizontal movement
  const x = useTransform(smoothProgress, [0, 1], ["4%", "-25%"]);

  return (
    <>
      {/* DESKTOP VERSION - Horizontal Scroll */}
      <section
        ref={containerRef}
        className="relative bg-[#0C0C0C] pt-30 hidden md:block"
        style={{ height: "120vh" }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            className="flex gap-8 pl-16 will-change-transform"
            style={{ x }}
          >
            {/* --- STATIC TITLE SECTION --- */}
            <div
              ref={titleRef}
              className="flex h-[70vh] w-[400px]  flex-col justify-center"
            >
              <TextReveal delay={0.2}>
                <h2 className="text-6xl font-black uppercase tracking-tight text-white lg:text-7xl">
                  Our
                </h2>
              </TextReveal>
              <TextReveal delay={0.4}>
                <span className="text-6xl font-black uppercase tracking-tight text-[#fd7018] lg:text-7xl">
                  Offerings
                </span>
              </TextReveal>
              <motion.p
                className="mt-4 text-white/60"
                initial={{ opacity: 0 }}
                animate={titleInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Everything you need to take flight
              </motion.p>
            </div>

            {/* --- HORIZONTAL CARD GRID --- */}
            <div className="grid h-[70vh] auto-cols-[320px] grid-flow-col grid-rows-3 gap-6 pr-12">
              {offerings.map((offering, index) => (
                <motion.div
                  key={offering.title}
                  className={`group relative overflow-hidden rounded-2xl bg-[#1a1a1a] ${
                    offering.size === "large"
                      ? "row-span-2"
                      : offering.size === "tall"
                        ? "row-span-2"
                        : offering.size === "wide"
                          ? "col-span-1"
                          : ""
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  style={{
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  }}
                >
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ filter: "contrast(1.05) saturate(0.9)" }}
                  />

                  <div className="absolute inset-0  from-[#0C0C0C]/90 via-[#0C0C0C]/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">
                      {offering.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">
                      {offering.description}
                    </p>
                  </div>

                  <motion.div
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#fd7018] text-[#0B0B0B] opacity-0 transition-opacity group-hover:opacity-100"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOBILE VERSION - Vertical Scroll with Cards */}
      <section className="relative bg-[#0C0C0C] py-16 px-4 md:hidden">
        {/* Title Section */}
        <div className="mb-12">
          <TextReveal delay={0.2}>
            <h2 className="text-5xl font-black uppercase tracking-tight text-white">
              Our
            </h2>
          </TextReveal>
          <TextReveal delay={0.4}>
            <span className="text-5xl font-black uppercase tracking-tight text-[#fd7018]">
              Offerings
            </span>
          </TextReveal>
          <motion.p
            className="mt-4 text-white/60 text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Everything you need to take flight
          </motion.p>
        </div>

        {/* Cards Grid - Vertical scrolling */}
        <div className="space-y-4">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] h-64"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileTap={{ scale: 0.98 }}
              style={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <img
                src={offering.image}
                alt={offering.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 active:scale-105"
                style={{ filter: "contrast(1.05) saturate(0.9)" }}
              />

              <div className="absolute inset-0  from-[#0C0C0C]/90 via-[#0C0C0C]/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-bold text-white">
                  {offering.title}
                </h3>
                <p className="mt-2 text-base text-white/70">
                  {offering.description}
                </p>
              </div>

              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#fd7018] text-[#0B0B0B]">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

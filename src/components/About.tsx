"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Projects Delivered" },
  { value: "10+", label: "Technologies" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-32 md:py-40 lg:py-48" aria-label="About me">
      <div className="section-divider" />
      <div className="wrap" ref={ref}>
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 md:mb-24"
        >
          <span
            className="text-purple-500 text-xs font-mono tracking-[0.25em] uppercase block mb-6"
            aria-hidden="true"
          >
            About
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Turning ideas into <span className="gradient-text">reality</span>
          </h2>
        </motion.header>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
              I&apos;m a software engineer who lives at the intersection of
              engineering and design. I build applications that are not only
              technically excellent but also intuitive and delightful to use.
            </p>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              With deep expertise in React, Next.js, TypeScript, Node.js, and Go,
              I architect solutions that scale. Clean code, performance, and
              great user experiences are what I live for.
            </p>
            <div className="pt-4">
              <motion.a
                href="#contact"
                whileHover={{ x: 6 }}
                whileTap={{ x: 3 }}
                className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-3 text-base font-semibold group"
                aria-label="Navigate to contact section"
              >
                Let&apos;s work together
                <motion.svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
            role="list"
            aria-label="Statistics"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                role="listitem"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.1,
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px rgba(124, 58, 237, 0.2)",
                }}
                className="card p-8 md:p-10 text-center cursor-default"
              >
                <motion.div
                  className="text-5xl md:text-6xl font-bold gradient-text mb-4"
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-slate-500 text-sm md:text-base font-medium">
                  <span className="sr-only">{stat.value} </span>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="about" aria-label="About me">
      <div className="section-divider" />
      <div className="wrap py-28 sm:py-40" ref={ref}>
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 sm:mb-20"
        >
          <span className="text-accent text-xs font-mono tracking-[0.25em] uppercase block mb-4" aria-hidden="true">
            About
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Turning ideas into{" "}
            <span className="gradient-text">reality</span>
          </h2>
        </motion.header>

        {/* Text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-text-secondary text-lg sm:text-xl leading-relaxed">
              I&apos;m a software engineer who lives at the intersection of
              engineering and design. I build applications that are not only
              technically excellent but also intuitive and delightful to use.
            </p>
            <p className="text-text-muted text-lg sm:text-xl leading-relaxed">
              With deep expertise in React, Next.js, TypeScript, Node.js, and Go,
              I architect solutions that scale. Clean code, performance, and
              great user experiences are what I live for.
            </p>
            <div className="pt-4">
              <motion.a
                href="#contact"
                whileHover={{ x: 6 }}
                className="text-accent-light hover:text-white transition-colors inline-flex items-center gap-3 text-base font-medium group"
                aria-label="Navigate to contact section"
              >
                Let&apos;s work together
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-5"
            role="list"
            aria-label="Statistics"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                role="listitem"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="card p-8 sm:p-10 text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-3" aria-hidden="true">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm sm:text-base">
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

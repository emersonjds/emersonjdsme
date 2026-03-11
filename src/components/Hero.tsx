"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center"
      style={{ minHeight: "100svh" }}
      aria-label="Introduction"
    >
      <div className="wrap text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-mono tracking-widest uppercase text-accent-light border border-accent/20 bg-accent/5 mb-12 sm:mb-14">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-6xl sm:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8 sm:mb-10"
        >
          <span className="text-white">Hi, I&apos;m</span>
          <br />
          <span className="gradient-text">Emerson</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl text-text-muted max-w-2xl mx-auto mb-12 sm:mb-14 leading-relaxed"
        >
          Software Engineer crafting performant, beautiful &amp; accessible
          digital experiences with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          role="group"
          aria-label="Call to action"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary w-full sm:w-auto"
          >
            View my work
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="ml-2.5" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary w-full sm:w-auto"
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-mono text-text-muted tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-text-muted/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

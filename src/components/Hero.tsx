"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.3 + i * 0.15 },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-32 pb-24 md:pt-40 md:pb-32"
      aria-label="Introduction"
    >
      <div className="wrap text-center relative z-10">
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-mono tracking-wider uppercase bg-purple-950/40 border border-purple-900/60 text-purple-300 hover:text-purple-200 transition-colors">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight">
            <motion.span
              custom={0}
              variants={wordVariants}
              className="block text-white"
            >
              Hi, I&apos;m
            </motion.span>
            <motion.span
              custom={1}
              variants={wordVariants}
              className="gradient-text block"
            >
              Emerson
            </motion.span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-lg sm:text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto mb-16 md:mb-20 leading-relaxed"
        >
          Software Engineer crafting performant, beautiful &amp; accessible
          digital experiences with modern technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          role="group"
          aria-label="Call to action"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg border border-purple-500/60 hover:border-purple-400 hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] transition-all duration-300 w-full sm:w-auto justify-center relative group"
          >
            <span className="relative z-10">View my work</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-10 py-4 bg-transparent text-slate-300 font-semibold rounded-lg border border-slate-700/80 hover:border-purple-500/60 hover:text-white hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

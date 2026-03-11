"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.15,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Dynamic background gradient */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent"
        />
      </div>

      <div className="wrap text-center relative z-10">
        {/* Status Badge - Premium Float + Glow */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 md:mb-12"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase bg-purple-950/40 border border-purple-900/60 text-purple-300 hover:text-purple-200 transition-colors shadow-glow"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-green-400"
            />
            Available for work
          </motion.div>
        </motion.div>

        {/* Main Heading - MEGA Bold with 3D Perspective */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 md:mb-8 lg:mb-10"
          style={{ perspective: "1200px" }}
        >
          <h1 className="text-7xl sm:text-8xl md:text-[10rem] lg:text-[13rem] font-black leading-[0.9] tracking-tighter">
            <motion.span
              custom={0}
              variants={wordVariants}
              className="block text-white drop-shadow-2xl"
            >
              Hi, I&apos;m
            </motion.span>
            <motion.span
              custom={1}
              variants={wordVariants}
              className="gradient-text block relative"
            >
              Emerson
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 blur-md"
                animate={{ x: [-300, 300] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                style={{ mixBlendMode: "screen" }}
              />
            </motion.span>
          </h1>
        </motion.div>

        {/* Description - Larger and more impactful */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-base sm:text-lg md:text-2xl lg:text-3xl text-slate-300 max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed font-light"
        >
          Software Engineer crafting performant, beautiful &amp; accessible
          digital experiences with modern technologies.
        </motion.p>

        {/* CTA Buttons - Premium Glow + Spring */}
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
            variants={itemVariants}
            whileHover={{ scale: 1.08, y: -8 }}
            whileTap={{ scale: 0.92 }}
            className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold text-lg rounded-xl border border-purple-500/60 hover:border-purple-400 transition-all duration-300 w-full sm:w-auto justify-center group relative shadow-glow hover:shadow-glow-intense"
          >
            <span className="relative z-10">View my work</span>
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-hidden="true"
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
          <motion.a
            href="#contact"
            variants={itemVariants}
            whileHover={{ scale: 1.08, y: -8 }}
            whileTap={{ scale: 0.92 }}
            className="inline-flex items-center gap-3 px-12 py-5 bg-transparent text-slate-200 font-semibold text-lg rounded-xl border border-slate-700/80 hover:border-purple-500/60 hover:text-white transition-all duration-300 w-full sm:w-auto justify-center shadow-soft hover:shadow-medium"
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator - Premium Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 shadow-glow rounded-full p-2"
        >
          <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-600 via-purple-500/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/emersonjds",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/emersonjds",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:emerson@example.com",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M2 7l10 7 10-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-32 md:py-40 lg:py-48" aria-label="Contact information">
      <div className="section-divider" />
      <div className="wrap text-center" ref={ref}>
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 md:mb-24"
        >
          <span className="text-purple-500 text-xs font-mono tracking-[0.25em] uppercase block mb-6">
            Contact
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-8">
            Let&apos;s create something
            <br />
            <span className="gradient-text">extraordinary</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Got a project in mind? I&apos;d love to hear about it.
            Let&apos;s discuss how we can work together.
          </p>
        </motion.header>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-6 mb-16 flex-wrap"
          role="navigation"
          aria-label="Social media links"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(124, 58, 237, 0.6)",
              }}
              whileTap={{ scale: 0.92 }}
              className="card p-6 md:p-8 text-slate-500 hover:text-purple-400 transition-colors duration-300"
              aria-label={`Visit my ${link.label} profile`}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="mailto:emerson@example.com"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg border border-purple-500/60 hover:border-purple-400 hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] transition-all duration-300"
          aria-label="Send me an email"
        >
          <span>Say Hello</span>
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
    </section>
  );
}

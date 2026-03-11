"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="section-divider" />
      <div className="wrap py-10 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm text-text-muted"
        >
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-text-secondary">Emerson</span>. All rights reserved.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs text-text-muted/50 font-mono tracking-wider"
        >
          Next.js &middot; Three.js &middot; Framer Motion
        </motion.p>
      </div>
    </footer>
  );
}

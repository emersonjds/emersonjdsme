"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    },
    [mobileOpen]
  );

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav py-4" : "py-6"
        }`}
        role="navigation"
        aria-label="Main navigation"
        onKeyDown={handleKeyDown}
      >
        <div className="wrap flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Emerson - Go to homepage"
          >
            <span className="gradient-text">emerson</span>
            <span className="text-text-muted">.dev</span>
          </motion.a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1 bg-surface border border-border rounded-2xl px-2 py-2" role="list">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                role="listitem"
                className={`relative px-5 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-white"
                    : "text-text-muted hover:text-text-secondary"
                }`}
                whileTap={{ scale: 0.98 }}
                aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl bg-surface-light border border-border"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-6 flex flex-col justify-between z-50"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              className="w-full h-[2px] bg-white block origin-center rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-[2px] bg-white block rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              className="w-full h-[2px] bg-white block origin-center rounded-full"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-3xl flex items-center justify-center md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <nav className="flex flex-col items-center gap-10" role="list">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  role="listitem"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`text-4xl font-light tracking-tight ${
                    activeSection === item.href.slice(1)
                      ? "text-white"
                      : "text-text-muted hover:text-white transition-colors"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

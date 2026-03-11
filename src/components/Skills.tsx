"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    num: "01",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    accent: "#7c3aed",
  },
  {
    title: "Backend",
    num: "02",
    skills: ["Node.js", "Go", "Python", "REST APIs", "GraphQL", "PostgreSQL"],
    accent: "#3b82f6",
  },
  {
    title: "DevOps",
    num: "03",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Kubernetes"],
    accent: "#14b8a6",
  },
  {
    title: "Design",
    num: "04",
    skills: ["Figma", "UI/UX", "Motion Design", "Responsive", "Accessibility", "Design Systems"],
    accent: "#ec4899",
  },
];

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-8 md:p-10 group relative"
      aria-label={`${category.title} skills`}
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-5 transition-opacity duration-500"
        style={{ background: category.accent }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="relative flex items-center justify-between mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
          {category.title}
        </h3>
        <motion.span
          className="text-xs font-mono tracking-widest font-bold"
          style={{ color: category.accent }}
          whileHover={{ scale: 1.1 }}
          aria-hidden="true"
        >
          {category.num}
        </motion.span>
      </div>

      {/* Accent Line */}
      <motion.div
        className="h-0.5 mb-8 rounded-full"
        initial={{ width: 40 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
        style={{ background: category.accent }}
        aria-hidden="true"
      />

      {/* Skills */}
      <ul className="relative flex flex-wrap gap-3" aria-label={`${category.title} technologies`}>
        {category.skills.map((skill, i) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, y: 5 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
            className="px-3 py-2 rounded-lg text-xs font-mono bg-purple-950/30 border border-purple-900/40 text-purple-300 hover:border-purple-700 hover:text-purple-200 transition-all cursor-default"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-32 md:py-40 lg:py-48" aria-label="Technical skills">
      <div className="section-divider" />
      <div className="wrap" ref={ref}>
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 md:mb-24"
        >
          <span className="text-purple-500 text-xs font-mono tracking-[0.25em] uppercase block mb-6">
            Skills
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.header>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

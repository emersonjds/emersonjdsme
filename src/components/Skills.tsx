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
      className="card p-8 sm:p-10 group"
      aria-label={`${category.title} skills`}
    >
      {/* Card Glow Background */}
      <div
        className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: category.accent }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="relative flex items-center justify-between mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-accent-light transition-colors duration-300">
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
        className="h-[1px] mb-6 rounded-full"
        initial={{ width: 40 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{ background: category.accent }}
        aria-hidden="true"
      />

      {/* Skills List */}
      <ul className="relative flex flex-wrap gap-2.5" aria-label={`${category.title} technologies`}>
        {category.skills.map((skill, i) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, y: 5 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
            className="tag"
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
    <section id="skills" aria-label="Technical skills">
      <div className="section-divider" />
      <div className="wrap py-28 sm:py-40" ref={ref}>
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 sm:mb-20"
        >
          <span
            className="text-accent text-xs font-mono tracking-[0.25em] uppercase block mb-4"
            aria-hidden="true"
          >
            Skills
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.header>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

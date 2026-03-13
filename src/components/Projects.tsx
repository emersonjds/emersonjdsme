"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce with real-time inventory, AI-powered recommendations, and seamless checkout experience built for scale.",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    accent: "#7c3aed",
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Interactive data visualization with real-time charts, custom drag-and-drop widgets, and automated report generation.",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    accent: "#3b82f6",
    link: "#",
  },
  {
    title: "Mobile Banking App",
    description:
      "Full-featured banking app with biometric authentication, instant P2P transfers, and intelligent spending insights.",
    tags: ["React Native", "Go", "Redis", "AWS"],
    accent: "#ec4899",
    link: "#",
  },
  {
    title: "AI Content Studio",
    description:
      "AI-powered content generation platform with NLP pipeline, brand voice training, and multi-channel publishing.",
    tags: ["Python", "FastAPI", "LLMs", "Redis"],
    accent: "#14b8a6",
    link: "#",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <motion.a
        href={project.link}
        whileHover={{ y: -10 }}
        className="card p-8 md:p-10 h-full block relative overflow-hidden shadow-medium hover:shadow-glow-intense transition-all duration-500 group/card"
        aria-label={`View project: ${project.title}`}
      >
        {/* Accent Background */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
          style={{ background: project.accent }}
          aria-hidden="true"
        />

        {/* Accent Line */}
        <div className="relative flex items-center gap-4 mb-8">
          <motion.div
            className="h-0.5 rounded-full"
            initial={{ width: 32 }}
            whileHover={{ width: 56 }}
            transition={{ duration: 0.4 }}
            style={{ background: project.accent }}
            aria-hidden="true"
          />
          <span className="text-xs font-mono text-slate-500 tracking-widest flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title & Icon */}
        <div className="relative flex items-start justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
            {project.title}
          </h3>
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            className="text-slate-500 group-hover:text-purple-400 transition-colors duration-300 flex-shrink-0 mt-1 ml-4"
            whileHover={{ rotate: 45, scale: 1.1 }}
            aria-hidden="true"
          >
            <path
              d="M5 15L15 5M15 5H8M15 5v7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>

        {/* Description */}
        <p className="relative text-slate-400 text-base leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Tags */}
        <ul className="relative flex flex-wrap gap-3" aria-label="Technologies used">
          {project.tags.map((tag, i) => (
            <motion.li
              key={tag}
              initial={{ opacity: 0, y: 5 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
              className="px-3 py-2 rounded-lg text-xs font-mono bg-purple-950/30 border border-purple-900/40 text-purple-300 hover:border-purple-700 hover:text-purple-200 transition-all"
            >
              {tag}
            </motion.li>
          ))}
        </ul>
      </motion.a>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative py-32 md:py-40 lg:py-48" aria-label="Featured projects">
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
            Work
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Selected <span className="gradient-text">Projects</span>
          </h2>
        </motion.header>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

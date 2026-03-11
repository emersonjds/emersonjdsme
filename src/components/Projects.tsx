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
        whileHover={{ y: -8 }}
        className="block card p-8 sm:p-10 h-full group/card"
        aria-label={`View project: ${project.title}`}
      >
        {/* Accent Background Gradient */}
        <div
          className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-5 transition-opacity duration-500"
          style={{ background: project.accent }}
          aria-hidden="true"
        />

        {/* Accent Line */}
        <div className="relative flex items-center gap-4 mb-6">
          <motion.div
            className="h-[2px] rounded-full"
            initial={{ width: 32 }}
            whileHover={{ width: 56 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{ background: project.accent }}
            aria-hidden="true"
          />
          <span className="text-xs font-mono text-text-muted tracking-widest flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title and Icon */}
        <div className="relative flex items-start justify-between mb-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-accent-light transition-colors duration-300">
            {project.title}
          </h3>
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-text-muted group-hover:text-accent-light transition-colors duration-300 mt-1.5 ml-4 flex-shrink-0"
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
        <p className="relative text-text-muted text-base leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Tags */}
        <ul className="relative flex flex-wrap gap-2.5" aria-label="Technologies used">
          {project.tags.map((tag, i) => (
            <motion.li
              key={tag}
              initial={{ opacity: 0, y: 5 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
              className="tag"
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
    <section id="projects" aria-label="Featured projects">
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
            Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Selected <span className="gradient-text">Projects</span>
          </h2>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

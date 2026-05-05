"use client";

import { projects, type Project } from "@/lib/data";
import { useLocale } from "@/lib/i18n";

const thumbGradients: Record<string, string> = {
  "porto-fraud":
    "linear-gradient(135deg, #111316 0%, #161a12 50%, #1a1e10 100%)",
  "porto-intranet":
    "linear-gradient(135deg, #111316 0%, #12161a 50%, #161a1e 100%)",
  "sem-parar-valet":
    "linear-gradient(135deg, #111316 0%, #16191d 50%, #1a1710 100%)",
  "accenture-fx":
    "linear-gradient(135deg, #0f1214 0%, #111316 50%, #141618 100%)",
  "cedro-guide":
    "linear-gradient(135deg, #111316 0%, #13161a 50%, #161819 100%)",
  "dotz-onboarding":
    "linear-gradient(135deg, #111316 0%, #16191d 50%, #1a1a16 100%)",
  "beetech-remessa":
    "linear-gradient(135deg, #0d1117 0%, #111316 50%, #12181f 100%)",
  "spark-products":
    "linear-gradient(135deg, #111316 0%, #161a16 50%, #16191d 100%)",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { locale } = useLocale();
  const delay = ((index % 3) * 60) as 0 | 60 | 120;
  const delayAttr = delay > 0 ? String(delay) : undefined;
  const description = project.description[locale];
  const impact = project.impact[locale];

  return (
    <article
      aria-label={`${project.title} — ${project.company}`}
      className="card"
      data-reveal
      {...(delayAttr ? { "data-reveal-delay": delayAttr } : {})}
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        minHeight: "320px",
      }}
    >
      <div
        className="card-thumb"
        style={{
          position: "relative",
          height: "120px",
          background: thumbGradients[project.slug] ?? "var(--color-bg-elevated)",
          borderBottom: "1px solid var(--color-border)",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            position: "absolute",
            bottom: "var(--s-4)",
            right: "var(--s-4)",
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            fontWeight: 700,
            color: "var(--color-fg-subtle)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            userSelect: "none",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          style={{
            position: "absolute",
            top: "var(--s-4)",
            left: "var(--s-4)",
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            fontWeight: 500,
            color: "var(--color-fg-subtle)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {project.year}
        </span>
        <span
          style={{
            position: "absolute",
            top: "var(--s-4)",
            right: "var(--s-4)",
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--color-fg-subtle)",
            letterSpacing: "0.06em",
          }}
        >
          {project.company}
        </span>
      </div>

      <div
        style={{
          padding: "var(--s-6)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-3)",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "var(--s-3)",
          }}
        >
          <h3
            style={{
              fontSize: "var(--fs-h3)",
              color: "var(--color-fg)",
              fontWeight: 600,
            }}
          >
            {project.title}
          </h3>
          <span className="card-arrow" style={{ color: "var(--color-fg-subtle)", flexShrink: 0 }}>
            →
          </span>
        </div>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--color-fg-muted)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {project.role}
        </p>

        <p
          style={{
            fontSize: "var(--fs-small)",
            color: "var(--color-fg-muted)",
            lineHeight: 1.55,
            flex: 1,
          }}
        >
          {description}
        </p>

        <p
          style={{
            fontSize: "var(--fs-mono)",
            fontFamily: "var(--font-mono)",
            color: "var(--color-accent)",
            lineHeight: 1.4,
          }}
        >
          {impact}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-1)" }}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              style={{
                padding: "2px 6px",
                borderRadius: "var(--r-hairline)",
                border: "1px solid var(--color-border)",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--color-fg-subtle)",
                letterSpacing: "0.04em",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useLocale();
  const featured = projects.filter((p) => p.featured !== false);
  const extras = projects.filter((p) => p.featured === false);

  return (
    <section
      id="projetos"
      aria-labelledby="projects-heading"
      className="section"
    >
      <div className="section-container">
        <h2
          id="projects-heading"
          className="eyebrow"
          data-reveal
          style={{ marginBottom: "var(--s-12)" }}
        >
          {t("projects.eyebrow")}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "var(--s-4)",
          }}
          className="projects-grid"
        >
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {extras.length > 0 && (
          <div
            data-reveal
            style={{
              marginTop: "var(--s-8)",
              paddingTop: "var(--s-8)",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--color-fg-muted)",
                letterSpacing: "0.08em",
                marginBottom: "var(--s-4)",
              }}
            >
              {t("projects.moreLabel").replace("{n}", String(extras.length))}
            </p>
            <div className="projects-extras-grid">
              {extras.map((project) => (
                <div
                  key={project.slug}
                  style={{
                    padding: "var(--s-4) var(--s-6)",
                    backgroundColor: "var(--color-bg-elevated)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--r-md)",
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "var(--s-4)",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "var(--fs-small)",
                        fontWeight: 600,
                        color: "var(--color-fg)",
                      }}
                    >
                      {project.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        color: "var(--color-fg-muted)",
                        letterSpacing: "0.06em",
                        marginLeft: "var(--s-3)",
                      }}
                    >
                      {project.company}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--color-fg-subtle)",
                    }}
                  >
                    {project.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 640px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        .projects-extras-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--s-2);
        }
        @media (min-width: 640px) {
          .projects-extras-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}

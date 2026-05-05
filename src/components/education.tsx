"use client";

import { education } from "@/lib/data";
import { useLocale } from "@/lib/i18n";

export default function Education() {
  const { t } = useLocale();

  return (
    <section
      id="formacao"
      aria-labelledby="education-heading"
      style={{ padding: "var(--s-24) 0" }}
    >
      <div className="section-container">
        <h2
          id="education-heading"
          className="eyebrow"
          data-reveal
          style={{ marginBottom: "var(--s-12)" }}
        >
          {t("education.eyebrow")}
        </h2>

        <div className="education-grid">
          {education.map((item, i) => {
            const isInProgress = item.status === "in_progress";
            const delay = Math.min(i * 60, 300) as 0 | 60 | 120 | 180 | 240 | 300;

            return (
              <div
                key={`${item.institution}-${item.field}`}
                data-reveal
                data-reveal-delay={delay > 0 ? String(delay) as "60" | "120" | "180" | "240" | "300" : undefined}
                style={{
                  padding: "var(--s-6)",
                  backgroundColor: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--r-md)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--s-3)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "var(--s-3)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "var(--color-fg-subtle)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.degree}
                  </span>

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: isInProgress ? "var(--color-accent)" : "var(--color-fg-subtle)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {isInProgress && (
                      <span
                        className="edu-dot"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "var(--color-accent)",
                          flexShrink: 0,
                        }}
                      />
                    )}
                    {isInProgress ? t("education.inProgress") : (item.year ?? t("education.completed"))}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "var(--fs-small)",
                    fontWeight: 600,
                    color: "var(--color-fg)",
                    lineHeight: 1.3,
                  }}
                >
                  {item.field}
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--color-fg-muted)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.institution}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .education-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--s-4);
        }
        @media (min-width: 640px) {
          .education-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @keyframes edu-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .edu-dot {
          animation: edu-blink 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .edu-dot { animation: none; }
        }
      `}</style>
    </section>
  );
}

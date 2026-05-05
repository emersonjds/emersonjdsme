"use client";

import { experience } from "@/lib/data";
import { useLocale } from "@/lib/i18n";

export default function Experience() {
  const { t, locale } = useLocale();

  return (
    <section
      id="experiencia"
      aria-labelledby="experience-heading"
      style={{ padding: "var(--s-24) 0" }}
    >
      <div className="section-container">
        <h2
          id="experience-heading"
          className="eyebrow"
          data-reveal
          style={{ marginBottom: "var(--s-12)" }}
        >
          {t("experience.eyebrow")}
        </h2>

        <div style={{ position: "relative", paddingLeft: "var(--s-8)" }}>
          {/* Timeline vertical line */}
          <div
            data-reveal
            className="timeline-line"
            style={{
              position: "absolute",
              left: 0,
              top: "6px",
              width: "1px",
              height: "calc(100% - 6px)",
              backgroundColor: "var(--color-border)",
              transformOrigin: "top center",
            }}
          />

          <ol style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
            {experience.map((item, i) => {
              const delay = Math.min(i * 40, 240) as 0 | 60 | 120 | 180 | 240;
              const delayAttr = delay > 0 ? String(delay) as "60" | "120" | "180" | "240" : undefined;

              return (
                <li
                  key={`${item.company}-${item.period}`}
                  data-reveal
                  {...(delayAttr ? { "data-reveal-delay": delayAttr } : {})}
                  style={{
                    position: "relative",
                    paddingBottom: i < experience.length - 1 ? "var(--s-10)" : 0,
                  }}
                >
                  {/* Dot */}
                  <div
                    className="timeline-dot"
                    data-reveal
                    {...(delayAttr ? { "data-reveal-delay": delayAttr } : {})}
                    style={{
                      position: "absolute",
                      left: "calc(var(--s-8) * -1 - 3px)",
                      top: "6px",
                      width: "7px",
                      height: "7px",
                      borderRadius: "var(--r-pill)",
                      backgroundColor: item.current
                        ? "var(--color-accent)"
                        : "var(--color-fg-subtle)",
                      border: "1px solid var(--color-border)",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--s-1)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        fontWeight: 500,
                        color: "var(--color-fg-muted)",
                        letterSpacing: "0.06em",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {item.period.replace("atual", t("experience.present"))}
                    </p>

                    <div style={{ display: "flex", alignItems: "baseline", gap: "var(--s-3)", flexWrap: "wrap" }}>
                      <h3
                        style={{
                          fontSize: "var(--fs-h3)",
                          fontWeight: 600,
                          color: "var(--color-fg)",
                        }}
                      >
                        {item.title}
                      </h3>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "var(--fs-small)",
                          color: "var(--color-fg-muted)",
                        }}
                      >
                        {item.company}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: "var(--fs-small)",
                        color: "var(--color-fg-muted)",
                        lineHeight: 1.55,
                        maxWidth: "520px",
                      }}
                    >
                      {item.description[locale]}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <style>{`
        [data-reveal-delay="40"] { transition-delay: 40ms; }
        [data-reveal-delay="80"] { transition-delay: 80ms; }
      `}</style>
    </section>
  );
}

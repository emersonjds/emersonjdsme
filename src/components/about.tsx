"use client";

import { useLocale } from "@/lib/i18n";

export default function About() {
  const { t } = useLocale();

  const stats = [
    { value: "10", label: t("about.stats.career") },
    { value: "13", label: t("about.stats.companies") },
    { value: "22", label: t("about.stats.hackathons") },
    { value: "5×", label: t("about.stats.firstPlace") },
  ] as const;

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="section"
    >
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--s-16)",
          }}
        >
          <div data-reveal style={{ maxWidth: "640px" }}>
            <h2
              id="about-heading"
              className="eyebrow"
              style={{ marginBottom: "var(--s-8)" }}
            >
              {t("about.eyebrow")}
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--s-6)",
              }}
            >
              <p
                style={{
                  fontSize: "var(--fs-body-lg)",
                  color: "var(--color-fg)",
                  lineHeight: 1.65,
                }}
              >
                {t("about.p1")}
              </p>
              <p
                style={{
                  fontSize: "var(--fs-body-lg)",
                  color: "var(--color-fg-muted)",
                  lineHeight: 1.65,
                }}
              >
                {t("about.p2")}
              </p>
            </div>
          </div>

          <div
            data-reveal
            data-reveal-delay="120"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "var(--s-4)",
            }}
            className="about-stats-grid"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                data-reveal
                data-reveal-delay={String(Math.min((i + 1) * 60, 300)) as "60" | "120" | "180" | "240" | "300"}
                style={{
                  padding: "var(--s-6)",
                  backgroundColor: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--r-md)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--fs-h2)",
                    fontWeight: 700,
                    color: "var(--color-accent)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    marginTop: "var(--s-2)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--color-fg-muted)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .about-stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

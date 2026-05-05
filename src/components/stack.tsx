"use client";

import { stackCategories, marqueeItems } from "@/lib/data";
import { useLocale } from "@/lib/i18n";

function MarqueeContent() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <>
      {doubled.map((item, i) => (
        <span
          key={`${item}-${i}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--s-4)",
            paddingRight: "var(--s-8)",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 500,
            color: "var(--color-fg-subtle)",
            letterSpacing: "0.06em",
            whiteSpace: "nowrap",
          }}
        >
          {item}
          <span style={{ color: "var(--color-border)" }}>·</span>
        </span>
      ))}
    </>
  );
}

export default function Stack() {
  const { t } = useLocale();

  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="section"
    >
      <div className="section-container">
        <h2
          id="stack-heading"
          className="eyebrow"
          data-reveal
          style={{ marginBottom: "var(--s-12)" }}
        >
          {t("stack.eyebrow")}
        </h2>

        <div
          data-reveal
          data-reveal-delay="60"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "var(--s-1)",
          }}
          className="stack-grid"
        >
          {stackCategories.map((category, i) => (
            <div
              key={category.labelKey}
              data-reveal
              data-reveal-delay={String(i * 60) as "0" | "60" | "120" | "180"}
              style={{
                padding: "var(--s-6)",
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--r-md)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  fontWeight: 500,
                  color: "var(--color-fg-muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "var(--s-4)",
                }}
              >
                {t(category.labelKey)}
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--s-2)",
                }}
              >
                {category.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "var(--fs-small)",
                      color: "var(--color-fg)",
                      lineHeight: 1.4,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div
        data-reveal
        data-reveal-delay="180"
        style={{ marginTop: "var(--s-12)", overflow: "hidden" }}
      >
        <div
          className="marquee-container"
          style={{
            borderTop: "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
            padding: "var(--s-3) 0",
            overflow: "hidden",
          }}
          aria-hidden="true"
        >
          <div className="marquee-track">
            <MarqueeContent />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .stack-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

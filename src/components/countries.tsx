"use client";

import { countries } from "@/lib/data";
import { useLocale } from "@/lib/i18n";

export default function Countries() {
  const { t } = useLocale();
  const showWip = countries.length < 3;

  return (
    <section
      id="lugares"
      aria-labelledby="countries-heading"
      className="section"
    >
      <div className="section-container">
        <div data-reveal style={{ marginBottom: "var(--s-12)" }}>
          <h2 id="countries-heading" className="eyebrow" style={{ marginBottom: "var(--s-2)" }}>
            {t("countries.eyebrow")}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--color-fg-subtle)",
              letterSpacing: "0.06em",
            }}
          >
            {t("countries.subtitle")}
          </p>
        </div>

        <div
          data-reveal
          data-reveal-delay="60"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--s-3)",
          }}
        >
          {countries.map((country) => (
            <div
              key={country.code}
              className="country-chip"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--s-3)",
                padding: "var(--s-3) var(--s-6)",
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--r-md)",
                cursor: "default",
                transition:
                  "transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
              }}
            >
              <span
                style={{
                  fontSize: "var(--fs-small)",
                  fontWeight: 600,
                  color: "var(--color-fg)",
                  letterSpacing: "-0.01em",
                }}
              >
                {country.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  fontWeight: 500,
                  color: "var(--color-fg-subtle)",
                  letterSpacing: "0.1em",
                }}
              >
                {country.code}
              </span>
            </div>
          ))}
        </div>

        {showWip && (
          <p
            data-reveal
            data-reveal-delay="120"
            style={{
              marginTop: "var(--s-6)",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--color-fg-subtle)",
              letterSpacing: "0.06em",
            }}
          >
            {t("countries.wip")}
          </p>
        )}
      </div>

      <style>{`
        .country-chip:hover {
          transform: translateY(-2px);
          border-color: var(--color-accent);
        }
      `}</style>
    </section>
  );
}

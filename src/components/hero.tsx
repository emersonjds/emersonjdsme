"use client";

import CopyEmail from "./copy-email";
import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="section section--first"
    >
      <div className="section-container" style={{ position: "relative" }}>
        <div
          style={{
            maxWidth: "860px",
            display: "flex",
            flexDirection: "column",
            gap: "var(--s-8)",
          }}
        >
          {/* Status badge */}
          <div className="page-enter page-enter-1">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--s-2)",
                padding: "var(--s-1) var(--s-3)",
                borderRadius: "var(--r-pill)",
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-accent-soft)",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 500,
                color: "var(--color-accent)",
                letterSpacing: "0.06em",
              }}
            >
              <span className="badge-dot" aria-hidden="true" />
              {t("hero.badge")}
            </span>
          </div>

          {/* Eyebrow */}
          <div className="page-enter page-enter-2">
            <p className="eyebrow eyebrow-shimmer">
              {t("hero.eyebrow")}
            </p>
          </div>

          {/* H1 */}
          <div className="page-enter page-enter-3">
            <h1
              id="hero-heading"
              className="display"
              style={{ color: "var(--color-fg)" }}
            >
              {t("hero.title")}
            </h1>
          </div>

          {/* Subtitle */}
          <div className="page-enter page-enter-4" style={{ maxWidth: "620px" }}>
            <p
              style={{
                fontSize: "var(--fs-body-lg)",
                color: "var(--color-fg-muted)",
                lineHeight: 1.6,
              }}
            >
              {t("hero.subtitle")}
            </p>
          </div>

          {/* CTAs */}
          <div
            className="page-enter page-enter-5"
            style={{ display: "flex", alignItems: "center", gap: "var(--s-4)", flexWrap: "wrap" }}
          >
            <a
              href="#projetos"
              className="btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--s-2)",
                padding: "10px var(--s-6)",
                borderRadius: "var(--r-md)",
                backgroundColor: "var(--color-accent)",
                color: "#0a0b0d",
                fontWeight: 600,
                fontSize: "var(--fs-small)",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              {t("hero.cta")}
              <span className="card-arrow" aria-hidden="true">→</span>
            </a>

            <CopyEmail email="ti.emerson.silva@gmail.com" />
          </div>
        </div>

        {/* Slogan bottom-right */}
        <p
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--color-fg-muted)",
          }}
        >
          {t("hero.slogan")}
        </p>
      </div>
    </section>
  );
}

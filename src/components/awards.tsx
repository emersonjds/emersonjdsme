"use client";

import { awards, type Award } from "@/lib/data";
import { useLocale } from "@/lib/i18n";

function positionLabel(
  position: Award["position"],
  labels: { first: string; second: string; third: string; finalist: string; speaker: string }
): string {
  switch (position) {
    case "1st": return labels.first;
    case "2nd": return labels.second;
    case "3rd": return labels.third;
    case "finalist": return labels.finalist;
    case "speaker": return labels.speaker;
  }
}

function formatDate(date: string): string {
  const [year, month] = date.split("-");
  const d = new Date(Number(year), Number(month) - 1, 1);
  return d.toLocaleDateString("pt-BR", { month: "short", year: "numeric" });
}

function groupByYear(list: readonly Award[]): Map<string, readonly Award[]> {
  const map = new Map<string, Award[]>();
  for (const award of list) {
    const year = award.date.slice(0, 4);
    if (!map.has(year)) map.set(year, []);
    map.get(year)!.push(award);
  }
  // Sort descending
  return new Map([...map.entries()].sort((a, b) => Number(b[0]) - Number(a[0])));
}

const yearDelays = ["0", "60", "120", "180", "240", "300"] as const;
type RevealDelay = (typeof yearDelays)[number];

export default function Awards() {
  const { t } = useLocale();
  const grouped = groupByYear(awards);

  const labels = {
    first: t("awards.first"),
    second: t("awards.second"),
    third: t("awards.third"),
    finalist: t("awards.finalist"),
    speaker: t("awards.speaker"),
  };

  return (
    <section
      id="premios"
      aria-labelledby="awards-heading"
      style={{ padding: "var(--s-24) 0" }}
    >
      <div className="section-container">
        <div data-reveal style={{ marginBottom: "var(--s-12)" }}>
          <h2 id="awards-heading" className="eyebrow" style={{ marginBottom: "var(--s-2)" }}>
            {t("awards.eyebrow")}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--color-fg-subtle)",
              letterSpacing: "0.06em",
            }}
          >
            {t("awards.subtitle")}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--s-8)",
          }}
        >
          {[...grouped.entries()].map(([year, yearAwards], groupIdx) => {
            const delayAttr = yearDelays[Math.min(groupIdx, yearDelays.length - 1)] as RevealDelay;
            return (
              <div key={year} data-reveal data-reveal-delay={delayAttr}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--color-accent)",
                    letterSpacing: "0.12em",
                    marginBottom: "var(--s-4)",
                  }}
                >
                  {year}
                </p>

                <div className="awards-grid">
                  {yearAwards.map((award, i) => {
                    const isFirst = award.position === "1st";
                    return (
                      <div
                        key={`${award.date}-${award.name}-${i}`}
                        className={isFirst ? "award-row award-row--first" : "award-row"}
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: "var(--s-3)",
                          padding: "var(--s-3) var(--s-4)",
                          borderRadius: "var(--r-sm)",
                          backgroundColor: isFirst
                            ? "var(--color-accent-soft)"
                            : "transparent",
                          border: isFirst
                            ? "1px solid rgba(200,255,62,0.15)"
                            : "1px solid transparent",
                        }}
                      >
                        {/* Position badge */}
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            color: isFirst
                              ? "var(--color-accent)"
                              : "var(--color-fg-subtle)",
                            minWidth: "36px",
                            flexShrink: 0,
                            fontVariantNumeric: "tabular-nums",
                          }}
                          aria-label={`Posição: ${positionLabel(award.position, labels)}`}
                        >
                          {positionLabel(award.position, labels)}
                        </span>

                        {/* Name */}
                        <span
                          style={{
                            fontSize: "var(--fs-small)",
                            fontWeight: isFirst ? 600 : 400,
                            color: isFirst ? "var(--color-fg)" : "var(--color-fg-muted)",
                            flex: 1,
                          }}
                        >
                          {award.name}
                        </span>

                        {/* Organizer */}
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            color: "var(--color-fg-subtle)",
                            letterSpacing: "0.04em",
                            flexShrink: 0,
                          }}
                        >
                          {award.organizer}
                        </span>

                        {/* Date */}
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            color: "var(--color-fg-subtle)",
                            letterSpacing: "0.04em",
                            fontVariantNumeric: "tabular-nums",
                            flexShrink: 0,
                          }}
                        >
                          {formatDate(award.date)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .awards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2px;
        }
        @media (min-width: 768px) {
          .awards-grid { grid-template-columns: repeat(2, 1fr); gap: 2px; }
        }
        @media (min-width: 1024px) {
          .awards-grid { grid-template-columns: repeat(3, 1fr); gap: 2px; }
        }
        @keyframes award-glow {
          0%   { box-shadow: 0 0 0 0 rgba(200,255,62,0.25); }
          60%  { box-shadow: 0 0 12px 4px rgba(200,255,62,0.08); }
          100% { box-shadow: 0 0 0 0 rgba(200,255,62,0); }
        }
        [data-reveal][data-revealed="true"] .award-row--first {
          animation: award-glow 1400ms var(--ease-out) 300ms both;
        }
        @media (prefers-reduced-motion: reduce) {
          .award-row--first { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

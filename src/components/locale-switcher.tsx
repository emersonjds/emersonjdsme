"use client";

import { useLocale, type Locale } from "@/lib/i18n";

const locales: Locale[] = ["en", "pt", "es"];

export default function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Select language"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2px",
      }}
    >
      {locales.map((loc, i) => (
        <span key={loc} style={{ display: "flex", alignItems: "center" }}>
          {i > 0 && (
            <span
              aria-hidden="true"
              style={{
                color: "var(--color-fg-subtle)",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                margin: "0 4px",
                userSelect: "none",
              }}
            >
              ·
            </span>
          )}
          <button
            type="button"
            onClick={() => setLocale(loc)}
            aria-label={`Switch language to ${loc.toUpperCase()}`}
            aria-pressed={locale === loc}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: locale === loc ? "var(--color-fg)" : "var(--color-fg-muted)",
              background: "none",
              border: "none",
              padding: "2px 0",
              cursor: locale === loc ? "default" : "pointer",
              transition: "color var(--dur-base) var(--ease-out)",
              lineHeight: 1,
            }}
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}

"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "var(--s-8) 0",
      }}
    >
      <div
        className="section-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--s-4)",
          flexWrap: "wrap",
        }}
      >
        <p
          style={{
            fontSize: "var(--fs-small)",
            color: "var(--color-fg-muted)",
          }}
        >
          {t("footer.copy")}
        </p>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--fs-mono)",
            color: "var(--color-fg-subtle)",
            letterSpacing: "0.06em",
          }}
        >
          {t("footer.version")}
        </span>
      </div>
    </footer>
  );
}

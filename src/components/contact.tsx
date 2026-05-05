"use client";

import CopyEmail from "./copy-email";
import { useLocale } from "@/lib/i18n";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/emersonjds",
    handle: "@emersonjds",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emerson-silva",
    handle: "emerson-silva",
  },
  {
    label: "X",
    href: "https://x.com/emersonjdss",
    handle: "@emersonjdss",
  },
] as const;

export default function Contact() {
  const { t } = useLocale();

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      style={{ padding: "var(--s-24) 0" }}
    >
      <div className="section-container">
        <h2
          id="contact-heading"
          className="eyebrow"
          data-reveal
          style={{ marginBottom: "var(--s-12)" }}
        >
          {t("contact.eyebrow")}
        </h2>

        <div
          data-reveal
          data-reveal-delay="60"
          style={{
            padding: "var(--s-12)",
            backgroundColor: "var(--color-bg-elevated)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--r-md)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--s-8)",
          }}
        >
          <div>
            <CopyEmail
              email="ti.emerson.silva@gmail.com"
              displayAs="link"
              className="display"
              style={{
                fontSize: "var(--fs-display)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                color: "var(--color-fg)",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)" }}>
            <span className="badge-dot" aria-hidden="true" />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 500,
                color: "var(--color-fg-muted)",
                letterSpacing: "0.06em",
              }}
            >
              {t("contact.status")}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--s-4)",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--color-fg-muted)",
                letterSpacing: "0.04em",
              }}
            >
              {t("contact.phone")}
            </span>
            <span
              style={{
                color: "var(--color-fg-subtle)",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
              }}
            >
              ·
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--color-fg-muted)",
                letterSpacing: "0.04em",
              }}
            >
              {t("contact.location")}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "var(--s-6)",
              flexWrap: "wrap",
              paddingTop: "var(--s-6)",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--s-1)",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--color-fg-subtle)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {link.label}
                </span>
                <span
                  style={{
                    fontSize: "var(--fs-small)",
                    color: "var(--color-fg-muted)",
                  }}
                >
                  {link.handle}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Monogram from "./monogram";
import LocaleSwitcher from "./locale-switcher";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { t } = useLocale();

  return (
    <header className="site-header">
      <div className="section-container site-header-inner">
        <a href="#top" className="header-lockup" aria-label="ejds — página inicial">
          <Monogram size={24} />
          <span className="header-wordmark">ejds</span>
          <span className="header-divider" aria-hidden="true">│</span>
          <span className="header-role">software engineer</span>
        </a>

        <nav aria-label="Navegação principal" className="header-nav">
          <ul className="nav-list">
            <li>
              <a href="#projetos" className="nav-link link-underline">
                {t("nav.work")}
              </a>
            </li>
            <li>
              <a href="#premios" className="nav-link link-underline">
                {t("nav.awards")}
              </a>
            </li>
            <li>
              <a href="#sobre" className="nav-link link-underline">
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a href="#contato" className="nav-link link-underline">
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </nav>

        <LocaleSwitcher />
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
        }
        .site-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 56px;
          gap: var(--s-4);
        }
        .header-lockup {
          display: flex;
          align-items: center;
          gap: var(--s-3);
          text-decoration: none;
          color: var(--color-fg);
          flex-shrink: 0;
        }
        .header-wordmark {
          font-family: var(--font-sans);
          font-size: var(--fs-small);
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--color-fg);
        }
        .header-divider {
          color: var(--color-fg-subtle);
          font-weight: 300;
          margin: 0 2px;
        }
        .header-role {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          color: var(--color-fg-muted);
          letter-spacing: 0.04em;
        }
        .header-nav {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .nav-list {
          display: flex;
          align-items: center;
          gap: var(--s-6);
          list-style: none;
        }
        .nav-link {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: var(--color-fg-muted);
          text-transform: uppercase;
          text-decoration: none;
          transition: color var(--dur-base) var(--ease-out);
        }
        .nav-link:hover {
          color: var(--color-fg);
        }
        @media (max-width: 640px) {
          .header-nav { display: none; }
          .header-role { display: none; }
          .header-divider { display: none; }
        }
      `}</style>
    </header>
  );
}

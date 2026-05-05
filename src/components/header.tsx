"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Monogram from "./monogram";
import LocaleSwitcher from "./locale-switcher";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("top");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const panelId = useId();

  const items = [
    { href: "#projetos", id: "projetos", label: t("nav.work") },
    { href: "#premios", id: "premios", label: t("nav.awards") },
    { href: "#sobre", id: "sobre", label: t("nav.about") },
    { href: "#contato", id: "contato", label: t("nav.contact") },
  ] as const;

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Body scroll lock + ESC + focus trap while drawer open
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    requestAnimationFrame(() => firstLinkRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // Track active section for aria-current
  useEffect(() => {
    const ids = ["top", ...items.map((i) => i.id)];
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="site-header">
      <div className="section-container site-header-inner">
        <a href="#top" className="header-lockup" aria-label="ejds — home">
          <Monogram size={24} />
          <span className="header-wordmark">ejds</span>
          <span className="header-divider" aria-hidden="true">│</span>
          <span className="header-role">software engineer</span>
        </a>

        <nav aria-label={t("nav.ariaPrimary")} className="header-nav">
          <ul className="nav-list">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="nav-link link-underline"
                  aria-current={activeId === item.id ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-end">
          <LocaleSwitcher />
          <button
            ref={triggerRef}
            type="button"
            className="menu-trigger"
            aria-label={open ? t("nav.menuClose") : t("nav.menuOpen")}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`burger ${open ? "burger--open" : ""}`} aria-hidden="true">
              <span /><span /><span />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`drawer-backdrop ${open ? "drawer-backdrop--open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label={t("nav.ariaPrimary")}
        className={`drawer ${open ? "drawer--open" : ""}`}
        hidden={!open}
      >
        <ul className="drawer-list">
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={close}
                aria-current={activeId === item.id ? "page" : undefined}
                className="drawer-link"
              >
                <span className="drawer-link-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="drawer-link-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: color-mix(in oklab, var(--color-bg) 85%, transparent);
          backdrop-filter: saturate(160%) blur(12px);
          -webkit-backdrop-filter: saturate(160%) blur(12px);
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
          border-radius: var(--r-sm);
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
        .nav-link:hover { color: var(--color-fg); }
        .nav-link[aria-current="page"] { color: var(--color-fg); }

        .header-end {
          display: flex;
          align-items: center;
          gap: var(--s-4);
        }
        .menu-trigger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          margin-right: -8px;
          border: 1px solid transparent;
          border-radius: var(--r-sm);
          background: transparent;
          color: var(--color-fg);
          cursor: pointer;
          transition: border-color var(--dur-base) var(--ease-out);
        }
        .menu-trigger:hover { border-color: var(--color-border); }

        .burger {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          gap: 4px;
          width: 18px;
        }
        .burger span {
          display: block;
          height: 1.5px;
          background: currentColor;
          border-radius: 1px;
          transition: transform var(--dur-base) var(--ease-out), opacity var(--dur-fast) var(--ease-out);
        }
        .burger--open span:nth-child(1) { transform: translateY(5.5px) rotate(45deg); }
        .burger--open span:nth-child(2) { opacity: 0; }
        .burger--open span:nth-child(3) { transform: translateY(-5.5px) rotate(-45deg); }

        .drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(5, 6, 8, 0.6);
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--dur-base) var(--ease-out);
          z-index: 99;
        }
        .drawer-backdrop--open {
          opacity: 1;
          pointer-events: auto;
        }
        .drawer {
          position: fixed;
          top: 56px;
          left: 0;
          right: 0;
          z-index: 101;
          background: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
          transform: translateY(-12px);
          opacity: 0;
          pointer-events: none;
          transition: transform var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out);
          max-height: calc(100dvh - 56px);
          overflow-y: auto;
          overscroll-behavior: contain;
        }
        .drawer--open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
        .drawer[hidden] { display: none; }
        .drawer-list {
          list-style: none;
          padding: var(--s-4) var(--s-6) var(--s-8);
          display: flex;
          flex-direction: column;
        }
        .drawer-link {
          display: flex;
          align-items: baseline;
          gap: var(--s-4);
          padding: var(--s-4) 0;
          color: var(--color-fg);
          text-decoration: none;
          border-bottom: 1px solid var(--color-border);
          font-size: var(--fs-h3);
          font-weight: 600;
          letter-spacing: -0.02em;
          transition: color var(--dur-base) var(--ease-out);
        }
        .drawer-link:hover { color: var(--color-accent); }
        .drawer-link[aria-current="page"] { color: var(--color-accent); }
        .drawer-link-num {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--color-fg-subtle);
          letter-spacing: 0.08em;
          flex-shrink: 0;
        }

        @media (max-width: 720px) {
          .header-nav { display: none; }
          .header-role,
          .header-divider { display: none; }
          .menu-trigger { display: inline-flex; }
        }

        @media (min-width: 721px) {
          .drawer,
          .drawer-backdrop { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .drawer,
          .drawer-backdrop,
          .burger span { transition: none; }
        }
      `}</style>
    </header>
  );
}

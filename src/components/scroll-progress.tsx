"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const value = max > 0 ? el.scrollTop / max : 0;
      setProgress(Math.min(1, Math.max(0, value)));
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <div
      className="scroll-progress"
      role="presentation"
      aria-hidden="true"
      style={{ transform: `scaleX(${progress})` }}
    >
      <style>{`
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--color-accent) 35%,
            var(--color-accent) 65%,
            transparent 100%
          );
          transform-origin: left center;
          z-index: 200;
          pointer-events: none;
          will-change: transform;
          mix-blend-mode: screen;
        }
        @media (prefers-reduced-motion: reduce) {
          .scroll-progress { display: none; }
        }
      `}</style>
    </div>
  );
}

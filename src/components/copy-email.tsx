"use client";

import { useState, useCallback, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface CopyEmailProps {
  email: string;
  className?: string;
  style?: CSSProperties;
  displayAs?: "button" | "link";
}

export default function CopyEmail({
  email,
  className,
  style,
  displayAs = "button",
}: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }, [email]);

  if (displayAs === "link") {
    return (
      <button
        onClick={handleCopy}
        aria-label={copied ? "E-mail copiado" : "Copiar e-mail"}
        title={copied ? "E-mail copiado" : "Clique para copiar"}
        className={cn("btn link-underline cursor-pointer bg-transparent border-0 p-0 text-left", className)}
        style={{ font: "inherit", color: "inherit", background: "none", border: "none", padding: 0, cursor: "pointer", ...style }}
      >
        <span
          className="copy-feedback-label"
          data-copied={copied ? "true" : undefined}
        >
          {copied ? "copiado ✓" : email}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "E-mail copiado" : "Copiar e-mail"}
      aria-live="polite"
      title={copied ? "E-mail copiado" : "Clique para copiar"}
      className={cn(
        "btn inline-flex items-center gap-2 rounded-[var(--r-md)] border border-[var(--color-border)]",
        "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:border-[var(--color-fg-subtle)]",
        "font-mono text-[var(--fs-small)] cursor-pointer",
        className
      )}
      style={{
        padding: "10px 16px",
        backgroundColor: "transparent",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-small)",
        color: "var(--color-fg-muted)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--r-md)",
        cursor: "pointer",
        ...style,
      }}
    >
      <span
        className="copy-feedback-label"
        data-copied={copied ? "true" : undefined}
      >
        {copied ? "copiado ✓" : email}
      </span>
    </button>
  );
}

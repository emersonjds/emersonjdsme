interface MonogramProps {
  size?: number;
}

export default function Monogram({ size = 32 }: MonogramProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      aria-label="ejds"
    >
      <rect
        x="0"
        y="0"
        width="32"
        height="32"
        rx="6"
        fill="var(--color-bg-elevated)"
      />
      <path
        d="M8 7 V25"
        stroke="var(--color-fg)"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M8 7 H18"
        stroke="var(--color-fg)"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M8 16 H15"
        stroke="var(--color-fg)"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M8 25 H18"
        stroke="var(--color-fg)"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M22 7 V20 a4 4 0 0 1 -8 0"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <circle cx="25" cy="25" r="1.5" fill="var(--color-accent)" />
    </svg>
  );
}

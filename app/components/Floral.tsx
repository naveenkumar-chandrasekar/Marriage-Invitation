export function FloralBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 100 C40 90 70 70 100 40 C120 20 140 10 190 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M30 88 C36 74 34 62 22 52"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M58 72 C64 58 62 46 50 36"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M90 48 C96 34 94 22 82 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="18" cy="50" r="5" fill="currentColor" opacity="0.5" />
      <circle cx="47" cy="34" r="6" fill="currentColor" opacity="0.6" />
      <circle cx="80" cy="10" r="5" fill="currentColor" opacity="0.55" />
      <circle cx="118" cy="26" r="4" fill="currentColor" opacity="0.45" />
      <circle cx="150" cy="14" r="3.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 16 H90"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M240 16 H150"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <circle cx="120" cy="16" r="4" fill="currentColor" opacity="0.7" />
      <path
        d="M105 16 C110 8 114 6 120 6 C126 6 130 8 135 16 C130 24 126 26 120 26 C114 26 110 24 105 16 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.5"
      />
    </svg>
  );
}

// Fine line-art icons drawn to match the floral ornaments. They use
// currentColor so each event's accent colour carries through.

type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function RingsIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <circle cx="9" cy="15" r="5.5" />
      <circle cx="15" cy="15" r="5.5" />
      <path d="M13 6.2 L14.2 4.6 H15.8 L17 6.2 L15 8.8 Z" />
      <path d="M13 6.2 H17" opacity="0.6" />
    </svg>
  );
}

export function TempleIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M3.5 21 H20.5" />
      <path d="M5.5 21 V15 H18.5 V21" />
      <path d="M10 21 V18.2 A2 2 0 0 1 14 18.2 V21" />
      <path d="M6.5 15 L7.6 11.6 H16.4 L17.5 15" />
      <path d="M8.2 11.6 L9.1 8.6 H14.9 L15.8 11.6" />
      <path d="M9.7 8.6 L10.5 6.2 H13.5 L14.3 8.6" />
      <path d="M10.6 6.2 C10.6 4.6 13.4 4.6 13.4 6.2" />
      <path d="M12 4.8 V3" />
      <circle cx="12" cy="2.4" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Flute() {
  // Champagne flute drawn with its foot at the origin.
  return (
    <>
      <path d="M-2.4 -12.5 H2.4 L1.9 -6.6 C1.7 -4.9 -1.7 -4.9 -1.9 -6.6 Z" />
      <path d="M-2.1 -9.6 H2.1" opacity="0.5" />
      <path d="M0 -5.3 V0 M-2.4 0 H2.4" />
    </>
  );
}

export function ToastIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <g transform="translate(6.4 21) rotate(15)">
        <Flute />
      </g>
      <g transform="translate(17.6 21) rotate(-15)">
        <Flute />
      </g>
      <path
        d="M12 1.4 Q12.4 3.1 14 3.5 Q12.4 3.9 12 5.6 Q11.6 3.9 10 3.5 Q11.6 3.1 12 1.4 Z"
        fill="currentColor"
        stroke="none"
        opacity="0.85"
      />
      <circle cx="8" cy="3.6" r="0.6" fill="currentColor" stroke="none" opacity="0.7" />
      <circle cx="16.2" cy="3" r="0.6" fill="currentColor" stroke="none" opacity="0.7" />
    </svg>
  );
}

export function PinIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M12 21 C12 21 5.5 14.6 5.5 9.6 A6.5 6.5 0 0 1 18.5 9.6 C18.5 14.6 12 21 12 21 Z" />
      <circle cx="12" cy="9.6" r="2.3" />
    </svg>
  );
}

export const eventIcons = {
  rings: RingsIcon,
  temple: TempleIcon,
  toast: ToastIcon,
};

export type EventIconName = keyof typeof eventIcons;

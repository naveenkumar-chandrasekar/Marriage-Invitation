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

// Thamboolam: plate with a coconut and betel leaves, exchanged at the betrothal.
export function ThamboolamIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <g transform="translate(0 -1)">
      <ellipse cx="12" cy="16.4" rx="9" ry="1.9" />
      <path d="M4.6 17.6 C6.8 20.4 17.2 20.4 19.4 17.6" />
      <circle cx="12" cy="11.4" r="3.3" />
      <path d="M12 8.1 C11.6 6.8 10.6 6 9.4 5.8 M12 8.1 C12.4 6.8 13.4 6 14.6 5.8 M12 8.1 V6" />
      <path d="M8.4 14.7 C6.4 14.6 4.3 13.4 3.5 11.2 C5.7 10.5 7.9 11.6 8.9 13.5" />
      <path d="M8.4 14.6 L5.1 12" opacity="0.6" />
      <path d="M15.6 14.7 C17.6 14.6 19.7 13.4 20.5 11.2 C18.3 10.5 16.1 11.6 15.1 13.5" />
      <path d="M15.6 14.6 L18.9 12" opacity="0.6" />
      </g>
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

export function MapIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M3.5 6.5 L9 4.5 L15 6.5 L20.5 4.5 V17.5 L15 19.5 L9 17.5 L3.5 19.5 Z" />
      <path d="M9 4.5 V17.5 M15 6.5 V19.5" opacity="0.6" />
    </svg>
  );
}

export const eventIcons = {
  thamboolam: ThamboolamIcon,
  temple: TempleIcon,
  toast: ToastIcon,
};

export type EventIconName = keyof typeof eventIcons;

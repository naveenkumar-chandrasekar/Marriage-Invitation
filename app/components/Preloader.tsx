"use client";

import { useEffect, useState } from "react";
import { Heart } from "./Floral";

// Minimum time the loader stays up so the ring animation can finish,
// measured from navigation start rather than from hydration.
const MIN_VISIBLE_MS = 2200;
const FADE_MS = 800;

const hearts = [
  { left: "18%", delay: "0s", size: "h-3 w-3", color: "text-violet-300" },
  { left: "32%", delay: "1.1s", size: "h-2 w-2", color: "text-emerald-300" },
  { left: "50%", delay: "0.5s", size: "h-3.5 w-3.5", color: "text-fuchsia-300" },
  { left: "66%", delay: "1.6s", size: "h-2.5 w-2.5", color: "text-violet-300" },
  { left: "82%", delay: "0.8s", size: "h-3 w-3", color: "text-emerald-300" },
];

export default function Preloader() {
  const [phase, setPhase] = useState<"show" | "hide" | "gone">("show");

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = "hidden";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minMs = reduced ? 300 : MIN_VISIBLE_MS;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const finish = () => {
      const wait = Math.max(0, minMs - performance.now());
      timers.push(
        setTimeout(() => {
          setPhase("hide");
          root.style.overflow = "";
          timers.push(setTimeout(() => setPhase("gone"), FADE_MS));
        }, wait),
      );
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      window.removeEventListener("load", finish);
      timers.forEach(clearTimeout);
      root.style.overflow = "";
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      role="status"
      aria-label="Loading invitation"
      aria-hidden={phase === "hide"}
      className={`preloader fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-violet-100 via-fuchsia-50 to-emerald-50 transition-[opacity,visibility] ease-out ${
        phase === "hide" ? "pointer-events-none invisible opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl" />

      {hearts.map((heart) => (
        <Heart
          key={heart.left}
          className={`preloader-heart absolute bottom-[30%] ${heart.size} ${heart.color}`}
          style={{ left: heart.left, animationDelay: heart.delay }}
        />
      ))}

      <svg
        viewBox="0 0 120 84"
        className="relative h-28 w-40 sm:h-32 sm:w-44"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle
          className="preloader-draw text-violet-400"
          cx="47"
          cy="52"
          r="24"
          stroke="currentColor"
          strokeWidth="2.2"
          pathLength={1}
        />
        <circle
          className="preloader-draw text-emerald-400"
          style={{ animationDelay: "0.3s" }}
          cx="73"
          cy="52"
          r="24"
          stroke="currentColor"
          strokeWidth="2.2"
          pathLength={1}
        />
        <g className="preloader-pop text-emerald-500" style={{ animationDelay: "1.4s" }}>
          <path
            d="M66 21 L69.5 16.5 H76.5 L80 21 L73 28.5 Z"
            stroke="currentColor"
            strokeWidth="1.6"
            fill="white"
          />
          <path d="M66 21 H80" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        </g>
        <path
          className="preloader-twinkle text-fuchsia-400"
          style={{ animationDelay: "1.6s" }}
          d="M93 12 Q93.6 15.4 97 16 Q93.6 16.6 93 20 Q92.4 16.6 89 16 Q92.4 15.4 93 12 Z"
          fill="currentColor"
        />
      </svg>

      <p
        className="preloader-rise font-script mt-4 px-2 text-5xl [word-spacing:0.3em] bg-gradient-to-r from-violet-500 to-emerald-500 bg-clip-text text-transparent"
        style={{ animationDelay: "1s" }}
      >
        N &amp; K
      </p>
      <p
        className="preloader-rise font-display mt-2 text-lg italic text-stone-500"
        style={{ animationDelay: "1.3s" }}
      >
        Two hearts, one journey
      </p>
    </div>
  );
}

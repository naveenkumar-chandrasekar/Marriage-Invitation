"use client";

import { useEffect, useState } from "react";

function getTimeLeft(targetISO: string) {
  const diff = Math.max(0, new Date(targetISO).getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({ targetISO }: { targetISO: string }) {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(targetISO));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetISO]);

  const units = [
    { label: "Days", value: timeLeft?.days, accent: "text-violet-500" },
    { label: "Hours", value: timeLeft?.hours, accent: "text-emerald-500" },
    { label: "Minutes", value: timeLeft?.minutes, accent: "text-violet-500" },
    { label: "Seconds", value: timeLeft?.seconds, accent: "text-emerald-500" },
  ];

  return (
    <div className="flex gap-3 sm:gap-6">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex w-16 flex-col items-center gap-1 rounded-2xl bg-white/70 py-3 shadow-sm backdrop-blur sm:w-20"
        >
          <span className={`font-display text-4xl font-medium leading-none sm:text-5xl ${unit.accent}`}>
            {unit.value !== undefined ? String(unit.value).padStart(2, "0") : "--"}
          </span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-stone-500 sm:text-xs sm:tracking-widest">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

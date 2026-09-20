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
          <span className={`text-3xl font-semibold sm:text-4xl ${unit.accent}`}>
            {unit.value !== undefined ? String(unit.value).padStart(2, "0") : "--"}
          </span>
          <span className="text-xs uppercase tracking-widest text-stone-500">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

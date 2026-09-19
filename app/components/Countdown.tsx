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
    { label: "Days", value: timeLeft?.days },
    { label: "Hours", value: timeLeft?.hours },
    { label: "Minutes", value: timeLeft?.minutes },
    { label: "Seconds", value: timeLeft?.seconds },
  ];

  return (
    <div className="flex gap-4 sm:gap-8">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="text-3xl font-semibold text-rose-500 sm:text-4xl">
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

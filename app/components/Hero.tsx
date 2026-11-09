import Countdown from "./Countdown";
import { FloralBranch, FloralDivider } from "./Floral";
import { couple, weddingDateISO, weddingDateLabel } from "@/lib/wedding-data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col items-center gap-6 overflow-hidden bg-gradient-to-b from-violet-100 via-fuchsia-50 to-emerald-50 px-6 pt-14 pb-14 text-center sm:gap-8 sm:pt-16 sm:pb-20"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl" />

      <FloralBranch className="pointer-events-none absolute top-3 left-2 h-16 w-28 -scale-x-100 text-violet-400 sm:top-6 sm:left-10 sm:h-32 sm:w-52" />
      <FloralBranch className="pointer-events-none absolute right-2 bottom-3 h-16 w-28 rotate-180 text-emerald-400 sm:right-10 sm:bottom-8 sm:h-32 sm:w-52" />

      <p className="script-clip font-script text-4xl [word-spacing:0.3em] bg-gradient-to-r from-violet-500 to-emerald-500 bg-clip-text text-transparent">
        N &amp; K
      </p>
      <p className="rounded-full border border-violet-200 bg-white/60 px-5 py-1.5 text-xs uppercase tracking-[0.3em] text-violet-500 sm:text-sm sm:tracking-[0.4em] backdrop-blur">
        We&apos;re Getting Married
      </p>
      <h1 className="font-script text-5xl leading-snug text-stone-800 sm:text-8xl">
        <span className="inline-block whitespace-nowrap">{couple.person1.name}</span>
        <span className="mx-4 inline-block sm:mx-6">
          <span className="script-clip bg-gradient-to-r from-violet-500 to-emerald-500 bg-clip-text text-transparent">&amp;</span>
        </span>
        <span className="inline-block whitespace-nowrap">{couple.person2.name}</span>
      </h1>
      <FloralDivider className="h-6 w-48 text-violet-400" />
      <p className="font-display text-xl italic text-stone-600 sm:text-2xl">{weddingDateLabel}</p>
      <Countdown targetISO={weddingDateISO} />

      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full text-emerald-50"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,32 C240,80 480,80 720,48 C960,16 1200,16 1440,48 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}

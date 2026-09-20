import Countdown from "./Countdown";
import { FloralBranch, FloralDivider } from "./Floral";
import { couple, weddingDateISO, weddingDateLabel } from "@/lib/wedding-data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col items-center justify-center gap-8 overflow-hidden bg-gradient-to-b from-violet-100 via-fuchsia-50 to-emerald-50 px-6 py-24 text-center"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl" />

      <FloralBranch className="pointer-events-none absolute top-6 left-4 h-24 w-40 -scale-x-100 text-violet-400 sm:top-10 sm:left-10 sm:h-32 sm:w-52" />
      <FloralBranch className="pointer-events-none absolute right-4 bottom-6 h-24 w-40 rotate-180 text-emerald-400 sm:right-10 sm:bottom-10 sm:h-32 sm:w-52" />

      <p className="font-display text-2xl tracking-[0.3em] bg-gradient-to-r from-violet-500 to-emerald-500 bg-clip-text text-transparent">
        N &amp; K
      </p>
      <p className="rounded-full border border-violet-200 bg-white/60 px-5 py-1.5 text-sm uppercase tracking-[0.4em] text-violet-500 backdrop-blur">
        We&apos;re Getting Married
      </p>
      <h1 className="font-display text-5xl leading-tight text-stone-800 sm:text-7xl">
        {couple.person1.name}
        <span className="mx-4 bg-gradient-to-r from-violet-500 to-emerald-500 bg-clip-text text-transparent">
          &amp;
        </span>
        {couple.person2.name}
      </h1>
      <FloralDivider className="h-6 w-48 text-violet-400" />
      <p className="text-lg text-stone-600">{weddingDateLabel}</p>
      <Countdown targetISO={weddingDateISO} />
      <a
        href="#events"
        className="mt-4 rounded-full bg-gradient-to-r from-violet-500 to-emerald-500 px-8 py-3 text-sm font-medium uppercase tracking-widest text-white shadow-md shadow-violet-200 transition-transform hover:scale-105"
      >
        View Events
      </a>

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

import Countdown from "./Countdown";
import { couple, weddingDateISO, weddingDateLabel } from "@/lib/wedding-data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col items-center justify-center gap-8 overflow-hidden bg-gradient-to-b from-violet-100 via-fuchsia-50 to-emerald-50 px-6 py-24 text-center"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl" />

      <p className="text-2xl tracking-[0.3em] bg-gradient-to-r from-violet-500 to-emerald-500 bg-clip-text text-transparent">
        N &amp; K
      </p>
      <p className="text-sm uppercase tracking-[0.4em] text-violet-500">
        We&apos;re Getting Married
      </p>
      <h1 className="text-5xl font-semibold leading-tight text-stone-800 sm:text-7xl">
        {couple.person1.name}
        <span className="mx-4 bg-gradient-to-r from-violet-500 to-emerald-500 bg-clip-text text-transparent">
          &amp;
        </span>
        {couple.person2.name}
      </h1>
      <div className="h-px w-24 bg-gradient-to-r from-violet-400 to-emerald-400" />
      <p className="text-lg text-stone-600">{weddingDateLabel}</p>
      <Countdown targetISO={weddingDateISO} />
      <a
        href="#events"
        className="mt-4 rounded-full bg-gradient-to-r from-violet-500 to-emerald-500 px-8 py-3 text-sm font-medium uppercase tracking-widest text-white shadow-md shadow-violet-200 transition-transform hover:scale-105"
      >
        View Events
      </a>
    </section>
  );
}

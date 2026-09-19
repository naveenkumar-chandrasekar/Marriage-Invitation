import Countdown from "./Countdown";
import { couple, weddingDateISO, weddingDateLabel } from "@/lib/wedding-data";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[90vh] flex-col items-center justify-center gap-8 bg-gradient-to-b from-rose-100 via-rose-50 to-rose-50 px-6 py-24 text-center"
    >
      <p className="text-sm uppercase tracking-[0.4em] text-rose-400">
        We&apos;re Getting Married
      </p>
      <h1 className="text-5xl font-semibold leading-tight text-stone-800 sm:text-7xl">
        {couple.bride.name}
        <span className="mx-4 text-rose-400">&amp;</span>
        {couple.groom.name}
      </h1>
      <div className="h-px w-24 bg-rose-300" />
      <p className="text-lg text-stone-600">{weddingDateLabel}</p>
      <Countdown targetISO={weddingDateISO} />
      <a
        href="#rsvp"
        className="mt-4 rounded-full bg-rose-400 px-8 py-3 text-sm font-medium uppercase tracking-widest text-white shadow-sm transition-colors hover:bg-rose-500"
      >
        RSVP Now
      </a>
    </section>
  );
}

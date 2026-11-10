import { FloralDivider, Heart } from "./Floral";
import { couple } from "@/lib/wedding-data";

const people = [
  {
    ...couple.person1,
    accent: {
      ring: "ring-violet-200",
      soft: "bg-violet-50",
      text: "text-violet-600",
      divider: "text-violet-300",
      // Sacramento's N inks right of its advance box; pull it back to centre.
      initial: "-translate-x-[3px]",
    },
  },
  {
    ...couple.person2,
    accent: {
      ring: "ring-emerald-200",
      soft: "bg-emerald-50",
      text: "text-emerald-600",
      divider: "text-emerald-300",
      initial: "",
    },
  },
];

export default function Couple() {
  return (
    <section
      id="couple"
      className="relative bg-gradient-to-b from-emerald-50 via-white to-emerald-50 px-4 pt-6 pb-4 sm:px-6 sm:pt-10"
    >
      <div className="mx-auto max-w-xl sm:max-w-2xl lg:max-w-4xl">
        <p className="mb-2 text-center text-xs uppercase tracking-[0.2em] text-violet-500 sm:text-sm sm:tracking-[0.3em]">
          With the blessings of our families
        </p>
        <h2 className="font-display text-center text-4xl font-medium bg-gradient-to-r from-violet-500 to-emerald-500 bg-clip-text text-transparent sm:text-5xl">
          Bride &amp; Groom
        </h2>
        <FloralDivider className="mx-auto mt-2 mb-8 h-6 w-48 text-violet-400 sm:mb-10" />

        <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
          {people.map((person, index) => (
            <div key={person.name} className="contents">
              {index === 1 && (
                <div className="flex justify-center" aria-hidden="true">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-inset ring-fuchsia-200">
                    <Heart className="h-4 w-4 text-fuchsia-400" />
                  </span>
                </div>
              )}
              <article
                className={`rounded-3xl bg-white/70 px-6 py-8 text-center shadow-sm ring-1 ring-inset backdrop-blur ${person.accent.ring}`}
              >
                <span
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white p-1 shadow-sm ring-1 ring-inset ${person.accent.ring}`}
                >
                  <span
                    className={`font-script flex h-full w-full items-center justify-center rounded-full text-4xl ${person.accent.soft} ${person.accent.text}`}
                  >
                    <span className={`translate-y-1.5 ${person.accent.initial}`}>{person.name.charAt(0)}</span>
                  </span>
                </span>

                <p
                  className={`mt-4 text-xs font-medium uppercase tracking-[0.3em] ${person.accent.text}`}
                >
                  {person.role}
                </p>
                <h3 className="font-script mt-1 text-5xl leading-tight text-stone-800">
                  {person.name}
                </h3>

                <FloralDivider className={`mx-auto my-3 h-5 w-32 ${person.accent.divider}`} />

                <p className="font-display text-lg italic text-stone-500">
                  {person.relation}
                </p>
                <p className="font-display mt-1 text-xl leading-snug font-semibold text-stone-700 lg:text-2xl">
                  <span className="block">{person.father}</span>
                  <span className={`block text-base font-normal ${person.accent.text}`}>&amp;</span>
                  <span className="block">{person.mother}</span>
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

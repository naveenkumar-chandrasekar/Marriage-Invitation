import { FloralBranch, FloralDivider } from "./Floral";
import { events } from "@/lib/wedding-data";

const accents = [
  {
    bg: "bg-violet-50",
    ring: "ring-violet-200",
    text: "text-violet-600",
    link: "text-violet-600",
  },
  {
    bg: "bg-emerald-50",
    ring: "ring-emerald-200",
    text: "text-emerald-600",
    link: "text-emerald-600",
  },
  {
    bg: "bg-amber-50",
    ring: "ring-amber-200",
    text: "text-amber-600",
    link: "text-amber-600",
  },
];

const timeline = events.map((event, eventIndex) => ({
  key: event.title,
  ...event,
  accent: accents[eventIndex % accents.length],
}));

export default function Events() {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-violet-50 py-20"
    >
      <FloralBranch className="pointer-events-none absolute top-4 left-0 h-24 w-40 text-violet-300/60 sm:h-32 sm:w-52 lg:h-40 lg:w-64" />
      <FloralBranch className="pointer-events-none absolute top-4 right-0 h-24 w-40 -scale-x-100 text-emerald-300/60 sm:h-32 sm:w-52 lg:h-40 lg:w-64" />

      <div className="relative mx-auto max-w-xl px-6 sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <p className="mb-2 text-center text-sm uppercase tracking-[0.3em] text-emerald-500">
          Save the Date
        </p>
        <h2 className="font-display text-center text-3xl bg-gradient-to-r from-violet-500 to-emerald-500 bg-clip-text text-transparent">
          Events
        </h2>
        <FloralDivider className="mx-auto mt-2 mb-14 h-6 w-48 text-emerald-400" />

        <div className="relative">
          <div className="absolute top-2 bottom-2 left-5 w-px border-l-2 border-dotted border-violet-300 sm:left-6 lg:left-7" />

          <div className="flex flex-col gap-6 lg:gap-8">
            {timeline.map((item) => (
              <div key={item.key} className="relative flex gap-4 sm:gap-5 lg:gap-6">
                <div className="relative z-10 flex w-10 shrink-0 justify-center pt-5 sm:w-12 sm:pt-6 lg:w-14 lg:pt-8">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm ring-2 ring-inset sm:h-12 sm:w-12 sm:text-2xl lg:h-14 lg:w-14 lg:text-3xl ${item.accent.ring}`}
                  >
                    {item.icon}
                  </span>
                </div>

                <div
                  className={`flex-1 rounded-2xl p-5 sm:p-6 lg:p-8 ${item.accent.bg}`}
                >
                  <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl text-stone-800 lg:text-2xl">
                      {item.title}
                    </h3>
                    <span className={`text-xs font-medium uppercase tracking-wide ${item.accent.text}`}>
                      {item.date}
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-stone-500 lg:text-base">
                    {item.description}
                  </p>

                  <div className="flex flex-col gap-3">
                    {item.locations.map((location) => (
                      <div
                        key={location.label}
                        className="flex flex-col gap-3 rounded-xl bg-white/70 p-4 sm:flex-row sm:items-start sm:justify-between"
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm ${item.accent.bg} ${item.accent.text}`}
                          >
                            &#128205;
                          </span>
                          <div>
                            {item.locations.length > 1 && (
                              <p
                                className={`text-xs font-semibold uppercase tracking-wide ${item.accent.text}`}
                              >
                                {location.label}
                              </p>
                            )}
                            <p className="font-display text-lg text-stone-800 lg:text-xl">
                              {location.name}
                            </p>
                            <p className="text-sm text-stone-500 lg:text-base">
                              {location.address}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-end gap-3 pl-11 sm:shrink-0 sm:flex-col sm:items-end sm:gap-2 sm:pl-0">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap lg:text-sm ${item.accent.bg} ${item.accent.text}`}
                          >
                            {location.time}
                          </span>
                          <a
                            href={location.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-sm font-medium underline decoration-dotted underline-offset-4 lg:text-base ${item.accent.link}`}
                          >
                            View Map &rarr;
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

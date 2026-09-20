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

const timeline = events.flatMap((event, eventIndex) =>
  event.locations.map((location, locationIndex) => ({
    key: `${event.title}-${location.label}`,
    eventTitle: event.title,
    icon: event.icon,
    date: event.date,
    description: event.description,
    isFirstOfEvent: locationIndex === 0,
    hasMultipleLocations: event.locations.length > 1,
    accent: accents[eventIndex % accents.length],
    ...location,
  }))
);

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
                <div className="relative z-10 flex w-10 shrink-0 justify-center sm:w-12 lg:w-14">
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
                      {item.eventTitle}
                      {item.hasMultipleLocations && (
                        <span className="ml-2 text-base text-stone-400">
                          &middot; {item.label}
                        </span>
                      )}
                    </h3>
                    <span className={`text-xs font-medium uppercase tracking-wide ${item.accent.text}`}>
                      {item.date}
                    </span>
                  </div>
                  {item.isFirstOfEvent && (
                    <p className="mb-3 text-sm text-stone-500 lg:text-base">
                      {item.description}
                    </p>
                  )}

                  <p className={`mt-2 text-sm font-semibold lg:text-base ${item.accent.text}`}>
                    {item.time}
                  </p>
                  <p className="font-display text-lg text-stone-800 lg:text-xl">
                    {item.name}
                  </p>
                  <p className="text-sm text-stone-500 lg:text-base">{item.address}</p>
                  <a
                    href={item.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-1 inline-block text-sm font-medium underline decoration-dotted underline-offset-4 lg:text-base ${item.accent.link}`}
                  >
                    View Map &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

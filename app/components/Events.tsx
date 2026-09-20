import { FloralBranch, FloralDivider, Heart } from "./Floral";
import { events } from "@/lib/wedding-data";

const accents = [
  { text: "text-violet-500", fill: "text-violet-400", ring: "ring-violet-200" },
  { text: "text-emerald-500", fill: "text-emerald-400", ring: "ring-emerald-200" },
];

const timeline = events.flatMap((event, eventIndex) =>
  event.locations.map((location, locationIndex) => ({
    key: `${event.title}-${location.label}`,
    eventTitle: event.title,
    icon: event.icon,
    date: event.date,
    description: event.description,
    isFirstOfEvent: locationIndex === 0,
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
      <FloralBranch className="pointer-events-none absolute top-4 left-0 h-24 w-40 text-violet-300/60 sm:h-32 sm:w-52" />
      <FloralBranch className="pointer-events-none absolute top-4 right-0 h-24 w-40 -scale-x-100 text-emerald-300/60 sm:h-32 sm:w-52" />

      <div className="relative mx-auto max-w-xl px-6">
        <p className="mb-2 text-center text-sm uppercase tracking-[0.3em] text-emerald-500">
          Save the Date
        </p>
        <h2 className="font-display text-center text-3xl bg-gradient-to-r from-violet-500 to-emerald-500 bg-clip-text text-transparent">
          Events
        </h2>
        <FloralDivider className="mx-auto mt-2 mb-14 h-6 w-48 text-emerald-400" />

        <div className="relative">
          <div className="absolute top-2 bottom-2 left-5 w-px border-l-2 border-dotted border-violet-300 sm:left-6" />

          <div className="flex flex-col gap-10">
            {timeline.map((item) => (
              <div key={item.key} className="relative flex gap-4 pl-0 sm:gap-5">
                <div className="relative z-10 flex w-10 shrink-0 justify-center sm:w-12">
                  {item.isFirstOfEvent ? (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm ring-2 ring-inset ring-violet-200 sm:h-12 sm:w-12 sm:text-2xl">
                      {item.icon}
                    </span>
                  ) : (
                    <span className="flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12">
                      <Heart className={`h-4 w-4 ${item.accent.fill}`} />
                    </span>
                  )}
                </div>

                <div className="flex-1 pb-1">
                  {item.isFirstOfEvent && (
                    <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl text-stone-800">
                        {item.eventTitle}
                      </h3>
                      <span className={`text-xs font-medium uppercase tracking-wide ${item.accent.text}`}>
                        {item.date}
                      </span>
                    </div>
                  )}
                  {item.isFirstOfEvent && (
                    <p className="mb-3 text-sm text-stone-500">{item.description}</p>
                  )}

                  <p className={`text-sm font-semibold ${item.accent.text}`}>{item.time}</p>
                  <p className="font-display text-lg text-stone-800">
                    {item.name}
                    <span className="ml-2 text-sm font-sans font-normal text-stone-400">
                      &middot; {item.label}
                    </span>
                  </p>
                  <p className="text-sm text-stone-500">{item.address}</p>
                  <a
                    href={item.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-1 inline-block text-sm font-medium underline decoration-dotted underline-offset-4 ${item.accent.text}`}
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

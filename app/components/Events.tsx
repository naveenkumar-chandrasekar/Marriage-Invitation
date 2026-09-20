import { FloralBranch, FloralDivider } from "./Floral";
import { events } from "@/lib/wedding-data";

const accents = [
  {
    frame: "from-violet-300 via-fuchsia-200 to-violet-300",
    badge: "from-violet-400 to-violet-300",
    pill: "bg-violet-50 text-violet-600",
    dash: "border-violet-200",
    pin: "bg-violet-500",
    time: "text-violet-500",
    link: "border-violet-300 text-violet-600 hover:bg-violet-50",
    watermark: "text-violet-200",
  },
  {
    frame: "from-emerald-300 via-teal-200 to-emerald-300",
    badge: "from-emerald-400 to-emerald-300",
    pill: "bg-emerald-50 text-emerald-600",
    dash: "border-emerald-200",
    pin: "bg-emerald-500",
    time: "text-emerald-500",
    link: "border-emerald-300 text-emerald-600 hover:bg-emerald-50",
    watermark: "text-emerald-200",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="bg-gradient-to-b from-emerald-50 via-white to-violet-50 py-20"
    >
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-2 text-center text-sm uppercase tracking-[0.3em] text-emerald-500">
          Save the Date
        </p>
        <h2 className="font-display text-center text-3xl bg-gradient-to-r from-violet-500 to-emerald-500 bg-clip-text text-transparent">
          Events
        </h2>
        <FloralDivider className="mx-auto mb-12 h-6 w-48 text-emerald-400" />
        <div className="relative flex flex-col gap-10">
          <div className="pointer-events-none absolute top-6 bottom-6 left-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-violet-300 via-fuchsia-200 to-emerald-300 sm:left-8" />
          {events.map((event, index) => {
            const accent = accents[index % accents.length];
            return (
              <div key={event.title} className="relative flex gap-3 sm:gap-5">
                <div className="flex w-12 shrink-0 justify-center sm:w-16">
                  <span
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl shadow-md sm:h-16 sm:w-16 sm:text-3xl ${accent.badge}`}
                  >
                    {event.icon}
                  </span>
                </div>

                <div
                  className={`flex-1 rounded-[2rem] bg-gradient-to-br p-[2px] shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl ${accent.frame}`}
                >
                  <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-white p-6 sm:p-8">
                    <FloralBranch
                      className={`pointer-events-none absolute -top-4 -right-6 h-20 w-32 rotate-90 opacity-60 ${accent.watermark}`}
                    />
                    <div className="relative flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-2xl text-stone-800">
                        {event.title}
                      </h3>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${accent.pill}`}
                      >
                        {event.date}
                      </span>
                    </div>
                    <p className="relative mt-3 text-stone-600">{event.description}</p>

                    <div className="relative mt-6 flex flex-col">
                    {event.locations.map((location, locationIndex) => (
                      <div key={location.label}>
                        {locationIndex > 0 && (
                          <div className="flex justify-start pl-[27px]">
                            <div className={`h-5 w-0 border-l-2 border-dashed ${accent.dash}`} />
                          </div>
                        )}
                        <div
                          className={`group flex flex-wrap items-center gap-4 rounded-2xl border-2 border-dashed bg-stone-50/60 px-5 py-4 transition-colors hover:border-solid hover:bg-white ${accent.dash}`}
                        >
                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm text-white shadow-sm ${accent.pin}`}
                          >
                            📍
                          </span>
                          <div className="flex-1">
                            <span
                              className={`text-xs font-semibold uppercase tracking-wide ${accent.time}`}
                            >
                              {location.label}
                            </span>
                            <p className="font-display text-lg text-stone-800">
                              {location.name}
                            </p>
                            <p className="text-sm text-stone-500">{location.address}</p>
                          </div>
                          <div className="flex shrink-0 flex-col items-end gap-2">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-medium ${accent.pill}`}
                            >
                              🕐 {location.time}
                            </span>
                            <a
                              href={location.mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${accent.link}`}
                            >
                              View Map &rarr;
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

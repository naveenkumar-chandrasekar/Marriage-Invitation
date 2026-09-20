import { events } from "@/lib/wedding-data";

const accents = [
  {
    ring: "ring-violet-200",
    badge: "bg-violet-100 text-violet-600",
    pill: "bg-violet-50 text-violet-600",
    link: "border-violet-300 text-violet-600 hover:bg-violet-50",
  },
  {
    ring: "ring-emerald-200",
    badge: "bg-emerald-100 text-emerald-600",
    pill: "bg-emerald-50 text-emerald-600",
    link: "border-emerald-300 text-emerald-600 hover:bg-emerald-50",
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
        <h2 className="mb-12 text-center text-3xl font-semibold bg-gradient-to-r from-violet-500 to-emerald-500 bg-clip-text text-transparent">
          Events
        </h2>
        <div className="flex flex-col gap-6">
          {events.map((event, index) => {
            const accent = accents[index % accents.length];
            return (
              <div
                key={event.title}
                className={`rounded-3xl bg-white p-8 shadow-sm ring-1 ${accent.ring} transition-shadow hover:shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl ${accent.badge}`}
                  >
                    {event.icon}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl font-semibold text-stone-800">
                        {event.title}
                      </h3>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${accent.pill}`}
                      >
                        {event.date}
                      </span>
                    </div>
                    <p className="mt-3 text-stone-600">{event.description}</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {event.locations.map((location) => (
                        <a
                          key={location.label}
                          href={location.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${accent.link}`}
                        >
                          📍 {location.label}
                        </a>
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

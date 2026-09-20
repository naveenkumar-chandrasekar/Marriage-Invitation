import { events } from "@/lib/wedding-data";

const accents = [
  {
    frame: "from-violet-300 via-fuchsia-200 to-violet-300",
    badge: "from-violet-400 to-violet-300",
    pill: "bg-violet-50 text-violet-600",
    row: "border-violet-100",
    time: "text-violet-500",
    link: "border-violet-300 text-violet-600 hover:bg-violet-50",
  },
  {
    frame: "from-emerald-300 via-teal-200 to-emerald-300",
    badge: "from-emerald-400 to-emerald-300",
    pill: "bg-emerald-50 text-emerald-600",
    row: "border-emerald-100",
    time: "text-emerald-500",
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
        <div className="flex flex-col gap-8">
          {events.map((event, index) => {
            const accent = accents[index % accents.length];
            return (
              <div
                key={event.title}
                className={`rounded-[2rem] bg-gradient-to-br p-[2px] shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl ${accent.frame}`}
              >
                <div className="rounded-[calc(2rem-2px)] bg-white p-8">
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-3xl shadow-inner ${accent.badge}`}
                    >
                      {event.icon}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-2xl font-semibold text-stone-800">
                          {event.title}
                        </h3>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${accent.pill}`}
                        >
                          {event.date}
                        </span>
                      </div>
                      <p className="mt-3 text-stone-600">{event.description}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    {event.locations.map((location) => (
                      <div
                        key={location.label}
                        className={`flex flex-wrap items-center justify-between gap-4 rounded-2xl border bg-stone-50/60 px-5 py-4 ${accent.row}`}
                      >
                        <div>
                          <span
                            className={`text-xs font-semibold uppercase tracking-wide ${accent.time}`}
                          >
                            {location.label}
                          </span>
                          <p className="mt-0.5 font-semibold text-stone-800">
                            {location.name}
                          </p>
                          <p className="text-sm text-stone-500">{location.address}</p>
                          <p className={`mt-1 text-sm font-medium ${accent.time}`}>
                            {location.time}
                          </p>
                        </div>
                        <a
                          href={location.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${accent.link}`}
                        >
                          📍 View Map
                        </a>
                      </div>
                    ))}
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

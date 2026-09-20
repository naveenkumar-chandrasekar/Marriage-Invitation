import { events } from "@/lib/wedding-data";

export default function Events() {
  return (
    <section id="events" className="bg-rose-50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-center text-3xl font-semibold text-rose-500">
          Events
        </h2>
        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex flex-col justify-between gap-4 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-stone-800">{event.title}</h3>
                <p className="text-stone-600">{event.date}</p>
              </div>
              <div className="flex flex-wrap gap-3 sm:justify-end">
                {event.locations.map((location) => (
                  <a
                    key={location.label}
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-rose-300 px-4 py-2 text-sm font-medium text-rose-500 transition-colors hover:bg-rose-100"
                  >
                    {location.label} &rarr;
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

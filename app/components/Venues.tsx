import { venues } from "@/lib/wedding-data";

export default function Venues() {
  return (
    <section id="venues" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-center text-3xl font-semibold text-rose-500">
          Venues
        </h2>
        <div className="flex flex-col gap-4">
          {venues.map((venue) => (
            <a
              key={venue.name}
              href={venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-rose-50 p-6 shadow-sm transition-colors hover:bg-rose-100"
            >
              <h3 className="text-lg font-semibold text-stone-800">{venue.name}</h3>
              <p className="text-stone-600">{venue.address}</p>
              <span className="mt-2 inline-block text-sm font-medium text-rose-500">
                View on map &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

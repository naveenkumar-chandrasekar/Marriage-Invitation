import { couple } from "@/lib/wedding-data";

export default function Couple() {
  return (
    <section className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 bg-rose-50 px-6 py-16 sm:grid-cols-2">
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-rose-100" />
        <h2 className="text-2xl font-semibold text-rose-500">{couple.bride.name}</h2>
        <p className="mt-2 text-stone-600">{couple.bride.about}</p>
      </div>
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-rose-100" />
        <h2 className="text-2xl font-semibold text-rose-500">{couple.groom.name}</h2>
        <p className="mt-2 text-stone-600">{couple.groom.about}</p>
      </div>
    </section>
  );
}

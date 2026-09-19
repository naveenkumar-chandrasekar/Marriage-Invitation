"use client";

import { useState, type FormEvent } from "react";

export default function Rsvp() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="rsvp" className="bg-rose-50 py-20">
      <div className="mx-auto max-w-md px-6 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-rose-500">RSVP</h2>
        <p className="mb-8 text-stone-600">
          Kindly let us know if you&apos;ll be joining us &mdash; this form is a
          placeholder for now.
        </p>
        {submitted ? (
          <p className="rounded-2xl bg-white p-6 text-stone-700 shadow-sm">
            Thank you! (Placeholder confirmation &mdash; nothing is saved yet.)
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <input
              required
              type="text"
              placeholder="Your name"
              className="rounded-full border border-rose-200 bg-white px-5 py-3 text-stone-800 outline-none focus:border-rose-400"
            />
            <select
              defaultValue="yes"
              className="rounded-full border border-rose-200 bg-white px-5 py-3 text-stone-800 outline-none focus:border-rose-400"
            >
              <option value="yes">Joyfully attending</option>
              <option value="no">Regretfully declining</option>
            </select>
            <input
              type="number"
              min={1}
              placeholder="Number of guests"
              className="rounded-full border border-rose-200 bg-white px-5 py-3 text-stone-800 outline-none focus:border-rose-400"
            />
            <button
              type="submit"
              className="rounded-full bg-rose-400 px-8 py-3 text-sm font-medium uppercase tracking-widest text-white shadow-sm transition-colors hover:bg-rose-500"
            >
              Send RSVP
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

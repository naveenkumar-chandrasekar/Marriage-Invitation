import { story } from "@/lib/wedding-data";

export default function Story() {
  return (
    <section id="story" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-center text-3xl font-semibold text-rose-500">
          Our Story
        </h2>
        <ol className="relative border-l border-rose-200 pl-8">
          {story.map((chapter) => (
            <li key={chapter.year} className="mb-10 last:mb-0">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-rose-400 bg-white" />
              <p className="text-sm uppercase tracking-widest text-rose-400">
                {chapter.year}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-stone-800">
                {chapter.title}
              </h3>
              <p className="mt-2 text-stone-600">{chapter.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

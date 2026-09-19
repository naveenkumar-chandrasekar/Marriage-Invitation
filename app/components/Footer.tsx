import { couple } from "@/lib/wedding-data";

export default function Footer() {
  return (
    <footer className="bg-white py-12 text-center">
      <p className="text-xl text-rose-400">
        {couple.bride.name} &amp; {couple.groom.name}
      </p>
      <p className="mt-2 text-sm text-stone-400">
        Placeholder content &mdash; details to be updated soon.
      </p>
    </footer>
  );
}

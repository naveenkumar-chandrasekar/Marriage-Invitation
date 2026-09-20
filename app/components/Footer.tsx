import { couple } from "@/lib/wedding-data";

export default function Footer() {
  return (
    <footer className="bg-white py-12 text-center">
      <p className="text-xl text-rose-400">
        {couple.person1.name} &amp; {couple.person2.name}
      </p>
      <p className="mt-2 text-sm text-stone-400">We can&apos;t wait to celebrate with you.</p>
    </footer>
  );
}

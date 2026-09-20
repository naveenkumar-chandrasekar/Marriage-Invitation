import { FloralDivider } from "./Floral";
import { couple } from "@/lib/wedding-data";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-violet-50 to-emerald-50 py-12 text-center">
      <FloralDivider className="mx-auto mb-4 h-5 w-40 text-violet-300" />
      <p className="text-xl font-semibold bg-gradient-to-r from-violet-500 to-emerald-500 bg-clip-text text-transparent">
        {couple.person1.name} &amp; {couple.person2.name}
      </p>
      <p className="mt-2 text-sm text-stone-400">We can&apos;t wait to celebrate with you.</p>
    </footer>
  );
}

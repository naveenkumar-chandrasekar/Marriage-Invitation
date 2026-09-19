const links = [
  { href: "#story", label: "Our Story" },
  { href: "#events", label: "Events" },
  { href: "#venues", label: "Venues" },
  { href: "#rsvp", label: "RSVP" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rose-100 bg-rose-50/80 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-semibold tracking-wide text-rose-500">
          B &amp; G
        </a>
        <ul className="flex gap-4 text-sm text-stone-600 sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a className="transition-colors hover:text-rose-500" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

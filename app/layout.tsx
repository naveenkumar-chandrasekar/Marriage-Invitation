import type { Metadata, Viewport } from "next";
import { Marcellus, Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Our Wedding Invitation",
  description: "Join us as we celebrate our wedding.",
};

// Opt out of forced dark mode (Chrome Android, Samsung Internet) so the
// pastel light design renders the same on phones as on desktop.
export const viewport: Viewport = {
  colorScheme: "only light",
  themeColor: "#f6f3fb",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${marcellus.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

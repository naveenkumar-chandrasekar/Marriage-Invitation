import Hero from "./components/Hero";
import Events from "./components/Events";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-display text-stone-800">
      <Hero />
      <Events />
      <Footer />
    </div>
  );
}

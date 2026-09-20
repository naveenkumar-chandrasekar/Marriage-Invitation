import Hero from "./components/Hero";
import Events from "./components/Events";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-serif text-stone-800">
      <Hero />
      <Events />
      <Rsvp />
      <Footer />
    </div>
  );
}

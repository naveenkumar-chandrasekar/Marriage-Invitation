import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Couple from "./components/Couple";
import Story from "./components/Story";
import Events from "./components/Events";
import Venues from "./components/Venues";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-serif text-stone-800">
      <Nav />
      <Hero />
      <Couple />
      <Story />
      <Events />
      <Venues />
      <Rsvp />
      <Footer />
    </div>
  );
}

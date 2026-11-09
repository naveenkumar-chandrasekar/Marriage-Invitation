import Hero from "./components/Hero";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

export default function Home() {
  return (
    <div className="font-sans text-stone-800">
      <Preloader />
      <Hero />
      <Events />
      <Footer />
    </div>
  );
}

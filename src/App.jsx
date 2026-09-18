import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import IntroSection from "./components/IntroSection";
import MovingBand from "./components/MovingBand";
import CapabilityShowcase from "./components/CapabilityShowcase";
import PromiseStrip from "./components/PromiseStrip";
import FutureSection from "./components/FutureSection";
import ApproachSection from "./components/ApproachSection";
import ProjectsSection from "./components/ProjectsSection";
import StatementSection from "./components/StatementSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import useScrollReveal from "./hooks/useScrollReveal";
import "./App.css";

export default function App() {
  useScrollReveal();

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <HeroSlider />
        <IntroSection />
        <MovingBand />
        <CapabilityShowcase />
        <PromiseStrip />
        <FutureSection />
        <ApproachSection />
        <ProjectsSection />
        <StatementSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

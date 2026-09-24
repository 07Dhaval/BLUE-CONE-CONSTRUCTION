import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import IntroSection from "./components/IntroSection";
import MovingBand from "./components/MovingBand";
import CapabilityShowcase from "./components/CapabilityShowcase";
import PromiseStrip from "./components/PromiseStrip";
import ConstructionStatsSection from "./components/ConstructionStatsSection";
import FutureSection from "./components/FutureSection";
import ApproachSection from "./components/ApproachSection";
import ProjectsSection from "./components/ProjectsSection";
import InvestorSection from "./components/InvestorSection";
import CareersSection from "./components/CareersSection";
import VendorRegistrationSection from "./components/VendorRegistrationSection";
import StatementSection from "./components/StatementSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import useScrollReveal from "./hooks/useScrollReveal";
import "./App.css";

export default function App() {
  useScrollReveal();

  useEffect(() => {
    const scrollToCurrentHash = () => {
      const sectionId = decodeURIComponent(window.location.hash.slice(1));
      if (!sectionId) return;

      document.getElementById(sectionId)?.scrollIntoView({ block: "start" });
    };

    const animationFrame = requestAnimationFrame(scrollToCurrentHash);
    window.addEventListener("hashchange", scrollToCurrentHash);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("hashchange", scrollToCurrentHash);
    };
  }, []);

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <HeroSlider />
        <IntroSection />
        <MovingBand />
        <CapabilityShowcase />
        <PromiseStrip />
        <ConstructionStatsSection />
        <FutureSection />
        <ApproachSection />
        <ProjectsSection />
        <InvestorSection />
        <CareersSection />
        <VendorRegistrationSection />
        <StatementSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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
import WhatsAppButton from "./components/WhatsAppButton";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import InvestorPage from "./pages/InvestorPage";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";
import CsrPage from "./pages/CsrPage";
import VendorPage from "./pages/VendorPage";
import useScrollReveal from "./hooks/useScrollReveal";
import "./App.css";

function HomePage() {
  return (
    <>
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
    </>
  );
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const pageNames = {
      "/": "Building a Better Tomorrow",
      "/about": "About Us",
      "/services": "Our Services",
      "/projects": "Our Projects",
      "/investor-relations": "Investor Relations",
      "/career": "Careers",
      "/contact": "Contact Us",
      "/csr": "Social Services & CSR",
      "/vendor-registration": "Vendor Registration",
    };

    document.title = `Blue Cone Construction | ${pageNames[pathname] || "Building a Better Tomorrow"}`;
  }, [pathname]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        target?.scrollIntoView({ block: "start" });
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  useScrollReveal(location.pathname);

  return (
    <div className="app-shell">
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/investor-relations" element={<InvestorPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/csr" element={<CsrPage />} />
          <Route path="/vendor-registration" element={<VendorPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

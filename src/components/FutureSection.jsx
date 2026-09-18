import { ArrowRight, Check } from "lucide-react";
import { siteImages } from "../data/siteData";

// Change only the Sustainability section colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function FutureSection() {
  return (
    <section id="sustainability" className={`section future-section ${componentTheme}`}>
      <div className="future-image-wrap">
        <img src={siteImages.sustainable} alt="Future-ready sustainable mixed-use development" />
        <div className="future-image-shade" />
      </div>
      <div className="site-container future-layout">
        <div className="future-card" data-reveal>
          <span className="section-kicker section-kicker-light">Responsible construction</span>
          <h2>Building a more sustainable future.</h2>
          <p>
            Better performance begins with better decisions—efficient planning,
            thoughtful material choices, durable details and spaces that remain useful.
          </p>
          <ul>
            <li><Check size={17} /> Resource-aware planning</li>
            <li><Check size={17} /> Durable, maintainable solutions</li>
            <li><Check size={17} /> People-first environments</li>
          </ul>
          <a className="pill-button pill-button-outline" href="#contact">
            Plan responsibly <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

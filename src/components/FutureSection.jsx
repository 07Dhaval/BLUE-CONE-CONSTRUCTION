import { ArrowRight, Check } from "lucide-react";
import { siteImages } from "../data/siteData";

// Change only the CSR section colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function FutureSection() {
  return (
    <section id="csr" className={`section future-section ${componentTheme}`}>
      <div className="future-image-wrap">
        <img src={siteImages.sustainable} alt="Future-ready sustainable mixed-use development" />
        <div className="future-image-shade" />
      </div>
      <div className="site-container future-layout">
        <div className="future-card" data-reveal>
          <span className="section-kicker section-kicker-light">Social services & CSR</span>
          <h2>Building stronger communities together.</h2>
          <p>
            Our responsibility extends beyond project boundaries through community-led
            initiatives, local opportunity and thoughtful environmental action.
          </p>
          <ul>
            <li><Check size={17} /> Community infrastructure support</li>
            <li><Check size={17} /> Local skills and livelihood development</li>
            <li><Check size={17} /> Environmental stewardship</li>
          </ul>
          <a className="pill-button pill-button-outline" href="#contact">
            Partner with our CSR team <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

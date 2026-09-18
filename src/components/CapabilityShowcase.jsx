import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { capabilities } from "../data/siteData";

// Change only the Capabilities section colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function CapabilityShowcase() {
  const [active, setActive] = useState(0);
  const item = capabilities[active];

  return (
    <section id="capabilities" className={`section capability-section ${componentTheme}`}>
      <div className="site-container">
        <div className="editorial-heading" data-reveal>
          <div>
            <span className="section-kicker">What we build</span>
            <h2>Expertise across the built environment.</h2>
          </div>
          <p>
            Explore our offering by project type. Every capability is connected by one standard:
            build responsibly, communicate clearly and deliver well.
          </p>
        </div>

        <div className="capability-tabs" role="tablist" aria-label="Construction capabilities" data-reveal>
          {capabilities.map((capability, index) => (
            <button
              key={capability.label}
              className={index === active ? "capability-tab-active" : ""}
              type="button"
              role="tab"
              aria-selected={index === active}
              onClick={() => setActive(index)}
            >
              <span>0{index + 1}</span>{capability.label}<ArrowRight size={18} />
            </button>
          ))}
        </div>

        <div className="capability-stage" key={item.label}>
          <img src={item.image} alt={`${item.label} construction capability`} />
          <div className="capability-stage-shade" />
          <div className="capability-stage-copy">
            <span>{item.eyebrow}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <div className="capability-tags">
              {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a className="pill-button pill-button-light" href="#contact">
              Discuss your project <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

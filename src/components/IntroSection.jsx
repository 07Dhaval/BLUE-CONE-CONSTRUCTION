import { ArrowRight } from "lucide-react";

// Change only the About section colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function IntroSection() {
  return (
    <section id="about" className={`section intro-section ${componentTheme}`}>
      <div className="site-container intro-layout">
        <div className="intro-title" data-reveal>
          <span className="section-kicker">Blue Cone Construction</span>
          <h2>From foundations to futures.</h2>
        </div>
        <div className="intro-copy" data-reveal>
          <p className="intro-lead">
            We bring design thinking, construction expertise and accountable delivery
            together to create spaces that perform for years to come.
          </p>
          <p>
            Our approach is simple: understand the ambition, plan around real conditions,
            and build every detail with care. One connected team keeps the journey clear
            from the first conversation to final handover.
          </p>
          <a className="line-link" href="#approach">
            Discover our approach <ArrowRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}

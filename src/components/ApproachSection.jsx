import { approachSteps } from "../data/siteData";

// Change only the Approach section colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function ApproachSection() {
  return (
    <section id="approach" className={`section approach-section ${componentTheme}`}>
      <div className="site-container">
        <div className="editorial-heading approach-heading" data-reveal>
          <div>
            <span className="section-kicker section-kicker-light">How we work</span>
            <h2>A clear path from ambition to handover.</h2>
          </div>
          <p>Defined stages, accountable teams and transparent communication throughout the build.</p>
        </div>
        <div className="approach-grid">
          {approachSteps.map(({ number, icon: Icon, title, copy }) => (
            <article key={number} data-reveal>
              <div className="approach-card-top"><span>{number}</span><Icon size={27} /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <i aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

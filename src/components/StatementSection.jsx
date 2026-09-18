// Change only the Statement section colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function StatementSection() {
  return (
    <section className={`statement-section ${componentTheme}`}>
      <div className="statement-grid" aria-hidden="true" />
      <div className="site-container statement-content" data-reveal>
        <span className="section-kicker section-kicker-light">Our commitment</span>
        <blockquote>“Every strong structure begins with trust—and earns it in every detail.”</blockquote>
        <p>BLUE CONE CONSTRUCTION</p>
      </div>
    </section>
  );
}

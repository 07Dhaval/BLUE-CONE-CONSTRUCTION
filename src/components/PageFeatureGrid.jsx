export default function PageFeatureGrid({
  eyebrow,
  title,
  intro,
  items,
  tone = "light",
}) {
  return (
    <section className={`page-feature-section page-feature-section-${tone}`}>
      <div className="site-container">
        <div className="page-feature-heading" data-reveal>
          <div>
            <span className="section-kicker">{eyebrow}</span>
            <h2>{title}</h2>
          </div>
          <p>{intro}</p>
        </div>
        <div className="page-feature-grid">
          {items.map(({ icon: Icon, title: itemTitle, copy }, index) => (
            <article key={itemTitle} data-reveal>
              <div className="page-feature-card-top">
                <span>0{index + 1}</span>
                <Icon size={27} />
              </div>
              <h3>{itemTitle}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

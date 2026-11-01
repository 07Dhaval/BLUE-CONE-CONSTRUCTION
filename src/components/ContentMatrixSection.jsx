export default function ContentMatrixSection({
  eyebrow,
  title,
  intro,
  items,
  tone = "surface",
  columns = 3,
}) {
  return (
    <section className={`content-matrix-section content-matrix-${tone}`}>
      <div className="site-container">
        <header className="content-matrix-heading" data-reveal>
          <div>
            <span className="section-kicker">{eyebrow}</span>
            <h2>{title}</h2>
          </div>
          <p>{intro}</p>
        </header>

        <div className={`content-matrix-grid content-matrix-columns-${columns}`}>
          {items.map(({ icon: Icon, title: itemTitle, copy, points }, index) => (
            <article key={itemTitle} data-reveal>
              <div className="content-matrix-card-top">
                <span>0{index + 1}</span>
                {Icon && <Icon size={28} />}
              </div>
              <h3>{itemTitle}</h3>
              <p>{copy}</p>
              {points?.length > 0 && (
                <ul>
                  {points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

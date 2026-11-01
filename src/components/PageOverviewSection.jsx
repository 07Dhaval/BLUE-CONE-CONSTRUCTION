export default function PageOverviewSection({
  eyebrow,
  title,
  lead,
  body,
  highlights = [],
  id,
}) {
  return (
    <section id={id} className="page-overview-section">
      <div className="site-container page-overview-layout">
        <div className="page-overview-heading" data-reveal>
          <span className="section-kicker">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div className="page-overview-copy" data-reveal>
          <p className="page-overview-lead">{lead}</p>
          <p>{body}</p>
          {highlights.length > 0 && (
            <ul className="page-overview-highlights">
              {highlights.map((item, index) => (
                <li key={item}>
                  <span>0{index + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

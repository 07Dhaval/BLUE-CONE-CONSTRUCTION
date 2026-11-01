import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageCta({
  eyebrow,
  title,
  copy,
  label = "Start a conversation",
  to = "/contact",
}) {
  return (
    <section className="page-cta-section">
      <div className="page-cta-grid" aria-hidden="true" />
      <div className="site-container page-cta-layout" data-reveal>
        <div>
          <span>{eyebrow}</span>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <Link className="pill-button pill-button-light" to={to}>
          {label} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

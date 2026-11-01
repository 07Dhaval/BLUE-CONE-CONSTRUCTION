import { ArrowDownRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function InnerPageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  imagePosition = "center",
}) {
  return (
    <section className="inner-hero">
      <img
        className="inner-hero-image"
        src={image}
        alt=""
        style={{ objectPosition: imagePosition }}
      />
      <div className="inner-hero-shade" />
      <div className="inner-hero-grid" aria-hidden="true" />
      <div className="site-container inner-hero-layout">
        <nav className="inner-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span aria-current="page">{eyebrow}</span>
        </nav>

        <div className="inner-hero-copy">
          <span className="inner-hero-kicker">{eyebrow}</span>
          <h1>
            {title}
            {accent && <span>{accent}</span>}
          </h1>
          <p>{description}</p>
        </div>

        <a className="inner-hero-scroll" href="#page-content" aria-label="Explore page content">
          <span>Explore</span>
          <ArrowDownRight size={20} />
        </a>
      </div>
    </section>
  );
}

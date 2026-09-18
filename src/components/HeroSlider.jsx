import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { heroSlides } from "../data/siteData";

// Change only the Hero colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [active, playing]);

  function changeSlide(direction) {
    setActive((current) => (current + direction + heroSlides.length) % heroSlides.length);
  }

  const slide = heroSlides[active];

  return (
    <section id="home" className={`hero-slider ${componentTheme}`} aria-roledescription="carousel" aria-label="Blue Cone highlights">
      <div className="hero-slides" aria-hidden="true">
        {heroSlides.map((item, index) => (
          <img
            key={item.line}
            className={`hero-slide-image${index === active ? " hero-slide-active" : ""}`}
            src={item.image}
            alt=""
            style={{ objectPosition: item.position }}
          />
        ))}
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-grid-overlay" aria-hidden="true" />

      <button className="hero-arrow hero-arrow-left" type="button" onClick={() => changeSlide(-1)} aria-label="Previous slide">
        <ArrowLeft size={22} />
      </button>
      <button className="hero-arrow hero-arrow-right" type="button" onClick={() => changeSlide(1)} aria-label="Next slide">
        <ArrowRight size={22} />
      </button>

      <div className="site-container hero-content-wrap">
        <div className="hero-content" key={`${active}-${slide.line}`} aria-live="polite">
          <div className="hero-eyebrow"><span /> {slide.eyebrow}</div>
          <h1>{slide.line}<span>{slide.accent}</span></h1>
          <p>{slide.copy}</p>
          <a className="pill-button pill-button-light" href="#capabilities">
            Explore capabilities <ArrowRight size={19} />
          </a>
        </div>
      </div>

      <div className="site-container hero-controls">
        <div className="hero-dots" role="tablist" aria-label="Choose hero slide">
          {heroSlides.map((item, index) => (
            <button
              key={item.line}
              className={`${index === active ? "hero-dot-active " : ""}${!playing ? "hero-dot-paused" : ""}`}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActive(index)}
            ><span>0{index + 1}</span></button>
          ))}
        </div>
        <button className="hero-play" type="button" onClick={() => setPlaying((current) => !current)} aria-label={playing ? "Pause slider" : "Play slider"}>
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>

      <a className="hero-scroll" href="#about"><span>Scroll to discover</span><i /></a>
    </section>
  );
}

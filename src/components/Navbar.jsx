import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  X,
} from "lucide-react";
import towerImage from "../assets/generated/hero-tower.jpg";
import navbarLogo from "../assets/images/bluecone2.png";

// Change only the Navbar colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

const primaryNavigation = [
  { number: "01", label: "Home", href: "#home" },
  { number: "02", label: "About us", href: "#about" },
  { number: "03", label: "Capabilities", href: "#capabilities" },
  { number: "04", label: "Sustainability", href: "#sustainability" },
  { number: "05", label: "Approach", href: "#approach" },
  { number: "06", label: "Projects", href: "#projects" },
  { number: "07", label: "Contact", href: "#contact" },
];

const quickNavigation = primaryNavigation.filter(({ href }) =>
  ["#home", "#about", "#capabilities", "#projects", "#contact"].includes(href),
);

const capabilities = [
  "Commercial Construction",
  "Residential Development",
  "Civil & Infrastructure",
  "Renovation & Fit-outs",
  "Design & Planning",
  "Project Management",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);

      const current = primaryNavigation.reduce((active, item) => {
        const section = document.querySelector(item.href);
        return section && section.offsetTop <= window.scrollY + 180
          ? item.href.slice(1)
          : active;
      }, "home");

      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const overlayOpen = menuOpen || searchOpen;
    document.body.classList.toggle("menu-is-open", overlayOpen);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, searchOpen]);

  function closeLayers() {
    setMenuOpen(false);
    setSearchOpen(false);
  }

  const layerOpen = menuOpen || searchOpen;

  return (
    <>
      <header
        className={`site-header${scrolled ? " site-header-scrolled" : ""}${layerOpen ? " site-header-layer-open" : ""} ${componentTheme}`}
      >
        <div className="site-container navbar-row">
          <a className="navbar-brand" href="#home" onClick={closeLayers}>
            <img
              src={navbarLogo}
              alt="Blue Cone Construction"
              width="2427"
              height="409"
              fetchPriority="high"
            />
          </a>

          <nav className="navbar-quick-links" aria-label="Section navigation">
            {quickNavigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href.slice(1) ? "navbar-link-active" : ""}
                aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <span className="navbar-project-label">Start a project</span>
            <a className="navbar-project-link" href="#contact" aria-label="Start a project">
              <ArrowUpRight size={19} />
            </a>
            <button
              className="navbar-icon-button search-button"
              type="button"
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              onClick={() => {
                setSearchOpen((open) => !open);
                setMenuOpen(false);
              }}
            >
              {searchOpen ? <X size={23} /> : <Search size={23} />}
            </button>
            <button
              className={`navbar-icon-button menu-toggle${menuOpen ? " menu-toggle-open" : ""}`}
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => {
                setMenuOpen((open) => !open);
                setSearchOpen(false);
              }}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="site-menu" className={`menu-layer${menuOpen ? " menu-layer-visible" : ""} ${componentTheme}`} aria-hidden={!menuOpen}>
        <div className="menu-layer-grid" aria-hidden="true" />
        <div className="site-container menu-layout">
          <nav className="menu-primary" aria-label="Main navigation">
            {primaryNavigation.map((item) => (
              <a
                href={item.href}
                key={item.href}
                className={activeSection === item.href.slice(1) ? "menu-link-active" : ""}
                aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
                onClick={closeLayers}
                tabIndex={menuOpen ? 0 : -1}
              >
                <span>{item.number}</span>
                <strong>{item.label}</strong>
                <ArrowUpRight size={24} />
              </a>
            ))}
          </nav>

          <div className="menu-aside">
            <div className="menu-capabilities">
              <span className="menu-kicker">What we do</span>
              {capabilities.map((item) => <span key={item}>{item}</span>)}
            </div>
            <a className="menu-feature" href="#projects" onClick={closeLayers} tabIndex={menuOpen ? 0 : -1}>
              <img src={towerImage} alt="High-rise construction by Blue Cone" />
              <span>
                <small>Explore our capabilities</small>
                <strong>Built for the ambitions of tomorrow.</strong>
                <ArrowRight size={19} />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className={`search-layer${searchOpen ? " search-layer-visible" : ""} ${componentTheme}`} aria-hidden={!searchOpen}>
        <div className="site-container search-layout">
          <span className="menu-kicker">Search Blue Cone</span>
          <label htmlFor="site-search">What are you looking for?</label>
          <div className="search-field">
            <input
              id="site-search"
              type="search"
              placeholder="Services, projects, company..."
              tabIndex={searchOpen ? 0 : -1}
              autoComplete="off"
            />
            <button type="button" tabIndex={searchOpen ? 0 : -1} aria-label="Submit search">
              <ArrowRight size={24} />
            </button>
          </div>
          <p>Popular: Commercial construction · Residential · Project management</p>
        </div>
      </div>
    </>
  );
}

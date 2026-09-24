import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChevronDown,
  FolderKanban,
  Search,
  X,
} from "lucide-react";
import towerImage from "../assets/generated/hero-tower.jpg";
import navbarLogo from "../assets/images/bluecone2.png";

// Change only the Navbar colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

const navigation = [
  { number: "01", label: "About Us", href: "#about", section: "about" },
  {
    number: "02",
    label: "What We Do",
    children: [
      {
        label: "Services",
        href: "#capabilities",
        description: "Integrated construction expertise from planning to handover.",
        icon: Building2,
      },
      {
        label: "Projects",
        href: "#projects",
        description: "Explore the sectors and spaces we are built to deliver.",
        icon: FolderKanban,
      },
    ],
  },
  {
    number: "03",
    label: "Investor",
    href: "#investor-relations",
    section: "investor-relations",
  },
  { number: "04", label: "Career", href: "#careers", section: "careers" },
  { number: "05", label: "Contact", href: "#contact", section: "contact" },
  {
    number: "06",
    label: "Social Services (CSR)",
    href: "#csr",
    section: "csr",
  },
  {
    number: "07",
    label: "Vendor Registration",
    href: "#vendor-registration",
    section: "vendor-registration",
  },
];

const trackedSections = [
  "home",
  "about",
  "capabilities",
  "csr",
  "approach",
  "projects",
  "investor-relations",
  "careers",
  "vendor-registration",
  "contact",
];

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
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const desktopNavRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);

      const current = trackedSections.reduce((active, sectionId) => {
        const section = document.getElementById(sectionId);
        return section && section.offsetTop <= window.scrollY + 180
          ? sectionId
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
        setWorkDropdownOpen(false);
      }
    };

    const onPointerDown = (event) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(event.target)) {
        setWorkDropdownOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen, searchOpen]);

  function closeLayers() {
    setMenuOpen(false);
    setSearchOpen(false);
    setWorkDropdownOpen(false);
    setMobileWorkOpen(false);
  }

  const layerOpen = menuOpen || searchOpen;
  const workSectionActive = activeSection === "capabilities" || activeSection === "projects";

  return (
    <>
      <header
        className={`site-header${scrolled ? " site-header-scrolled" : ""}${layerOpen ? " site-header-layer-open" : ""}${workDropdownOpen ? " site-header-dropdown-open" : ""} ${componentTheme}`}
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

          <nav
            ref={desktopNavRef}
            className="navbar-desktop-nav"
            aria-label="Primary navigation"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setWorkDropdownOpen(false);
              }
            }}
          >
            {navigation.map((item) => {
              if (item.children) {
                return (
                  <div
                    className={`navbar-nav-item navbar-has-dropdown${workDropdownOpen ? " navbar-dropdown-active" : ""}`}
                    key={item.label}
                    onMouseEnter={() => setWorkDropdownOpen(true)}
                    onMouseLeave={() => setWorkDropdownOpen(false)}
                  >
                    <button
                      className={workSectionActive ? "navbar-link-active" : ""}
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={workDropdownOpen}
                      aria-controls="what-we-do-dropdown"
                      onClick={() => setWorkDropdownOpen((open) => !open)}
                    >
                      {item.label}
                      <ChevronDown size={14} strokeWidth={2.4} />
                    </button>

                    <div id="what-we-do-dropdown" className="navbar-dropdown-panel">
                      <div className="navbar-dropdown-heading">
                        <span>What we do</span>
                        <strong>Expertise that moves every project forward.</strong>
                      </div>
                      <div className="navbar-dropdown-links">
                        {item.children.map(({ label, href, description, icon: Icon }, index) => (
                          <a href={href} key={label} onClick={closeLayers}>
                            <span className="navbar-dropdown-number">0{index + 1}</span>
                            <span className="navbar-dropdown-icon"><Icon size={21} /></span>
                            <span className="navbar-dropdown-copy">
                              <strong>{label}</strong>
                              <small>{description}</small>
                            </span>
                            <ArrowUpRight size={19} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = item.section === activeSection;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={isActive ? "navbar-link-active" : ""}
                  aria-current={isActive ? "location" : undefined}
                  onClick={closeLayers}
                >
                  {item.desktopLabel || item.label}
                </a>
              );
            })}
          </nav>

          <div className="navbar-actions">
            <button
              className="navbar-icon-button search-button"
              type="button"
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              onClick={() => {
                setSearchOpen((open) => !open);
                setMenuOpen(false);
                setWorkDropdownOpen(false);
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
                setWorkDropdownOpen(false);
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
          <nav className="menu-primary" aria-label="Menu navigation">
            {navigation.map((item, index) => {
              const revealStyle = { "--menu-index": index };

              if (item.children) {
                return (
                  <div className={`menu-dropdown-group${mobileWorkOpen ? " menu-dropdown-group-open" : ""}`} key={item.label} style={revealStyle}>
                    <button
                      className={`menu-primary-trigger${workSectionActive ? " menu-link-active" : ""}`}
                      type="button"
                      aria-expanded={mobileWorkOpen}
                      aria-controls="mobile-work-links"
                      onClick={() => setMobileWorkOpen((open) => !open)}
                      tabIndex={menuOpen ? 0 : -1}
                    >
                      <span>{item.number}</span>
                      <strong>{item.label}</strong>
                      <ChevronDown size={24} />
                    </button>
                    <div id="mobile-work-links" className="menu-dropdown-links">
                      {item.children.map(({ label, href }) => (
                        <a href={href} key={label} onClick={closeLayers} tabIndex={menuOpen && mobileWorkOpen ? 0 : -1}>
                          <span />
                          {label}
                          <ArrowUpRight size={18} />
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = item.section === activeSection;
              return (
                <a
                  href={item.href}
                  key={item.label}
                  style={revealStyle}
                  className={isActive ? "menu-link-active" : ""}
                  aria-current={isActive ? "location" : undefined}
                  onClick={closeLayers}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <span>{item.number}</span>
                  <strong>{item.label}</strong>
                  <ArrowUpRight size={24} />
                </a>
              );
            })}
          </nav>

          <div className="menu-aside">
            <div className="menu-capabilities">
              <span className="menu-kicker">Construction capabilities</span>
              {capabilities.map((item) => <span key={item}>{item}</span>)}
            </div>
            <a className="menu-feature" href="#projects" onClick={closeLayers} tabIndex={menuOpen ? 0 : -1}>
              <img src={towerImage} alt="High-rise construction by Blue Cone" />
              <span>
                <small>Explore our projects</small>
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

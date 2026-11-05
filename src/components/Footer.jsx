import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcon";
import blueconeLogo from "../assets/images/bluecone2.png";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/blueconeconstructionspvtltd/" },
  { label: "Facebook", href: "https://www.facebook.com/blueconeconstructionspvtltd/" },
  { label: "YouTube", href: "https://www.youtube.com/blueconeconstructionspvtltd/" },
];

// Change only the Footer colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function Footer() {
  return (
    <footer id="site-footer" className={`site-footer ${componentTheme}`}>
      <div className="site-container footer-callout">
        <p>Ready to build what’s next?</p>
        <Link to="/contact">Let’s talk <ArrowUpRight size={25} /></Link>
      </div>
      <div className="site-container footer-main">
        <div className="footer-brand-column">
          <Link className="footer-image-logo" to="/" aria-label="Blue Cone Construction home">
            <img
              src={blueconeLogo}
              alt="Blue Cone Construction"
              width="2427"
              height="409"
              loading="lazy"
            />
          </Link>
          <p>Thoughtful planning. Dependable construction. Spaces built to last.</p>
          <span className="footer-social-title">Follow Blue Cone</span>
          <div className="footer-socials" aria-label="Social media">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Blue Cone on ${label}`}
                title={label}
              >
                <SocialIcon name={label} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/investor-relations">Investor relations</Link>
          <Link to="/career">Careers</Link>
          <Link to="/csr">Social services (CSR)</Link>
          <Link to="/contact">Contact</Link>
        </div>
        {/* <div className="footer-column">
          <h3>Capabilities</h3>
          <Link to="/services">Commercial</Link>
          <Link to="/services">Residential</Link>
          <Link to="/services">Infrastructure</Link>
          <Link to="/services">Turnkey delivery</Link>
        </div> */}
        <div className="footer-column">
          <h3>Project enquiries</h3>
          <Link to="/projects">Explore projects</Link>
          <Link to="/vendor-registration">Vendor registration</Link>
          <Link to="/contact">Send an enquiry</Link>
          <Link to="/contact">Request a call</Link>
        </div>
        <div className="footer-column">
          <h3>Address</h3>
          <p>Blue cone Constructions private limited,</p>
          <p>Opposite Civil Court,</p>
          <p>Dediapada, Narmada,</p>
          <p>Gujarat - 393040</p>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} Blue Cone Construction. All rights reserved.</span>
        <span>Building a better tomorrow.</span>
      </div>
    </footer>
  );
}

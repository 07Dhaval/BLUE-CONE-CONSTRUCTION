import { ArrowUpRight } from "lucide-react";
import SocialIcon from "./SocialIcon";
import blueconeLogo from "../assets/images/bluecone2.png";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
];

// Change only the Footer colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function Footer() {
  return (
    <footer id="site-footer" className={`site-footer ${componentTheme}`}>
      <div className="site-container footer-callout">
        <p>Ready to build what’s next?</p>
        <a href="#contact">Let’s talk <ArrowUpRight size={25} /></a>
      </div>
      <div className="site-container footer-main">
        <div className="footer-brand-column">
          <a className="footer-image-logo" href="#home" aria-label="Blue Cone Construction home">
            <img
              src={blueconeLogo}
              alt="Blue Cone Construction"
              width="2427"
              height="409"
              loading="lazy"
            />
          </a>
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
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#investor-relations">Investor relations</a>
          <a href="#careers">Careers</a>
          <a href="#csr">Social services (CSR)</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-column">
          <h3>Capabilities</h3>
          <a href="#capabilities">Commercial</a>
          <a href="#capabilities">Residential</a>
          <a href="#capabilities">Infrastructure</a>
          <a href="#capabilities">Turnkey delivery</a>
        </div>
        <div className="footer-column">
          <h3>Project enquiries</h3>
          <a href="#projects">Explore projects</a>
          <a href="#vendor-registration">Vendor registration</a>
          <a href="#contact">Send an enquiry</a>
          <a href="#contact">Request a call</a>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} Blue Cone Construction. All rights reserved.</span>
        <span>Building a better tomorrow.</span>
      </div>
    </footer>
  );
}

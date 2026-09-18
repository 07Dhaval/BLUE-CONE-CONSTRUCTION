import { useState } from "react";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";

// Change only the Contact section colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function ContactSection() {
  const [formSent, setFormSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setFormSent(true);
  }

  return (
    <section id="contact" className={`section contact-section ${componentTheme}`}>
      <div className="site-container contact-layout">
        <div className="contact-copy" data-reveal>
          <span className="section-kicker section-kicker-light">Start a conversation</span>
          <h2>Have a project in mind?</h2>
          <p>
            Share your project type, location and timeline. We’ll help you understand
            the clearest next step.
          </p>
          <div className="contact-details">
            <span><Mail size={19} /> Send a project enquiry</span>
            <span><Phone size={19} /> Request a callback</span>
            <span><MapPin size={19} /> Discuss your site</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-reveal>
          <div className="form-two-column">
            <label>Name<input name="name" type="text" placeholder="Your full name" required /></label>
            <label>Phone<input name="phone" type="tel" placeholder="Contact number" required /></label>
          </div>
          <label>Email<input name="email" type="email" placeholder="name@example.com" required /></label>
          <label>
            Project type
            <select name="project" defaultValue="" required>
              <option value="" disabled>Select a project type</option>
              <option>Commercial construction</option>
              <option>Residential development</option>
              <option>Civil and infrastructure</option>
              <option>Renovation and fit-out</option>
              <option>Other</option>
            </select>
          </label>
          <label>Project brief<textarea name="message" rows="4" placeholder="Tell us about the scope, location and timeline..." required /></label>
          <button className="pill-button form-submit" type="submit">Send enquiry <ArrowRight size={19} /></button>
          {formSent && <p className="form-status" role="status"><Check size={17} /> Details captured in this website demo.</p>}
        </form>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ArrowRight, Check, FileText, Mail } from "lucide-react";

export default function CareerApplicationSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="career-application" className="career-application-section">
      <div className="site-container career-application-layout">
        <div className="career-application-copy" data-reveal>
          <span className="section-kicker">Join Blue Cone</span>
          <h2>Bring your experience to work that matters.</h2>
          <p>
            Tell us where you can make an impact. Our team will review your profile
            against current and upcoming opportunities.
          </p>
          <div className="career-application-note">
            <FileText size={22} />
            <span>
              <strong>Resume format</strong>
              PDF, DOC or DOCX up to 5 MB
            </span>
          </div>
          <div className="career-application-note">
            <Mail size={22} />
            <span>
              <strong>Application review</strong>
              Shortlisted candidates will be contacted by the hiring team.
            </span>
          </div>
        </div>

        <form className="career-application-form" onSubmit={handleSubmit} data-reveal>
          <div className="career-form-heading">
            <span>Application form</span>
            <h3>Share your profile.</h3>
          </div>
          <div className="form-two-column">
            <label>
              Name
              <input name="name" type="text" placeholder="Your full name" required />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" placeholder="Contact number" required />
            </label>
          </div>
          <label>
            Email
            <input name="email" type="email" placeholder="name@example.com" required />
          </label>
          <label>
            Position applied for
            <input name="position" type="text" placeholder="Role or department" required />
          </label>
          <label>
            Resume
            <input name="resume" type="file" accept=".pdf,.doc,.docx" required />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us briefly about your experience and interests..."
              required
            />
          </label>
          <button className="pill-button form-submit" type="submit">
            Submit application <ArrowRight size={19} />
          </button>
          {submitted && (
            <p className="form-status" role="status">
              <Check size={17} /> Application captured in this website demo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

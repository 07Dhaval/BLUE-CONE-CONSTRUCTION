import { ArrowUpRight } from "lucide-react";
import { projectTypes } from "../data/siteData";

// Change only the Projects section colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function ProjectsSection() {
  return (
    <section id="projects" className={`section projects-section ${componentTheme}`}>
      <div className="site-container">
        <div className="editorial-heading" data-reveal>
          <div>
            <span className="section-kicker">Project sectors</span>
            <h2>Built for today. Ready for tomorrow.</h2>
          </div>
          <p>Original Blue Cone concepts across the sectors our integrated construction approach supports.</p>
        </div>
        <div className="project-grid">
          {projectTypes.map((project) => (
            <a className="project-tile" href="#contact" key={project.number} data-reveal>
              <img src={project.image} alt={project.title} />
              <div className="project-tile-shade" />
              <span className="project-number">{project.number}</span>
              <span className="project-open"><ArrowUpRight size={21} /></span>
              <div className="project-tile-copy">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

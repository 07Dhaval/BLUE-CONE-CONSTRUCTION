import {
  ArrowRight,
  Compass,
  Eye,
  HeartHandshake,
  Leaf,
  Ruler,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import InnerPageHero from "../components/InnerPageHero";
import ConstructionStatsSection from "../components/ConstructionStatsSection";
import PageFeatureGrid from "../components/PageFeatureGrid";
import PageCta from "../components/PageCta";
import ContentMatrixSection from "../components/ContentMatrixSection";
import StatementSection from "../components/StatementSection";
import { siteImages } from "../data/siteData";

const aboutValues = [
  {
    icon: ShieldCheck,
    title: "Accountability",
    copy: "Clear ownership, honest communication and dependable follow-through at every stage.",
  },
  {
    icon: Ruler,
    title: "Precision",
    copy: "Thoughtful planning and disciplined checks turn complex requirements into practical delivery.",
  },
  {
    icon: Users,
    title: "Partnership",
    copy: "Clients, consultants and site teams work as one connected project group.",
  },
  {
    icon: Leaf,
    title: "Responsibility",
    copy: "We consider people, materials and long-term performance in the choices we make.",
  },
];

const companyDirection = [
  {
    icon: Compass,
    title: "Our mission",
    copy: "To turn ambitious briefs into dependable built environments through clear planning, responsible execution and accountable delivery.",
    points: ["Practical planning", "Disciplined execution", "Dependable handover"],
  },
  {
    icon: Eye,
    title: "Our vision",
    copy: "To be a trusted construction partner known for thoughtful solutions, consistent quality and long-term relationships.",
    points: ["Trusted partnerships", "Future-ready thinking", "Lasting project value"],
  },
  {
    icon: HeartHandshake,
    title: "Our purpose",
    copy: "To build spaces and infrastructure that support people, business and communities well beyond project completion.",
    points: ["People-first outcomes", "Responsible choices", "Positive local impact"],
  },
];

export default function AboutPage() {
  return (
    <div className="inner-page inner-page-about">
      <InnerPageHero
        eyebrow="About us"
        title="Foundations built on trust."
        accent="Progress built together."
        description="Meet the thinking, standards and people-first approach behind Blue Cone Construction."
        image={siteImages.tower}
      />
      <section id="page-content" className="page-story-section">
        <div className="site-container page-story-layout">
          <div className="page-story-media" data-reveal>
            <img src={siteImages.infrastructure} alt="Blue Cone infrastructure construction work" />
            <span>Built with purpose</span>
          </div>
          <div className="page-story-copy" data-reveal>
            <span className="section-kicker">Our story</span>
            <h2>Construction expertise connected by one clear standard.</h2>
            <p className="page-story-lead">
              Blue Cone brings planning, engineering coordination and on-site execution
              together to create dependable spaces and infrastructure.
            </p>
            <p>
              We begin by understanding the ambition and the realities around it. From
              there, one connected team keeps decisions visible, details coordinated and
              delivery focused from early planning through handover.
            </p>
            <Link className="line-link" to="/services">
              Explore our services <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
      <ContentMatrixSection
        eyebrow="Mission, vision & purpose"
        title="A clear direction behind every decision."
        intro="Our company story is supported by the principles that guide how Blue Cone plans, builds and grows."
        items={companyDirection}
        tone="surface"
      />
      <ConstructionStatsSection />
      <PageFeatureGrid
        eyebrow="What guides us"
        title="Values made visible in the work."
        intro="Our standards shape the way we plan, communicate and deliver—not just the final result."
        items={aboutValues}
      />
      <StatementSection />
      <PageCta
        eyebrow="Build with confidence"
        title="Let’s turn your next ambition into a clear plan."
        copy="Start with a practical conversation about your project, site and priorities."
      />
    </div>
  );
}

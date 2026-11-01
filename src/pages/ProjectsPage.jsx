import {
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  HardHat,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import InnerPageHero from "../components/InnerPageHero";
import ProjectsSection from "../components/ProjectsSection";
import PageFeatureGrid from "../components/PageFeatureGrid";
import PageCta from "../components/PageCta";
import PageOverviewSection from "../components/PageOverviewSection";
import ContentMatrixSection from "../components/ContentMatrixSection";
import { siteImages } from "../data/siteData";

const projectDisciplines = [
  {
    icon: ClipboardCheck,
    title: "Pre-construction clarity",
    copy: "Scope, programme, cost priorities and responsibilities are aligned before work begins.",
  },
  {
    icon: HardHat,
    title: "Coordinated execution",
    copy: "Site teams, specialists and project controls move together around one delivery plan.",
  },
  {
    icon: CheckCircle2,
    title: "Quality handover",
    copy: "Structured inspections and close-out keep the final transition clear and complete.",
  },
];

const projectControls = [
  {
    icon: SearchCheck,
    title: "Scope and design review",
    copy: "The team reviews drawings, interfaces, specifications and site constraints before sequencing work.",
  },
  {
    icon: CalendarClock,
    title: "Programme control",
    copy: "Milestones, dependencies and procurement needs are tracked against an agreed delivery plan.",
  },
  {
    icon: ShieldCheck,
    title: "Safety and quality",
    copy: "Site activity is supported by defined inspections, quality checks and safe working procedures.",
  },
  {
    icon: Handshake,
    title: "Close-out and handover",
    copy: "Snag resolution, documentation and final coordination create a clearer transition to occupancy or operation.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="inner-page inner-page-projects">
      <InnerPageHero
        eyebrow="Our projects"
        title="Built for today."
        accent="Ready for tomorrow."
        description="Explore the sectors and project types supported by Blue Cone’s integrated construction approach."
        image={siteImages.sustainable}
      />
      <PageOverviewSection
        id="page-content"
        eyebrow="Project portfolio"
        title="A disciplined approach across different project types."
        lead="Blue Cone’s project experience is organised around the sectors, spaces and delivery challenges our teams are equipped to support."
        body="Each project starts with its own conditions. Our role is to create clarity around scope, programme and interfaces, then keep every stage connected through delivery."
        highlights={["Commercial and workplace environments", "Residential and community spaces", "Civil and supporting infrastructure"]}
      />
      <ProjectsSection />
      <ContentMatrixSection
        eyebrow="Project controls"
        title="How quality is protected from start to finish."
        intro="Behind every visible result is a structured system for coordination, programme control, safety and close-out."
        items={projectControls}
        tone="dark"
        columns={4}
      />
      <PageFeatureGrid
        eyebrow="Delivery discipline"
        title="The same care at every scale."
        intro="Every project moves through clear planning, coordinated execution and a structured handover."
        items={projectDisciplines}
        tone="surface"
      />
      <PageCta
        eyebrow="Your next project"
        title="Have a site, brief or early idea to discuss?"
        copy="We can help you define a practical starting point and the next decisions to make."
      />
    </div>
  );
}

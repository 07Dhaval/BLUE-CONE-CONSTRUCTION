import {
  Building2,
  ClipboardCheck,
  Hammer,
  HardHat,
  Ruler,
  Workflow,
} from "lucide-react";
import InnerPageHero from "../components/InnerPageHero";
import CapabilityShowcase from "../components/CapabilityShowcase";
import ApproachSection from "../components/ApproachSection";
import PageCta from "../components/PageCta";
import PageOverviewSection from "../components/PageOverviewSection";
import ContentMatrixSection from "../components/ContentMatrixSection";
import { siteImages } from "../data/siteData";

const serviceDirectory = [
  {
    icon: Building2,
    title: "Commercial construction",
    copy: "Coordinated delivery for workplaces, retail, hospitality and mixed-use environments.",
    points: ["Core and shell", "Building services coordination", "Interior completion"],
  },
  {
    icon: HardHat,
    title: "Residential development",
    copy: "Practical construction planning for apartments, villas and community-led developments.",
    points: ["Residential structures", "Common amenities", "Finishing and handover"],
  },
  {
    icon: Hammer,
    title: "Civil & infrastructure",
    copy: "Structured execution for civil works, site development and supporting infrastructure.",
    points: ["Earthworks and foundations", "Structural works", "External development"],
  },
  {
    icon: Ruler,
    title: "Renovation & fit-outs",
    copy: "Phased upgrades that balance live-site realities, programme control and finish quality.",
    points: ["Space refurbishment", "Interior fit-outs", "Services upgrades"],
  },
  {
    icon: Workflow,
    title: "Design coordination",
    copy: "A connected process that resolves drawings, specifications and buildability before site execution.",
    points: ["Design reviews", "Technical coordination", "Buildability planning"],
  },
  {
    icon: ClipboardCheck,
    title: "Project management",
    copy: "Clear control of scope, programme, quality, safety and communication from start to close-out.",
    points: ["Programme tracking", "Quality controls", "Reporting and handover"],
  },
];

export default function ServicesPage() {
  return (
    <div className="inner-page inner-page-services">
      <InnerPageHero
        eyebrow="Our services"
        title="One connected team."
        accent="Every stage covered."
        description="Integrated construction capabilities shaped around clarity, control and accountable delivery."
        image={siteImages.infrastructure}
      />
      <PageOverviewSection
        id="page-content"
        eyebrow="Integrated construction services"
        title="The right expertise at every project stage."
        lead="From early coordination to final handover, Blue Cone keeps the people, information and site activity moving around one clear plan."
        body="Our services can support a complete project or strengthen a specific phase. Every engagement begins with scope clarity, realistic sequencing and shared delivery priorities."
        highlights={["Plan around real site conditions", "Coordinate design and execution", "Track quality through handover"]}
      />
      <ContentMatrixSection
        eyebrow="Service directory"
        title="Practical capability across the built environment."
        intro="Explore the core service areas Blue Cone can bring together for commercial, residential and infrastructure requirements."
        items={serviceDirectory}
        tone="surface"
        columns={3}
      />
      <CapabilityShowcase />
      <ApproachSection />
      <PageCta
        eyebrow="Plan your project"
        title="Need the right delivery path for your scope?"
        copy="Tell us what you are building and where you are in the journey."
      />
    </div>
  );
}

import {
  BarChart3,
  ClipboardCheck,
  HeartHandshake,
  Lightbulb,
  Recycle,
  Search,
} from "lucide-react";
import InnerPageHero from "../components/InnerPageHero";
import FutureSection from "../components/FutureSection";
import PageFeatureGrid from "../components/PageFeatureGrid";
import PageCta from "../components/PageCta";
import PageOverviewSection from "../components/PageOverviewSection";
import ContentMatrixSection from "../components/ContentMatrixSection";
import { siteImages } from "../data/siteData";

const csrPriorities = [
  {
    icon: HeartHandshake,
    title: "Community support",
    copy: "Practical initiatives shaped around the needs of communities connected to our work.",
  },
  {
    icon: Lightbulb,
    title: "Skills and opportunity",
    copy: "Encouraging local capability, learning and pathways into dependable livelihoods.",
  },
  {
    icon: Recycle,
    title: "Environmental care",
    copy: "Responsible site practices and thoughtful use of resources across project delivery.",
  },
];

const initiativeProcess = [
  {
    icon: Search,
    title: "Understand local needs",
    copy: "Begin with the people, project context and practical needs connected to the surrounding community.",
    points: ["Community context", "Relevant local priorities", "Clear intended outcome"],
  },
  {
    icon: ClipboardCheck,
    title: "Plan responsible action",
    copy: "Define a focused initiative with realistic responsibilities, resources and implementation steps.",
    points: ["Practical scope", "Responsible partners", "Defined delivery plan"],
  },
  {
    icon: BarChart3,
    title: "Review the outcome",
    copy: "Track participation and practical results so future initiatives can be made more useful and accountable.",
    points: ["Outcome review", "Learning and feedback", "Continuous improvement"],
  },
];

export default function CsrPage() {
  return (
    <div className="inner-page inner-page-csr">
      <InnerPageHero
        eyebrow="Social services & CSR"
        title="Stronger projects."
        accent="Stronger communities."
        description="A responsible approach that considers people, opportunity and the environment around every project."
        image={siteImages.sustainable}
      />
      <PageOverviewSection
        id="page-content"
        eyebrow="Responsibility in action"
        title="Our impact should extend beyond the project boundary."
        lead="Construction is closely connected to people, livelihoods, local resources and the environment around every site."
        body="Blue Cone’s CSR direction focuses on practical initiatives that respond to genuine needs and complement responsible project delivery."
        highlights={["Community infrastructure support", "Skills and livelihood opportunity", "Environmental responsibility"]}
      />
      <FutureSection />
      <PageFeatureGrid
        eyebrow="Our focus"
        title="Responsibility beyond the project boundary."
        intro="We focus on practical action that supports communities and more thoughtful project delivery."
        items={csrPriorities}
      />
      <ContentMatrixSection
        eyebrow="How initiatives are shaped"
        title="Listen, plan and review."
        intro="A simple three-stage framework helps keep community initiatives focused, practical and connected to meaningful outcomes."
        items={initiativeProcess}
        tone="surface"
        columns={3}
      />
      <PageCta
        eyebrow="Community partnerships"
        title="Have a relevant initiative to discuss?"
        copy="Connect with our team about community-led programmes and responsible collaboration."
        label="Contact our CSR team"
      />
    </div>
  );
}

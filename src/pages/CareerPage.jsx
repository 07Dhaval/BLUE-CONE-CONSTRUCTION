import { GraduationCap, Lightbulb, ShieldCheck, Users } from "lucide-react";
import InnerPageHero from "../components/InnerPageHero";
import CareersSection from "../components/CareersSection";
import CareerApplicationSection from "../components/CareerApplicationSection";
import PageOverviewSection from "../components/PageOverviewSection";
import ContentMatrixSection from "../components/ContentMatrixSection";
import { siteImages } from "../data/siteData";

const careerCulture = [
  {
    icon: GraduationCap,
    title: "Learn through delivery",
    copy: "Build practical knowledge by working through real planning, coordination and site challenges.",
  },
  {
    icon: Lightbulb,
    title: "Improve the process",
    copy: "Bring ideas that make communication, quality and project delivery clearer and more effective.",
  },
  {
    icon: ShieldCheck,
    title: "Work responsibly",
    copy: "Treat safety, quality and professional conduct as part of every role—not separate tasks.",
  },
  {
    icon: Users,
    title: "Grow as one team",
    copy: "Collaborate across engineering, site execution and business support to solve problems together.",
  },
];

export default function CareerPage() {
  return (
    <div className="inner-page inner-page-career">
      <InnerPageHero
        eyebrow="Careers"
        title="Build your career."
        accent="Shape what comes next."
        description="Bring your ideas, discipline and experience to work that becomes part of everyday life."
        image={siteImages.infrastructure}
        imagePosition="center 62%"
      />
      <PageOverviewSection
        id="page-content"
        eyebrow="Growth and opportunity"
        title="Develop your craft while building meaningful work."
        lead="A construction career grows through responsibility, problem-solving and exposure to every stage of delivery."
        body="Blue Cone welcomes people who communicate clearly, take ownership and keep learning. Opportunities can span planning, engineering, project execution and business support."
        highlights={["Planning and engineering", "Site execution and quality", "Commercial and support functions"]}
      />
      <CareersSection />
      <ContentMatrixSection
        eyebrow="Life at Blue Cone"
        title="A culture built around progress."
        intro="The strongest teams combine practical learning, disciplined standards and the confidence to improve how work gets done."
        items={careerCulture}
        tone="surface"
        columns={4}
      />
      <CareerApplicationSection />
    </div>
  );
}

import {
  BarChart3,
  FileCheck2,
  Landmark,
  Scale,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import InnerPageHero from "../components/InnerPageHero";
import InvestorSection from "../components/InvestorSection";
import PageFeatureGrid from "../components/PageFeatureGrid";
import PageCta from "../components/PageCta";
import PageOverviewSection from "../components/PageOverviewSection";
import ContentMatrixSection from "../components/ContentMatrixSection";
import { siteImages } from "../data/siteData";

const investorResources = [
  {
    icon: BarChart3,
    title: "Business updates",
    copy: "A structured route for stakeholders seeking company and performance information.",
  },
  {
    icon: ShieldCheck,
    title: "Governance enquiries",
    copy: "Direct questions about policies, controls and responsible business practices to our team.",
  },
  {
    icon: FileCheck2,
    title: "Document requests",
    copy: "Request the relevant notices, policies or company information through one contact point.",
  },
];

const governanceFramework = [
  {
    icon: Landmark,
    title: "Responsible leadership",
    copy: "Strategic direction should remain connected to delivery realities, stakeholder expectations and long-term value.",
  },
  {
    icon: Scale,
    title: "Policy and oversight",
    copy: "Defined policies and internal controls provide a framework for consistent, accountable decision-making.",
  },
  {
    icon: BarChart3,
    title: "Performance visibility",
    copy: "Structured business information helps stakeholders understand priorities, progress and operational focus.",
  },
  {
    icon: UsersRound,
    title: "Stakeholder access",
    copy: "A clear enquiry route ensures information requests reach the appropriate company contact.",
  },
];

export default function InvestorPage() {
  return (
    <div className="inner-page inner-page-investor">
      <InnerPageHero
        eyebrow="Investor relations"
        title="Transparent progress."
        accent="Responsible growth."
        description="A clear route to Blue Cone’s governance, business and stakeholder information."
        image={siteImages.tower}
      />
      <PageOverviewSection
        id="page-content"
        eyebrow="Stakeholder information"
        title="Clarity supports confidence."
        lead="Blue Cone’s investor relations page provides a structured route for governance, company and stakeholder information."
        body="Company information, policies and formal documents are shared through the appropriate channel after internal review and approval."
        highlights={["Company and performance enquiries", "Governance and policy requests", "Stakeholder communication"]}
      />
      <InvestorSection />
      <ContentMatrixSection
        eyebrow="Governance framework"
        title="Principles for accountable growth."
        intro="A responsible business needs clear leadership, reliable controls and accessible stakeholder communication."
        items={governanceFramework}
        tone="dark"
        columns={4}
      />
      <PageFeatureGrid
        eyebrow="Stakeholder resources"
        title="Information with a clear point of contact."
        intro="Use our enquiry route to request the company information relevant to you."
        items={investorResources}
      />
      <PageCta
        eyebrow="Investor enquiries"
        title="Looking for specific stakeholder information?"
        copy="Send your request and our team can direct it to the appropriate contact."
        label="Contact investor relations"
      />
    </div>
  );
}

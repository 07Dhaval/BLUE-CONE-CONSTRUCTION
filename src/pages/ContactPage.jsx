import {
  Building2,
  CalendarClock,
  FileText,
  Handshake,
  Layers3,
  MapPin,
} from "lucide-react";
import InnerPageHero from "../components/InnerPageHero";
import PageFeatureGrid from "../components/PageFeatureGrid";
import ContactSection from "../components/ContactSection";
import PageOverviewSection from "../components/PageOverviewSection";
import ContentMatrixSection from "../components/ContentMatrixSection";
import { siteImages } from "../data/siteData";

const contactPaths = [
  {
    icon: Building2,
    title: "New projects",
    copy: "Share the project type, location, stage and expected timeline with our delivery team.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    copy: "Connect with us about specialist capabilities, supplier relationships or collaboration.",
  },
  {
    icon: MapPin,
    title: "Site discussions",
    copy: "Arrange an initial conversation around your site conditions and construction priorities.",
  },
];

const enquiryChecklist = [
  {
    icon: FileText,
    title: "Project brief",
    copy: "Explain what you are planning, the intended use and the support you need from a construction partner.",
  },
  {
    icon: MapPin,
    title: "Site location",
    copy: "Share the city or project region and any known access, context or live-site considerations.",
  },
  {
    icon: Layers3,
    title: "Current stage",
    copy: "Let us know whether the project is at concept, design, tender, pre-construction or execution stage.",
  },
  {
    icon: CalendarClock,
    title: "Expected timeline",
    copy: "Include key dates or programme expectations so the first conversation can stay practical.",
  },
];

export default function ContactPage() {
  return (
    <div className="inner-page inner-page-contact">
      <InnerPageHero
        eyebrow="Contact"
        title="Start with a conversation."
        accent="Build with clarity."
        description="Share your project, partnership or enquiry and we’ll help identify the clearest next step."
        image={siteImages.tower}
      />
      <PageOverviewSection
        id="page-content"
        eyebrow="Start a conversation"
        title="A useful first discussion starts with the right context."
        lead="Whether you have a defined brief or an early-stage idea, Blue Cone can help identify the next practical step."
        body="Use the enquiry form to share the project type, site location and current stage. Partnership, vendor and career enquiries can use their dedicated pages."
        highlights={["Project and construction enquiries", "Site and scope discussions", "Partnership conversations"]}
      />
      <PageFeatureGrid
        eyebrow="How we can help"
        title="Send your enquiry to the right team."
        intro="A few useful details help us understand your needs and respond more clearly."
        items={contactPaths}
        tone="surface"
      />
      <ContentMatrixSection
        eyebrow="Before you submit"
        title="Four details that make the conversation clearer."
        intro="You do not need a completed design package—just enough context for our team to understand where your project stands."
        items={enquiryChecklist}
        tone="white"
        columns={4}
      />
      <ContactSection />
    </div>
  );
}

import {
  BriefcaseBusiness,
  HardHat,
  PackageCheck,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import InnerPageHero from "../components/InnerPageHero";
import VendorRegistrationSection from "../components/VendorRegistrationSection";
import PageOverviewSection from "../components/PageOverviewSection";
import ContentMatrixSection from "../components/ContentMatrixSection";
import PageCta from "../components/PageCta";
import { siteImages } from "../data/siteData";

const vendorCategories = [
  {
    icon: PackageCheck,
    title: "Construction materials",
    copy: "Suppliers of compliant structural, finishing and supporting construction materials.",
  },
  {
    icon: HardHat,
    title: "Specialist contractors",
    copy: "Trade partners with relevant technical capability, supervision and project experience.",
  },
  {
    icon: Wrench,
    title: "Plant & equipment",
    copy: "Providers of dependable equipment, tools, maintenance and site technical support.",
  },
  {
    icon: Truck,
    title: "Logistics & support",
    copy: "Partners supporting movement, storage, site services and coordinated project logistics.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional services",
    copy: "Consultants and service providers supporting design, testing, compliance and delivery controls.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & quality services",
    copy: "Specialists who strengthen inspection, testing, safety systems and project assurance.",
  },
];

export default function VendorPage() {
  return (
    <div className="inner-page inner-page-vendor">
      <InnerPageHero
        eyebrow="Vendor registration"
        title="Capable partners."
        accent="Better delivery together."
        description="Introduce your business, specialist capability and service region to the Blue Cone team."
        image={siteImages.infrastructure}
      />
      <PageOverviewSection
        id="page-content"
        eyebrow="Become a delivery partner"
        title="Strong projects depend on capable, responsible partners."
        lead="Blue Cone welcomes suppliers, specialists and service providers who can support safe, consistent and dependable project delivery."
        body="Registration helps our team understand your capability, service region and relevant experience. Submission does not guarantee appointment; suitable partners are contacted when requirements align."
        highlights={["Share accurate company details", "Describe relevant capability and experience", "Identify your operating locations"]}
      />
      <ContentMatrixSection
        eyebrow="Vendor categories"
        title="Where your capability may support our projects."
        intro="Register under the category that best represents your core offering and use the form to explain your specialist strengths."
        items={vendorCategories}
        tone="dark"
        columns={3}
      />
      <VendorRegistrationSection />
      <PageCta
        eyebrow="Questions before registration"
        title="Need help choosing the right vendor category?"
        copy="Send a general enquiry with a short description of your company and primary offering."
        label="Contact our team"
      />
    </div>
  );
}

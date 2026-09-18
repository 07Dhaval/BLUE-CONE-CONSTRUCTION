import {
  CheckCircle2,
  ClipboardCheck,
  HardHat,
  Ruler,
} from "lucide-react";
import towerImage from "../assets/generated/hero-tower.jpg";
import infrastructureImage from "../assets/generated/hero-infrastructure.jpg";
import sustainableImage from "../assets/generated/hero-sustainable.jpg";

export const siteImages = {
  tower: towerImage,
  infrastructure: infrastructureImage,
  sustainable: sustainableImage,
};

export const heroSlides = [
  {
    image: towerImage,
    eyebrow: "Commercial construction",
    line: "Engineering landmarks.",
    accent: "Defining tomorrow.",
    copy: "Integrated planning and precise execution for spaces that move business forward.",
    position: "center center",
  },
  {
    image: infrastructureImage,
    eyebrow: "Civil & infrastructure",
    line: "Connecting cities.",
    accent: "Moving India forward.",
    copy: "Complex infrastructure delivered with disciplined engineering and responsible site management.",
    position: "center center",
  },
  {
    image: sustainableImage,
    eyebrow: "Future-ready development",
    line: "Building smarter.",
    accent: "Living better.",
    copy: "Thoughtful buildings that unite performance, human experience and long-term value.",
    position: "center center",
  },
];

export const capabilities = [
  {
    label: "Commercial",
    image: towerImage,
    eyebrow: "01 / Commercial",
    title: "High-performance spaces for ambitious businesses.",
    copy: "From corporate workplaces to retail environments, we coordinate every discipline around quality, programme and purpose.",
    tags: ["Office", "Retail", "Hospitality"],
  },
  {
    label: "Infrastructure",
    image: infrastructureImage,
    eyebrow: "02 / Infrastructure",
    title: "Civil engineering that keeps progress moving.",
    copy: "Structured planning, on-ground coordination and accountable delivery for demanding infrastructure and civil works.",
    tags: ["Civil works", "Structures", "Urban infrastructure"],
  },
  {
    label: "Residential",
    image: sustainableImage,
    eyebrow: "03 / Residential",
    title: "Places designed around the way people live.",
    copy: "Well-resolved homes and communities that bring together durable construction, considered details and everyday comfort.",
    tags: ["Apartments", "Villas", "Communities"],
  },
  {
    label: "Turnkey",
    image: towerImage,
    eyebrow: "04 / Turnkey delivery",
    title: "One team. Every stage. Complete accountability.",
    copy: "A single connected workflow from early planning and design coordination to construction, fit-out and final handover.",
    tags: ["Design & build", "Fit-outs", "Project management"],
  },
];

export const projectTypes = [
  {
    image: towerImage,
    category: "Commercial",
    title: "Workplaces & business districts",
    number: "01",
  },
  {
    image: sustainableImage,
    category: "Residential",
    title: "Contemporary urban living",
    number: "02",
  },
  {
    image: infrastructureImage,
    category: "Infrastructure",
    title: "Civil & structural development",
    number: "03",
  },
];

export const approachSteps = [
  {
    number: "01",
    icon: Ruler,
    title: "Understand",
    copy: "We begin with the site, brief, priorities and realities that shape the project.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Plan",
    copy: "Scope, budget, sequencing and responsibilities are made clear before execution.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Build",
    copy: "Coordinated teams deliver with safety, quality checks and consistent communication.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Deliver",
    copy: "Final inspections and a structured handover complete the journey with confidence.",
  },
];

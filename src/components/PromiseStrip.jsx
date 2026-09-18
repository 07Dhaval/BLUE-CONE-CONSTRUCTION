import { Building2, Layers3, Leaf, ShieldCheck } from "lucide-react";

const promises = [
  { icon: Building2, title: "Integrated delivery", copy: "One connected team across every project stage." },
  { icon: ShieldCheck, title: "Safety-led sites", copy: "Careful planning and responsible execution." },
  { icon: Layers3, title: "Quality in detail", copy: "Consistent checks from structure to finish." },
  { icon: Leaf, title: "Future-ready thinking", copy: "Smarter spaces designed for long-term value." },
];

// Change only the Promise strip colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function PromiseStrip() {
  return (
    <section className={`promise-strip ${componentTheme}`} aria-label="Blue Cone commitments">
      <div className="site-container promise-grid">
        {promises.map(({ icon: Icon, title, copy }) => (
          <article key={title} data-reveal>
            <Icon size={28} />
            <span>{title}</span>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

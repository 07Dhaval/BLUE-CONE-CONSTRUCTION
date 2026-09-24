import { useState } from "react";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Handshake,
  ShieldCheck,
} from "lucide-react";

// Change only the Vendor Registration section colors here.
const componentTheme =
  "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

const vendorSteps = [
  {
    icon: ClipboardCheck,
    label: "Submit your company and capability details.",
  },
  {
    icon: ShieldCheck,
    label: "Our team reviews compliance and project suitability.",
  },
  {
    icon: Handshake,
    label: "Qualified partners are contacted for relevant opportunities.",
  },
];

export default function VendorRegistrationSection() {
  const [formSent, setFormSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setFormSent(true);
  }

  return (
    <section
      id="vendor-registration"
      className={`relative bg-[var(--brand-surface)] py-20 md:py-28 xl:py-32 ${componentTheme}`}
    >
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1240px] gap-10 md:w-[calc(100%-4rem)] lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start" data-reveal>
          <span className="block text-[.69rem] font-extrabold uppercase tracking-[.18em] text-[var(--brand-blue-bright)]">
            Vendor registration
          </span>
          <h2 className="mt-3 text-[clamp(2.3rem,8vw,5rem)] font-extrabold leading-[.99] tracking-[-.055em] text-[var(--brand-navy)]">
            Partner with Blue Cone.
          </h2>
          <p className="mt-5 max-w-[480px] text-sm leading-7 text-[var(--brand-navy)]/75">
            We welcome capable suppliers, specialists and service partners who
            share our commitment to quality, safety and dependable delivery.
          </p>

          <div className="mt-8 grid gap-5">
            {vendorSteps.map(({ icon: Icon, label }, index) => (
              <div
                className="grid grid-cols-[32px_24px_minmax(0,1fr)] items-center gap-3 border-t border-[var(--brand-navy)]/15 pt-4"
                key={label}
              >
                <span className="text-[.65rem] font-extrabold tracking-[.16em] text-[var(--brand-blue)]">
                  0{index + 1}
                </span>
                <Icon size={22} className="text-[var(--brand-blue)]" />
                <p className="m-0 text-sm font-bold leading-6">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <form
          className="grid gap-5 bg-white p-5 shadow-[0_20px_60px_rgba(0,35,53,.12)] sm:p-8 md:p-10"
          onSubmit={handleSubmit}
          data-reveal
        >
          <div className="border-b border-[var(--brand-navy)]/15 pb-5">
            <span className="text-[.65rem] font-extrabold uppercase tracking-[.16em] text-[var(--brand-blue-bright)]">
              Registration form
            </span>
            <h3 className="mt-2 text-2xl font-bold text-[var(--brand-navy)]">
              Tell us about your business.
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-[.7rem] font-extrabold uppercase tracking-[.1em]">
              Company name
              <input
                className="h-12 min-w-0 border-0 border-b border-[var(--brand-navy)]/25 bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none focus:border-[var(--brand-blue-bright)]"
                name="company"
                type="text"
                placeholder="Registered company name"
                required
              />
            </label>
            <label className="grid gap-2 text-[.7rem] font-extrabold uppercase tracking-[.1em]">
              Contact person
              <input
                className="h-12 min-w-0 border-0 border-b border-[var(--brand-navy)]/25 bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none focus:border-[var(--brand-blue-bright)]"
                name="contactPerson"
                type="text"
                placeholder="Full name"
                required
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-[.7rem] font-extrabold uppercase tracking-[.1em]">
              Business email
              <input
                className="h-12 min-w-0 border-0 border-b border-[var(--brand-navy)]/25 bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none focus:border-[var(--brand-blue-bright)]"
                name="email"
                type="email"
                placeholder="name@company.com"
                required
              />
            </label>
            <label className="grid gap-2 text-[.7rem] font-extrabold uppercase tracking-[.1em]">
              Phone
              <input
                className="h-12 min-w-0 border-0 border-b border-[var(--brand-navy)]/25 bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none focus:border-[var(--brand-blue-bright)]"
                name="phone"
                type="tel"
                placeholder="Contact number"
                required
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-[.7rem] font-extrabold uppercase tracking-[.1em]">
              Service category
              <select
                className="h-12 min-w-0 border-0 border-b border-[var(--brand-navy)]/25 bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none focus:border-[var(--brand-blue-bright)]"
                name="category"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option>Construction materials</option>
                <option>Plant and equipment</option>
                <option>Specialist contractor</option>
                <option>Professional services</option>
                <option>Logistics and support</option>
                <option>Other</option>
              </select>
            </label>
            <label className="grid gap-2 text-[.7rem] font-extrabold uppercase tracking-[.1em]">
              Operating location
              <input
                className="h-12 min-w-0 border-0 border-b border-[var(--brand-navy)]/25 bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none focus:border-[var(--brand-blue-bright)]"
                name="location"
                type="text"
                placeholder="City / service region"
                required
              />
            </label>
          </div>

          <label className="grid gap-2 text-[.7rem] font-extrabold uppercase tracking-[.1em]">
            Capabilities
            <textarea
              className="min-h-28 resize-y border-0 border-b border-[var(--brand-navy)]/25 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-[var(--brand-blue-bright)]"
              name="capabilities"
              rows="4"
              placeholder="Briefly describe your products, services and relevant experience..."
              required
            />
          </label>

          <button
            className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-[var(--brand-blue)] px-5 text-[.78rem] font-extrabold text-white transition-[gap] duration-200 hover:gap-4"
            type="submit"
          >
            Submit registration <ArrowRight size={18} />
          </button>
          {formSent && (
            <p
              className="flex items-center gap-2 bg-[var(--brand-blue)]/10 p-3 text-xs font-bold"
              role="status"
            >
              <Check size={17} /> Registration details captured in this website
              demo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

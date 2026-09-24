import { ArrowRight, BarChart3, FileText, ShieldCheck } from "lucide-react";

const investorPriorities = [
  {
    icon: BarChart3,
    number: "01",
    title: "Performance updates",
    copy: "Clear reporting on business progress, delivery priorities and long-term direction.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Governance",
    copy: "Responsible leadership, disciplined controls and accountable decision-making.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Policies & disclosures",
    copy: "A structured source for company policies, notices and stakeholder information.",
  },
];

// Change only the Investor section colors here.
const componentTheme =
  "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function InvestorSection() {
  return (
    <section
      id="investor-relations"
      className={`relative bg-[var(--brand-surface)] py-20 md:py-28 xl:py-32 ${componentTheme}`}
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1240px] md:w-[calc(100%-4rem)]">
        <div
          className="mb-11 grid gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(300px,.95fr)] md:items-end md:gap-16"
          data-reveal
        >
          <div>
            <span className="block text-[.69rem] font-extrabold uppercase tracking-[.18em] text-[var(--brand-blue-bright)]">
              Investor relations
            </span>
            <h2 className="mt-3 text-[clamp(2.3rem,8vw,5rem)] font-extrabold leading-[.99] tracking-[-.055em] text-[var(--brand-navy)]">
              Transparent progress. Responsible growth.
            </h2>
          </div>
          <p className="m-0 text-sm leading-7 text-[var(--brand-navy)]/75 md:pb-2">
            A clear view of how Blue Cone approaches governance, performance and
            sustainable long-term value.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.05fr_.95fr]">
          <article
            className="flex min-h-[420px] flex-col justify-end bg-[var(--brand-blue)] p-7 text-white md:min-h-[510px] md:p-10"
            data-reveal
          >
            <span className="text-[.65rem] font-extrabold uppercase tracking-[.16em] text-[var(--brand-accent-on-dark)]">
              Stakeholder information
            </span>
            <h3 className="mt-3 max-w-[560px] text-3xl font-extrabold leading-tight tracking-[-.035em] md:text-4xl">
              Built on clarity, accountability and enduring relationships.
            </h3>
            <p className="mt-4 max-w-[520px] text-sm leading-7 text-white/90">
              We believe confidence is earned through consistent execution, open
              communication and responsible business practices.
            </p>
            <a
              className="mt-7 inline-flex min-h-[50px] w-fit items-center justify-center gap-3 rounded-full bg-white px-5 text-[.78rem] font-extrabold text-[var(--brand-navy)] transition-[gap,background-color] duration-200 hover:gap-4 hover:bg-[var(--brand-accent-on-dark)]"
              href="#contact"
            >
              Request investor information <ArrowRight size={18} />
            </a>
          </article>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {investorPriorities.map(({ icon: Icon, number, title, copy }) => (
              <article
                className="border border-[var(--brand-navy)]/15 bg-white p-6"
                key={number}
                data-reveal
              >
                <div className="flex items-center justify-between text-[var(--brand-blue)]">
                  <span className="text-[.65rem] font-extrabold tracking-[.16em]">
                    {number}
                  </span>
                  <Icon size={24} />
                </div>
                <h3 className="mt-12 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--brand-navy)]/70">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

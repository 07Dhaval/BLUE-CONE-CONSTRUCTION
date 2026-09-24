import { ArrowRight, BriefcaseBusiness, HardHat, Users } from "lucide-react";

const careerPaths = [
  {
    icon: BriefcaseBusiness,
    title: "Planning & engineering",
    copy: "Shape practical solutions through design coordination, estimation and project planning.",
  },
  {
    icon: HardHat,
    title: "Project execution",
    copy: "Turn plans into progress across site engineering, quality, safety and delivery.",
  },
  {
    icon: Users,
    title: "Corporate & support",
    copy: "Strengthen every project through finance, procurement, people and operations.",
  },
];

// Change only the Careers section colors here.
const componentTheme =
  "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function CareersSection() {
  return (
    <section
      id="careers"
      className={`relative overflow-hidden bg-[var(--brand-navy)] py-20 text-white md:py-28 xl:py-32 ${componentTheme}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_right,transparent,var(--brand-navy)_40%,var(--brand-navy))]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[1240px] md:w-[calc(100%-4rem)]">
        <div
          className="mb-11 grid gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(300px,.95fr)] md:items-end md:gap-16"
          data-reveal
        >
          <div>
            <span className="block text-[.69rem] font-extrabold uppercase tracking-[.18em] text-[var(--brand-accent-on-dark)]">
              Careers at Blue Cone
            </span>
            <h2 className="mt-3 text-[clamp(2.3rem,8vw,5rem)] font-extrabold leading-[.99] tracking-[-.055em]">
              Build work that outlasts the moment.
            </h2>
          </div>
          <p className="m-0 text-sm leading-7 text-white/90 md:pb-2">
            Join people who solve real challenges, take ownership and turn
            ambitious plans into lasting places.
          </p>
        </div>

        <div className="grid border-t border-white/15 sm:grid-cols-3">
          {careerPaths.map(({ icon: Icon, title, copy }, index) => (
            <article
              className="relative min-h-[260px] border-b border-white/15 py-7 sm:border-r sm:p-7 md:min-h-[290px] md:p-8"
              key={title}
              data-reveal
            >
              <div className="flex items-center justify-between text-[var(--brand-accent-on-dark)]">
                <span className="text-[.64rem] font-extrabold tracking-[.17em]">
                  0{index + 1}
                </span>
                <Icon size={29} />
              </div>
              <h3 className="mt-12 mb-3 text-2xl font-bold">{title}</h3>
              <p className="m-0 max-w-[300px] text-xs leading-relaxed text-white/85">
                {copy}
              </p>
            </article>
          ))}
        </div>

        <div
          className="mt-10 flex flex-col gap-6 border border-white/20 bg-white/[.06] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8"
          data-reveal
        >
          <div>
            <span className="text-[.65rem] font-extrabold uppercase tracking-[.16em] text-[var(--brand-accent-on-dark)]">
              Bring your experience
            </span>
            <h3 className="mt-2 text-xl font-bold md:text-2xl">
              Ready to help build what comes next?
            </h3>
          </div>
          <a
            className="inline-flex min-h-[50px] shrink-0 items-center justify-center gap-3 rounded-full bg-white px-5 text-[.78rem] font-extrabold text-[var(--brand-navy)] transition-[gap,background-color] duration-200 hover:gap-4 hover:bg-[var(--brand-accent-on-dark)]"
            href="#contact"
          >
            Share your profile <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

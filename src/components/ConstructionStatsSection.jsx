import { useEffect, useRef, useState } from "react";
import { Building2, HardHat, Sparkles } from "lucide-react";

const stats = [
  {
    id: 1,
    value: 10,
    suffix: "+",
    label: "Years of experience",
    size: "large",
    orbitDuration: "11s",
  },
  {
    id: 2,
    value: 99,
    suffix: "%",
    label: "Client satisfaction",
    size: "medium",
    orbitDuration: "9s",
  },
  {
    id: 3,
    value: 50,
    suffix: "+",
    label: "Projects delivered",
    size: "large",
    orbitDuration: "10s",
  },
  {
    id: 4,
    value: 70,
    suffix: "+",
    label: "Skilled professionals",
    size: "medium",
    orbitDuration: "12s",
  },
];

// Change only the Statistics section colors here.
const componentTheme =
  "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

function useCountUp(end, startCounting, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return undefined;

    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, end, startCounting]);

  return count;
}

function StatCircle({ item, startCounting }) {
  const count = useCountUp(item.value, startCounting);

  return (
    <article
      className="relative mx-auto aspect-square w-full max-w-[210px] sm:max-w-[230px] lg:max-w-[250px]"
      aria-label={`${item.value}${item.suffix} ${item.label}`}
    >
      <div
        className="relative h-full w-full rounded-full border border-[var(--brand-accent-on-dark)]/55"
      >
        <span
          className="absolute inset-[13%] rounded-full border border-[var(--brand-accent-on-dark)]/30"
          aria-hidden="true"
        />
        <span
          className="absolute inset-0 animate-[spin_var(--orbit-duration)_linear_infinite] rounded-full motion-reduce:animate-none"
          style={{ "--orbit-duration": item.orbitDuration }}
          aria-hidden="true"
        >
          <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[var(--brand-accent-on-dark)]" />
        </span>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <strong className="text-4xl font-extrabold tracking-[-.05em] text-white sm:text-5xl">
            {count}
            {item.suffix}
          </strong>
          <span className="max-w-[120px] text-[.65rem] font-extrabold uppercase leading-5 tracking-[.1em] text-white/85">
            {item.label}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function ConstructionStatsSection() {
  const sectionRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return undefined;

    if (!("IntersectionObserver" in window)) {
      const fallbackTimer = window.setTimeout(() => setStartCounting(true), 0);
      return () => window.clearTimeout(fallbackTimer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="company-stats"
      ref={sectionRef}
      className={`relative overflow-hidden bg-[var(--brand-navy)] py-20 text-white md:py-28 xl:py-32 ${componentTheme}`}
      aria-labelledby="construction-stats-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[.07] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:72px_72px]"
        aria-hidden="true"
      />
      <Building2
        className="pointer-events-none absolute right-[8%] top-[18%] text-[var(--brand-accent-on-dark)]/20"
        size={90}
        aria-hidden="true"
      />
      <HardHat
        className="pointer-events-none absolute bottom-[12%] left-[5%] text-[var(--brand-accent-on-dark)]/20"
        size={80}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[1240px] md:w-[calc(100%-4rem)]">
        <header className="mx-auto max-w-[720px] text-center">
          <span className="inline-flex items-center gap-2 text-[.69rem] font-extrabold uppercase tracking-[.18em] text-[var(--brand-accent-on-dark)]">
            <Sparkles size={16} />
            Why clients choose Blue Cone
          </span>
          <h2
            className="mt-4 text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[.99] tracking-[-.05em]"
            id="construction-stats-title"
          >
            Performance built on trust, quality and delivery.
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/85">
            Every number reflects the planning, teamwork and attention to detail
            we bring to each stage of construction.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-8">
          {stats.map((item) => (
            <StatCircle
              key={item.id}
              item={item}
              startCounting={startCounting}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

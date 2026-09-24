const items = [
  "ENGINEERING",
  "CONSTRUCTION",
  "INFRASTRUCTURE",
  "INTERIORS",
];

const repetitionsPerGroup = 10;

// Change only the moving band colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function MovingBand() {
  return (
    <div
      className={`overflow-hidden bg-[var(--brand-blue)] py-4 text-[var(--brand-white)] ${componentTheme}`}
      aria-hidden="true"
    >
      <div className="flex w-max items-center gap-5 will-change-transform motion-safe:animate-[movingBandMarquee_42s_linear_infinite] motion-reduce:animate-none">
        {[0, 1].map((group) => (
          <div className="flex w-max shrink-0 items-center gap-5" key={group}>
            {Array.from({ length: repetitionsPerGroup }, (_, repetition) =>
              items.map((item) => (
                <div
                  className="flex shrink-0 items-center gap-5 whitespace-nowrap"
                  key={`${group}-${repetition}-${item}`}
                >
                  <span className="text-[0.7rem] font-[850] tracking-[0.2em]">{item}</span>
                  <i className="h-1.5 w-1.5 rotate-45 bg-[var(--brand-accent-on-dark)]" />
                </div>
              )),
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes movingBandMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 0.625rem)); }
        }
      `}</style>
    </div>
  );
}

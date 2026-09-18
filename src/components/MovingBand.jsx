import { Fragment } from "react";

const items = [
  "ENGINEERING",
  "CONSTRUCTION",
  "INFRASTRUCTURE",
  "INTERIORS",
  "ENGINEERING",
  "CONSTRUCTION",
  "INFRASTRUCTURE",
  "INTERIORS",
];

// Change only the moving band colors here.
const componentTheme = "[--brand-navy:#002335] [--brand-blue:#1e4e9f] [--brand-blue-bright:#0c72b9] [--brand-white:#ffffff]";

export default function MovingBand() {
  return (
    <div className={`moving-band ${componentTheme}`} aria-hidden="true">
      <div>
        {items.map((item, index) => (
          <Fragment key={`${item}-${index}`}><span>{item}</span><i /></Fragment>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { apiGet } from "../lib/api";

// Gold ticker strip under the hero. Fleet categories (managed from the Fleet
// dashboard) scroll continuously from left to right as text separated by stars.
// The row is duplicated so the animation loops seamlessly.
const FALLBACK = [
  "Luxury Sedan",
  "Executive SUV",
  "Stretch Limousine",
  "Party Bus",
  "Sprinter Van",
  "Motor Coach",
];

export default function HeroMarquee() {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    // Collect unique fleet categories from dashboard vehicles and page sections.
    Promise.all([apiGet("/fleet"), apiGet("/fleet/sections")])
      .then(([{ vehicles }, { sections }]) => {
        const cats = [...(vehicles || []), ...(sections || [])]
          .map((v) => (v.category || v.name || "").trim())
          .filter(Boolean);
        setLabels([...new Set(cats)]);
      })
      .catch(() => setLabels([]));
  }, []);

  const source = labels.length > 0 ? labels : FALLBACK;

  const renderGroup = (group) => (
    <div key={group} aria-hidden={group === 1} className="flex shrink-0 items-center">
      {source.map((label, i) => (
        <span key={i} className="flex items-center text-[#17140d]">
          <span className="mx-4 text-[16px] sm:mx-6 sm:text-[18px]">★</span>
          <span className="text-[12px] font-semibold tracking-[2px] whitespace-nowrap uppercase sm:text-[13px]">
            {label}
          </span>
        </span>
      ))}
      <span className="mx-4 text-[16px] text-[#17140d] sm:mx-6 sm:text-[18px]">★</span>
    </div>
  );

  return (
    <div className="overflow-hidden border-b border-gold-dim bg-gold">
      <div className="flex w-max animate-marquee py-3 sm:py-3.5">{[0, 1].map(renderGroup)}</div>
    </div>
  );
}

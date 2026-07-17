import { useState } from "react";
import areaNashville from "../assets/images/area-nashville.webp";

const MOBILE_VISIBLE = 2;

export default function AreasWeServe({ eyebrow = "Locations", areas = [] }) {
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = areas.length - MOBILE_VISIBLE;

  return (
    <section className="pt-6 pb-16 sm:pt-8 sm:pb-20">
      <div className="mb-8 px-6 text-center sm:mb-10 md:px-16 lg:px-24">
        <span className="eyebrow text-gold">{eyebrow}</span>
        <h2 className="font-serif text-2xl font-medium text-text sm:text-3xl md:text-4xl">
          Areas We Serve in Nashville
        </h2>
      </div>
      <div
        className="flex min-h-[420px] items-center bg-cover bg-center px-6 py-16 sm:min-h-[520px] sm:py-24 md:px-16 lg:px-24"
        style={{ backgroundImage: `url(${areaNashville})` }}
      >
        <div className="mx-auto w-full max-w-(--breakpoint-xl)">
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
            {areas.map((area, i) => (
              <div
                key={area}
                className={`${
                  i < MOBILE_VISIBLE || expanded ? "flex" : "hidden sm:flex"
                } items-center gap-2.5 rounded-lg border border-white/15 bg-black/40 px-3 py-3 text-sm text-white/90 backdrop-blur-sm transition-colors hover:border-gold-dim hover:text-gold sm:px-4 sm:py-3.5`}
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                {area}
              </div>
            ))}
            {hiddenCount > 0 && (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="col-span-2 flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-black/40 px-3 py-3 text-sm text-white/90 backdrop-blur-sm transition-colors hover:border-gold-dim hover:text-gold sm:hidden"
              >
                <span className="text-base leading-none text-gold">
                  {expanded ? "−" : "+"}
                </span>
                {expanded ? "Show less" : `Show ${hiddenCount} more`}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

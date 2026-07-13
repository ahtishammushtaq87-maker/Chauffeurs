import { useState } from "react";
import { testimonials } from "../data/content";
import { QuoteIcon, StarIcon, ChevronLeft, ChevronRight } from "./Icons";

export default function Testimonials() {
  const [start, setStart] = useState(0);
  const visible = 3;

  const prev = () => setStart((s) => (s - 1 + testimonials.length) % testimonials.length);
  const next = () => setStart((s) => (s + 1) % testimonials.length);

  const shown = Array.from(
    { length: Math.min(visible, testimonials.length) },
    (_, i) => testimonials[(start + i) % testimonials.length]
  );

  return (
    <section className="px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <span className="eyebrow mb-10 block text-center">Clients Love Us</span>

        <div className="flex items-center gap-5">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border-strong text-text transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft />
          </button>

          <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-3">
            {shown.map((t) => (
              <article key={t.id} className="rounded border border-border bg-panel p-8">
                <div className="mb-5 flex items-start justify-between text-gold">
                  <QuoteIcon />
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                </div>
                <p className="mb-6.5 min-h-24 text-sm leading-relaxed text-text-muted">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border-strong bg-panel-alt font-serif text-[15px] text-gold">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-text">{t.name}</h4>
                    <p className="text-xs text-text-faint">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border-strong text-text transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import PlaceholderImage from "./PlaceholderImage";
import { ChevronLeft, ChevronRight } from "./Icons";

export default function ImageSlider({ items, intervalMs = 4000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;

  const goTo = (i) => setIndex(((i % count) + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const timerRef = useRef(null);
  useEffect(() => {
    if (paused || count <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
    return () => clearInterval(timerRef.current);
  }, [paused, count, intervalMs]);

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-border"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="aspect-[16/9] sm:aspect-[21/9]">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.name} className="h-full w-full flex-shrink-0">
              <PlaceholderImage src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous vehicle"
        onClick={prev}
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong bg-bg/70 text-text backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-gold hover:bg-gold hover:text-[#17140d] active:scale-95 sm:left-5"
      >
        <ChevronLeft width={18} height={18} />
      </button>
      <button
        type="button"
        aria-label="Next vehicle"
        onClick={next}
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong bg-bg/70 text-text backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-gold hover:bg-gold hover:text-[#17140d] active:scale-95 sm:right-5"
      >
        <ChevronRight width={18} height={18} />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {items.map((item, i) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === index ? "w-6 bg-gold" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

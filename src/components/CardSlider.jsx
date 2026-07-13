import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlaceholderImage from "./PlaceholderImage";
import { ChevronLeft, ChevronRight } from "./Icons";

function useItemsPerView() {
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return perView;
}

export default function CardSlider({ items, buttonLabel = "Book Now", renderActions, renderCard, autoPlayMs }) {
  const perView = Math.min(useItemsPerView(), items.length);
  const maxIndex = Math.max(0, items.length - perView);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));
  const step = 100 / perView;

  useEffect(() => {
    if (!autoPlayMs || paused || maxIndex === 0) return;
    const timer = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, autoPlayMs);
    return () => clearInterval(timer);
  }, [autoPlayMs, paused, maxIndex]);

  return (
    <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="overflow-hidden">
        <div
          className="flex items-stretch transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * step}%)` }}
        >
          {items.map((item) => (
            <div key={item.title} className="box-border flex-shrink-0 px-3" style={{ width: `${step}%` }}>
              {renderCard ? (
                renderCard(item)
              ) : (
                <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-panel">
                  <div className="relative aspect-[4/3]">
                    <PlaceholderImage src={item.image} alt={item.title} />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-[15px] font-semibold text-text">{item.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{item.desc}</p>
                    <div className="mt-auto pt-5">
                      {renderActions ? (
                        renderActions(item)
                      ) : (
                        <Link to={item.path} className="btn btn-outline w-full">
                          {buttonLabel}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={prev}
            disabled={index === 0}
            className="absolute left-4 top-[35%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong bg-bg/80 text-text backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-gold hover:bg-gold hover:text-[#17140d] active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft width={18} height={18} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={next}
            disabled={index === maxIndex}
            className="absolute right-4 top-[35%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong bg-bg/80 text-text backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-gold hover:bg-gold hover:text-[#17140d] active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight width={18} height={18} />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === index ? "w-6 bg-gold" : "w-1.5 bg-border-strong hover:bg-gold-dim"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

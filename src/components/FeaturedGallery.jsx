import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { featuredCars } from "../data/content";
import { ChevronLeft, ChevronRight } from "./Icons";

gsap.registerPlugin(Draggable);

const galleryItems = [...featuredCars, ...featuredCars];

function buildSeamlessLoop(items, spacing, animateFunc) {
  const overlap = Math.ceil(1 / spacing);
  const startTime = items.length * spacing + 0.5;
  const loopTime = (items.length + overlap) * spacing + 1;
  const rawSequence = gsap.timeline({ paused: true });
  const seamlessLoop = gsap.timeline({
    paused: true,
    repeat: -1,
    onRepeat() {
      if (this._time === this._dur) this._tTime += this._dur - 0.01;
    },
  });
  const l = items.length + overlap * 2;

  for (let i = 0; i < l; i++) {
    const index = i % items.length;
    const time = i * spacing;
    rawSequence.add(animateFunc(items[index]), time);
    if (i <= items.length) seamlessLoop.add("label" + i, time);
  }

  rawSequence.time(startTime);
  seamlessLoop
    .to(rawSequence, { time: loopTime, duration: loopTime - startTime, ease: "none" })
    .fromTo(
      rawSequence,
      { time: overlap * spacing + 1 },
      { time: startTime, duration: startTime - (overlap * spacing + 1), immediateRender: false, ease: "none" }
    );

  return seamlessLoop;
}

export default function FeaturedGallery() {
  const galleryRef = useRef(null);
  const stackRef = useRef(null);
  const cardsRef = useRef([]);
  const dragProxyRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      gsap.set(cards, { xPercent: 400, opacity: 0, scale: 0 });

      const spacing = 0.1;
      const snapTime = gsap.utils.snap(spacing);

      const animateFunc = (element) => {
        const tl = gsap.timeline();
        tl.fromTo(
          element,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            zIndex: 100,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "power1.in",
            immediateRender: false,
          }
        ).fromTo(element, { xPercent: 400 }, { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, 0);
        return tl;
      };

      const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
      const playhead = { offset: 0 };
      const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

      const scrub = gsap.to(playhead, {
        offset: 0,
        onUpdate() {
          seamlessLoop.time(wrapTime(playhead.offset));
        },
        duration: 0.5,
        ease: "power3",
        paused: true,
      });

      const animateToOffset = (offset) => {
        scrub.vars.offset = snapTime(offset);
        scrub.invalidate().restart();
      };

      const handleNext = () => animateToOffset(playhead.offset + spacing);
      const handlePrev = () => animateToOffset(playhead.offset - spacing);

      nextRef.current?.addEventListener("click", handleNext);
      prevRef.current?.addEventListener("click", handlePrev);

      const [draggable] = Draggable.create(dragProxyRef.current, {
        type: "x",
        trigger: stackRef.current,
        allowNativeTouchScrolling: true,
        onPress() {
          this.startOffset = playhead.offset;
        },
        onDrag() {
          scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
          scrub.invalidate().restart();
        },
        onDragEnd() {
          animateToOffset(playhead.offset);
        },
      });

      return () => {
        nextRef.current?.removeEventListener("click", handleNext);
        prevRef.current?.removeEventListener("click", handlePrev);
        draggable?.kill();
      };
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={galleryRef}
      className="relative flex w-full items-center justify-center overflow-hidden bg-bg-alt py-4"
    >
      <ul ref={stackRef} className="relative h-[26rem] w-72 list-none sm:h-[28rem] sm:w-80">
        {galleryItems.map((car, i) => (
          <li
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="absolute top-0 left-0 h-[26rem] w-72 overflow-hidden rounded-2xl bg-cover bg-center sm:h-[28rem] sm:w-80"
            style={{ backgroundImage: `url(${car.image})` }}
          >
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 text-left">
              <p className="text-sm font-semibold text-white">
                {car.year} {car.make}
              </p>
              <p className="text-sm text-gold">{car.price}</p>
            </div>
          </li>
        ))}
      </ul>

      <button
        ref={prevRef}
        type="button"
        aria-label="Previous vehicle"
        className="absolute left-3 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong bg-bg/70 text-text backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-gold hover:bg-gold hover:text-[#17140d] active:scale-95 sm:left-6"
      >
        <ChevronLeft width={20} height={20} />
      </button>
      <button
        ref={nextRef}
        type="button"
        aria-label="Next vehicle"
        className="absolute right-3 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong bg-bg/70 text-text backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-gold hover:bg-gold hover:text-[#17140d] active:scale-95 sm:right-6"
      >
        <ChevronRight width={20} height={20} />
      </button>

      <div ref={dragProxyRef} className="invisible absolute" />
    </div>
  );
}

import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fades/slides each top-level <section> inside `containerRef` up into view
// the first time it scrolls into the viewport, using GSAP ScrollTrigger. The
// page's first section (always the hero, already above the fold on load) is
// deliberately left untouched so this never delays LCP.
//
// Re-scans on every route change (pathname) and on any DOM mutation inside
// the container, so sections that appear later — e.g. ServiceDetailPage's
// content swapping in once its fetch resolves — still get animated. Already-
// processed sections are marked so re-scans stay cheap (no full teardown on
// unrelated DOM churn like a CardSlider re-rendering).
export function useScrollReveal(containerRef) {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {}, container);

    const scan = () => {
      const firstSection = container.querySelector("section");
      container.querySelectorAll("section:not(.reveal-scanned)").forEach((el) => {
        el.classList.add("reveal-scanned");
        if (el === firstSection) return;
        ctx.add(() => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 48,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });
      });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(container, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      ctx.revert();
      // Undo the "already processed" marker too, not just the GSAP tweens —
      // otherwise a re-run on the same DOM (React StrictMode's dev-only
      // double-invoke of effects) finds nothing left to (re)animate.
      container.querySelectorAll(".reveal-scanned").forEach((el) => el.classList.remove("reveal-scanned"));
    };
  }, [containerRef, pathname]);
}

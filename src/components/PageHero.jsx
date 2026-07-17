import PlaceholderImage from "./PlaceholderImage";
import QuoteForm from "./QuoteForm";
import TrustBadges from "./TrustBadges";
import { heroImg } from "../data/content";
import HeroMarquee from "./HeroMarquee";

export default function PageHero({ eyebrow, title, image }) {
  return (
    <>
    <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
      <div className="absolute inset-0">
        <PlaceholderImage src={image || heroImg} label="Hero Photo" alt={title || "Chauffeur service"} />
      </div>

      <div className="relative z-10 flex w-full flex-col items-start gap-6 px-5 py-10 sm:gap-10 sm:px-10 sm:py-14 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
        <div className="flex-shrink-0 rounded-lg bg-black/50 p-5 sm:p-6 lg:max-w-lg">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="max-w-xl font-serif text-[2rem] leading-[1.15] font-medium text-ink-fg sm:text-4xl md:text-5xl">{title}</h1>
          <TrustBadges />
        </div>

        <div className="w-full max-w-md lg:flex-shrink-0">
          <QuoteForm />
        </div>
      </div>
    </section>
    <HeroMarquee />
    </>
  );
}

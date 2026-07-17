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

      <div className="relative z-10 flex w-full flex-col items-start gap-10 px-6 py-14 sm:px-10 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
        <div className="flex-shrink-0 rounded-lg bg-black/50 p-6 lg:max-w-lg">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="max-w-xl font-serif text-4xl leading-[1.15] font-medium text-ink-fg md:text-5xl">{title}</h1>
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

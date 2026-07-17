import PlaceholderImage from "./PlaceholderImage";
import QuoteForm from "./QuoteForm";
import { homeHeroImg } from "../data/content";
import TrustBadges from "./TrustBadges";
import HeroMarquee from "./HeroMarquee";

export default function Hero() {
  return (
    <>
    <section id="quote" className="relative flex items-center overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <PlaceholderImage src={homeHeroImg} label="Hero Vehicle Photo" alt="Nashville skyline and the Korean Veterans Boulevard bridge" />
      </div>

      <div className="relative z-10 flex w-full flex-col items-start gap-6 px-5 py-10 sm:gap-10 sm:px-10 sm:py-14 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
        <div className="flex-shrink-0 rounded-lg bg-black/50 p-5 sm:p-6 lg:max-w-lg">
          <span className="eyebrow text-gold  text-[12px] tracking-[2px] sm:text-[14px] sm:tracking-[2.5px]">
            Luxury Chauffeur Nashville TN for Elite Travel
          </span>
          <h1 className="max-w-xl font-serif text-[2rem] leading-[1.15] font-medium text-ink-fg sm:text-[2.5rem] sm:leading-[1.12] md:text-5xl lg:text-[64px]">
            Best Chauffeur Service For
            <br />
            Everyone in
            <br />
            <span className="text-gold italic">Tennessee</span>
          </h1>
          <p className="mt-4 font-serif text-lg leading-snug font-medium text-ink-fg italic sm:mt-5 sm:text-2xl">
            Where Would You Like to Go?
          </p>
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

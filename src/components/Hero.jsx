import PlaceholderImage from "./PlaceholderImage";
import QuoteForm from "./QuoteForm";
import { heroImg } from "../data/content";
import TrustBadges from "./TrustBadges";

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <PlaceholderImage src={heroImg} label="Hero Vehicle Photo" alt="Luxury vehicle" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink from-35% via-ink/85 via-58% to-transparent to-90% sm:from-10% sm:via-40% sm:to-80%" />

      <div className="relative z-10 flex w-full flex-col items-start gap-10 px-6 py-14 sm:px-10 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
        <div className="flex-shrink-0 lg:max-w-lg">
          <span className="eyebrow">Drive Excellence</span>
          <h1 className="max-w-xl font-serif text-5xl leading-[1.12] font-medium text-ink-fg md:text-[64px]">
            Luxury.
            <br />
            Performance.
            <br />
            <span className="text-gold italic">Elevated.</span>
          </h1>
          <TrustBadges />
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="btn btn-gold">Browse Inventory</button>
            <button className="btn btn-outline border-ink-border-strong text-ink-fg hover:border-gold-light hover:text-gold-light">View In-Store Inventory</button>
          </div>
        </div>

        <div className="w-full max-w-md lg:flex-shrink-0">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

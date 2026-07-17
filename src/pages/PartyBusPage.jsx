import { Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import QuoteForm from "../components/QuoteForm";
import HeroMarquee from "../components/HeroMarquee";
import CardSlider from "../components/CardSlider";
import { CheckCircleIcon, ArrowRightIcon, PhoneIcon, PinIcon, ShieldIcon, Icon } from "../components/Icons";
import TrustBadges from "../components/TrustBadges";
import CustomerReviews from "../components/CustomerReviews";
import FaqAccordion from "../components/FaqAccordion";
import ShowMore from "../components/ShowMore";
import {
  partyBusImages,
  partyBusExperience,
  partyFleet,
  partyBusOnboard,
  partyBusHero,
  partyBusIncludes,
  partyBusInfoSections,
  partyBusServiceAreas,
  partyBusSafety,
  partyBusChoose,
  partyBusFaqs,
} from "../data/partyBusContent";
import { useAllServices } from "../hooks/useAllServices";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

export default function PartyBusPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  const allServices = useAllServices();

  return (
    <>
      {/* Hero (with quote form) */}
      <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={partyBusImages.heroImg} alt="Luxury party bus" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-6 px-5 py-10 sm:gap-10 sm:px-10 sm:py-14 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/60 p-5 sm:p-6 lg:max-w-lg">
            <span className="eyebrow">{partyBusHero.eyebrow}</span>
            <h1 className="font-serif text-[2rem] leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              {partyBusHero.h1Lead} <span className="text-gold italic">{partyBusHero.h1Accent}</span>
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-fg-muted">{partyBusHero.subtext}</p>
            <TrustBadges />
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <Link to="/contact" className="btn btn-outline border-ink-border-strong text-ink-fg hover:border-gold-light hover:text-gold-light">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm submitLabel="Reserve Your Nashville Party Bus" />
          </div>
        </div>
      </section>
      <HeroMarquee />

      {/* The Swift Experience */}
      <section className="border-y border-black/10 bg-white px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10">
            <PlaceholderImage src={partyBusImages.experienceImg} alt="Guests celebrating inside a party bus" />
          </div>

          <div>
            <span className="eyebrow">{partyBusExperience.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-black sm:text-4xl md:text-5xl">
              {partyBusExperience.headingLead}{" "}
              <span className="text-gold italic">{partyBusExperience.headingAccent}</span>
            </h2>

            <blockquote className="mt-7 border-l-2 border-gold pl-5">
              <p className="font-serif text-lg leading-relaxed text-gold italic sm:text-xl">
                “{partyBusExperience.quote}”
              </p>
            </blockquote>

            <p className="mt-7 text-[15px] leading-relaxed text-black/70">{partyBusExperience.body}</p>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {partyBusExperience.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-sm border border-gold-dim bg-white/10 px-3.5 py-2.5 text-[11px] font-semibold tracking-[1px] text-gold uppercase sm:px-4 sm:text-[12px]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Party Fleet */}
      <section className="border-y border-black/10 bg-white px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-12">
            <span className="eyebrow">{partyFleet.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-black sm:text-4xl md:text-5xl">
              {partyFleet.headingLead} <span className="text-gold">{partyFleet.headingAccent}</span>
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-black/70">{partyFleet.intro}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {partyFleet.cards.map((car) => (
              <div
                key={car.name}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm"
              >
                <div className="aspect-[4/3] flex-shrink-0 overflow-hidden">
                  <PlaceholderImage src={car.image} alt={car.name} />
                </div>
                <div className="flex flex-1 flex-col border-t-2 border-gold p-6 text-center">
                  <h3 className="font-serif text-xl leading-tight text-black sm:min-h-[3.5rem] sm:flex sm:items-center sm:justify-center">
                    {car.name}
                  </h3>
                  <p className="mt-3 py-1 text-[11px] leading-normal font-semibold tracking-[1.5px] text-[13px] text-gold uppercase">
                    {car.capacity}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-black/70">{car.desc}</p>
                  <div className="mt-5">
                    <a href="#quote" className="btn btn-gold w-full sm:w-auto">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form info: charter vs tours, occasions, cost, sizing */}
      <section className="relative overflow-hidden border-t border-black/10 bg-gradient-to-b from-white via-amber-50/40 to-white px-6 py-20 md:px-16 lg:px-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">Everything You Need to Know</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-black sm:text-4xl">
              Planning Your Nashville Party Bus
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {partyBusInfoSections.map((block, i) => {
              const accents = [
                "from-amber-400 to-yellow-500",
                "from-fuchsia-500 to-purple-600",
                "from-sky-400 to-blue-600",
                "from-rose-500 to-pink-600",
              ];
              const accent = accents[i % accents.length];
              return (
                <article
                  key={block.heading}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/[0.07] bg-white p-7 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] transition-shadow hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)] sm:p-8"
                >
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent}`} />
                  <div
                    className={`mb-5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accent} font-serif text-xl font-semibold text-white shadow-lg`}
                  >
                    {i + 1}
                  </div>
                  <h3 className="font-serif text-xl leading-tight font-medium text-black sm:text-2xl">
                    {block.heading}
                  </h3>
                  <ShowMore collapsedHeight="7rem" fadeFrom="from-white">
                    {block.paragraphs.map((para, j) => (
                      <p key={j} className="mt-4 text-[14px] leading-relaxed text-black/65">
                        {para}
                      </p>
                    ))}
                  </ShowMore>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl bg-gradient-to-r from-ink to-ink-panel p-8 text-center shadow-xl sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="font-serif text-xl font-medium text-white sm:text-2xl">Ready to lock in your date?</h3>
              <p className="mt-1 text-sm text-white/70">Get a clear, all-inclusive quote built around your group.</p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap justify-center gap-3">
              <a href="#quote" className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Get Your Quote
              </a>
              <Link to="/contact" className="btn btn-outline border-white/30 text-white hover:border-gold-light hover:text-gold-light">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    
    {/* What's Included */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-1">
            <PlaceholderImage src={partyBusImages.featuresImg} alt="Party bus celebration" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">{partyBusIncludes.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              {partyBusIncludes.heading}
            </h2>
            <ShowMore collapsedHeight="8rem">
              <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{partyBusIncludes.body}</p>
            </ShowMore>
            <ul className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {partyBusIncludes.features.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
     
     {/* Local service areas */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Service Areas</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              {partyBusServiceAreas.heading}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{partyBusServiceAreas.intro}</p>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partyBusServiceAreas.areas.map((area) => (
              <li
                key={area.name}
                className="flex items-start gap-3 rounded-lg border border-border bg-panel px-4 py-3.5"
              >
                <PinIcon width={18} height={18} className="mt-0.5 flex-shrink-0 text-gold" />
                <span className="text-sm text-text">
                  {area.name}
                  <span className="mt-0.5 block text-[12px] text-text-muted">{area.zip}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    
      {/* Onboard Experience — Built For Pure Fun */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 aspect-square overflow-hidden rounded-xl border border-border lg:order-1">
            <PlaceholderImage src={partyBusOnboard.image} alt="Guests enjoying the onboard experience" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="eyebrow">{partyBusOnboard.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text sm:text-4xl md:text-5xl">
              {partyBusOnboard.headingLead} <span className="text-gold">{partyBusOnboard.headingAccent}</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{partyBusOnboard.intro}</p>

            <ul className="mt-8 flex flex-col gap-5">
              {partyBusOnboard.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md border border-gold-dim bg-gold/10 text-gold">
                    <Icon name={feature.icon} width={20} height={20} />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-text">{feature.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-text-muted">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* Safety + How to choose */}
      <section className="relative overflow-hidden border-y border-black/10 bg-gradient-to-b from-white via-fuchsia-50/30 to-white px-6 py-20 md:px-16 lg:px-24">
        <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-start gap-8 lg:grid-cols-2">
          {/* Safety card */}
          <article className="relative overflow-hidden rounded-2xl border border-black/[0.07] bg-white p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] sm:p-10">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500" />
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-lg">
              <ShieldIcon width={26} height={26} />
            </span>
            <h2 className="mt-6 font-serif text-2xl leading-tight font-medium text-black sm:text-3xl">
              {partyBusSafety.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-black/65">{partyBusSafety.body}</p>
          </article>

          {/* How to choose card */}
          <article className="relative overflow-hidden rounded-2xl border border-black/[0.07] bg-white p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] sm:p-10">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-400 via-fuchsia-500 to-sky-500" />
            <h2 className="font-serif text-2xl leading-tight font-medium text-black sm:text-3xl">
              {partyBusChoose.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-black/65">{partyBusChoose.intro}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {partyBusChoose.questions.map((q) => (
                <li
                  key={q}
                  className="flex items-start gap-3 rounded-xl border border-black/[0.06] bg-gradient-to-br from-amber-50 to-white px-4 py-3.5 text-[14px] leading-relaxed text-black/75"
                >
                  <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  {q}
                </li>
              ))}
            </ul>
          </article>

          {/* Closing callout spanning both columns */}
          <div className="rounded-2xl bg-gradient-to-r from-ink to-ink-panel p-8 shadow-xl sm:p-10 lg:col-span-2">
            <p className="font-serif text-lg leading-relaxed text-gold italic sm:text-xl">
              “{partyBusChoose.outro[0]}”
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-white/75">{partyBusChoose.outro[1]}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#quote" className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Get Your Quote
              </a>
              <Link to="/contact" className="btn btn-outline border-white/30 text-white hover:border-gold-light hover:text-gold-light">
                Contact Us <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

       {/* Cross-sell: Our Premium Chauffeurs Service */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Our Premium</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Chauffeurs Service</h2>
          </div>
          <CardSlider
            items={allServices}
            renderActions={(item) => (
              <div className="flex gap-3">
                <Link to={item.path} className="btn btn-outline flex-1">
                  View More
                </Link>
                <a href="#quote" className="btn btn-gold flex-1">
                  Book Now
                </a>
              </div>
            )}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">
              Frequently Asked Questions about Party Bus Rental Nashville
            </h2>
          </div>
          <FaqAccordion items={partyBusFaqs} />
        </div>
      </section>


      {/* Customer reviews */}
      <CustomerReviews />

      {/* Final CTA */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col items-center gap-5 text-center">
          <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Reserve Your Ride Today</h2>
          <p className="max-w-xl text-[15px] text-text-muted">
            Experience the comfort, reliability, and sophistication that define Swift Chauffeurs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE} className="btn btn-gold">
              <PhoneIcon width={15} height={15} /> Reserve Now
            </a>
            <Link to="/contact" className="btn btn-outline">
              Contact Us <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

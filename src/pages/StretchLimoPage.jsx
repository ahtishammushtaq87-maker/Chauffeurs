import { Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import QuoteForm from "../components/QuoteForm";
import HeroMarquee from "../components/HeroMarquee";
import CardSlider from "../components/CardSlider";
import { CheckCircleIcon, ArrowRightIcon, PhoneIcon, Icon } from "../components/Icons";
import TrustBadges from "../components/TrustBadges";
import CustomerReviews from "../components/CustomerReviews";
import FaqAccordion from "../components/FaqAccordion";
import ShowMore from "../components/ShowMore";
import {
  stretchLimoImages,
  stretchLimoHero,
  stretchLimoIntro,
  stretchLimoFeatures,
  stretchLimoFleet,
  stretchLimoUses,
  stretchLimoIncludes,
  stretchLimoServiceAreas,
  stretchLimoFaqs,
} from "../data/stretchLimoContent";
import { serviceCities } from "../data/citiesContent";
import { useAllServices } from "../hooks/useAllServices";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

export default function StretchLimoPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  const allServices = useAllServices();

  return (
    <>
      {/* Hero (with quote form) */}
      <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={stretchLimoImages.heroImg} alt="Luxury stretch limousine rental in Nashville, TN" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-6 px-5 py-10 sm:gap-10 sm:px-10 sm:py-14 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/55 p-5 sm:p-6 lg:max-w-lg">
            <span className="eyebrow">{stretchLimoHero.eyebrow}</span>
            <h1 className="font-serif text-[2rem] leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              {stretchLimoHero.h1}
            </h1>
            <p className="mt-3 font-serif text-lg text-gold italic sm:text-xl">{stretchLimoHero.tagline}</p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-fg-muted">{stretchLimoHero.subtext}</p>
            <TrustBadges />
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <a href="#quote" className="btn btn-outline border-ink-border-strong text-ink-fg hover:border-gold-light hover:text-gold-light">
                Check Limo Availability &amp; Pricing
              </a>
            </div>
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm
              heading={<>Get a Stretch Limo <span className="text-gold">Quote</span></>}
              submitLabel="Check Limo Availability & Pricing"
              defaultVehicle="Stretch Limousine (up to 18 passengers)"
            />
          </div>
        </div>
      </section>
      <HeroMarquee />

      {/* Why Choose Our Nashville Stretch Limousine Service */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-1">
            <PlaceholderImage src={stretchLimoImages.featuresImg} alt="Interior of a Nashville stretch limousine" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Why Choose Our Nashville Stretch Limousine Service?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{stretchLimoIntro}</p>
            <ul className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {stretchLimoFeatures.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Choose Your Nashville Stretch Limousine — fleet cards */}
      <section className="border-y border-border bg-panel/40 px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">{stretchLimoFleet.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text sm:text-4xl">
              {stretchLimoFleet.headingLead} <span className="text-gold">{stretchLimoFleet.headingAccent}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stretchLimoFleet.cards.map((limo) => (
              <div
                key={limo.name}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg shadow-sm"
              >
                <div className="aspect-[5/4] flex-shrink-0 overflow-hidden">
                  <PlaceholderImage src={limo.image} alt={`${limo.name} rental in Nashville, TN`} />
                </div>
                <div className="flex flex-1 flex-col border-t-2 border-gold p-6 text-center sm:p-7">
                  <h3 className="font-serif text-xl leading-tight text-text">{limo.name}</h3>
                  <p className="mt-2 text-[13px] font-semibold tracking-[1.5px] text-gold uppercase">{limo.capacity}</p>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-text-muted">{limo.desc}</p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <a href="#quote" className="btn btn-gold flex-1">
                      Check Availability
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best uses — Stretch Limousine Service for Nashville Special Occasions */}
      <section className="px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">{stretchLimoUses.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text sm:text-4xl">
              {stretchLimoUses.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {stretchLimoUses.items.map((item) => (
              <article key={item.title} className="flex flex-col rounded-2xl border border-border bg-panel p-7 sm:p-8">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-gold-dim bg-gold/10 text-gold">
                  <Icon name={item.icon} width={22} height={22} />
                </span>
                <h3 className="mt-5 font-serif text-lg leading-tight font-medium text-text sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-text-muted">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="border-y border-border bg-panel/40 px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border border-border bg-panel lg:order-1">
            <PlaceholderImage src={stretchLimoImages.includesImg} fit="contain" alt="Nashville stretch limousine prepared for a special occasion" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">{stretchLimoIncludes.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              {stretchLimoIncludes.heading}
            </h2>
            <ShowMore collapsedHeight="7rem" fadeFrom="from-panel">
              <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{stretchLimoIncludes.body}</p>
            </ShowMore>
            <ul className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {stretchLimoIncludes.features.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service areas — city slider (shared with home page) */}
      <section className="px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Service Areas</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              {stretchLimoServiceAreas.heading}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{stretchLimoServiceAreas.intro}</p>
          </div>
          <CardSlider
            items={serviceCities}
            autoPlayMs={4500}
            renderActions={(item) =>
              item.comingSoon ? (
                <span className="btn btn-outline pointer-events-none w-full opacity-50">Coming Soon</span>
              ) : (
                <a href="#quote" className="btn btn-gold w-full">
                  Book Now
                </a>
              )
            }
          />
        </div>
      </section>

      {/* Related services */}
      <section className="border-t border-border px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">You May Also Like</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Explore Our Chauffeur Services</h2>
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

      {/* Customer reviews */}
      <CustomerReviews />

      {/* FAQ */}
      <section className="border-t border-border px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">
              Nashville Stretch Limousine Rental FAQs
            </h2>
          </div>
          <FaqAccordion items={stretchLimoFaqs.map(({ q, a }) => ({ q, a }))} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col items-center gap-5 text-center">
          <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Get Your Nashville Stretch Limousine Quote</h2>
          <p className="max-w-xl text-[15px] text-text-muted">
            Share your event date, passenger count, pickup location, rental duration, planned stops, and preferred
            limousine to check availability and receive clear pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#quote" className="btn btn-gold">
              Check Limo Availability
            </a>
            <a href={PHONE} className="btn btn-outline">
              <PhoneIcon width={15} height={15} /> Call Now <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

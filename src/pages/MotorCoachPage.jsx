import { Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import QuoteForm from "../components/QuoteForm";
import HeroMarquee from "../components/HeroMarquee";
import CardSlider from "../components/CardSlider";
import FleetHighlightSection from "../components/FleetHighlightSection";
import { CheckCircleIcon, ArrowRightIcon, PhoneIcon, Icon } from "../components/Icons";
import TrustBadges from "../components/TrustBadges";
import CustomerReviews from "../components/CustomerReviews";
import FaqAccordion from "../components/FaqAccordion";
import ShowMore from "../components/ShowMore";
import {
  motorCoachImages,
  motorCoachHero,
  motorCoachIntro,
  motorCoachFeatures,
  motorCoachFleet,
  motorCoachComparison,
  motorCoachUses,
  motorCoachIncludes,
  motorCoachServiceAreas,
  motorCoachFaqs,
} from "../data/motorCoachContent";
import { serviceCities } from "../data/citiesContent";
import { useAllServices } from "../hooks/useAllServices";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

export default function MotorCoachPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  const allServices = useAllServices();

  return (
    <>
      {/* Hero (with quote form) */}
      <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={motorCoachImages.heroImg} alt="Motor coach for group transportation in Nashville, TN" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-6 px-5 py-10 sm:gap-10 sm:px-10 sm:py-14 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/55 p-5 sm:p-6 lg:max-w-lg">
            <span className="eyebrow">{motorCoachHero.eyebrow}</span>
            <h1 className="font-serif text-[2rem] leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              {motorCoachHero.h1}
            </h1>
            <p className="mt-3 font-serif text-lg text-gold italic sm:text-xl">{motorCoachHero.tagline}</p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-fg-muted">{motorCoachHero.subtext}</p>
            <TrustBadges />
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <a href="#quote" className="btn btn-outline border-ink-border-strong text-ink-fg hover:border-gold-light hover:text-gold-light">
                Check Coach Availability &amp; Pricing
              </a>
            </div>
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm
              heading={<>Get a Motor Coach <span className="text-gold">Quote</span></>}
              submitLabel="Check Coach Availability & Pricing"
              defaultVehicle="Motor Coach (up to 56 passengers)"
            />
          </div>
        </div>
      </section>
      <HeroMarquee />

      {/* Why Choose Swift Chauffeurs for Nashville Group Transportation */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-1">
            <PlaceholderImage src={motorCoachImages.featuresImg} alt="Interior of a Nashville motor coach" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Why Choose Swift Chauffeurs for Nashville Group Transportation?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{motorCoachIntro}</p>
            <ul className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {motorCoachFeatures.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Live fleet carousel (dashboard-managed) */}
      <FleetHighlightSection
        slug="motor-coach-fleet"
        eyebrow="Our Fleet"
        heading="Choose the Right Motor Coach for Your Group"
        subheading="Compare mini coaches and full-size motor coaches by capacity, luggage space, and onboard features. Final suitability depends on the specific vehicle assigned and your itinerary."
      />

      {/* Mini Coach vs. Motor Coach comparison */}
      <section className="px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">{motorCoachComparison.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text sm:text-4xl">
              {motorCoachComparison.heading}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{motorCoachComparison.intro}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[motorCoachComparison.mini, motorCoachComparison.motor].map((col) => (
              <article
                key={col.title}
                className="flex flex-col rounded-2xl border border-border bg-panel p-7 sm:p-8"
              >
                <h3 className="font-serif text-xl font-medium text-text sm:text-2xl">{col.title}</h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-text-muted">
                      <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* What's Included */}
      <section className="px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-1">
            <PlaceholderImage src={motorCoachImages.comparisonImg} alt="Nashville motor coach ready for group transportation" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">{motorCoachIncludes.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              {motorCoachIncludes.heading}
            </h2>
            <ShowMore collapsedHeight="7rem">
              <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{motorCoachIncludes.body}</p>
            </ShowMore>
            <ul className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {motorCoachIncludes.features.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="border-t border-border px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Service Areas</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              {motorCoachServiceAreas.heading}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{motorCoachServiceAreas.intro}</p>
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

{/* Best uses — Motor Coach Transportation for Nashville Groups and Events */}
      <section className="border-y border-border bg-panel/40 px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">{motorCoachUses.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text sm:text-4xl">
              {motorCoachUses.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {motorCoachUses.items.map((item) => (
              <article key={item.title} className="flex flex-col rounded-2xl border border-border bg-bg p-7 sm:p-8">
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

      {/* Cross-sell: Our Premium Chauffeurs Service */}
      <section className="px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">What We Offer</span>
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
              Nashville Motor Coach Rental FAQs
            </h2>
          </div>
          <FaqAccordion items={motorCoachFaqs.map(({ q, a }) => ({ q, a }))} />
        </div>
      </section>


      {/* Final CTA */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col items-center gap-5 text-center">
          <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Request a Nashville Motor Coach Quote</h2>
          <p className="max-w-xl text-[15px] text-text-muted">
            Share your date, passenger count, pickup locations, destination, schedule, luggage or equipment needs, and
            preferred coach size so the team can recommend the right vehicle and provide pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#quote" className="btn btn-gold">
              Request Coach Availability
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

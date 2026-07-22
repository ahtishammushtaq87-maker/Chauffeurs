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
  executiveSuvImages,
  executiveSuvHero,
  executiveSuvIntro,
  executiveSuvFeatures,
  executiveSuvFleet,
  executiveSuvServices,
  executiveSuvAirport,
  executiveSuvUseCases,
  executiveSuvIncludes,
  executiveSuvSteps,
  executiveSuvServiceAreas,
  executiveSuvFaqs,
} from "../data/executiveSuvContent";
import { serviceCities } from "../data/citiesContent";
import { useAllServices } from "../hooks/useAllServices";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

export default function ExecutiveSuvPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  const allServices = useAllServices();

  return (
    <>
      {/* Hero (with quote form) */}
      <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={executiveSuvImages.heroImg} alt="Luxury Cadillac Escalade SUV with chauffeur service in Nashville, TN" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-6 px-5 py-10 sm:gap-10 sm:px-10 sm:py-14 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/55 p-5 sm:p-6 lg:max-w-lg">
            <span className="eyebrow">{executiveSuvHero.eyebrow}</span>
            <h1 className="font-serif text-[2rem] leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              {executiveSuvHero.h1}
            </h1>
            <p className="mt-3 font-serif text-lg text-gold italic sm:text-xl">{executiveSuvHero.tagline}</p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-fg-muted">{executiveSuvHero.subtext}</p>
            <TrustBadges />
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <a href="#quote" className="btn btn-outline border-ink-border-strong text-ink-fg hover:border-gold-light hover:text-gold-light">
                Check SUV Availability &amp; Pricing
              </a>
            </div>
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm
              heading={<>Get a Luxury SUV <span className="text-gold">Quote</span></>}
              submitLabel="Check SUV Availability & Pricing"
              defaultVehicle="Executive SUV (up to 6 passengers)"
            />
          </div>
        </div>
      </section>
      <HeroMarquee />

      {/* Why Choose Swift Chauffeurs for Luxury SUV Service in Nashville */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-1">
            <PlaceholderImage src={executiveSuvImages.featuresImg} alt="Cadillac Escalade with professional chauffeur service in Nashville" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Why Choose Swift Chauffeurs for Luxury SUV Service in Nashville?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{executiveSuvIntro}</p>
            <ul className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {executiveSuvFeatures.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

{/* Luxury SUV Transportation Services — six SUV-specific cards */}
      <section className="px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">{executiveSuvServices.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text sm:text-4xl">
              {executiveSuvServices.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {executiveSuvServices.items.map((item) => (
              <article key={item.title} className="flex flex-col rounded-2xl border border-border bg-panel p-7 sm:p-8">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-gold-dim bg-gold/10 text-gold">
                  <Icon name={item.icon} width={22} height={22} />
                </span>
                <h3 className="mt-5 font-serif text-lg leading-tight font-medium text-text sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-text-muted">{item.desc}</p>
                <a href="#quote" className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[1.5px] text-gold uppercase transition-colors hover:text-gold-light">
                  Get a Quote <ArrowRightIcon width={14} height={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Nashville Luxury SUV Fleet */}
      <section className="border-y border-border bg-panel/40 px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">{executiveSuvFleet.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text sm:text-4xl">
              {executiveSuvFleet.headingLead} <span className="text-gold">{executiveSuvFleet.headingAccent}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {executiveSuvFleet.cards.map((suv) => (
              <div
                key={suv.name}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg shadow-sm"
              >
                <div className="aspect-[16/10] flex-shrink-0 overflow-hidden">
                  <PlaceholderImage src={suv.image} alt={`${suv.name} for airport and group transportation in Nashville`} />
                </div>
                <div className="flex flex-1 flex-col border-t-2 border-gold p-6 sm:p-7">
                  <h3 className="font-serif text-xl leading-tight text-text">{suv.name}</h3>
                  <p className="mt-2 text-[12px] font-semibold tracking-[1px] text-gold uppercase">{suv.capacity}</p>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-text-muted">{suv.desc}</p>
                  <div className="mt-5">
                    <a href="#quote" className="btn btn-gold w-full sm:w-auto">
                      Check Availability
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px] text-text-faint">{executiveSuvFleet.availabilityNote}</p>
        </div>
      </section>

      

      {/* Dedicated Airport SUV section */}
      <section className="border-y border-border bg-panel/40 px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">{executiveSuvAirport.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              {executiveSuvAirport.heading}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{executiveSuvAirport.body}</p>
            <div className="mt-7">
              <Link to={executiveSuvAirport.linkPath} className="btn btn-outline">
                {executiveSuvAirport.linkLabel} <ArrowRightIcon />
              </Link>
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-3.5 rounded-2xl border border-border bg-bg p-7 sm:grid-cols-2 sm:p-8">
            {executiveSuvAirport.benefits.map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

{/* What's Included */}
      <section className="border-y border-border bg-panel/40 px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-1">
            <PlaceholderImage src={executiveSuvImages.includesImg} alt="Interior of a luxury SUV for private Nashville transportation" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">{executiveSuvIncludes.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              {executiveSuvIncludes.heading}
            </h2>
            <ShowMore collapsedHeight="7rem" fadeFrom="from-panel">
              <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{executiveSuvIncludes.body}</p>
            </ShowMore>
            <ul className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {executiveSuvIncludes.features.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Executive + private-travel two-up */}
      <section className="px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 gap-6 md:grid-cols-2">
          {executiveSuvUseCases.map((block) => (
            <article key={block.heading} className="flex flex-col rounded-2xl border border-border bg-panel p-8 sm:p-10">
              <span className="eyebrow">{block.eyebrow}</span>
              <h2 className="font-serif text-2xl leading-tight font-medium text-text sm:text-3xl">{block.heading}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-text-muted">{block.body}</p>
            </article>
          ))}
        </div>
      </section>
      
      {/* Service areas — city slider (shared with home page) */}
      <section className="border-t border-border px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Service Areas</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              {executiveSuvServiceAreas.heading}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{executiveSuvServiceAreas.intro}</p>
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

{/* How to reserve — 4-step booking */}
      <section className="px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">{executiveSuvSteps.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text sm:text-4xl">
              {executiveSuvSteps.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {executiveSuvSteps.steps.map((step, i) => (
              <article key={step.title} className="flex flex-col rounded-2xl border border-border bg-panel p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-serif text-lg font-semibold text-[#17140d]">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-serif text-lg leading-tight font-medium text-text">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{step.desc}</p>
              </article>
            ))}
          </div>
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
                  Learn More
                </Link>
                <a href="#quote" className="btn btn-gold flex-1">
                  Get a Quote
                </a>
              </div>
            )}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">
              Nashville Luxury SUV Service FAQs
            </h2>
          </div>
          <FaqAccordion items={executiveSuvFaqs.map(({ q, a }) => ({ q, a }))} />
        </div>
      </section>

      {/* Customer reviews */}
      <CustomerReviews />

      {/* Final CTA */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col items-center gap-5 text-center">
          <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Reserve Luxury SUV Transportation in Nashville</h2>
          <p className="max-w-xl text-[15px] text-text-muted">
            Check availability for your date and let our reservation team help you select the right SUV for your
            passengers, luggage, itinerary, and preferred level of service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#quote" className="btn btn-gold">
              Check SUV Availability
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

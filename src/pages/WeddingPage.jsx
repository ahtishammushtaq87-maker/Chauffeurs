import PlaceholderImage from "../components/PlaceholderImage";
import QuoteForm from "../components/QuoteForm";
import HeroMarquee from "../components/HeroMarquee";
import FleetSection from "../components/FleetSection";
import CustomerReviews from "../components/CustomerReviews";
import FaqAccordion from "../components/FaqAccordion";
import TrustBadges from "../components/TrustBadges";
import CitiesWeServe from "../components/CitiesWeServe";
import {
  CheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  ShieldIcon,
  AwardIcon,
  ClockIcon,
  DiamondIcon,
} from "../components/Icons";
import {
  weddingImages,
  weddingFeatures,
  weddingPreferred,
  weddingOffers,
  weddingServiceFeatures,
  weddingSteps,
  weddingServices,
  weddingPlanningSteps,
  weddingPricingFactors,
  weddingServiceAreas,
  weddingFaqs,
} from "../data/weddingContent";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

const serviceIcons = [ClockIcon, ShieldIcon, AwardIcon, DiamondIcon];

export default function WeddingPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  return (
    <>
      {/* Hero */}
      <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={weddingImages.heroImg} alt="Luxury wedding limo service" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-6 px-5 py-10 sm:gap-10 sm:px-10 sm:py-14 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/50 p-5 sm:p-6 lg:max-w-lg">
            <span className="eyebrow">Nashville Wedding Transportation</span>
            <h1 className="font-serif text-[2rem] leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              Wedding Transportation & Limo Service in Nashville, TN
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-fg-muted">
              Luxury wedding transportation in Nashville, TN, with professional chauffeurs, stretch limousines, SUVs,
              Sprinter vans, and group vehicles for every part of your celebration.
            </p>
            <p className="mt-4 text-[13px] font-semibold tracking-wide text-gold">
              Rated 4.9 · Licensed &amp; Insured · Professional Chauffeurs
            </p>
            <TrustBadges />
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <a href="#quote" className="btn btn-outline border-ink-border-strong text-ink-fg hover:border-gold-light hover:text-gold-light">
                Get Your Wedding Quote
              </a>
            </div>
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm
              heading={<>Get a Nashville Wedding Transportation <span className="text-gold">Quote</span></>}
              submitLabel="Check Availability & Pricing"
              defaultVehicle="Wedding Transportation"
            />
          </div>
        </div>
      </section>
      <HeroMarquee />

      {/* Intro: features + pricing */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Wedding Transportation</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Luxury Wedding Transportation in Nashville, TN
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Your wedding transportation should feel organized, elegant, and effortless. Swift Chauffeurs coordinates
              professionally chauffeured vehicles for couples, wedding parties, families, and guests throughout
              Nashville.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              From the first pickup to the final departure, our team helps align the vehicle, timing, route, and
              passenger needs with your wedding-day schedule.
            </p>
            <ul className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {weddingFeatures.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#quote" className="btn btn-gold">
                Check Availability &amp; Pricing
              </a>
              <a href={PHONE} className="btn btn-outline">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
            </div>
          </div>

          {/* Wedding image */}
          <div className="overflow-hidden rounded-xl border border-border bg-panel">
            <div className="relative aspect-[16/9]">
              <PlaceholderImage src={weddingImages.introImg} alt="Nashville wedding limousine" />
            </div>
            <div className="p-6">
              <a href="#quote" className="btn btn-gold mt-5 w-full">
                Check Availability &amp; Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Fleet */}
      <FleetSection
        eyebrow="Your Dream, Our Destination"
        heading="Wedding Limousines & Group Transportation Fleet"
        subheading="Choose from stretch limousines, luxury SUVs, Sprinter vans, mini coaches, and group vehicles for the couple, wedding party, family, and guests."
        serviceSlug="wedding"
      />

      {/* Why Couples Choose */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-1">
            <PlaceholderImage src={weddingImages.whyImg} alt="Wedding limousine" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Why Couples Choose Swift Chauffeurs
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Wedding transportation requires timing, communication, and careful coordination. Swift Chauffeurs helps
              couples select the right vehicles and organize pickups, stops, and schedules for a smooth wedding-day
              experience.
            </p>
            <div className="mt-7 flex flex-col gap-5">
              {weddingPreferred.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gold-dim text-gold">
                    <CheckIcon width={18} height={18} />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-text">{item.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer reviews */}
      <CustomerReviews />

      {/* Affordable Luxury */}
      <section className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0">
          <PlaceholderImage src={weddingImages.affordabilityBg} alt="Luxury transportation" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-10 px-6 py-20 md:px-16 lg:grid-cols-2 lg:px-24">
          <div className="rounded-2xl border border-border bg-panel/80 p-8 backdrop-blur-m">
            <h3 className="font-serif text-2xl text-text">Plan Your Perfect Wedding Limo Entrance</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Every wedding is unique, and so are your transportation needs. Whether you're planning a grand entrance, coordinating bridal party arrivals, or ensuring seamless transportation for your guests, our customizable wedding limo services in Nashville are here to make it happen.
            </p>
            <a href="#quote" className="btn btn-gold mt-6">
                  Check Availability &amp; Pricing
                </a>
          </div>
        </div>
      </section>

      {/* Wedding Transportation Designed Around Your Day — service scenarios */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Wedding Services</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Wedding Transportation Designed Around Your Day
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              From getting-ready locations and ceremony arrivals to reception transfers, photo stops, and the final
              getaway, your transportation plan should follow the timing and flow of your celebration.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {weddingServices.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-panel p-6">
                <h3 className="text-[15px] font-semibold text-text">{item.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Transportation for Every Part of Your Celebration */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Why Choose Swift Chauffeurs</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Wedding Transportation for Every Part of Your Celebration</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] text-text-muted">
              From the couple and wedding party to families and guests, we help coordinate professional, reliable
              transportation for every stage of your wedding day. Check availability for your date to get started.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {weddingOffers.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-panel p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-dim text-gold">
                  <CheckIcon width={18} height={18} />
                </span>
                <h3 className="mt-4 text-[15px] font-semibold text-text">{item.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exceptional Service features */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Exceptional Service</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Step Into Your Dream Wedding
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Wedding limousine with an optional red carpet arrival. A red carpet entrance may be available as an
              add-on depending on the vehicle and venue. With premium service and attention to detail, we help turn
              your grand entrance into a moment of elegance and celebration.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {weddingServiceFeatures.map((f, i) => {
              const Ico = serviceIcons[i];
              return (
                <div key={f.title} className="rounded-xl border border-border bg-panel p-6">
                  <Ico width={28} height={28} className="text-gold" />
                  <h3 className="mt-4 text-[15px] font-semibold text-text">{f.title}</h3>
                  <p className="mt-1 text-[13px] text-text-muted">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Plan Your Nashville Wedding Transportation */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Planning Guide</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              How to Plan Your Nashville Wedding Transportation
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {weddingPlanningSteps.map((s) => (
              <article key={s.step} className="rounded-xl border border-border bg-panel p-7">
                <span className="font-serif text-4xl text-gold/30">{s.step}</span>
                <h3 className="mt-3 text-[15px] font-semibold text-text">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What Affects Nashville Wedding Transportation Pricing? */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Pricing</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              What Affects Nashville Wedding Transportation Pricing?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Wedding transportation pricing is tailored to your day. Share your details and we'll build a clear quote
              rather than a fixed, one-size-fits-all rate. Pricing may depend on:
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:mt-4">
            {weddingPricingFactors.map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Nashville Wedding Transportation Service Areas */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-8 max-w-2xl">
            <span className="eyebrow">Service Areas</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Nashville Wedding Transportation Service Areas
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Swift Chauffeurs provides wedding transportation throughout Nashville and surrounding Middle Tennessee
              communities, including Franklin, Brentwood, Murfreesboro, Hendersonville, Mt. Juliet, and Spring Hill.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {weddingServiceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-panel px-4 py-2 text-sm font-semibold text-text"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CitiesWeServe />

      {/* Nashville Wedding Transportation FAQs */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Nashville Wedding Transportation FAQs</h2>
          </div>
          <FaqAccordion items={weddingFaqs} />
        </div>
      </section>

      {/* Booking steps */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Book Wedding Transportation</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Get Your Nashville Wedding Transportation Quote</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {weddingSteps.map((s) => (
              <article key={s.step} className="rounded-xl border border-border bg-panel p-8">
                <span className="font-serif text-5xl text-gold/30">{s.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-text">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-5 text-center">
            <p className="max-w-xl text-[15px] text-text-muted">
              Share your wedding date, venues, passenger count, and preferred vehicles so our team can help plan the
              right transportation for your celebration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#quote" className="btn btn-gold">
                Check Availability &amp; Pricing
              </a>
              <a href={PHONE} className="btn btn-outline">
                <PhoneIcon width={15} height={15} /> Call Now <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
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
  promImages,
  promWhy,
  promSpotlightFeatures,
  promTrust,
  promSteps,
  promFaqs,
} from "../data/promContent";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

function CtaButtons({ phone, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <a href={phone} className="btn btn-gold">
        <PhoneIcon width={15} height={15} /> Call Now
      </a>
      <Link to="/contact" className="btn btn-outline">
        Contact Us
      </Link>
    </div>
  );
}

const spotlightIcons = [ClockIcon, ShieldIcon, AwardIcon, DiamondIcon];

export default function PromPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  return (
    <>
      {/* Hero (with quote form, matching home hero) */}
      <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={promImages.heroImg} alt="Luxury limousine at night" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-6 px-5 py-10 sm:gap-10 sm:px-10 sm:py-14 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/50 p-5 sm:p-6 lg:max-w-lg">
            <span className="eyebrow">Make Prom Night Unforgettable</span>
            <h1 className="font-serif text-[2rem] leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              Luxury Prom Limo Service in Nashville, TN
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-fg-muted">
              Celebrate prom night with professionally chauffeured limousine and group transportation designed for a
              safe, stylish, and memorable evening in Nashville.
            </p>
            <TrustBadges />
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
            </div>
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm
              heading={<>Get a Nashville Prom Limo <span className="text-gold">Quote</span></>}
              submitLabel="Check Availability & Pricing"
              defaultVehicle="Prom Transportation"
            />
          </div>
        </div>
      </section>
      <HeroMarquee />

      {/* Intro / experience band */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Your Dream, Our Destination</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Prom Transportation Planned for Safety, Style, and Comfort
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Swift Chauffeurs helps families and groups coordinate prom transportation with professional chauffeurs,
              verified vehicle details, clear pickup plans, and options for couples or larger parties.
            </p>
            <ul className="mt-7 flex flex-col gap-3.5">
              {[
                "Luxurious interiors with premium leather seating and vibrant lighting.",
                "Smooth climate control to keep you comfortable all evening.",
                "Discreet service that ensures your privacy while elevating your experience.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={promImages.introImg} alt="Inside a luxury vehicle" />
          </div>
        </div>
      </section>

      {/* Premium Fleet */}
      <FleetSection
        eyebrow="Our Fleet"
        heading="Our Nashville Prom Limousine Fleet"
        serviceSlug="prom"
      />

      {/* Why Choose */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-1">
            <PlaceholderImage src={promImages.whyImg} alt="Customers enjoying a limo arrival" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Why Choose Swift Chauffeurs for Prom Night?
            </h2>
            <p className="mt-4 text-[15px] text-text-muted">
              Here's why Nashville students and parents trust us for prom limo rentals:
            </p>
            <div className="mt-7 flex flex-col gap-5">
              {promWhy.map((item) => (
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
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={promImages.partyImg} alt="Prom party celebration" />
          </div>
          <div>
            <span className="eyebrow">Prom Pricing</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Prom Limousine Packages for Every Group
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Pricing may depend on the vehicle, prom date, rental hours, passenger count, pickup area, stops,
              distance, and seasonal demand. Share your plans and we'll build a tailored quote that fits your group and
              your night.
            </p>
            <blockquote className="mt-7 border-l-2 border-gold pl-5 font-serif text-lg text-text italic">
              "Luxury isn't about the price you pay; it's about the experience that leaves a lasting impression."
            </blockquote>
            <CtaButtons phone={PHONE} className="mt-8" />
          </div>
        </div>
      </section>

      {/* Spotlight / Red Carpet */}
      <section className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0">
          <PlaceholderImage src={promImages.diningImg} alt="Red carpet arrival" />
        </div>
        <div className="relative z-10 mx-auto max-w-(--breakpoint-xl) px-6 py-20 md:px-16 lg:px-24">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Step Into the Spotlight</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-ink-fg md:text-4xl">
              Prom Limousine Service with a Red Carpet Arrival
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-fg-muted">
              Turn your prom night into a truly unforgettable experience. Our luxurious limos and signature red carpet
              treatment are designed to make you feel like a star — with attentive chauffeurs, elegant vehicles, and
              every detail tailored for your comfort and style.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {promSpotlightFeatures.map((f, i) => {
              const Ico = spotlightIcons[i];
              return (
                <div key={f.title} className="rounded-xl border border-border bg-panel/80 p-6 backdrop-blur-m">
                  <Ico width={28} height={28} className="text-gold" />
                  <h3 className="mt-4 text-[15px] font-semibold text-text">{f.title}</h3>
                  <p className="mt-1 text-[13px] text-text-muted">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Reasons to Trust */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Nashville's Trusted Prom Limo Service</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Reasons to Trust Swift Chauffeurs for Prom Night
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              The elegance and dependability of a professional chauffeur service are unmatched by ride-sharing apps.
              Here's what makes us unique:
            </p>
            <div className="mt-7 flex flex-col gap-5">
              {promTrust.map((item) => (
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={promImages.trustImg} alt="Premium limousine" />
          </div>
        </div>
      </section>

      <CitiesWeServe />

      {/* Nashville Prom Limo FAQs */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Nashville Prom Limo FAQs</h2>
          </div>
          <FaqAccordion items={promFaqs} />
        </div>
      </section>

      {/* Booking steps */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Plan Your Nashville Prom Night Ride</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Get Your Nashville Prom Limo Quote</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {promSteps.map((s) => (
              <article key={s.step} className="relative rounded-xl border border-border bg-panel p-8">
                <span className="font-serif text-5xl text-gold/30">{s.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-text">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-5 text-center">
            <p className="max-w-xl text-[15px] text-text-muted">
              Ready to make prom night unforgettable? Reserve your premium ride today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <Link to="/contact" className="btn btn-outline">
                Contact Us <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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
  blackCarImages,
  blackCarFeatures,
  blackCarPricing,
  blackCarPreferred,
  blackCarOffers,
  blackCarServiceFeatures,
  blackCarSteps,
  blackCarFaqs,
} from "../data/blackCarContent";

const relatedServices = [
  { label: "Airport Transportation", path: "/car-service-nashville-airport" },
  { label: "Corporate Chauffeur Service", path: "/executive-chauffeur" },
  { label: "Concert Transportation", path: "/concert-transportation" },
  { label: "Wedding Transportation", path: "/wedding-limo-chauffeur" },
  { label: "Stretch Limousine", path: "/stretch-limousine-hire-nashville" },
];
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

const serviceIcons = [ClockIcon, ShieldIcon, AwardIcon, DiamondIcon];

export default function BlackCarPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  return (
    <>
      {/* Hero (with quote form, matching home hero) */}
      <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={blackCarImages.heroImg} alt="Luxury black car service" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-6 px-5 py-10 sm:gap-10 sm:px-10 sm:py-14 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/50 p-5 sm:p-6 lg:max-w-lg">
            <span className="eyebrow">Private Travel, Professionally Chauffeured</span>
            <h1 className="font-serif text-[2rem] leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              Luxury Black Car Service in Nashville, TN
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-fg-muted">
              Travel throughout Nashville with professional black car service tailored to airport transfers, corporate
              schedules, special events, and private journeys.
            </p>
            <TrustBadges />
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
            </div>
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm
              heading={<>Get a Nashville Black Car <span className="text-gold">Quote</span></>}
              submitLabel="Check Availability & Pricing"
            />
          </div>
        </div>
      </section>
      <HeroMarquee />

      {/* Intro: features + pricing */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Nashville Black Car Service</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Professional Black Car Transportation in Nashville
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Swift Chauffeurs provides private black car service for business travel, airport transportation, special
              events, and personal journeys. Expect professional chauffeurs, clean vehicles, punctual pickups, and
              service tailored to your schedule.
            </p>
            <ul className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {blackCarFeatures.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing card */}
          <div className="overflow-hidden rounded-xl border border-border bg-panel">
            <div className="relative aspect-[16/9]">
              <PlaceholderImage src={blackCarImages.pricingImg} alt="Luxury black car service" />
              <div className="absolute bottom-4 left-5">
                <h3 className="font-serif text-xl text-ink-fg">{blackCarPricing.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[13px] text-text-muted">{blackCarPricing.desc}</p>
              <a href={PHONE} className="btn btn-gold mt-5 w-full">
                Reserve Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Fleet */}
      <FleetSection
        eyebrow="Your Dream, Our Destination"
        heading="Our Nashville Black Car Fleet"
        serviceSlug="black-car"
      />

      {/* Nashville Black Car Service (descriptive) */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={blackCarImages.serviceImg} alt="Luxury black car" />
          </div>
          <div>
            <span className="eyebrow">Private Black Car Transportation</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Comfort, Discretion, and Reliable Service
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Swift Chauffeurs isn't just an executive black car hire Nashville that provides transportation service from point A to point B. Our professional chauffeurs are dedicated to offering exceptional service, combining punctuality, discretion, and a high level of attention to detail. With years of experience, they're skilled in providing a smooth, safe, and luxurious ride, whether you're navigating through the city of Nashville. For those who appreciate elegance and sophistication, our sleek black cars transportation Nashville offer the perfect mix of style and comfort. With luxurious leather seating, advanced climate control, and an enjoyable ride, you'll experience true luxury from start to finish. No matter the size of your group, our fleet is ready to accommodate your needs, with a range of options to ensure everyone travels in comfort and luxury.
            </p>
            <a href={PHONE} className="btn btn-gold mt-8">
              Reserve Now
            </a>
          </div>
        </div>
      </section>

      {/* Customer reviews */}
      <CustomerReviews />

      {/* Preferred Choice */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Why Choose Swift Chauffeurs for Black Car Service?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Every Swift Chauffeurs reservation is handled by a licensed, professional chauffeur focused on safe,
              efficient, and courteous service. From a downtown office to a suburban pickup, our Nashville black car
              service is built around punctuality, comfort, and clear communication from pickup to drop-off.
            </p>
            <div className="mt-7 flex flex-col gap-5">
              {blackCarPreferred.map((item) => (
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
            <PlaceholderImage src={blackCarImages.preferredImg} alt="Luxury black car" />
          </div>
        </div>
      </section>

      {/* Affordability */}
      <section className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0">
          <PlaceholderImage src={blackCarImages.affordabilityBg} alt="Luxury transportation" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-10 px-6 py-20 md:px-16 lg:grid-cols-2 lg:px-24">
          <div className="rounded-2xl border border-border bg-panel/80 p-8 backdrop-blur-m">
            <h3 className="font-serif text-2xl text-text">Reserve Professional Black Car Service in Nashville, TN</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Tell us your pickup details, destination, passenger count, and preferred vehicle to receive a personalized
              quote. Book your ride today and experience why Swift Chauffeurs is Nashville's trusted black car company.
            </p>
            <a href="#quote" className="btn btn-gold mt-6">
                  Check Availability &amp; Pricing
                </a>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Reasons for Choosing Swift Chauffeurs</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">What We Offer</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] text-text-muted">
              While ride-sharing apps are convenient, they often fall short in reliability and luxury. The perks we offer includes: Guaranteed Availability, Professional Chauffeurs, Luxury Vehicles, Personalized Experience.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blackCarOffers.map((item) => (
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
              Reserve True Luxury on the Go
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              With just a few clicks, you can reserve your luxury vehicle and be on your way to enjoying Nashville in style. Whether you're traveling for business or pleasure, our premium service ensures you'll arrive at your destination feeling relaxed and refreshed.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {blackCarServiceFeatures.map((f, i) => {
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

      <CitiesWeServe />

      {/* Nashville Black Car Service FAQs */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Nashville Black Car Service FAQs</h2>
          </div>
          <FaqAccordion items={blackCarFaqs} />
          <div className="mt-12 text-center">
            <p className="text-[13px] font-semibold tracking-wide text-text-muted uppercase">Explore Related Services</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="rounded-full border border-border bg-panel px-4 py-2 text-sm font-semibold text-text hover:border-gold hover:text-gold"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking steps */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Book the Best Black Car Service</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Reserve Your Nashville Black Car Service</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {blackCarSteps.map((s) => (
              <article key={s.step} className="rounded-xl border border-border bg-panel p-8">
                <span className="font-serif text-5xl text-gold/30">{s.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-text">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-5 text-center">
            <p className="max-w-xl text-[15px] text-text-muted">
              Reserve your ride now and elevate your travel experience with comfort, style, and peace of mind.
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

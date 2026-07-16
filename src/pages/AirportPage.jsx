import { Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import QuoteForm from "../components/QuoteForm";
import FleetSection from "../components/FleetSection";
import CardSlider from "../components/CardSlider";
import TrustBadges from "../components/TrustBadges";
import AreasWeServe from "../components/AreasWeServe";
import {
  StarIcon,
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
  airportImages,
  airportFeatures,
  airportPricing,
  airportFleet,
  airportReviews,
  airportPreferred,
  airportOffers,
  airportServiceFeatures,
  airportAreas,
  airportSteps,
} from "../data/airportContent";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

const serviceIcons = [ClockIcon, ShieldIcon, AwardIcon, DiamondIcon];

export default function AirportPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  return (
    <>
      {/* Hero (with quote form, matching home hero) */}
      <section className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={airportImages.heroImg} alt="Luxury airport car service" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-10 px-6 py-14 sm:px-10 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 lg:max-w-lg">
            <span className="eyebrow">Nashville's Best Airport Car Service</span>
            <h1 className="font-serif text-4xl leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              Transform Your <span className="text-gold italic">Airport Travel</span> with Ease
            </h1>
            <TrustBadges />
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <Link to="/contact" className="btn btn-outline border-ink-border-strong text-ink-fg hover:border-gold-light hover:text-gold-light">
                Book Now
              </Link>
            </div>
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Intro: features + pricing */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Premium BNA Car Service</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Effortless, Luxurious Airport Transportation
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Imagine stepping into a luxurious car with a professional chauffeur ready to handle everything. Here's
              what every BNA transfer includes:
            </p>
            <ul className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {airportFeatures.map((line) => (
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
              <PlaceholderImage src={airportImages.suvImg} alt="Luxury SUV airport service" />
              <div className="absolute bottom-4 left-5">
                <h3 className="font-serif text-xl text-ink-fg">{airportPricing.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[13px] text-text-muted">{airportPricing.desc}</p>
              <p className="mt-5 text-sm font-semibold tracking-wide text-gold uppercase">{airportPricing.route}</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {airportPricing.rates.map((r) => (
                  <div key={r.label} className="rounded-lg border border-border bg-bg-alt p-4 text-center">
                    <p className="text-xs text-text-faint">{r.label}</p>
                    <p className="mt-1 font-serif text-2xl text-gold">{r.price}</p>
                    <p className="text-[11px] text-text-muted">{r.note}</p>
                  </div>
                ))}
              </div>
              <a href={PHONE} className="btn btn-gold mt-5 w-full">
                Reserve Your Airport Transfer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Fleet */}
      <FleetSection
        eyebrow="Your Dream, Our Destination"
        heading="Tennessee's Best Limousine Fleet"
        items={airportFleet}
      />

      {/* Nashville Airport Car Service (descriptive) */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={airportImages.serviceImg} alt="Private jet at sunset" />
          </div>
          <div>
            <span className="eyebrow">Nashville Airport Car Service</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Luxury Airport Transport, a Customer-First Approach
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Traveling to or from Nashville International Airport (BNA) will never be mundane again — it becomes a
              reflection of the refinement you crave. Our courteous, professional chauffeurs and range of luxury
              vehicles deliver the highest level of travel experience in the industry.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              From assisting with luggage to accommodating last-minute schedule changes, we prioritize flexibility and
              attention to detail. Plush leather, excellent climate control, and a relaxing atmosphere combine to
              produce a journey that feels like a getaway from the everyday.
            </p>
            <a href={PHONE} className="btn btn-gold mt-8">
              Reserve Now
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Customer Reviews for Our BNA Car Service</span>
            <h2 className="flex items-center justify-center gap-3 font-serif text-3xl font-medium text-text md:text-4xl">
              4.9 Rating
              <span className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} width={20} height={20} />
                ))}
              </span>
            </h2>
            <p className="mt-2 text-sm text-text-muted">From 261 verified reviews</p>
          </div>
          <CardSlider
            items={airportReviews.map((r) => ({ ...r, title: r.name + r.date }))}
            autoPlayMs={4500}
            renderCard={(r) => (
              <article className="h-full rounded-xl border border-border bg-panel p-6">
                <div className="mb-3 flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} width={15} height={15} />
                  ))}
                </div>
                <p className="mb-5 text-sm leading-relaxed text-text-muted">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border-strong bg-panel-alt font-serif text-sm text-gold">
                    {r.name.charAt(0)}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-text">{r.name}</h4>
                    <p className="text-xs text-text-faint">{r.date}</p>
                  </div>
                </div>
              </article>
            )}
          />
        </div>
      </section>

      {/* Preferred Choice */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Nashville's Preferred Choice</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Skilled Service You Can Count On
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Our drivers are completely licensed and trained to ensure your safety and pleasure at all times — from
              the moment they welcome you with a warm smile until you arrive on schedule.
            </p>
            <div className="mt-7 flex flex-col gap-5">
              {airportPreferred.map((item) => (
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
            <PlaceholderImage src={airportImages.preferredImg} alt="Airport terminal at sunset" />
          </div>
        </div>
      </section>

      {/* Affordability */}
      <section className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0">
          <PlaceholderImage src={airportImages.skyImg} alt="Airplane wing at sunset" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-10 px-6 py-20 md:px-16 lg:grid-cols-2 lg:px-24">
          <div>
            <span className="eyebrow">Affordability With Peak-Level Luxury</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-ink-fg md:text-4xl">
              Ride in Comfort, Arrive in Style
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-fg-muted">
              With USB ports to keep your devices charged, complimentary Wi-Fi to stay connected, and bottled water to
              keep you refreshed, we've thought of everything to make your ride as comfortable as possible — world-class
              comfort, style, and reliability at a fraction of the cost.
            </p>
            <blockquote className="mt-7 border-l-2 border-gold pl-5 font-serif text-lg text-ink-fg italic">
              "Luxury isn't about the price you pay; it's about the experience that leaves a lasting impression."
            </blockquote>
          </div>
          <div className="rounded-2xl border border-border bg-panel/80 p-8 backdrop-blur-sm">
            <h3 className="font-serif text-2xl text-text">Travel in Style with Apex Motors</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              From corporate travel to family vacations, our Nashville airport limo is made to meet your specific
              requirements. Book today and discover why we're Nashville's preferred choice for chauffeur-driven
              excellence.
            </p>
            <Link to="/contact" className="btn btn-gold mt-6">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Reasons for Choosing Apex Motors</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">What We Offer</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] text-text-muted">
              While ride-sharing apps are convenient, they often fall short in reliability and luxury. Here's what sets
              us apart:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {airportOffers.map((item) => (
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
              Organize your trip, choose your car, and customize your preferences with a few clicks or a fast phone
              call. Trust Apex Motors to provide more than just a chauffeur service.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {airportServiceFeatures.map((f, i) => {
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

      <AreasWeServe areas={airportAreas} />

      {/* Booking steps */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Book the Best BNA Car Service</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Reserve in Three Simple Steps</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {airportSteps.map((s) => (
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

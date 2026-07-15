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
  blackCarImages,
  blackCarFeatures,
  blackCarPricing,
  blackCarFleet,
  blackCarReviews,
  blackCarPreferred,
  blackCarOffers,
  blackCarServiceFeatures,
  blackCarAreas,
  blackCarSteps,
} from "../data/blackCarContent";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

const serviceIcons = [ClockIcon, ShieldIcon, AwardIcon, DiamondIcon];

export default function BlackCarPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  return (
    <>
      {/* Hero (with quote form, matching home hero) */}
      <section className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={blackCarImages.heroImg} alt="Luxury black car service" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink from-35% via-ink/85 via-58% to-transparent to-90% sm:from-10% sm:via-40% sm:to-80%" />

        <div className="relative z-10 flex w-full flex-col items-start gap-10 px-6 py-14 sm:px-10 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 lg:max-w-lg">
            <span className="eyebrow">Luxury Black Car Service</span>
            <h1 className="font-serif text-4xl leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              Get an <span className="text-gold italic">Instant Quote</span>
            </h1>
            <TrustBadges />
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <Link to="/contact" className="btn btn-outline border-ink-border-strong text-ink-fg hover:border-gold-light hover:text-gold-light">
                Contact Us
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
            <span className="eyebrow">Luxury Black Limo & Car Service Nashville</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Dominate Your Commute with Class
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              We are offering the most affordable and luxury black car transportation Nashville, Tennessee. Whether it's a corporate transfer or a stylish ride for a special occasion, we deliver chauffeur service that goes beyond standard transportation.
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
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <h3 className="font-serif text-xl text-ink-fg">{blackCarPricing.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[13px] text-text-muted">{blackCarPricing.desc}</p>
              <p className="mt-5 text-sm font-semibold tracking-wide text-gold uppercase">{blackCarPricing.route}</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {blackCarPricing.rates.map((r) => (
                  <div key={r.label} className="rounded-lg border border-border bg-bg-alt p-4 text-center">
                    <p className="text-xs text-text-faint">{r.label}</p>
                    <p className="mt-1 font-serif text-2xl text-gold">{r.price}</p>
                    <p className="text-[11px] text-text-muted">{r.note}</p>
                  </div>
                ))}
              </div>
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
        heading="Our Premium Fleet"
        items={blackCarFleet}
      />

      {/* Nashville Black Car Service (descriptive) */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={blackCarImages.serviceImg} alt="Luxury black car" />
          </div>
          <div>
            <span className="eyebrow">Swift Chauffeurs is Nashville's Preferred Choice Black Car Service</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Luxury Black Limo & Car Service Nashville
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

      {/* Reviews */}
      <section className="border-y border-border bg-bg-alt px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Reviews For Luxury Black Car Transportation Nashville TN</span>
            <h2 className="flex items-center justify-center gap-3 font-serif text-3xl font-medium text-text md:text-4xl">
              4.9 Rating
              <span className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} width={20} height={20} />
                ))}
              </span>
            </h2>
            <p className="mt-2 text-sm text-text-muted">With 261 Reviews</p>
          </div>
          <CardSlider
            items={blackCarReviews.map((r) => ({ ...r, title: r.name + r.date }))}
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
            <span className="eyebrow">Swift Chauffeurs is Nashville's Preferred Choice Black Car Service</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Ultimate VIP Black Car Transportation Nashville | Elite Chauffeur Service
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Every driver of Swift Chauffeurs is licensed and courteous extensively trained to provide safe, efficient, and courteous service. You'll experience premium hospitality from pick-up to drop-off. Whether you're heading to a downtown office or commuting to a suburban location, our black car service Nashville ensures that your daily journey becomes the highlight of your routine.
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
        <div className="absolute inset-0 bg-ink/88" />
        <div className="relative z-10 mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-10 px-6 py-20 md:px-16 lg:grid-cols-2 lg:px-24">
          <div>
            <span className="eyebrow">Affordability With Peak Level Luxury Limousines</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-ink-fg md:text-4xl">
              Ride Like Royalty, Arrive Like a Boss
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-fg-muted">
              You don't have to compromise on quality to stick to your budget. Our premium vehicles and professional chauffeurs deliver reliable service at a price that fits your lifestyle. From the moment you step into one of our vehicles, you're treated like royalty.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-fg-muted">
              Our focus on comfort, elegance, and punctuality ensures you arrive feeling confident and in control. Our black car service Nashville is designed to offer world-class comfort, style, and reliability at a fraction of the cost you'd expect in Nashville, TN. We truly believe that:
            </p>
            <blockquote className="mt-7 border-l-2 border-gold pl-5 font-serif text-lg text-ink-fg italic">
              "Luxury isn't about the price you pay; it's about the experience that leaves a lasting impression."
            </blockquote>
          </div>
          <div className="rounded-2xl border border-border bg-panel/80 p-8 backdrop-blur-sm">
            <h3 className="font-serif text-2xl text-text">Travel in Style with Luxury Black Car & Chauffeur Service Nashville, TN</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              We understand that every client has unique needs, which is why we offer personalized packages designed to fit any occasion or preference. Book your ride today and experience why Swift Chauffeurs is Nashville's trusted black car chauffeur company.
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
      <section className="border-t border-border bg-bg-alt px-6 py-20 md:px-16 lg:px-24">
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

      <AreasWeServe areas={blackCarAreas} />

      {/* Booking steps */}
      <section className="border-t border-border bg-bg-alt px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Book the Best Black Car Service</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Here's how you can book your premium black car service in Nashville, today</h2>
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

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
  promImages,
  promFleet,
  promWhy,
  promReviews,
  promSpotlightFeatures,
  promTrust,
  promAreas,
  promSteps,
} from "../data/promContent";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

function CtaButtons({ className = "" }) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <a href={PHONE} className="btn btn-gold">
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
      <section className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={promImages.heroImg} alt="Luxury limousine at night" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink from-35% via-ink/85 via-58% to-transparent to-90% sm:from-10% sm:via-40% sm:to-80%" />

        <div className="relative z-10 flex w-full flex-col items-start gap-10 px-6 py-14 sm:px-10 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 lg:max-w-lg">
            <span className="eyebrow">Prom Night Chauffeur Service</span>
            <h1 className="font-serif text-4xl leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              Arrive in Style on <span className="text-gold italic">Prom Night</span>
            </h1>
            <TrustBadges />
            <CtaButtons className="mt-9" />
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Intro / experience band */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Your Dream, Our Destination</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              An Unforgettable Night, From Pick-Up to After-Party
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Our professional, licensed chauffeurs are dedicated to your safety and comfort, while our fleet of
              elegant limousines adds a touch of luxury to your big night. From black car service in Nashville to
              sprinter van rentals, we take care of everything so you can focus on making memories with friends.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Imagine stepping into a stunning limo with plush leather seats, soft ambient lighting, and advanced
              climate control that keeps you comfortable no matter the weather. Whether it's a ride to dinner, the prom
              venue, or the after-party, we ensure you arrive in style.
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
        eyebrow="Our Premium Fleet"
        heading="Ride in Signature Luxury"
        items={promFleet}
      />

      {/* Why Choose */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-1">
            <PlaceholderImage src={promImages.whyImg} alt="Customers enjoying a limo arrival" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Why Choose Apex Motors for Prom Night?</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Your Prom Deserves More Than Just Transportation
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

      {/* Reviews */}
      <section className="border-y border-border bg-bg-alt px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Reviews From Previous Customers</span>
            <h2 className="flex items-center justify-center gap-3 font-serif text-3xl font-medium text-text md:text-4xl">
              4.9 Rating
              <span className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} width={20} height={20} />
                ))}
              </span>
            </h2>
            <p className="mt-2 text-sm text-text-muted">Based on 261 verified reviews</p>
          </div>
          <CardSlider
            items={promReviews.map((r) => ({ ...r, title: r.name + r.date }))}
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

      {/* Affordable Luxury */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={promImages.partyImg} alt="Prom party celebration" />
          </div>
          <div>
            <span className="eyebrow">Affordable Luxury for Prom Night</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Make an Impression That Lasts
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              At Apex Motors, we make luxury affordable for your prom night. Our limo rental service in Nashville
              blends style, comfort, and value to create an enjoyable experience for you and your friends.
            </p>
            <blockquote className="mt-7 border-l-2 border-gold pl-5 font-serif text-lg text-text italic">
              "Luxury isn't about the price you pay; it's about the experience that leaves a lasting impression."
            </blockquote>
            <CtaButtons className="mt-8" />
          </div>
        </div>
      </section>

      {/* Spotlight / Red Carpet */}
      <section className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0">
          <PlaceholderImage src={promImages.diningImg} alt="Red carpet arrival" />
        </div>
        <div className="absolute inset-0 bg-ink/85" />
        <div className="relative z-10 mx-auto max-w-(--breakpoint-xl) px-6 py-20 md:px-16 lg:px-24">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Step Into the Spotlight</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-ink-fg md:text-4xl">
              Prom Limousine Rental with Red Carpet Service
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
                <div key={f.title} className="rounded-xl border border-border bg-panel/80 p-6 backdrop-blur-sm">
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
            <span className="eyebrow">Nashville's Top Prom Limo Rental Service</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Reasons to Trust Apex Motors for Prom Night
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

      <AreasWeServe eyebrow="Prom Limo Rentals in Your Neighborhood" areas={promAreas} />

      {/* Booking steps */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Book the Best Prom Limo in Nashville</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Reserve in Three Simple Steps</h2>
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

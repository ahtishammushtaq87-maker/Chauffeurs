import { Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import QuoteForm from "../components/QuoteForm";
import FleetSection from "../components/FleetSection";
import CardSlider from "../components/CardSlider";
import TrustBadges from "../components/TrustBadges";
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
  weddingImages,
  weddingFeatures,
  weddingPricing,
  weddingAffordablePerks,
  weddingFleet,
  weddingReviews,
  weddingPreferred,
  weddingOffers,
  weddingServiceFeatures,
  weddingAreas,
  weddingSteps,
} from "../data/weddingContent";

const PHONE = "tel:+18885552739";

const serviceIcons = [ClockIcon, ShieldIcon, AwardIcon, DiamondIcon];

export default function WeddingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={weddingImages.heroImg} alt="Luxury wedding limo service" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink from-35% via-ink/85 via-58% to-transparent to-90% sm:from-10% sm:via-40% sm:to-80%" />

        <div className="relative z-10 flex w-full flex-col items-start gap-10 px-6 py-14 sm:px-10 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 lg:max-w-lg">
            <span className="eyebrow">Luxury Wedding Transportation in Nashville</span>
            <h1 className="font-serif text-4xl leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              Make Your <span className="text-gold italic">Grand Entrance</span>
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
            <span className="eyebrow">Best Wedding Transportation Service in Nashville</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Your Wedding Day Deserves Perfection
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Your wedding day deserves more than just transportation; it deserves perfection. At Swift Chauffeurs, we understand the importance of every moment. Our professional chauffeurs are dedicated to delivering exceptional service, ensuring every detail is flawlessly handled. With years of expertise in luxury transportation in Nashville, we focus on creating smooth and peaceful journeys so you can concentrate on celebrating your love.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Imagine stepping into a luxurious vehicle with sleek leather interiors, advanced climate control, and plenty of space for flowing gowns and joyful laughter. Whether it is a ride to the ceremony, reception, or a dreamy photo location, our Nashville wedding transportation ensures you arrive in style, comfort, and right on time. At Swift Chauffeurs, we do not just get you to your destination — we make every mile magical. From the moment you step into one of our elegant limos, you will feel the luxury, care, and attention to detail that enhances the beauty of your big day.
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
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Pricing card */}
          <div className="overflow-hidden rounded-xl border border-border bg-panel">
            <div className="relative aspect-[16/9]">
              <PlaceholderImage src={weddingImages.introImg} alt="Luxury wedding limo" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <h3 className="font-serif text-xl text-ink-fg">{weddingPricing.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[13px] text-text-muted">{weddingPricing.desc}</p>
              <p className="mt-5 text-sm font-semibold tracking-wide text-gold uppercase">{weddingPricing.route}</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {weddingPricing.rates.map((r) => (
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
        items={weddingFleet}
      />

      {/* Why Couples Choose */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-1">
            <PlaceholderImage src={weddingImages.whyImg} alt="Wedding limousine" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Why Couples Choose Swift Chauffeurs</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Your Wedding Day Deserves Nothing Less Than Perfection
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Your wedding day deserves nothing less than perfection, and the best limo service in Nashville is here to deliver an experience as exceptional as the occasion. From the moment you book with us, every detail is designed to elevate your day and provide unmatched luxury and ease. Here's why couples trust us:
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

      {/* Reviews */}
      <section className="border-y border-border bg-bg-alt px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Customer Reviews for Our Wedding Limo Service</span>
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
            items={weddingReviews.map((r) => ({ ...r, title: r.name + r.date }))}
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
      <section className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0">
          <PlaceholderImage src={weddingImages.affordabilityBg} alt="Luxury transportation" />
        </div>
        <div className="absolute inset-0 bg-ink/88" />
        <div className="relative z-10 mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-10 px-6 py-20 md:px-16 lg:grid-cols-2 lg:px-24">
          <div>
            <span className="eyebrow">Affordable Luxury for Your Wedding</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-ink-fg md:text-4xl">
              Make an Entrance, Leave an Impression
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-fg-muted">
              At Swift Chauffeurs, we believe that luxury shouldn't be reserved for the elite. Our wedding chauffeur hire service in Nashville offers the perfect mix of elegance, comfort, and affordability. From the moment you step into one of our vehicles, you'll experience:
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {weddingAffordablePerks.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-ink-fg-muted">
                  <CheckCircleIcon width={18} height={18} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
            <blockquote className="mt-7 border-l-2 border-gold pl-5 font-serif text-lg text-ink-fg italic">
              "Luxury isn't about the price you pay; it's about the experience that leaves a lasting impression."
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <Link to="/contact" className="btn btn-outline border-ink-border-strong text-ink-fg hover:border-gold-light hover:text-gold-light">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-panel/80 p-8 backdrop-blur-sm">
            <h3 className="font-serif text-2xl text-text">Plan Your Perfect Wedding Limo Entrance</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Every wedding is unique, and so are your transportation needs. Whether you're planning a grand entrance, coordinating bridal party arrivals, or ensuring seamless transportation for your guests, our customizable wedding limo services in Nashville are here to make it happen.
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
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Setting the Standard for Nashville Wedding Chauffeurs</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] text-text-muted">
              While ride-sharing apps are convenient, they often fall short in reliability and luxury. The perks we offer includes: Guaranteed Availability, Professional Chauffeurs, Luxury Vehicles, Personalized Experience.
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
      <section className="border-t border-border bg-bg-alt px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Exceptional Service</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Step Into Your Dream Wedding
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Wedding Limousine with Red Carpet. Our luxurious wedding limousine service includes a stunning red carpet entrance, ensuring you arrive in style. With premium service and attention to detail, we turn your grand entrance into a moment of elegance and pure celebration.
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

      {/* Areas We Serve */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Locations</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Areas We Serve in Nashville</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {weddingAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2.5 rounded-lg border border-border bg-panel px-4 py-3.5 text-sm text-text-muted transition-colors hover:border-gold-dim hover:text-gold"
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking steps */}
      <section className="border-t border-border bg-bg-alt px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Book the Best Wedding Chauffeur Service</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Here's how you can book your premium wedding limo service in Nashville, today</h2>
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
              Reserve your ride now and make your wedding day truly unforgettable with comfort, style, and peace of mind.
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

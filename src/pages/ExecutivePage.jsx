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
  ArrowRightIcon,
  PhoneIcon,
  ShieldIcon,
  AwardIcon,
  ClockIcon,
  DiamondIcon,
} from "../components/Icons";
import {
  executiveImages,
  executiveIntro,
  executiveFleet,
  executiveReviews,
  executivePreferred,
  executiveOffers,
  executiveServiceFeatures,
  executiveAreas,
  executiveSteps,
} from "../data/executiveContent";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

const serviceIcons = [ClockIcon, ShieldIcon, AwardIcon, DiamondIcon];

export default function ExecutivePage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  return (
    <>
      {/* Hero (with quote form, matching home hero) */}
      <section className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={executiveImages.heroImg} alt="Corporate handshake" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-10 px-6 py-14 sm:px-10 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/50 p-6 lg:max-w-lg">
            <span className="eyebrow">Corporate Chauffeur Service in Nashville</span>
            <h1 className="font-serif text-4xl leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              Travel Nashville Like <span className="text-gold italic">An Executive</span>
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

      {/* Intro */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Corporate Chauffeur Service in Nashville</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Luxury You Deserve, Efficiency You Can Rely On
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Our commitment to excellence makes Apex Motors your premier choice for corporate travel in Nashville.
              We realize that professionalism and reliability make a difference, so our stress-free chauffeur service
              is designed to meet busy professionals' needs. Highly trained chauffeurs, immaculate black cars, and
              meticulous attention to detail ensure that each ride reflects your professional image.
            </p>
            <div className="mt-7 flex flex-col gap-5">
              {executiveIntro.map((item) => (
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
            <a href={PHONE} className="btn btn-gold mt-8">
              Reserve Now
            </a>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={executiveImages.introImg} alt="Corporate executive" />
          </div>
        </div>
      </section>

      {/* Premium Fleet */}
      <FleetSection
        eyebrow="Your Dream, Our Destination"
        heading="Tennessee's Best Limousine Service"
        items={executiveFleet}
      />

      {/* Nashville Preferred Choice */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={executiveImages.whyImg} alt="Confident business executive" />
          </div>
          <div>
            <span className="eyebrow">Apex Motors is Nashville's Preferred Choice</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Corporate Chauffeur Service in Nashville
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              When choosing Apex Motors, each detail matters. We pride ourselves on delivering a top-end travel
              experience that marries professionalism, comfort, and reliability. Our trained chauffeurs are keenly
              observant of your personal time and satisfaction, thereby creating an easeful journey. If you're VIP, a
              corporate executive, or it's a group booking, our services adapt perfectly to your needs — as luxurious
              as it gets without denting your pocketbook.
            </p>
            <div className="mt-7 flex flex-col gap-5">
              {executivePreferred.map((item) => (
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
      <section className="border-y border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Customer Reviews for Corporate Chauffeur Service</span>
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
            items={executiveReviews.map((r) => ({ ...r, title: r.name + r.date }))}
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

      {/* Affordability */}
      <section className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0">
          <PlaceholderImage src={executiveImages.affordabilityBg} alt="Nashville city skyline" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-10 px-6 py-20 md:px-16 lg:grid-cols-2 lg:px-24">
          <div>
            <span className="eyebrow">Luxury That Fits Your Budget</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-ink-fg md:text-4xl">
              Affordable Corporate Chauffeur Services Without Compromise
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-fg-muted">
              Your business transportation needs don't have to come at the expense of luxury. We provide expert
              chauffeur services in Nashville that blend Mercedes-Benz comfort and elegance with reasonable prices.
              You'll notice a degree of elegance and style as soon as you enter that improves your professional
              image.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-fg-muted">
              We prioritize offering a service that is not only dependable but also cozy and on time, so you may
              reach your location with assurance and readiness. Our focus on comfort, elegance, and punctuality
              ensures you arrive feeling confident and in control. We truly believe that:
            </p>
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
            <h3 className="font-serif text-2xl text-text">Travel Like a Boss with Apex Motors</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Ready to transform your corporate travel experience? Book your executive chauffeur service with the
              best limo service in Nashville now. Our professional drivers and luxurious vehicles are here to ensure
              your journey is business class.
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
            <span className="eyebrow">Why Apex Motors Stands Out</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">
              Exceeding Expectations in Corporate Transportation Services
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] text-text-muted">
              We give a seamless, first-class ride experience, highly skilled drivers, very clean Mercedes-Benz
              vehicles, and a guarantee of being on time for appointments. This is why we're your number one choice:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {executiveOffers.map((item) => (
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
              Simplify your travel with Apex Motors. Booking your premium chauffeur service is quick and easy.
              Simply provide your details, choose from our fleet of luxurious Mercedes-Benz vehicles, and receive
              instant confirmation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {executiveServiceFeatures.map((f, i) => {
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

      <AreasWeServe areas={executiveAreas} />

      {/* Booking steps */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Book the Best Executive Chauffeur Service</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Reserve in Three Simple Steps</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {executiveSteps.map((s) => (
              <article key={s.step} className="rounded-xl border border-border bg-panel p-8">
                <span className="font-serif text-5xl text-gold/30">{s.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-text">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-5 text-center">
            <p className="max-w-xl text-[15px] text-text-muted">
              Reserve your ride now and elevate your corporate travel experience with comfort, style, and peace of
              mind.
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

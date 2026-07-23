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
  executivePreferred,
  executiveOffers,
  executiveServiceFeatures,
  executiveSteps,
  executiveUseCases,
  executiveFaqs,
} from "../data/executiveContent";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

const serviceIcons = [ClockIcon, ShieldIcon, AwardIcon, DiamondIcon];

export default function ExecutivePage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  return (
    <>
      {/* Hero (with quote form, matching home hero) */}
      <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={executiveImages.heroImg} alt="Corporate handshake" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-6 px-5 py-10 sm:gap-10 sm:px-10 sm:py-14 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/50 p-5 sm:p-6 lg:max-w-lg">
            <span className="eyebrow">Professional Transportation for Nashville Business Travel</span>
            <h1 className="font-serif text-[2rem] leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              Corporate Chauffeur Service in Nashville, TN
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-fg-muted">
              Professional chauffeured transportation for executives, corporate teams, meetings, airport transfers,
              roadshows, and business events throughout Nashville.
            </p>
            <TrustBadges />
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <Link to="/contact" className="btn btn-outline border-ink-border-strong text-ink-fg hover:border-gold-light hover:text-gold-light">
                Discuss a Corporate Account
              </Link>
            </div>
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm
              heading={<>Request a Corporate Transportation <span className="text-gold">Quote</span></>}
              submitLabel="Check Availability & Pricing"
              defaultVehicle="Corporate Chauffeur"
            />
          </div>
        </div>
      </section>
      <HeroMarquee />

      {/* Intro */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Business Travel</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Executive Transportation Built Around Your Business Schedule
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Swift Chauffeurs supports executives, assistants, event planners, and corporate teams with punctual
              pickups, flexible scheduling, professional chauffeurs, and vehicles selected for each itinerary.
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
        heading="Our Nashville Corporate Transportation Fleet"
        serviceSlug="executive"
      />

      {/* Nashville Preferred Choice */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={executiveImages.whyImg} alt="Confident business executive" />
          </div>
          <div>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Why Nashville Businesses Choose Swift Chauffeurs
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              With Swift Chauffeurs, every detail matters. We deliver a professional travel experience built on
              punctuality, comfort, and reliability, with chauffeurs who respect your time and schedule. Whether it's a
              VIP, a corporate executive, or a group booking, our service adapts to your business needs.
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

      {/* Customer reviews */}
      <CustomerReviews />

      {/* Corporate Transportation Services in Nashville — business use cases */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Business Services</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Corporate Transportation Services in Nashville
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {executiveUseCases.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-panel p-6">
                <h3 className="text-[15px] font-semibold text-text">{item.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affordability */}
      <section className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0">
          <PlaceholderImage src={executiveImages.affordabilityBg} alt="Nashville city skyline" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-10 px-6 py-20 md:px-16 lg:grid-cols-2 lg:px-24">
          <div className="rounded-2xl border border-border bg-panel/80 p-8 backdrop-blur-sm">
            <h3 className="font-serif text-2xl text-text">Transparent Corporate Transportation Pricing</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Ready to streamline your corporate travel? Share your itinerary and passenger details to receive a clear
              quote based on your vehicle, schedule, and route. Our professional chauffeurs and business-ready vehicles
              keep every trip organized and on time.
            </p>
            <a href="#quote" className="btn btn-gold mt-6">
                  Check Availability &amp; Pricing
                </a>
          </div>
        </div>
      </section>

      {/* Exceptional Service features */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Exceptional Service</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
            True Luxury on the Go
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Simplify your travel with Swift Chauffeurs. Booking your corporate chauffeur service is quick and easy.
              Share your itinerary, choose from our business-ready fleet, and receive clear confirmation for your trip.
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

      <CitiesWeServe />

      {/* Corporate Chauffeur Service FAQs */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Corporate Chauffeur Service FAQs</h2>
          </div>
          <FaqAccordion items={executiveFaqs} />
        </div>
      </section>

      {/* Booking steps */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Book Corporate Chauffeur Service</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Schedule Corporate Chauffeur Service in Nashville</h2>
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

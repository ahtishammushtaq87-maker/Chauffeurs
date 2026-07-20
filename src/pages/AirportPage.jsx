import { Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import QuoteForm from "../components/QuoteForm";
import HeroMarquee from "../components/HeroMarquee";
import FleetSection from "../components/FleetSection";
import CustomerReviews from "../components/CustomerReviews";
import TrustBadges from "../components/TrustBadges";
import CitiesWeServe from "../components/CitiesWeServe";
import FaqAccordion from "../components/FaqAccordion";
import ShowMore from "../components/ShowMore";
import {
  CheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  ShieldIcon,
  AwardIcon,
  ClockIcon,
  DiamondIcon,
  PinIcon,
} from "../components/Icons";
import {
  airportImages,
  airportHero,
  airportFeatures,
  airportIntro,
  airportArrivalBlocks,
  airportDeparture,
  airportVehicles,
  airportRoutes,
  airportZipAreas,
  airportWhyChauffeur,
  airportSteps,
  airportCostFactors,
  airportProviderChecklist,
  airportFaqs,
} from "../data/airportContent";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

const whyIcons = [ClockIcon, ShieldIcon, AwardIcon, DiamondIcon];

export default function AirportPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  return (
    <>
      {/* Hero (with quote form, matching home hero) */}
      <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={airportImages.heroImg} alt="Luxury airport car service" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-6 px-5 py-10 sm:gap-10 sm:px-10 sm:py-14 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/50 p-4 sm:p-6 lg:max-w-lg">
            <span className="eyebrow mb-2 text-[11px] tracking-[2px] sm:mb-3.5 sm:text-[13px] sm:tracking-[3px]">
              {airportHero.eyebrow}
            </span>
            <h1 className="font-serif text-[1.5rem] leading-[1.2] font-medium text-ink-fg sm:text-5xl sm:leading-[1.15] md:text-[56px]">
              {airportHero.titleLead} <span className="text-gold italic">{airportHero.titleAccent}</span>{" "}
              {airportHero.titleTail}
            </h1>
            <p className="mt-3.5 text-[12.5px] leading-relaxed text-ink-fg-muted sm:mt-5 sm:text-sm">
              {airportHero.intro}
            </p>
            <TrustBadges />
            {/* Mobile keeps both CTAs on one line: no wrap, equal widths, and
                tighter padding/tracking than the .btn defaults. Full size from sm:. */}
            <div className="mt-5 flex gap-2 sm:mt-9 sm:gap-4">
              <a
                href={PHONE}
                className="btn btn-gold flex-1 gap-1.5 px-2 text-[10px] tracking-[0.5px] sm:gap-2 sm:px-7 sm:text-[13px] sm:tracking-[1.5px]"
              >
                <PhoneIcon width={13} height={13} className="sm:h-[15px] sm:w-[15px]" /> {airportHero.primaryCta}
              </a>
              <a
                href="#quote"
                className="btn btn-gold flex-1 px-2 text-[10px] tracking-[0.5px] sm:px-7 sm:text-[13px] sm:tracking-[1.5px]"
              >
                {airportHero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm />
          </div>
        </div>
      </section>
      <HeroMarquee />

      {/* Quick benefits + reserve card */}
      <section className="px-6 py-10 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">PRIVATE BNA AIRPORT TRANSPORTATION</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Private Nashville Airport Car Service, Available 24/7
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Travel to or from Nashville International Airport with private pickup, professional chauffeur service, flight-aware coordination, and a vehicle selected for your passengers and luggage.
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

          <div className="overflow-hidden rounded-xl border border-border bg-panel">
            <div className="relative aspect-[16/9]">
              <PlaceholderImage src={airportImages.suvImg} alt="Luxury SUV airport service" />
            </div>
            <div className="p-6">
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
        serviceSlug="airport"
      />

      {/* Arrivals: BNA pickup, meet-and-greet, flight monitoring */}
      <section className="border-t border-border px-6 py-10 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">BNA Arrivals</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              BNA Airport Arrival Pickup, Handled End to End
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {airportArrivalBlocks.map((block) => (
              <article key={block.title} className="rounded-xl border border-border bg-panel p-6 sm:p-8">
                <h3 className="font-serif text-xl leading-snug text-text">{block.title}</h3>
                <ShowMore collapsedHeight="9rem" fadeFrom="from-panel">
                  {block.paragraphs.map((p) => (
                    <p key={p} className="mt-4 text-[13px] leading-relaxed text-text-muted">
                      {p}
                    </p>
                  ))}
                </ShowMore>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Departure Service */}
      <section className="border-t border-border px-6 py-10 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">{airportDeparture.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              {airportDeparture.heading}
            </h2>
            {airportDeparture.paragraphs.map((p) => (
              <p key={p} className="mt-5 text-[15px] leading-relaxed text-text-muted">
                {p}
              </p>
            ))}
            <p className="mt-6 text-[15px] font-semibold text-text">{airportDeparture.listTitle}</p>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {airportDeparture.list.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircleIcon width={18} height={18} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] leading-relaxed text-text-faint">{airportDeparture.footnote}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={airportImages.preferredImg} alt="Airport terminal at sunset" />
          </div>
        </div>
      </section>

      {/* Vehicles for solo travelers, families, and groups */}
      <section className="border-t border-border px-6 py-10 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Choose Your Vehicle</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">
              Luxury Vehicles for Solo Travelers, Families, and Groups
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] text-text-muted">
              The right airport vehicle depends on more than the number of passengers. Luggage can take up as much room
              as people, especially for long trips, golf groups, touring teams, and families.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {airportVehicles.map((item) => (
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

      {/* Customer reviews */}
      <CustomerReviews />

      {/* Popular BNA routes */}
      <section className="border-t border-border px-6 py-10 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Where We Drive</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Popular Nashville Airport Car Service Routes</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {airportRoutes.map((route) => (
              <article key={route.title} className="rounded-xl border border-border bg-panel p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-dim text-gold">
                  <PinIcon width={18} height={18} />
                </span>
                <h3 className="mt-4 text-[15px] font-semibold text-text">{route.title}</h3>
                <ShowMore collapsedHeight="6.5rem" fadeFrom="from-panel">
                  {route.paragraphs.map((p) => (
                    <p key={p} className="mt-2 text-[13px] leading-relaxed text-text-muted">
                      {p}
                    </p>
                  ))}
                </ShowMore>
              </article>
            ))}
          </div>
        </div>
      </section>

{/* A Private Nashville Airport Ride Built Around Your Flight */}
      <section className="border-t border-border px-6 py-10 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={airportImages.serviceImg} alt="Private jet at sunset" />
          </div>
          <div>
            <span className="eyebrow">{airportIntro.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              {airportIntro.heading}
            </h2>
            <ShowMore collapsedHeight="13rem">
              {airportIntro.paragraphs.map((p) => (
                <p key={p} className="mt-5 text-[15px] leading-relaxed text-text-muted">
                  {p}
                </p>
              ))}
              <p className="mt-6 text-[15px] font-semibold text-text">{airportIntro.listTitle}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {airportIntro.list.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                    <CheckIcon width={18} height={18} className="mt-0.5 flex-shrink-0 text-gold" />
                    {line}
                  </li>
                ))}
              </ul>
            </ShowMore>
            <a href={PHONE} className="btn btn-gold mt-8">
              Reserve Now
            </a>
          </div>
        </div>
      </section>

      {/* Service areas and ZIP codes */}
      <section className="border-t border-border px-6 py-10 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Service Areas</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">
              Local Nashville Service Areas and ZIP Codes
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] text-text-muted">
              Swift Chauffeurs serves airport travelers across Nashville and surrounding communities. Common pickup and
              drop-off areas include:
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {airportZipAreas.map((item) => (
              <li
                key={item.area}
                className="flex items-center justify-between gap-4 rounded-xl border border-border bg-panel px-5 py-4"
              >
                <span className="text-[13px] text-text-muted">{item.area}</span>
                <span className="flex-shrink-0 text-[13px] font-semibold text-gold">{item.zip}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[13px] leading-relaxed text-text-faint">
            ZIP boundaries and neighborhood names can overlap. Always provide the exact street address, hotel name,
            terminal, or venue when booking.
          </p>
        </div>
      </section>

      {/* Why a chauffeur instead of a ride app */}
      <section className="border-t border-border px-6 py-10 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Chauffeur vs. Ride App</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Why Choose a Chauffeur Instead of Waiting for a Ride App?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Ride apps, taxis, shared shuttles, and public transportation can all work for some airport trips. A
              private chauffeur is designed for travelers who value planning, direct service, vehicle quality, privacy,
              and help with trip details.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {airportWhyChauffeur.map((f, i) => {
              const Ico = whyIcons[i];
              return (
                <div key={f.title} className="rounded-xl border border-border bg-panel p-6">
                  <Ico width={28} height={28} className="text-gold" />
                  <h3 className="mt-4 text-[15px] font-semibold text-text">{f.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-text-muted">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Affordability banner */}
      <section className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0">
          <PlaceholderImage src={airportImages.skyImg} alt="Airplane wing at sunset" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-10 px-6 py-20 md:px-16 lg:grid-cols-2 lg:px-24">
          <div className="rounded-2xl border border-border bg-panel/80 p-8 backdrop-blur-m">
            <h3 className="font-serif text-2xl text-text">Reserve Your Nashville Airport Chauffeur</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Start or finish your trip with a private ride planned around your flight. Book for BNA arrivals,
              departures, hotel transfers, corporate travel, family trips, or group transportation. Share your flight,
              route, passenger count, and luggage details to receive the right vehicle and a complete quote.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Available for BNA pickups and drop-offs, Downtown Nashville, local neighborhoods, and long-distance
              Middle Tennessee transfers.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
              <a href="#quote" className="btn btn-gold">
                Get an Instant Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking steps */}
      <section className="border-t border-border px-6 py-10 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">BOOK YOUR BNA AIRPORT TRANSFER</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">
              How to Book Your Nashville Airport Car Service
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {airportSteps.map((s) => (
              <article key={s.step} className="rounded-xl border border-border bg-panel p-8">
                <span className="font-serif text-5xl text-gold/30">{s.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-text">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CitiesWeServe />

      {/* Cost factors + provider checklist */}
      <section className="border-t border-border px-6 py-10 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Pricing</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              What Affects the Cost of a Nashville Airport Chauffeur?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              The price of a private car service in Nashville can change based on:
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {airportCostFactors.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircleIcon width={18} height={18} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] leading-relaxed text-text-faint">
              The best way to compare providers is to request a complete written quote. A low starting price may not
              include airport fees, waiting, extra stops, gratuity, or the vehicle size you need.
            </p>
          </div>

          <div>
            <span className="eyebrow">Before You Book</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              How to Choose a Reliable BNA Transportation Provider
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Before booking BNA airport transportation, check the details that affect your trip:
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {airportProviderChecklist.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckIcon width={18} height={18} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] leading-relaxed text-text-faint">
              Clear answers are more useful than broad claims. Your provider should explain exactly what happens before,
              during, and after pickup.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border px-6 py-10 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-lg)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Good to Know</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">
              Nashville Airport Car Service FAQs
            </h2>
          </div>
          <FaqAccordion items={airportFaqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border px-6 py-10 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col items-center gap-5 text-center">
          <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Reserve Your Ride Today</h2>
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
      </section>
    </>
  );
}

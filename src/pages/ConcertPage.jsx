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
  concertImages,
  concertPreferred,
  concertOffers,
  concertServiceFeatures,
  concertSteps,
  concertEventTypes,
  concertVenues,
  concertFaqs,
} from "../data/concertContent";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

const serviceIcons = [ClockIcon, ShieldIcon, AwardIcon, DiamondIcon];

export default function ConcertPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  return (
    <>
      {/* Hero (with quote form, matching home hero) */}
      <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={concertImages.heroImg} alt="Concert crowd with stage lights" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-6 px-5 py-10 sm:gap-10 sm:px-10 sm:py-14 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/50 p-5 sm:p-6 lg:max-w-lg">
            <span className="eyebrow">Arrive Ready for the Show</span>
            <h1 className="font-serif text-[2rem] leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              Concert Transportation & Limo Service in Nashville, TN
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-fg-muted">
              Enjoy private, professionally chauffeured transportation to concerts and music events throughout
              Nashville, with vehicles for couples, executives, and groups.
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
              heading={<>Get a Concert Transportation <span className="text-gold">Quote</span></>}
              submitLabel="Check Availability & Pricing"
              defaultVehicle="Concert Transportation"
            />
          </div>
        </div>
      </section>
      <HeroMarquee />

      {/* Intro */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Luxury Concert Transportation</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Luxury Concert Transportation in Nashville
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Skip parking stress, rideshare delays, and post-show pickup confusion. Swift Chauffeurs coordinates
              private concert transportation around your schedule, group size, venue, and preferred vehicle.
            </p>
            <a href={PHONE} className="btn btn-gold mt-8">
              Reserve Now
            </a>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={concertImages.introImg} alt="Stretch limo on the road" />
          </div>
        </div>
      </section>

      {/* Premium Fleet */}
      <FleetSection
        eyebrow="Your Dream, Our Destination"
        heading="Our Nashville Concert Transportation Fleet"
        serviceSlug="concert"
      />

      {/* Nashville's Preferred Concert Limo Service */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={concertImages.whyImg} alt="Stretch limo on the road" />
          </div>
          <div>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Why Choose Swift Chauffeurs for Concert Transportation?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Every Swift Chauffeurs chauffeur is professionally licensed, experienced, and focused on punctual,
              courteous service. We understand how important timing is for live events and plan every route to ensure
              timely arrivals and coordinated departures.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Whether you're attending a major concert, music festival, or VIP event, our concert transportation
              becomes part of the celebration.
            </p>
            <div className="mt-7 flex flex-col gap-5">
              {concertPreferred.map((item) => (
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
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

     {/* What Sets Us Apart */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Why Choose Swift Chauffeurs for Concert Transportation?</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">What Sets Us Apart</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] text-text-muted">
              While standard rideshare services may get you to the venue, they can't match the comfort, reliability,
              and luxury of a professional concert limo service.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {concertOffers.map((item) => (
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

      {/* Event types — Private Transportation for Every Nashville Music Event */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Music Events</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Private Transportation for Every Nashville Music Event
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {concertEventTypes.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-panel p-6">
                <h3 className="text-[15px] font-semibold text-text">{item.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Transportation for Every Music Event */}
      <section className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0">
          <PlaceholderImage src={concertImages.affordabilityBg} alt="Chauffeur driving at sunset" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-10 px-6 py-20 md:px-16 lg:grid-cols-2 lg:px-24">
          <div className="rounded-2xl border border-border bg-panel/80 p-8 backdrop-blur-m">
            <h3 className="font-serif text-2xl text-text">Reserve Transportation for Your Next Nashville Concert</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Share your concert date, venue, pickup location, passenger count, and preferred vehicle to receive a
              personalized quote. Our team will help build a transportation plan that matches your event and group size.
            </p>
            <a href="#quote" className="btn btn-gold mt-6">
                  Check Availability &amp; Pricing
                </a>
          </div>
        </div>
      </section>

      {/* Venues — Concert Transportation to Nashville Venues */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Nashville Venues</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Concert Transportation to Nashville Venues
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              We provide private transportation to major arenas, stadiums, amphitheaters, and live-music venues across
              Nashville. Confirm your venue when booking so we can plan the best pickup and drop-off.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {concertVenues.map((v) => (
              <div key={v.name} className="rounded-xl border border-border bg-panel p-6">
                <h3 className="text-[15px] font-semibold text-text">{v.name}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-text-muted">{v.desc}</p>
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
              Luxury Concert Transportation Today
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Booking your concert limo service is simple and hassle-free. Whether you're planning weeks in advance
              or need last-minute transportation, our team is ready to assist.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {concertServiceFeatures.map((f, i) => {
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

      {/* Nashville Concert Transportation FAQs */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Nashville Concert Transportation FAQs</h2>
          </div>
          <FaqAccordion items={concertFaqs} />
        </div>
      </section>

      {/* Booking steps */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Book the Best Concert Transportation</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Get Your Nashville Concert Transportation Quote</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {concertSteps.map((s) => (
              <article key={s.step} className="rounded-xl border border-border bg-panel p-8">
                <span className="font-serif text-5xl text-gold/30">{s.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-text">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-5 text-center">
            <p className="max-w-xl text-[15px] text-text-muted">
              Reserve your ride now and elevate your concert experience with comfort, style, and peace of mind.
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

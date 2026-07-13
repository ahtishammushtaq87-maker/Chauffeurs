import { Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import QuoteForm from "../components/QuoteForm";
import FleetSection from "../components/FleetSection";
import CardSlider from "../components/CardSlider";
import TrustBadges from "../components/TrustBadges";
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
  concertImages,
  concertFleet,
  concertReviews,
  concertPreferred,
  concertOffers,
  concertServiceFeatures,
  concertAreas,
  concertSteps,
} from "../data/concertContent";

const PHONE = "tel:+18885552739";

const serviceIcons = [ClockIcon, ShieldIcon, AwardIcon, DiamondIcon];

export default function ConcertPage() {
  return (
    <>
      {/* Hero (with quote form, matching home hero) */}
      <section className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={concertImages.heroImg} alt="Concert crowd with stage lights" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink from-35% via-ink/85 via-58% to-transparent to-90% sm:from-10% sm:via-40% sm:to-80%" />

        <div className="relative z-10 flex w-full flex-col items-start gap-10 px-6 py-14 sm:px-10 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 lg:max-w-lg">
            <span className="eyebrow">Premium Concert Limo Service Nashville, TN</span>
            <h1 className="font-serif text-4xl leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              Arrive Like a <span className="text-gold italic">Celebrity</span>
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

      {/* Intro */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Luxury Concert Transportation Nashville</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Skip the Stress, Enjoy the Show
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              At Apex Motors, we understand that concerts are about more than just the music — they're about the
              entire experience. Our premium concert limo service provides luxury transportation for individuals,
              couples, and groups looking to elevate their night out.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Skip the stress of crowded parking lots, expensive rideshares, and post-event traffic. Our professional
              chauffeurs handle every detail while you relax in a luxurious vehicle equipped with premium amenities.
              Whether you're heading to Bridgestone Arena, Nissan Stadium, Ascend Amphitheater, or any concert venue
              in Nashville, we'll get you there comfortably and on time.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              From intimate nights out to large group celebrations, our diverse fleet offers the perfect
              transportation solution for every concert occasion.
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
        heading="Our Premium Fleet"
        items={concertFleet}
      />

      {/* Nashville's Preferred Concert Limo Service */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={concertImages.whyImg} alt="Stretch limo on the road" />
          </div>
          <div>
            <span className="eyebrow">Nashville's Preferred Concert Limo Service</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Luxury Concert Transportation Nashville
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Every chauffeur at Apex Motors is professionally licensed, highly trained, and committed to providing
              exceptional customer service. We understand the importance of punctuality when attending live events
              and carefully plan every route to ensure timely arrivals and departures.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Whether you're attending a major concert, music festival, or VIP event, our concert limo service
              transforms transportation into part of the celebration.
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

      {/* Reviews */}
      <section className="border-y border-border bg-bg-alt px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Reviews For Luxury Concert Car Transportation Nashville TN</span>
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
            items={concertReviews.map((r) => ({ ...r, title: r.name + r.date }))}
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

      {/* Luxury Transportation for Every Music Event */}
      <section className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0">
          <PlaceholderImage src={concertImages.affordabilityBg} alt="Chauffeur driving at sunset" />
        </div>
        <div className="absolute inset-0 bg-ink/88" />
        <div className="relative z-10 mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-10 px-6 py-20 md:px-16 lg:grid-cols-2 lg:px-24">
          <div>
            <span className="eyebrow">Luxury Transportation for Every Music Event</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-ink-fg md:text-4xl">
              Ride in Style to Your Favorite Concert
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-fg-muted">
              There's nothing like the anticipation of seeing your favorite artist perform live. Make the evening
              even more special with luxury concert transportation that matches the excitement of the event.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-fg-muted">
              Our vehicles feature comfortable leather seating, advanced climate control, premium sound systems, and
              spacious interiors designed for relaxation and entertainment. Gather your friends, enjoy refreshments,
              and start the celebration before you even reach the venue.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-fg-muted">
              Whether you're attending a country music concert, rock festival, pop performance, or private music
              event, Apex Motors ensures your journey is just as enjoyable as the destination.
            </p>
            <blockquote className="mt-7 border-l-2 border-gold pl-5 font-serif text-lg text-ink-fg italic">
              "The best nights deserve the best transportation."
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
            <h3 className="font-serif text-2xl text-text">Travel Like a VIP</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Concert Limo Service Tailored to Your Needs. Every concert experience is unique, which is why we offer
              customized transportation packages for all types of events and group sizes. Our team will help create a
              transportation plan that perfectly matches your occasion.
            </p>
            <Link to="/contact" className="btn btn-gold mt-6">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Why Choose Apex Motors for Concert Transportation?</span>
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

      {/* Exceptional Service features */}
      <section className="border-t border-border bg-bg-alt px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Exceptional Service</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Reserve Luxury Concert Transportation Today
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

      {/* Areas We Serve */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Locations</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Areas We Serve in Nashville</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {concertAreas.map((area) => (
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
            <span className="eyebrow">Book the Best Concert Limo Service</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Reserve in Three Simple Steps</h2>
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

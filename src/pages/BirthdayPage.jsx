import { Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import QuoteForm from "../components/QuoteForm";
import HeroMarquee from "../components/HeroMarquee";
import FleetSection from "../components/FleetSection";
import CustomerReviews from "../components/CustomerReviews";
import { CheckIcon, PhoneIcon, ShieldIcon, AwardIcon, ClockIcon, DiamondIcon, ArrowRightIcon } from "../components/Icons";
import TrustBadges from "../components/TrustBadges";
import CitiesWeServe from "../components/CitiesWeServe";
import {
  birthdayImages,
  birthdayWhy,
  birthdayHighlights,
  birthdaySteps,
  birthdayServiceFeatures,
} from "../data/birthdayContent";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

const serviceIcons = [ClockIcon, ShieldIcon, AwardIcon, DiamondIcon];

export default function BirthdayPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  return (
    <>
      {/* Hero (with quote form, matching home hero) */}
      <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={birthdayImages.heroImg} alt="Birthday celebration party lights" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-6 px-5 py-10 sm:gap-10 sm:px-10 sm:py-14 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/50 p-5 sm:p-6 lg:max-w-lg">
            <span className="eyebrow">Party Bus Rental in Nashville</span>
            <h1 className="font-serif text-[2rem] leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              Arrive in Style and <span className="text-gold italic">Elegance</span>
            </h1>
            <TrustBadges />
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <a href="#quote" className="btn btn-outline border-ink-border-strong text-ink-fg hover:border-gold-light hover:text-gold-light">
                  Book Now
                </a>
            </div>
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm />
          </div>
        </div>
      </section>
      <HeroMarquee />

      {/* Intro */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Best Luxury Car Service Nashville</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              A Birthday Celebration You Deserve
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Your birthday is more than just a day; it is a celebration of you. Our goal is to make every moment of
              your big day one to remember — that's why we offer more than just a ride. We provide an extraordinary
              experience designed to enhance your birthday celebration.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Our spacious sprinter vans are perfect for any birthday event, whether it's an intimate gathering or an
              exciting party with all your friends. With premium leather seating, vibrant party lighting, high-quality
              sound systems, and climate-controlled interiors, our buses create the ideal atmosphere for fun and
              celebration.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              From pickups and drop-offs to cruising around Nashville in style, we take care of all the transportation
              details so you can focus on enjoying yourself. Rent a luxurious party bus from us to make your birthday
              one to remember.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-panel">
            <div className="relative aspect-[16/9]">
              <PlaceholderImage src={birthdayImages.giftImg} alt="Birthday party bus gift" />
              <div className="absolute bottom-4 left-5">
                <span className="text-xs font-semibold tracking-wide text-gold uppercase">Birthday Party Bus</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[13px] text-text-muted">
                You are worthy of a comfortable and elegant celebration. Reserve today and let us handle every detail.
              </p>
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
        heading=" Premium Party Bus Fleet"
        serviceSlug="birthday"
      />

      {/* Create Lasting Memories (descriptive) */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={birthdayImages.cakeImg} alt="Birthday cake celebration" />
          </div>
          <div>
            <span className="eyebrow">Enjoying True Luxury</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Create Lasting Memories With Our Party Bus Rentals
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Picture stepping onto a lively, colorful party bus, instantly filled with excitement — balloons,
              sparkling streamers, and a joyful atmosphere set the stage for an unforgettable celebration. Inside, the
              bus transforms into a mobile party zone, with a dance floor, fun games, and a special spot for cutting
              the birthday cake.
            </p>
            <div className="mt-7 flex flex-col gap-5">
              {birthdayHighlights.map((item) => (
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

      {/* Why Choose */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Nashville's Top Choice</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Why Choose Swift Chauffeurs for Birthday Party Buses
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              We provide more than just transportation; we deliver an experience custom to your celebration. Here's
              why our party bus rentals in Nashville stand out:
            </p>
            <div className="mt-7 flex flex-col gap-5">
              {birthdayWhy.map((item) => (
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
            <PlaceholderImage src={birthdayImages.friendsImg} alt="Friends celebrating a birthday" />
          </div>
        </div>
      </section>

      {/* Exceptional Services (affordability-style band) */}
      <section className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0">
          <PlaceholderImage src={birthdayImages.discoImg} alt="Disco lights party atmosphere" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-10 px-6 py-20 md:px-16 lg:grid-cols-2 lg:px-24">
          <div>
            <span className="eyebrow">Exceptional Services for Your Birthday Celebration</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-ink-fg md:text-4xl">
              What Makes Us Nashville's Top Choice
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-fg-muted">
              Our luxury vehicles are designed to keep the fun flowing with spacious interiors, vibrant lighting, and
              comfortable seating. Whether you're hitting the town with friends or just cruising around, we make sure
              the ride is as unforgettable as the celebration.
            </p>
            <blockquote className="mt-7 border-l-2 border-gold pl-5 font-serif text-lg text-ink-fg italic">
              "Luxury isn't about the price you pay; it's about the experience that leaves a lasting impression."
            </blockquote>
          </div>
          <div className="rounded-2xl border border-border bg-panel/80 p-8 backdrop-blur-sm">
            <h3 className="font-serif text-2xl text-text">Plan Your Birthday Party Bus Rental</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Let Apex Motors make your birthday extraordinary. Contact us now to rent the best birthday party bus and
              get ready for a celebration like no other.
            </p>
            <a href="#quote" className="btn btn-gold mt-6">
                  Book Now
                </a>
          </div>
        </div>
      </section>

      {/* Celebrate in Style - Exceptional Service features */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Celebrate in Style on Your Birthday</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Exclusive Party Buses for a VIP Experience
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              Organize your trip, choose your bus, and customize your preferences with a few clicks or a fast phone
              call. Trust Apex Motors to provide more than just a party bus service.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {birthdayServiceFeatures.map((f, i) => {
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

      {/* Booking steps */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Book the Best Party Buses in Nashville</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Reserve in Three Simple Steps</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {birthdaySteps.map((s) => (
              <article key={s.step} className="rounded-xl border border-border bg-panel p-8">
                <span className="font-serif text-5xl text-gold/30">{s.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-text">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-5 text-center">
            <p className="max-w-xl text-[15px] text-text-muted">
              Reserve your ride now and get ready for a birthday celebration like no other.
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

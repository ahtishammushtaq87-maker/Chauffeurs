import { Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import QuoteForm from "../components/QuoteForm";
import HeroMarquee from "../components/HeroMarquee";
import CardSlider from "../components/CardSlider";
import { CheckCircleIcon, ArrowRightIcon, PhoneIcon, Icon } from "../components/Icons";
import TrustBadges from "../components/TrustBadges";
import CustomerReviews from "../components/CustomerReviews";
import {
  partyBusImages,
  partyBusFeatures,
  partyBusExperience,
  partyFleet,
  partyBusOnboard,
} from "../data/partyBusContent";
import { useAllServices } from "../hooks/useAllServices";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

export default function PartyBusPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  const allServices = useAllServices();

  return (
    <>
      {/* Hero (with quote form) */}
      <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={partyBusImages.heroImg} alt="Luxury party bus" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-6 px-5 py-10 sm:gap-10 sm:px-10 sm:py-14 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/50 p-5 sm:p-6 lg:max-w-lg">
            <span className="eyebrow">Luxury Party Bus Rental Nashville TN</span>
            <h1 className="font-serif text-[2rem] leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              Celebrate Bigger. Travel Together. <span className="text-gold italic">Arrive in Style.</span>
            </h1>
            <TrustBadges />
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <Link to="/contact" className="btn btn-outline border-ink-border-strong text-ink-fg hover:border-gold-light hover:text-gold-light">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm submitLabel="Reserve Your Nashville Party Bus" />
          </div>
        </div>
      </section>
      <HeroMarquee />

      {/* What Sets Swift Chauffeurs Apart */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-1">
            <PlaceholderImage src={partyBusImages.featuresImg} alt="Party bus celebration" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              What Sets Swift Chauffeurs Apart
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              At Swift Chauffeurs, we do more than provide transportation—we create memorable group travel
              experiences. Every party bus rental is carefully maintained and professionally managed to ensure your
              event runs smoothly from start to finish.
            </p>
            <ul className="mt-7 flex flex-col gap-3.5">
              {partyBusFeatures.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The Swift Experience */}
      <section className="border-y border-black/10 bg-white px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10">
            <PlaceholderImage src={partyBusImages.experienceImg} alt="Guests celebrating inside a party bus" />
          </div>

          <div>
            <span className="eyebrow">{partyBusExperience.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-black sm:text-4xl md:text-5xl">
              {partyBusExperience.headingLead}{" "}
              <span className="text-gold italic">{partyBusExperience.headingAccent}</span>
            </h2>

            <blockquote className="mt-7 border-l-2 border-gold pl-5">
              <p className="font-serif text-lg leading-relaxed text-gold italic sm:text-xl">
                “{partyBusExperience.quote}”
              </p>
            </blockquote>

            <p className="mt-7 text-[15px] leading-relaxed text-black/70">{partyBusExperience.body}</p>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {partyBusExperience.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-sm border border-gold-dim bg-gold/10 px-3.5 py-2.5 text-[11px] font-semibold tracking-[1px] text-gold uppercase sm:px-4 sm:text-[12px]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Party Fleet */}
      <section className="border-y border-black/10 bg-white px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-12">
            <span className="eyebrow">{partyFleet.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-black sm:text-4xl md:text-5xl">
              {partyFleet.headingLead} <span className="text-gold">{partyFleet.headingAccent}</span>
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-black/70">{partyFleet.intro}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {partyFleet.cards.map((car) => (
              <div
                key={car.name}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm"
              >
                <div className="aspect-[4/3] flex-shrink-0 overflow-hidden">
                  <PlaceholderImage src={car.image} alt={car.name} />
                </div>
                <div className="border-t-2 border-gold p-6 text-center">
                  <h3 className="font-serif text-xl leading-tight text-black">{car.name}</h3>
                  <p className="mt-2 text-[11px] font-semibold tracking-[1.5px] text-gold uppercase">{car.capacity}</p>
                  <p className="mt-4 text-[13px] leading-relaxed text-black/70">{car.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboard Experience — Built For Pure Fun */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 aspect-square overflow-hidden rounded-xl border border-border lg:order-1">
            <PlaceholderImage src={partyBusOnboard.image} alt="Guests enjoying the onboard experience" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="eyebrow">{partyBusOnboard.eyebrow}</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text sm:text-4xl md:text-5xl">
              {partyBusOnboard.headingLead} <span className="text-gold">{partyBusOnboard.headingAccent}</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{partyBusOnboard.intro}</p>

            <ul className="mt-8 flex flex-col gap-5">
              {partyBusOnboard.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md border border-gold-dim bg-gold/10 text-gold">
                    <Icon name={feature.icon} width={20} height={20} />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-text">{feature.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-text-muted">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cross-sell: Our Premium Chauffeurs Service */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Our Premium</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Chauffeurs Service</h2>
          </div>
          <CardSlider
            items={allServices}
            renderActions={(item) => (
              <div className="flex gap-3">
                <Link to={item.path} className="btn btn-outline flex-1">
                  View More
                </Link>
                <a href="#quote" className="btn btn-gold flex-1">
                  Book Now
                </a>
              </div>
            )}
          />
        </div>
      </section>

      {/* Customer reviews */}
      <CustomerReviews />

      {/* Final CTA */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col items-center gap-5 text-center">
          <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Reserve Your Ride Today</h2>
          <p className="max-w-xl text-[15px] text-text-muted">
            Experience the comfort, reliability, and sophistication that define Swift Chauffeurs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE} className="btn btn-gold">
              <PhoneIcon width={15} height={15} /> Reserve Now
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

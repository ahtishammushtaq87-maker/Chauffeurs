import { Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import QuoteForm from "../components/QuoteForm";
import CardSlider from "../components/CardSlider";
import FleetHighlightSection from "../components/FleetHighlightSection";
import { CheckCircleIcon, ArrowRightIcon, PhoneIcon } from "../components/Icons";
import TrustBadges from "../components/TrustBadges";
import { stretchLimoImages, stretchLimoFeatures } from "../data/stretchLimoContent";
import { useAllServices } from "../hooks/useAllServices";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

export default function StretchLimoPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  const allServices = useAllServices();

  return (
    <>
      {/* Hero (with quote form) */}
      <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={stretchLimoImages.heroImg} alt="Luxury stretch limousine" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-10 px-6 py-14 sm:px-10 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 lg:max-w-lg">
            <span className="eyebrow">Luxury Stretch Limousine Hire Nashville TN</span>
            <h1 className="font-serif text-4xl leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              Arrive in Style. <span className="text-gold italic">Travel Like a VIP.</span>
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
            <QuoteForm submitLabel="Reserve Your Stretch Limousine" />
          </div>
        </div>
      </section>

      {/* What Sets Swift Chauffeurs Apart */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-1">
            <PlaceholderImage src={stretchLimoImages.featuresImg} alt="Stretch limousine interior" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              What Sets Swift Chauffeurs Apart
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              At Swift Chauffeurs, we understand that a limousine is more than transportation—it's part of the
              experience. That's why every reservation is handled with professionalism, attention to detail, and a
              commitment to excellence.
            </p>
            <ul className="mt-7 flex flex-col gap-3.5">
              {stretchLimoFeatures.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FleetHighlightSection
        slug="stretch-limo-fleet"
        eyebrow="Perfect Luxury Stretch Limousine for Special Occasion"
        heading="Our Stretch Limousine Fleet"
      />

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
                <Link to="/contact" className="btn btn-gold flex-1">
                  Book Now
                </Link>
              </div>
            )}
          />
        </div>
      </section>

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

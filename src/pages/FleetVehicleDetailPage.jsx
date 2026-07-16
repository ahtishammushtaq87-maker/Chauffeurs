import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import QuoteForm from "../components/QuoteForm";
import CardSlider from "../components/CardSlider";
import TrustBadges from "../components/TrustBadges";
import { CheckCircleIcon, ArrowRightIcon, PhoneIcon } from "../components/Icons";
import { apiGet } from "../lib/api";
import { useAllServices } from "../hooks/useAllServices";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

const genericFeatures = [
  "Professional, licensed, and experienced chauffeurs",
  "Spotlessly cleaned, inspected, and maintained before every journey",
  "On-time pickups with real-time traffic monitoring",
  "Comfortable seating, climate control, and a quiet ride environment",
];

export default function FleetVehicleDetailPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  const { slug } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [status, setStatus] = useState("loading");
  const allServices = useAllServices();

  useEffect(() => {
    setStatus("loading");
    apiGet(`/fleet/${slug}`)
      .then((data) => {
        setVehicle(data.vehicle);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, [slug]);

  if (status === "loading") {
    return <div className="px-6 py-24 text-center text-text-muted md:px-16 lg:px-24">Loading…</div>;
  }

  if (status === "error" || !vehicle) {
    return (
      <section className="px-6 py-24 text-center md:px-16 lg:px-24">
        <span className="eyebrow">Our Fleet</span>
        <h1 className="font-serif text-3xl font-medium text-text md:text-4xl">Vehicle Not Found</h1>
        <p className="mt-4 text-[15px] text-text-muted">
          We couldn't find the vehicle you're looking for. It may have been moved or removed.
        </p>
        <Link to="/fleet" className="btn btn-gold mt-8">
          Browse Our Fleet
        </Link>
      </section>
    );
  }

  const aboutText = vehicle.description || vehicle.excerpt;

  const highlightItems =
    vehicle.cards && vehicle.cards.length > 0
      ? vehicle.cards.map((c) => ({
          name: c.title,
          title: c.title,
          desc: c.description,
          image: c.image,
          imageAlt: c.image_alt,
          imageTitle: c.image_title,
        }))
      : [
          {
            name: vehicle.name,
            title: vehicle.name,
            desc: vehicle.excerpt,
            image: vehicle.image,
            imageAlt: vehicle.image_alt,
            imageTitle: vehicle.image_title,
          },
        ];

  const highlightCard = (item) => (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-panel">
      <div className="relative h-56 flex-shrink-0 overflow-hidden">
        <PlaceholderImage
          src={item.image}
          alt={item.imageAlt || item.name}
          title={item.imageTitle}
          className="absolute inset-0"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-text">{item.name}</h3>
        {item.desc && <p className="mt-3 text-[13px] leading-relaxed text-text-muted">{item.desc}</p>}
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#quote" className="btn btn-outline">
            View More
          </a>
          <Link to="/contact" className="btn btn-gold">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero (with quote form) */}
      <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={vehicle.image} alt={vehicle.image_alt || vehicle.name} title={vehicle.image_title} />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-10 px-6 py-14 sm:px-10 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/50 p-6 lg:max-w-lg">
            <span className="eyebrow">{vehicle.category || "Our Fleet"}</span>
            <h1 className="font-serif text-4xl leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              {vehicle.name}
            </h1>
            <TrustBadges />
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={PHONE} className="btn btn-gold">
                <PhoneIcon width={15} height={15} /> Call Now
              </a>
              <Link
                to="/contact"
                className="btn btn-outline border-ink-border-strong text-ink-fg hover:border-gold-light hover:text-gold-light"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm submitLabel={`Reserve Your ${vehicle.name}`} />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-1">
            <PlaceholderImage src={vehicle.image} alt={vehicle.image_alt || vehicle.name} title={vehicle.image_title} />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              What Sets Swift Chauffeurs Apart
            </h2>
            {aboutText && <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{aboutText}</p>}
            <ul className="mt-7 flex flex-col gap-3.5">
              {genericFeatures.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircleIcon width={20} height={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fleet highlight */}
      <section className="border-y border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">We Have the Perfect Option for Every Journey</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Our Fleet</h2>
          </div>
          {highlightItems.length > 2 ? (
            <CardSlider items={highlightItems} renderCard={highlightCard} autoPlayMs={4500} />
          ) : (
            <div className={`mx-auto grid grid-cols-1 gap-8 ${highlightItems.length > 1 ? "md:grid-cols-2" : "max-w-xl"}`}>
              {highlightItems.map((item, i) => (
                <div key={i}>{highlightCard(item)}</div>
              ))}
            </div>
          )}
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

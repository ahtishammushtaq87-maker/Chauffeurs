import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import QuoteForm from "../components/QuoteForm";
import HeroMarquee from "../components/HeroMarquee";
import FleetSection from "../components/FleetSection";
import CustomerReviews from "../components/CustomerReviews";
import TrustBadges from "../components/TrustBadges";
import CitiesWeServe from "../components/CitiesWeServe";
import { PhoneIcon, ArrowRightIcon } from "../components/Icons";
import { apiGet } from "../lib/api";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

const genericSteps = [
  {
    step: "01",
    title: "Share Your Trip Details",
    desc: "Tell us your pickup location, destination, date, and time, along with any special requests.",
  },
  {
    step: "02",
    title: "Choose Your Vehicle",
    desc: "Select the vehicle that matches your style and group size from our premium fleet.",
  },
  {
    step: "03",
    title: "Confirm & Ride",
    desc: "Review your details, confirm your booking, and enjoy a smooth, professional ride.",
  },
];

// imageLeft = true renders the image on the left / text on the right, and vice versa.
function renderContentSection(section, key, imageLeft, service, phone) {
  return (
    <section key={key} className="px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-xl border border-border ${
            imageLeft ? "" : "lg:order-2"
          }`}
        >
          <PlaceholderImage
            src={section.image}
            alt={section.image_alt || section.heading || service.title}
            title={section.image_title}
          />
        </div>
        <div className={imageLeft ? "" : "lg:order-1"}>
          {section.eyebrow && <span className="eyebrow">{section.eyebrow}</span>}
          {section.heading && (
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              {section.heading}
            </h2>
          )}
          {section.text
            .split(/\n{2,}/)
            .filter(Boolean)
            .map((paragraph, pi) => (
              <p key={pi} className="mt-5 text-[15px] leading-relaxed text-text-muted">
                {paragraph}
              </p>
            ))}
          <a href={phone} className="btn btn-gold mt-8">
            Reserve Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ServiceDetailPage() {
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setStatus("loading");
    apiGet(`/services/${slug}`)
      .then((data) => {
        setService(data.service);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, [slug]);

  if (status === "loading") {
    return <div className="px-6 py-24 text-center text-text-muted md:px-16 lg:px-24">Loading…</div>;
  }

  if (status === "error" || !service) {
    return (
      <section className="px-6 py-24 text-center md:px-16 lg:px-24">
        <span className="eyebrow">Services</span>
        <h1 className="font-serif text-3xl font-medium text-text md:text-4xl">Service Not Found</h1>
        <p className="mt-4 text-[15px] text-text-muted">
          We couldn't find the service you're looking for. It may have been moved or removed.
        </p>
        <Link to="/services" className="btn btn-gold mt-8">
          Browse All Services
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* Hero (with quote form, matching every other service page) */}
      <section id="quote" className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={service.image} alt={service.image_alt || service.title} title={service.image_title} />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-10 px-6 py-14 sm:px-10 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/50 p-6 lg:max-w-lg">
            <span className="eyebrow">Services</span>
            <h1 className="font-serif text-4xl leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[56px]">
              {service.title}
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
                Book Now
              </Link>
            </div>
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm submitLabel={`Reserve ${service.title}`} />
          </div>
        </div>
      </section>
      <HeroMarquee />

      {/* First content section: text left, image right — then Our Fleet, then any
          remaining sections alternate starting image left / text right. */}
      {service.sections?.[0] && renderContentSection(service.sections[0], "section-0", false, service, PHONE)}

      {service.fleet && service.fleet.length > 0 && (
        <FleetSection
          eyebrow="Your Dream, Our Destination"
          heading="Tennessee's Best Limousine Fleet"
          items={service.fleet.map((v) => ({
            name: v.name,
            desc: v.excerpt || v.description,
            image: v.image,
            imageAlt: v.image_alt,
            imageTitle: v.image_title,
          }))}
        />
      )}

      {service.sections
        ?.slice(1)
        .map((section, i) => renderContentSection(section, `section-${i + 1}`, i % 2 === 0, service, PHONE))}

      {/* Customer reviews */}
      <CustomerReviews />

      <CitiesWeServe />

      {/* Booking steps */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Book {service.title}</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Reserve in Three Simple Steps</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {genericSteps.map((s) => (
              <article key={s.step} className="rounded-xl border border-border bg-panel p-8">
                <span className="font-serif text-5xl text-gold/30">{s.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-text">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-5 text-center">
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
        </div>
      </section>
    </>
  );
}

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import QuoteForm from "../components/QuoteForm";
import FleetSection from "../components/FleetSection";
import CardSlider from "../components/CardSlider";
import TrustBadges from "../components/TrustBadges";
import AreasWeServe from "../components/AreasWeServe";
import { StarIcon, PhoneIcon, ArrowRightIcon } from "../components/Icons";
import { apiGet } from "../lib/api";
import { airportAreas } from "../data/airportContent";

const PHONE = "tel:+16158821722";

const genericReviews = [
  {
    name: "Jordan",
    date: "2nd Jun 2026",
    text: "Booking was effortless and the chauffeur was right on time. Comfortable ride from start to finish.",
  },
  {
    name: "Taylor",
    date: "18th May 2026",
    text: "Professional, courteous, and the vehicle was spotless. Would book again without hesitation.",
  },
  {
    name: "Morgan",
    date: "4th May 2026",
    text: "Exactly the premium experience I was hoping for. Highly recommend Swift Chauffeurs.",
  },
  {
    name: "Casey",
    date: "22nd Apr 2026",
    text: "Smooth communication before the ride and a relaxing, on-time trip. Great service overall.",
  },
];

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
          <PlaceholderImage src={section.image} alt={section.heading || service.title} />
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
      <section className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={service.image} alt={service.title} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink from-35% via-ink/85 via-58% to-transparent to-90% sm:from-10% sm:via-40% sm:to-80%" />

        <div className="relative z-10 flex w-full flex-col items-start gap-10 px-6 py-14 sm:px-10 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 lg:max-w-lg">
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

      {/* First content section: text left, image right — then Our Fleet, then any
          remaining sections alternate starting image left / text right. */}
      {service.sections?.[0] && renderContentSection(service.sections[0], "section-0", false, service, PHONE)}

      {service.fleet && service.fleet.length > 0 && (
        <FleetSection
          eyebrow="Your Dream, Our Destination"
          heading="Tennessee's Best Limousine Fleet"
          items={service.fleet.map((v) => ({ name: v.name, desc: v.excerpt || v.description, image: v.image }))}
        />
      )}

      {service.sections
        ?.slice(1)
        .map((section, i) => renderContentSection(section, `section-${i + 1}`, i % 2 === 0, service, PHONE))}

      {/* Reviews */}
      <section className="border-y border-border bg-bg-alt px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Customer Reviews</span>
            <h2 className="flex items-center justify-center gap-3 font-serif text-3xl font-medium text-text md:text-4xl">
              4.9 Rating
              <span className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} width={20} height={20} />
                ))}
              </span>
            </h2>
            <p className="mt-2 text-sm text-text-muted">From 261 verified reviews</p>
          </div>
          <CardSlider
            items={genericReviews.map((r) => ({ ...r, title: r.name + r.date }))}
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

      <AreasWeServe areas={airportAreas} />

      {/* Booking steps */}
      <section className="border-t border-border bg-bg-alt px-6 py-20 md:px-16 lg:px-24">
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

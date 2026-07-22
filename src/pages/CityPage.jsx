import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import PlaceholderImage from "../components/PlaceholderImage";
import CardSlider from "../components/CardSlider";
import CitiesWeServe from "../components/CitiesWeServe";
import CustomerReviews from "../components/CustomerReviews";
import { PhoneIcon, ArrowRightIcon, CheckCircleIcon } from "../components/Icons";
import { useAllServices } from "../hooks/useAllServices";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";
import { cityPages, cityHighlights } from "../data/cityPagesContent";

// image + description in one row. imageLeft flips the column order.
function ContentRow({ section, imageLeft, phone }) {
  return (
    <section className="px-6 py-16 md:px-16 lg:py-20 lg:px-24">
      <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-xl border border-border ${
            imageLeft ? "" : "lg:order-2"
          }`}
        >
          <PlaceholderImage src={section.image} alt={section.heading} title={section.heading} />
        </div>
        <div className={imageLeft ? "" : "lg:order-1"}>
          {section.eyebrow && <span className="eyebrow">{section.eyebrow}</span>}
          <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
            {section.heading}
          </h2>
          {section.text
            .split(/\n{2,}/)
            .filter(Boolean)
            .map((paragraph, i) => (
              <p key={i} className="mt-5 text-[15px] leading-relaxed text-text-muted">
                {paragraph}
              </p>
            ))}
          <a href={phone} className="btn btn-gold mt-8">
            <PhoneIcon width={15} height={15} /> Reserve Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default function CityPage() {
  const { pathname } = useLocation();
  const city = cityPages[pathname];
  const settings = useSiteSettings();
  const PHONE = toTelHref(settings.phone_1);
  const allServices = useAllServices();
  // Short place name for templated headings ("...in Chattanooga"); falls back to
  // the full label for the top-level city pages.
  const place = city?.cityName || city?.label;

  // Set a per-city title + meta description for SEO (falls back to SeoManager
  // defaults on any route without an entry here).
  useEffect(() => {
    if (!city) return;
    if (city.seoTitle) document.title = city.seoTitle;
    if (city.seoDescription) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", city.seoDescription);
    }
  }, [city]);

  if (!city) {
    return (
      <section className="px-6 py-24 text-center md:px-16 lg:px-24">
        <span className="eyebrow">Service Area</span>
        <h1 className="font-serif text-3xl font-medium text-text md:text-4xl">Area Not Found</h1>
        <Link to="/contact" className="btn btn-gold mt-8">
          Contact Us
        </Link>
      </section>
    );
  }

  return (
    <>
      <PageHero eyebrow="Service Area" title={city.keyword} image={city.heroImage} />

      {/* Intro: image + description in one row (text left / image right) */}
      <ContentRow section={city.intro} imageLeft={false} phone={PHONE} />

      {/* Why choose us */}
      <section className="border-y border-border px-6 py-16 md:px-16 lg:py-20 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Why Swift Chauffeurs</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">
              Why Choose Us in {place}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cityHighlights.map((h) => (
              <article key={h.title} className="rounded-xl border border-border bg-panel p-6">
                <CheckCircleIcon width={22} height={22} className="text-gold" />
                <h3 className="mt-4 text-base font-semibold text-text">{h.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{h.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Second content row: image left / text right */}
      <ContentRow section={city.section} imageLeft={true} phone={PHONE} />

      {/* Services offered */}
      {allServices.length > 0 && (
        <section className="border-t border-border px-6 py-16 md:px-16 lg:py-20 lg:px-24">
          <div className="mx-auto max-w-(--breakpoint-xl)">
            <div className="mb-10 text-center">
              <span className="eyebrow">What We Offer</span>
              <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">
                Our Chauffeur Services in {place}
              </h2>
            </div>
            <CardSlider
              items={allServices}
              autoPlayMs={4500}
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
      )}

      <CustomerReviews />

      {/* Locations carousel — shown on every service-area page */}
      <CitiesWeServe />

      {/* CTA */}
      <section className="border-t border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Book Your Ride</span>
          <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">
            Ready to Ride in {place}?
          </h2>
          <p className="mt-4 text-[15px] text-text-muted">
            Reserve your chauffeur now and elevate your travel with comfort, style, and peace of mind.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={PHONE} className="btn btn-gold">
              <PhoneIcon width={15} height={15} /> Call Now
            </a>
            <a href="#quote" className="btn btn-outline">
              Get a Quote <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

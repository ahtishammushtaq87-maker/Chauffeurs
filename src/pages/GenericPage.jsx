import { useLocation, Link } from "react-router-dom";
import { navMeta, getHeroImage } from "../data/content";
import PageHero from "../components/PageHero";
import PlaceholderImage from "../components/PlaceholderImage";
import CardSlider from "../components/CardSlider";
import ComingSoonSection from "../components/ComingSoonSection";
import { useAllServices } from "../hooks/useAllServices";

// Contextual copy based on which nav section the page belongs to.
const groupCopy = {
  "Our Fleet": {
    message: (label) =>
      `Detailed specifications, photos, and pricing for our ${label} are on the way. Contact us for availability and a personalized quote.`,
  },
  Services: {
    message: (label) =>
      `Full details for our ${label} service are coming soon. Reach out and we'll tailor the perfect experience for your occasion.`,
  },
  "Service Area": {
    message: (label) =>
      `We proudly serve ${label} and the surrounding area. Contact us to book your ride or learn more about local availability.`,
    heading: (label) => `Chauffeured Transportation in ${label}`,
    intro: (label) =>
      `Swift Chauffeurs proudly serves ${label} and the surrounding area with premium chauffeur transportation. From airport transfers to weddings, corporate travel, and nights out, our professional chauffeurs and meticulously maintained fleet are ready whenever you need to move in comfort and style.`,
  },
  Chattanooga: {
    message: (label) => `More information about our ${label} in Chattanooga is coming soon. Contact us to reserve today.`,
    heading: (label) => `${label} in Chattanooga, TN`,
    intro: (label) =>
      `Serving Chattanooga and the surrounding area, Swift Chauffeurs brings the same premium standard of ${label.toLowerCase()} you'd expect in Nashville — professional chauffeurs, a meticulously maintained fleet, and reliable, on-time service.`,
  },
  Clarksville: {
    message: (label) => `More information about ${label} in Clarksville is coming soon. Contact us to reserve today.`,
    heading: (label) => `${label} in Clarksville, TN`,
    intro: (label) =>
      `Serving Clarksville and the surrounding area, Swift Chauffeurs brings the same premium standard of ${label.toLowerCase()} you'd expect in Nashville — professional chauffeurs, a meticulously maintained fleet, and reliable, on-time service.`,
  },
};

const defaultCopy = {
  message: (label) => `Content for ${label} is coming soon. In the meantime, reach out and our team will be happy to help.`,
  heading: () => "Chauffeured Transportation Across Tennessee",
  intro: () =>
    "Swift Chauffeurs proudly serves Nashville, Chattanooga, Clarksville, and the surrounding Tennessee communities with premium chauffeur transportation. Wherever you're located, our professional chauffeurs and meticulously maintained fleet are ready whenever you need to move in comfort and style.",
};

export default function GenericPage() {
  const { pathname } = useLocation();
  const meta = navMeta[pathname] || { label: "Page", parent: null };
  const copy = groupCopy[meta.parent] || defaultCopy;
  const eyebrow = meta.parent || "Swift Chauffeurs";
  const isAreaPage = pathname.startsWith("/service-area");
  const allServices = useAllServices();

  return (
    <>
      <PageHero eyebrow={eyebrow} title={meta.label} image={getHeroImage(pathname)} />

      {isAreaPage && (
        <>
          <section className="px-6 py-20 md:px-16 lg:px-24">
            <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="eyebrow">{eyebrow}</span>
                <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
                  {copy.heading(meta.label)}
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-text-muted">{copy.intro(meta.label)}</p>
                <Link to="/contact" className="btn btn-gold mt-8">
                  Contact Us
                </Link>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
                <PlaceholderImage src={getHeroImage(pathname)} alt={meta.label} />
              </div>
            </div>
          </section>

          <section className="border-y border-border bg-bg-alt px-6 py-20 md:px-16 lg:px-24">
            <div className="mx-auto max-w-(--breakpoint-xl)">
              <div className="mb-10 text-center">
                <span className="eyebrow">What We Offer</span>
                <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Our Chauffeur Services</h2>
              </div>
              <CardSlider
                items={allServices}
                autoPlayMs={4500}
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
        </>
      )}

      <ComingSoonSection message={copy.message(meta.label)} />
    </>
  );
}

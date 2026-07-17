import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import PlaceholderImage from "../components/PlaceholderImage";
import { SearchIcon } from "../components/Icons";
import { getHeroImage } from "../data/content";
import { useAllServices } from "../hooks/useAllServices";

export default function ServicesPage() {
  const allServices = useAllServices();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allServices;
    return allServices.filter((s) => `${s.title} ${s.desc}`.toLowerCase().includes(q));
  }, [allServices, query]);

  return (
    <>
      <PageHero eyebrow="Our Services" title="Explore All Our Services" image={getHeroImage("/services")} />

      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">What We Offer</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Browse All Chauffeur Services</h2>
            <p className="mt-3 text-[15px] text-text-muted">
              Search by occasion or keyword to find the right chauffeur service for you.
            </p>
          </div>

          <div className="relative mx-auto mb-10 w-full sm:max-w-md">
            <SearchIcon
              width={18}
              height={18}
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-text-faint"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services (e.g. wedding, airport, prom)..."
              className="w-full rounded-sm border border-border-strong bg-panel py-3.5 pr-4 pl-11 text-sm text-text outline-none transition-colors placeholder:text-text-faint focus:border-gold"
            />
          </div>

          <p className="mb-6 text-sm text-text-muted">
            Showing {filtered.length} of {allServices.length} services
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((s) => (
                <article
                  key={s.title}
                  className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-panel"
                >
                  <div className="relative aspect-[4/3]">
                    <PlaceholderImage src={s.image} alt={s.imageAlt || s.title} title={s.imageTitle} />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-[15px] font-semibold text-text">{s.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{s.desc}</p>
                    <div className="mt-auto flex gap-3 pt-5">
                      <Link to={s.path} className="btn btn-outline flex-1">
                        View More
                      </Link>
                      <a href="#quote" className="btn btn-gold flex-1">
                  Book Now
                </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-panel px-6 py-16 text-center">
              <p className="text-text-muted">No services match your search. Try a different keyword.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

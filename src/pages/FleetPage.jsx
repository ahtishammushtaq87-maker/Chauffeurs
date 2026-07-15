import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import PlaceholderImage from "../components/PlaceholderImage";
import { SearchIcon } from "../components/Icons";
import { getHeroImage } from "../data/content";
import { apiGet } from "../lib/api";
import { FLEET_SECTION_PAGE_PATHS } from "../data/fleetSections";

export default function FleetPage() {
  const [allVehicles, setAllVehicles] = useState([]);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    Promise.all([apiGet("/fleet"), apiGet("/fleet/sections")])
      .then(([{ vehicles }, { sections }]) => {
        const fromSections = sections.flatMap((section) =>
          section.cards.map((card) => ({
            name: card.title,
            desc: card.description,
            image: card.image,
            imageAlt: card.image_alt,
            imageTitle: card.image_title,
            category: section.category,
            path: FLEET_SECTION_PAGE_PATHS[section.slug] || `/fleet/${section.slug}`,
          }))
        );
        const fromDashboard = vehicles.map((v) => ({
          name: v.name,
          desc: v.excerpt || v.description,
          image: v.image,
          imageAlt: v.image_alt,
          imageTitle: v.image_title,
          category: v.category || "More Vehicles",
          path: `/fleet/${v.slug}`,
        }));
        setAllVehicles([...fromSections, ...fromDashboard]);
      })
      .catch(() => setAllVehicles([]));
  }, []);

  const filterOptions = useMemo(
    () => ["All", ...Array.from(new Set(allVehicles.map((v) => v.category)))],
    [allVehicles]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allVehicles.filter((v) => {
      const matchesCategory = activeCategory === "All" || v.category === activeCategory;
      const matchesQuery = !q || `${v.name} ${v.desc} ${v.category}`.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [allVehicles, query, activeCategory]);

  return (
    <>
      <PageHero eyebrow="Our Fleet" title="Explore Our Full Fleet" image={getHeroImage("/fleet")} />

      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Every Vehicle, One Place</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Browse Our Complete Fleet</h2>
            <p className="mt-3 text-[15px] text-text-muted">
              Search by name, vehicle type, or keyword to find the perfect ride for your occasion.
            </p>
          </div>

          <div className="mb-10 flex flex-col gap-4">
            <div className="relative w-full sm:max-w-md">
              <SearchIcon
                width={18}
                height={18}
                className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-text-faint"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search fleet (e.g. sedan, party bus, escalade)..."
                className="w-full rounded-sm border border-border-strong bg-panel py-3.5 pr-4 pl-11 text-sm text-text outline-none transition-colors placeholder:text-text-faint focus:border-gold"
              />
            </div>

            <div className="flex flex-wrap gap-2.5">
              {filterOptions.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveCategory(label)}
                  className={`rounded-full border px-4 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                    activeCategory === label
                      ? "border-gold bg-gold text-[#17140d]"
                      : "border-border-strong text-text-muted hover:border-gold-dim hover:text-gold"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <p className="mb-6 text-sm text-text-muted">
            Showing {filtered.length} of {allVehicles.length} vehicles
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((v, i) => (
                <article
                  key={`${v.name}-${i}`}
                  className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-panel"
                >
                  <div className="relative h-56 flex-shrink-0 overflow-hidden">
                    <PlaceholderImage
                      src={v.image}
                      alt={v.imageAlt || v.name}
                      title={v.imageTitle}
                      className="absolute inset-0"
                    />
                    <span className="absolute top-3 left-3 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
                      {v.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-lg text-text">{v.name}</h3>
                    <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-text-muted">{v.desc}</p>
                    <div className="mt-auto pt-5">
                      <Link to={v.path} className="btn btn-outline w-full">
                        View Details
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-panel px-6 py-16 text-center">
              <p className="text-text-muted">No vehicles match your search. Try a different keyword or category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

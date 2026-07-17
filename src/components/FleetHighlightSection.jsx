import { useEffect, useState } from "react";
import PlaceholderImage from "./PlaceholderImage";
import CardSlider from "./CardSlider";
import { fetchFleetSection } from "../lib/fleet";

// Fetches a fleet "page section" by its fixed slug and renders its cards —
// a grid for 1-2 cards, or a slider once there are more. Cards are managed
// from the dashboard (Fleet > Fleet Page Sections), so edits/deletes there
// show up here automatically. Renders nothing if the section has no cards.
export default function FleetHighlightSection({ slug, eyebrow, heading }) {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetchFleetSection(slug)
      .then(setCards)
      .catch(() => setCards([]));
  }, [slug]);

  if (!cards || cards.length === 0) return null;

  const items = cards.map((c) => ({ ...c, title: c.name }));

  const renderFleetCard = (item) => (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-panel">
      {/* 16:9 matches most fleet uploads, so object-contain shows the whole
          vehicle with little leftover space around it. */}
      <div className="aspect-video flex-shrink-0 overflow-hidden bg-panel">
        <PlaceholderImage
          src={item.image}
          alt={item.imageAlt || item.name}
          title={item.imageTitle}
          fit="contain"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-text">{item.name}</h3>
        {item.desc && <p className="mt-3 text-[13px] leading-relaxed text-text-muted">{item.desc}</p>}
        <div className="mt-6 flex flex-wrap gap-3">
          {/*<a href="#quote" className="btn btn-outline">
            View More
          </a>*/}
          <a href="#quote" className="btn btn-gold">
                  Book Now
                </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="border-y border-border px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="mb-10 text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">{heading}</h2>
        </div>
        {items.length > 2 ? (
          <CardSlider items={items} renderCard={renderFleetCard} autoPlayMs={4500} />
        ) : (
          <div
            className={`mx-auto grid grid-cols-1 gap-8 ${items.length > 1 ? "md:grid-cols-2" : "max-w-xl"}`}
          >
            {items.map((item, i) => (
              <div key={i}>{renderFleetCard(item)}</div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

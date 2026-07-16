import CardSlider from "./CardSlider";
import PlaceholderImage from "./PlaceholderImage";

export default function FleetSection({
  eyebrow = "Your Dream, Our Destination",
  heading = "Tennessee's Best Limousine Fleet",
  items,
}) {
  return (
    <section className="border-y border-border px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="mb-10 text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">{heading}</h2>
        </div>
        <CardSlider
          items={items.map((item) => ({ ...item, title: item.name }))}
          autoPlayMs={4000}
          renderCard={(item) => (
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-panel">
              <div className="relative h-56 flex-shrink-0 overflow-hidden">
                <PlaceholderImage
                  src={item.image}
                  alt={item.imageAlt || item.name}
                  title={item.imageTitle}
                  className="absolute inset-0"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-lg text-text">{item.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{item.desc}</p>
              </div>
            </article>
          )}
        />
      </div>
    </section>
  );
}

import areaNashville from "../assets/images/area-nashville.jpg";

export default function AreasWeServe({ eyebrow = "Locations", areas = [] }) {
  return (
    <section
      className="relative bg-cover bg-center px-6 py-20 md:px-16 lg:px-24"
      style={{ backgroundImage: `url(${areaNashville})` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-(--breakpoint-xl)">
        <div className="mb-10 text-center">
          <span className="eyebrow text-gold">{eyebrow}</span>
          <h2 className="font-serif text-3xl font-medium text-white md:text-4xl">Areas We Serve in Nashville</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2.5 rounded-lg border border-white/15 bg-black/40 px-4 py-3.5 text-sm text-white/90 backdrop-blur-sm transition-colors hover:border-gold-dim hover:text-gold"
            >
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

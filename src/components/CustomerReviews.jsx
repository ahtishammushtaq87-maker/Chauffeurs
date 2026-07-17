import CardSlider from "./CardSlider";
import { StarIcon, GoogleIcon } from "./Icons";
import { customerReviews, reviewsSummary } from "../data/reviewsContent";

export default function CustomerReviews() {
  return (
    <section className="border-y border-border px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-2xl font-medium leading-snug text-text sm:text-3xl md:text-4xl">
            What Our <span className="text-gold">Customer</span> Says About{" "}
            <span className="text-gold">Best Chauffeur Service Nashville TN</span>
          </h2>
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 rounded-lg bg-ink px-4 py-2.5">
            <GoogleIcon width={18} height={18} className="flex-shrink-0" />
            <span className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} width={15} height={15} />
              ))}
            </span>
            <span className="text-sm font-semibold text-ink-fg">
              {reviewsSummary.rating}{" "}
              <span className="font-normal text-ink-fg-muted">({reviewsSummary.count} Reviews)</span>
            </span>
          </div>
        </div>

        <CardSlider
          items={customerReviews.map((r) => ({ ...r, title: r.name }))}
          autoPlayMs={4500}
          renderCard={(r) => (
            <article className="flex h-full flex-col items-center rounded-xl border border-border bg-panel p-8 text-center">
              <img
                src={r.avatar}
                alt={r.name}
                loading="lazy"
                width={96}
                height={96}
                className="h-24 w-24 flex-shrink-0 rounded-full border-2 border-gold object-cover"
              />
              <h3 className="mt-5 text-[15px] font-semibold tracking-wide text-gold uppercase">{r.name}</h3>
              <p className="mt-1.5 text-xs text-text-muted">{r.date}</p>
              <div className="mt-3 flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < r.stars} width={16} height={16} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">{r.text}</p>
            </article>
          )}
        />
      </div>
    </section>
  );
}

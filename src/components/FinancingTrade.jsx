import { financingFeatures, financingBg, tradeBg } from "../data/content";
import { Icon } from "./Icons";
import PlaceholderImage from "./PlaceholderImage";

export default function FinancingTrade() {
  return (
    <section className="px-6 py-16 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-stretch gap-5 lg:grid-cols-[1.2fr_1fr_1.2fr]">
        <div className="relative min-h-[380px] overflow-hidden rounded border border-border">
          <div className="absolute inset-0">
            <PlaceholderImage src={financingBg} label="Vehicle Lifestyle Photo" alt="Driving a luxury vehicle" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 to-ink/90" />
          <div className="relative z-10 flex h-full flex-col justify-end p-8">
            <span className="eyebrow">Flexible Financing</span>
            <h3 className="mb-3 font-serif text-[28px] leading-tight font-medium text-ink-fg">
              Drive Now.
              <br />
              Pay Your Way.
            </h3>
            <p className="mb-5.5 max-w-[260px] text-sm text-ink-fg-muted">Custom financing solutions tailored to you.</p>
            <button className="btn btn-gold w-fit">Get Pre-Approved</button>
          </div>
        </div>

        <div className="order-3 flex flex-col justify-center gap-7.5 rounded border border-border bg-panel px-7.5 py-9 lg:order-none">
          {financingFeatures.map((item) => (
            <div key={item.title} className="flex items-start gap-4 text-gold">
              <Icon name={item.icon} width={26} height={26} className="mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="mb-1 text-[15px] font-semibold text-text">{item.title}</h4>
                <p className="text-[13px] text-text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative order-2 min-h-[380px] overflow-hidden rounded border border-border lg:order-none">
          <div className="absolute inset-0">
            <PlaceholderImage src={tradeBg} label="Car Keys Photo" alt="Sell or trade your vehicle" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 to-ink/90" />
          <div className="relative z-10 flex h-full flex-col justify-end p-8">
            <span className="eyebrow">Sell or Trade Your Car</span>
            <h3 className="mb-3 font-serif text-[28px] leading-tight font-medium text-ink-fg">
              Get a Top Dollar
              <br />
              Offer Today.
            </h3>
            <p className="mb-5.5 max-w-[260px] text-sm text-ink-fg-muted">Fast, fair, and hassle-free appraisals.</p>
            <button className="btn btn-gold w-fit">Value Your Trade</button>
          </div>
        </div>
      </div>
    </section>
  );
}

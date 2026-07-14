import { financingFeatures, financingBg } from "../data/content";
import { Icon } from "./Icons";

export default function FinancingTrade() {
  return (
    <section
      className="relative bg-cover bg-center px-6 py-20 md:px-16 lg:px-24"
      style={{ backgroundImage: `url(${financingBg})` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-stretch gap-10 lg:grid-cols-[1.1fr_1fr_1.1fr]">
        <div className="flex flex-col justify-center">
          <span className="eyebrow">Flexible Financing</span>
          <h2 className="mb-3 font-serif text-[28px] leading-tight font-medium text-white">
            Drive Now.
            <br />
            Pay Your Way.
          </h2>
          <p className="mb-5.5 max-w-[260px] text-sm text-white/80">Custom financing solutions tailored to you.</p>
          <button className="btn btn-gold w-fit">Get Pre-Approved</button>
        </div>

        <div className="flex flex-col justify-center gap-7.5">
          {financingFeatures.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <Icon name={item.icon} width={26} height={26} className="mt-0.5 flex-shrink-0 text-gold" />
              <div>
                <h4 className="mb-1 text-[15px] font-semibold text-white">{item.title}</h4>
                <p className="text-[13px] text-white/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <span className="eyebrow">Sell or Trade Your Car</span>
          <h2 className="mb-3 font-serif text-[28px] leading-tight font-medium text-white">
            Get a Top Dollar
            <br />
            Offer Today.
          </h2>
          <p className="mb-5.5 max-w-[260px] text-sm text-white/80">Fast, fair, and hassle-free appraisals.</p>
          <button className="btn btn-gold w-fit">Value Your Trade</button>
        </div>
      </div>
    </section>
  );
}

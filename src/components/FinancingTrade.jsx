import { financingFeatures, financingBg } from "../data/content";
import { Icon } from "./Icons";

export default function FinancingTrade() {
  return (
    <section
      className="relative flex min-h-[520px] items-center bg-cover bg-center px-6 py-20 sm:min-h-[600px] lg:min-h-[680px] md:px-16 lg:px-24"
      style={{ backgroundImage: `url(${financingBg})` }}
    >
      <div className="relative mx-auto flex w-full max-w-(--breakpoint-xl) flex-col items-stretch justify-center gap-10 sm:gap-20 lg:gap-32 md:flex-row">
        <div className="flex w-fit flex-col justify-center rounded-xl bg-black/30 px-5 py-5 backdrop-blur-sm">
          <span className="eyebrow">Flexible Financing</span>
          <h2 className="mb-3 font-serif text-[28px] leading-tight font-medium text-white">
            Drive Now.
            <br />
            Pay Your Way.
          </h2>
          <p className="mb-5.5 max-w-[260px] text-sm text-white/80">Custom financing solutions tailored to you.</p>
          <button className="btn btn-gold w-fit">Book Now</button>
        </div>

        <div className="flex w-fit flex-col justify-center gap-7.5 rounded-xl bg-black/30 px-5 py-5 backdrop-blur-sm">
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
      </div>
    </section>
  );
}


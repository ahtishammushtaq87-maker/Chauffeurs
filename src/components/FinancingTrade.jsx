import { financingFeatures, financingBg } from "../data/content";
import { Icon } from "./Icons";

export default function FinancingTrade() {
  return (
    <section
      className="relative flex min-h-[360px] items-center bg-cover bg-center px-5 py-10 sm:min-h-[600px] sm:px-6 sm:py-20 md:px-16 lg:min-h-[680px] lg:px-24"
      style={{ backgroundImage: `url(${financingBg})` }}
    >
      <div className="relative mx-auto flex w-full max-w-(--breakpoint-xl) flex-col items-stretch justify-center gap-4 sm:gap-20 md:flex-row lg:gap-32">
        <div className="flex w-full flex-col justify-center rounded-xl bg-black/30 px-4 py-4 backdrop-blur-sm sm:w-fit sm:px-5 sm:py-5">
          <span className="eyebrow mb-2 text-[11px] tracking-[2px] sm:mb-3.5 sm:text-[13px] sm:tracking-[3px]">
            Flexible Financing
          </span>
          <h2 className="mb-2 font-serif text-[22px] leading-tight font-medium text-white sm:mb-3 sm:text-[28px]">
            Drive Now.
            <br />
            Pay Your Way.
          </h2>
          <p className="mb-4 max-w-[260px] text-[13px] text-white/80 sm:mb-5.5 sm:text-sm">
            Custom financing solutions tailored to you.
          </p>
          <a href="#quote" className="btn btn-gold w-fit px-5 py-3 text-[11px] sm:px-7 sm:py-4 sm:text-[13px]">
            Book Now
          </a>
        </div>

        <div className="flex w-full flex-col justify-center gap-3.5 rounded-xl bg-black/30 px-4 py-4 backdrop-blur-sm sm:w-fit sm:gap-7.5 sm:px-5 sm:py-5">
          {financingFeatures.map((item) => (
            <div key={item.title} className="flex items-start gap-3 sm:gap-4">
              <Icon
                name={item.icon}
                width={20}
                height={20}
                className="mt-0.5 flex-shrink-0 text-gold sm:h-[26px] sm:w-[26px]"
              />
              <div>
                <h4 className="mb-0.5 text-[13px] font-semibold text-white sm:mb-1 sm:text-[15px]">{item.title}</h4>
                <p className="text-[11px] text-white/70 sm:text-[13px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


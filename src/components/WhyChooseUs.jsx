import { Link } from "react-router-dom";
import { whyChooseUs } from "../data/content";
import { Icon } from "./Icons";

export default function WhyChooseUs() {
  return (
    <section className="px-6 py-4 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_2fr] lg:gap-15">
        <div>
          <span className="eyebrow">Why Choose Apex Motors</span>
          <h2 className="font-serif text-[34px] leading-tight font-medium text-text">
            More Than Cars.
            <br />
            It's a Commitment.
          </h2>
          <p className="mt-4.5 mb-7 max-w-xs text-[15px] text-text-muted lg:max-w-none">
            We deliver a premium experience from start to finish.
          </p>
          <Link to="/about-us" className="btn btn-outline">
            Learn More About Us
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {whyChooseUs.map((item, i) => (
            <div key={item.title} className="relative px-0 text-gold lg:px-6.5">
              {i !== 0 && <span className="absolute top-1 bottom-1 left-0 hidden w-px bg-border lg:block" />}
              <Icon name={item.icon} width={30} height={30} />
              <h3 className="mt-4.5 mb-2.5 text-base font-semibold text-text">{item.title}</h3>
              <p className="text-[13px] leading-relaxed text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

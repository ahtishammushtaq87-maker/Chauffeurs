import { bestServiceFeatures, financingBg } from "../data/content";
import { Icon } from "./Icons";

// Full-bleed Broadway shot with the value props centered over it.
export default function BestServiceSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat px-5 py-14 sm:px-6 sm:py-20 md:px-16 lg:px-24"
      style={{ backgroundImage: `url(${financingBg})` }}
    >
      {/* Scrim: the photo is busy neon, and the copy sits directly on it. */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative mx-auto max-w-(--breakpoint-xl)">
        <h2 className="mx-auto max-w-4xl text-center font-serif text-[26px] leading-tight font-medium text-gold sm:text-4xl md:text-5xl">
          Premier Chauffeur &amp; Limousine Service in Nashville, TN
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-14 sm:gap-12 md:grid-cols-3 md:gap-8">
          {bestServiceFeatures.map((item) => (
            <div key={item.title} className="flex flex-col items-center px-2 text-center">
              <Icon name={item.icon} width={36} height={36} className="text-white" />
              <h3 className="mt-4 font-serif text-lg leading-snug text-white sm:text-xl">{item.title}</h3>
              <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-white/80 sm:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { stats } from "../data/content";
import { Icon } from "./Icons";

export default function Stats() {
  return (
    <section className="border-t border-border px-6 py-15 md:px-16 lg:px-24 mb-15">
      <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-3 gap-x-5 text-center sm:gap-x-8">
        {stats.map((stat, i) => (
          <div key={stat.label} className="relative flex flex-col items-center gap-2 text-gold">
            {i !== 0 && <span className="absolute top-1 bottom-1 -left-2.5 w-px bg-border sm:-left-4" />}
            <Icon name={stat.icon} width={30} height={30} />
            <span className="font-serif text-2xl text-text sm:text-3xl">{stat.value}</span>
            <span className="flex flex-col text-[11px] text-text-muted sm:text-[13px]">
              {stat.label.split("\n").map((line) => (
                <span key={line}>{line}</span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

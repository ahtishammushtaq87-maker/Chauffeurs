import { stats } from "../data/content";
import { Icon } from "./Icons";

export default function Stats() {
  return (
    <section className="border-y border-border px-6 py-15 md:px-16 lg:px-24 bg-bg-alt">
      <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-2 text-center md:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className="relative flex flex-col items-center gap-2 text-gold">
            {i !== 0 && i !== 2 && <span className="absolute top-1 bottom-1 left-0 hidden w-px bg-border md:block" />}
            {i === 2 && <span className="absolute top-1 bottom-1 left-0 w-px bg-border md:hidden" />}
            <Icon name={stat.icon} width={30} height={30} />
            <span className="font-serif text-3xl text-text">{stat.value}</span>
            <span className="flex flex-col text-[13px] text-text-muted">
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

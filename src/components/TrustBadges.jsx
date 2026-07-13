import { StarIcon, ShieldIcon, ClockIcon, GoogleIcon } from "./Icons";

const badgeClasses =
  "flex items-center gap-2 rounded-full border border-ink-border-strong bg-ink-panel/70 px-4 py-2.5 backdrop-blur-sm";

export default function TrustBadges() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <div className={badgeClasses}>
        <GoogleIcon width={16} height={16} />
        <span className="flex gap-0.5 text-gold-light">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} width={11} height={11} />
          ))}
        </span>
        <span className="text-xs font-semibold text-ink-fg">
          4.9 <span className="font-normal text-ink-fg-muted">(261 Reviews)</span>
        </span>
      </div>
      <div className={badgeClasses}>
        <ShieldIcon width={16} height={16} className="text-gold-light" />
        <span className="text-xs font-semibold text-ink-fg">Licensed &amp; Insured</span>
      </div>
      <div className={badgeClasses}>
        <ClockIcon width={16} height={16} className="text-gold-light" />
        <span className="text-xs font-semibold text-ink-fg">24/7 Availability</span>
      </div>
    </div>
  );
}

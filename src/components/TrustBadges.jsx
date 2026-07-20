import { StarIcon, ShieldIcon, ClockIcon, GoogleIcon } from "./Icons";

const badgeClasses =
  "flex items-center gap-1.5 rounded-full border border-ink-border-strong bg-ink-panel/70 px-3 py-1.5 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2.5";

export default function TrustBadges() {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-3">
      <div className={badgeClasses}>
        <GoogleIcon width={16} height={16} />
        <span className="flex gap-0.5 text-gold-light">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} width={11} height={11} />
          ))}
        </span>
        <span className="text-[11px] font-semibold text-ink-fg sm:text-xs">
          4.9 <span className="font-normal text-ink-fg-muted">(590 Reviews)</span>
        </span>
      </div>
      <div className={badgeClasses}>
        <ShieldIcon width={16} height={16} className="text-gold-light" />
        <span className="text-[11px] font-semibold text-ink-fg sm:text-xs">Licensed &amp; Insured</span>
      </div>
      <div className={badgeClasses}>
        <ClockIcon width={16} height={16} className="text-gold-light" />
        <span className="text-[11px] font-semibold text-ink-fg sm:text-xs">24/7 Availability</span>
      </div>
    </div>
  );
}

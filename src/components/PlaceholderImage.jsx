import { CarIcon } from "./Icons";

export default function PlaceholderImage({ label, className = "", src, alt, title, fit = "cover" }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt || label || ""}
        title={title || undefined}
        className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center gap-2.5 overflow-hidden bg-gradient-to-br from-ink via-ink-alt to-ink text-ink-fg-faint ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(205,169,73,0.12),transparent_60%)]" />
      <CarIcon width={40} height={40} className="relative opacity-70" />
      {label && <span className="relative text-[11px] tracking-wider uppercase">{label}</span>}
    </div>
  );
}

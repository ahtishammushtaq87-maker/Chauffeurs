import { useId, useState } from "react";
import { ChevronDown } from "./Icons";

// Collapses long copy to a fixed height with a fade, behind a Show more/less
// toggle. `collapsedHeight` is any CSS length; the fade sits on top of the last
// visible line, so keep it matched to the section's background via `fadeFrom`.
export default function ShowMore({
  children,
  collapsedHeight = "11rem",
  moreLabel = "Show more",
  lessLabel = "Show less",
  fadeFrom = "from-bg",
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div>
      <div
        id={id}
        className="relative overflow-hidden"
        style={{ maxHeight: open ? "none" : collapsedHeight }}
      >
        {children}
        {!open && (
          <div
            className={`pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t ${fadeFrom} to-transparent`}
          />
        )}
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[1.5px] text-gold uppercase transition-colors hover:text-gold-light"
      >
        {open ? lessLabel : moreLabel}
        <ChevronDown className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
}

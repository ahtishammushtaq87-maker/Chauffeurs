import { useState } from "react";
import { ChevronDown } from "./Icons";

// Single-open accordion for FAQ blocks. `items` is [{ q, a }].
export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q} className="overflow-hidden rounded-xl border border-border bg-panel">
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="text-[15px] font-semibold text-text">{item.q}</span>
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gold-dim text-gold transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown width={12} height={12} />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              hidden={!open}
              className="px-5 pb-5 text-[13px] leading-relaxed text-text-muted sm:px-6"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}

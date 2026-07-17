import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";
import { PhoneIcon } from "./Icons";

export default function CallNowButton() {
  const { phone_1 } = useSiteSettings();

  return (
    <a
      href={toTelHref(phone_1)}
      aria-label={`Call us now at ${phone_1}`}
      className="fixed right-4 bottom-4 z-[120] flex items-center gap-2 rounded-lg border border-black/70 bg-gold px-3 py-2 text-[11px] font-bold tracking-wide text-[#17140d] uppercase shadow-[0_6px_18px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:scale-105 active:scale-95 sm:right-6 sm:bottom-6 sm:px-3.5 sm:py-2.5 sm:text-xs"
    >
      <PhoneIcon width={13} height={13} />
      Call Now
    </a>
  );
}

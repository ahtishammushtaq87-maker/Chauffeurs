import { Link } from "react-router-dom";
import { PhoneIcon } from "./Icons";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

const ribbonClip = "polygon(0 0, 100% 0, 100% 78%, 50% 100%, 0 78%)";
const ribbonBase =
  "flex h-16 w-10 flex-shrink-0 flex-col items-center justify-center bg-gold pb-2.5 text-[#17140d] transition-colors hover:bg-gold-light";

export default function HeaderMobileActions() {
  const settings = useSiteSettings();
  return (
    <div className="mr-1.5 flex items-center gap-1.5 md:hidden">
      <a href={toTelHref(settings.phone_1)} aria-label="Call us" className={ribbonBase} style={{ clipPath: ribbonClip }}>
        <PhoneIcon width={18} height={18} />
      </a>
      <Link
        to="/contact"
        aria-label="Book Now"
        className={`${ribbonBase} gap-0 text-center text-[8.5px] leading-tight font-bold tracking-wide uppercase`}
        style={{ clipPath: ribbonClip }}
      >
        <span>Book</span>
        <span>Now</span>
      </Link>
    </div>
  );
}

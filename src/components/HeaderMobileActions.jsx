import { Link } from "react-router-dom";
import { PhoneIcon } from "./Icons";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

const buttonBase =
  "flex h-9 flex-shrink-0 items-center justify-center gap-1 px-2.5 text-[10px] font-bold tracking-wide uppercase transition-colors";

export default function HeaderMobileActions() {
  const settings = useSiteSettings();
  return (
    <div className="mr-1 flex items-center gap-1.5 md:hidden">
      <a
        href={toTelHref(settings.phone_1)}
        aria-label="Call us"
        className={`${buttonBase} border border-gold text-gold hover:bg-gold hover:text-[#17140d]`}
      >
        <PhoneIcon width={13} height={13} />
        Call
      </a>
      <Link
        to="/contact"
        aria-label="Book Now"
        className={`${buttonBase} bg-gold text-[#17140d] hover:bg-gold-light`}
      >
        Book Now
      </Link>
    </div>
  );
}

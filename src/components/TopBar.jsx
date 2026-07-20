import { PhoneIcon, MailIcon, FacebookIcon, InstagramIcon, TiktokIcon } from "./Icons";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

export default function TopBar() {
  const settings = useSiteSettings();
  const socials = [
    settings.facebook_url && { label: "Facebook", href: settings.facebook_url, Icon: FacebookIcon },
    settings.instagram_url && { label: "Instagram", href: settings.instagram_url, Icon: InstagramIcon },
    settings.tiktok_url && { label: "TikTok", href: settings.tiktok_url, Icon: TiktokIcon },
  ].filter(Boolean);

  return (
    <div className="hidden bg-gold text-[#17140d] md:block">
      <div className="mx-auto flex h-9 max-w-(--breakpoint-l) items-center justify-between gap-4 px-6 text-[11px] font-medium tracking-wide sm:text-xs md:px-10">
        <div className="flex min-w-0 items-center gap-4 sm:gap-6">
          <a href={toTelHref(settings.phone_1)} className="flex items-center gap-1.5 whitespace-nowrap transition-opacity hover:opacity-70">
            <PhoneIcon width={12} height={12} className="flex-shrink-0" />
            <span className="truncate">{settings.phone_1}</span>
          </a>
          <a
            href={`mailto:${settings.email}`}
            className="hidden items-center gap-1.5 whitespace-nowrap transition-opacity hover:opacity-70 sm:flex"
          >
            <MailIcon width={12} height={12} className="flex-shrink-0" />
            {settings.email}
          </a>
        </div>

        {socials.length > 0 && (
          <div className="flex flex-shrink-0 items-center gap-3.5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex-shrink-0 transition-transform hover:scale-110"
              >
                <Icon width={18} height={18} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

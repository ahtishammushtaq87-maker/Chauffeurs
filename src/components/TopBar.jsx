import { PhoneIcon, MailIcon, FacebookIcon, InstagramIcon, TiktokIcon } from "./Icons";

const PHONE = "+1 (201) 979-7374";
const EMAIL = "contact@swiftchauffeurs.com";

const socials = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "TikTok", href: "#", Icon: TiktokIcon },
];

export default function TopBar() {
  return (
    <div className="hidden bg-gold text-[#17140d] md:block">
      <div className="mx-auto flex h-9 max-w-(--breakpoint-l) items-center justify-between gap-4 px-6 text-[11px] font-medium tracking-wide sm:text-xs md:px-10">
        <div className="flex min-w-0 items-center gap-4 sm:gap-6">
          <a href={`tel:${PHONE.replace(/[^\d+]/g, "")}`} className="flex items-center gap-1.5 whitespace-nowrap transition-opacity hover:opacity-70">
            <PhoneIcon width={12} height={12} className="flex-shrink-0" />
            <span className="truncate">{PHONE}</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="hidden items-center gap-1.5 whitespace-nowrap transition-opacity hover:opacity-70 sm:flex"
          >
            <MailIcon width={12} height={12} className="flex-shrink-0" />
            {EMAIL}
          </a>
        </div>

        <div className="flex flex-shrink-0 items-center gap-3.5">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex-shrink-0 transition-transform hover:scale-110"
            >
              <Icon width={18} height={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

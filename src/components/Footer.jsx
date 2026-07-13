import { Link } from "react-router-dom";
import { cityAreaLinks } from "../data/content";
import {
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  PinterestIcon,
  TiktokIcon,
  XIcon,
} from "./Icons";
import mascot from "../assets/images/chauffeur-mascot.png";

const PHONE_1 = "+1 (615) 882-1722";
const PHONE_2 = "+1 (201) 979-7374";
const EMAIL = "contact@swiftchauffeurs.com";
const MAP_QUERY = "Nashville, TN, USA"; // replace with the real business address

const socials = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
  { label: "Pinterest", href: "#", Icon: PinterestIcon },
  { label: "TikTok", href: "#", Icon: TiktokIcon },
  { label: "X", href: "#", Icon: XIcon },
];

const toTel = (n) => n.replace(/[^\d+]/g, "");

export default function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink-alt pt-14">
      <div className="mx-auto max-w-(--breakpoint-l) px-6 md:px-16 lg:px-24">
        {/* Top: logo, reservations, email, socials */}
        <div className="flex flex-col gap-10 pb-10 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <Link to="/" className="flex flex-shrink-0 items-center gap-2.5">
            <img src={mascot} alt="Swift Chauffeurs" className="h-12 w-auto" />
          </Link>

          <div className="flex-shrink-0">
            <h4 className="mb-2.5 text-[13px] font-semibold tracking-wide text-ink-fg uppercase">Reservations:</h4>
            <div className="flex flex-col gap-2 text-sm text-ink-fg-muted">
              <a href={`tel:${toTel(PHONE_1)}`} className="flex items-center gap-2.5 transition-colors hover:text-gold-light">
                <PhoneIcon width={14} height={14} className="flex-shrink-0 text-gold-light" />
                {PHONE_1}
              </a>
              <a href={`tel:${toTel(PHONE_2)}`} className="flex items-center gap-2.5 transition-colors hover:text-gold-light">
                <PhoneIcon width={14} height={14} className="flex-shrink-0 text-gold-light" />
                {PHONE_2}
              </a>
            </div>
            <p className="mt-2.5 max-w-70 text-xs leading-relaxed text-ink-fg-faint">
              Text <span className="font-semibold text-ink-fg">HELP</span> for assistance or{" "}
              <span className="font-semibold text-ink-fg">STOP</span> to unsubscribe.
            </p>
          </div>

          <div className="flex flex-shrink-0 flex-col gap-5 lg:mt-7.5">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2.5 text-sm text-ink-fg-muted transition-colors hover:text-gold-light"
            >
              <MailIcon width={16} height={16} className="flex-shrink-0 text-gold-light" />
              {EMAIL}
            </a>

            <div>
              <h4 className="mb-3.5 text-[13px] font-semibold tracking-wide text-ink-fg uppercase">
                Follow Us
              </h4>
              <div className="flex items-center gap-3.5">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-ink-fg-muted transition-colors hover:text-gold-light"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <h4 className="mb-3.5 text-[13px] font-semibold tracking-wide text-ink-fg uppercase">
              Find Us
            </h4>
            {/* TODO: replace the q= value below with the real business address */}
            <iframe
              title="Swift Chauffeurs location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=12&output=embed`}
              className="h-40 w-full rounded-md border border-ink-border grayscale transition-all hover:grayscale-0 lg:w-64"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="border-t border-white" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-ink-fg-faint">{new Date().getFullYear()} &copy; SWIFT CHAUFFEURS</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-xs text-ink-fg-faint transition-colors hover:text-gold-light">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-ink-fg-faint transition-colors hover:text-gold-light">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

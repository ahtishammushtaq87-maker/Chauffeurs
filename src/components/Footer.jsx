import { Link } from "react-router-dom";
import { cityAreaLinks } from "../data/content";
import { PhoneIcon, MailIcon, FacebookIcon, InstagramIcon, TiktokIcon, GoogleIcon, StarIcon } from "./Icons";
import mascot from "../assets/images/chauffeur-mascot.webp";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

export default function Footer() {
  const settings = useSiteSettings();
  const socials = [
    settings.facebook_url && { label: "Facebook", href: settings.facebook_url, Icon: FacebookIcon },
    settings.instagram_url && { label: "Instagram", href: settings.instagram_url, Icon: InstagramIcon },
    settings.tiktok_url && { label: "TikTok", href: settings.tiktok_url, Icon: TiktokIcon },
  ].filter(Boolean);

  return (
    <footer className="border-t border-ink-border bg-ink-alt pt-14">
      <div className="mx-auto max-w-(--breakpoint-l) px-6 md:px-16 lg:px-24">
        {/* Top: logo, reservations, email, socials */}
        <div className="flex flex-col gap-10 pb-10 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="flex flex-shrink-0 flex-col gap-3 sm:max-w-70">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={settings.logo_url || mascot} alt="Swift Chauffeurs" className="h-12 w-auto md:h-14" />
            </Link>
            <p className="text-sm leading-relaxed text-ink-fg-muted">
              Arrive in style. Nashville's trusted chauffeured rides for every occasion, day or night.
            </p>
            <div className="flex w-fit items-center gap-2 rounded-full border border-ink-border-strong bg-ink-panel/70 px-4 py-2.5 backdrop-blur-sm">
              <GoogleIcon width={16} height={16} />
              <span className="flex gap-0.5 text-gold-light">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} width={11} height={11} />
                ))}
              </span>
              <span className="text-xs font-semibold text-ink-fg">
                4.9 <span className="font-normal text-ink-fg-muted">(261 Reviews)</span>
              </span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <h4 className="mb-2.5 text-[13px] font-semibold tracking-wide text-ink-fg uppercase">Reservations:</h4>
            <div className="flex flex-col gap-2 text-sm text-ink-fg-muted">
              <a href={toTelHref(settings.phone_1)} className="flex items-center gap-2.5 transition-colors hover:text-gold-light">
                <PhoneIcon width={14} height={14} className="flex-shrink-0 text-gold-light" />
                {settings.phone_1}
              </a>
              <a href={toTelHref(settings.phone_2)} className="flex items-center gap-2.5 transition-colors hover:text-gold-light">
                <PhoneIcon width={14} height={14} className="flex-shrink-0 text-gold-light" />
                {settings.phone_2}
              </a>
              <a
              href={`mailto:${settings.email}`}
              className="flex items-center gap-2.5 text-sm text-ink-fg-muted transition-colors hover:text-gold-light"
            >
              <MailIcon width={16} height={16} className="flex-shrink-0 text-gold-light" />
              {settings.email}
            </a>
            </div>
          </div>

          {socials.length > 0 && (
            <div className="flex flex-shrink-0 flex-col gap-5">
              <div>
                <h4 className="mb-3.5 text-[13px] font-semibold tracking-wide text-ink-fg uppercase">
                  Follow Us
                </h4>
                <div className="flex items-center gap-5">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex-shrink-0 transition-transform hover:scale-110"
                    >
                      <Icon width={32} height={32} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex-shrink-0">
            <h4 className="mb-3.5 text-[13px] font-semibold tracking-wide text-ink-fg uppercase">
              Find Us
            </h4>
            <iframe
              title="Swift Chauffeurs location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(settings.address)}&z=12&output=embed`}
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
            <Link to="/privacy-policy-swift-chauffeurs" className="text-xs text-ink-fg-faint transition-colors hover:text-gold-light">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-xs text-ink-fg-faint transition-colors hover:text-gold-light">
              Terms &amp; Conditions
            </Link>
            <Link
              to="/gdpr-compliance"
              className="text-xs text-ink-fg-faint transition-colors hover:text-gold-light"
            >
              GDPR Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

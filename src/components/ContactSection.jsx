import { PhoneIcon, MailIcon, PinIcon } from "./Icons";
import PlaceholderImage from "./PlaceholderImage";
import QuoteForm from "./QuoteForm";
import { dealershipImg } from "../data/content";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

export default function ContactSection() {
  const settings = useSiteSettings();

  return (
    <section className="px-6 py-16 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-stretch gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="eyebrow">Get in Touch</span>
          <h2 className="mb-4 font-serif text-[34px] leading-tight font-medium text-text">
            Let's Find Your
            <br />
            Perfect Car.
          </h2>
          <p className="mb-6.5 max-w-md text-[15px] text-text-muted">
            Have questions or ready to get started? We're here to help.
          </p>

          <ul className="mb-7.5 flex flex-col gap-3.5 text-sm text-text-muted">
            <li className="flex items-center gap-3">
              <PhoneIcon width={18} height={18} className="flex-shrink-0 text-gold" />
              <a href={toTelHref(settings.phone_1)} className="transition-colors hover:text-gold">
                {settings.phone_1}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon width={18} height={18} className="flex-shrink-0 text-gold" />
              <a href={toTelHref(settings.phone_2)} className="transition-colors hover:text-gold">
                {settings.phone_2}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon width={18} height={18} className="flex-shrink-0 text-gold" />
              <a href={`mailto:${settings.email}`} className="transition-colors hover:text-gold">
                {settings.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PinIcon width={18} height={18} className="flex-shrink-0 text-gold" />
              {settings.address}
            </li>
          </ul>

          <QuoteForm />
        </div>

        <div className="relative min-h-80 overflow-hidden rounded border border-border lg:min-h-0 lg:h-full">
          <div className="absolute inset-0">
            <PlaceholderImage src={dealershipImg} label="Dealership Photo" alt="Apex Motors showroom" />
          </div>
          <div className="absolute right-6 bottom-6 left-6 z-10 flex items-start gap-3.5 rounded border border-border-strong bg-bg/75 p-5 text-gold backdrop-blur-md">
            <PinIcon width={18} height={18} className="mt-0.5 flex-shrink-0" />
            <div>
              <p className="mb-2 text-[13px] leading-relaxed text-text">{settings.address}</p>
              <a
                href={`https://maps.google.com/maps?q=${encodeURIComponent(settings.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold tracking-wide text-gold uppercase"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

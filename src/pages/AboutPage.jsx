import { Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import QuoteForm from "../components/QuoteForm";
import HeroMarquee from "../components/HeroMarquee";
import CustomerReviews from "../components/CustomerReviews";
import {
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  MailIcon,
  Icon,
} from "../components/Icons";
import {
  aboutImages,
  aboutHeroBadges,
  aboutSteps,
  aboutWhyChoose,
  aboutStats,
  aboutSafetyFeatures,
} from "../data/aboutContent";
import { useSiteSettings, toTelHref } from "../context/SiteSettingsContext";

export default function AboutPage() {
  const settings = useSiteSettings();
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden border-b border-ink-border bg-ink">
        <div className="absolute inset-0">
          <PlaceholderImage src={aboutImages.heroImg} alt="Nashville skyline" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-start gap-6 px-5 py-10 sm:gap-10 sm:px-10 sm:py-14 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
          <div className="flex-shrink-0 rounded-lg bg-black/50 p-5 sm:p-6 lg:max-w-lg">
            <span className="eyebrow">About Swift Chauffeurs</span>
            <h1 className="font-serif text-[2rem] leading-[1.15] font-medium text-ink-fg sm:text-5xl md:text-[52px]">
              Professional Chauffeur Service Provider in Tennessee
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-fg-muted">
              Swift Chauffeurs is your trusted partner for premium transportation in Tennessee. Our professional team
              is dedicated to delivering exceptional service, ensuring a comfortable and reliable ride for every
              occasion.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {aboutHeroBadges.map((label) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-ink-border-strong bg-panel/70 px-4 py-2.5 text-xs font-semibold text-ink-fg backdrop-blur-sm"
                >
                  <CheckCircleIcon width={15} height={15} className="text-gold" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full max-w-md lg:flex-shrink-0">
            <QuoteForm />
          </div>
        </div>
      </section>
      <HeroMarquee />

      {/* Reserving Your Ride in Minutes */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-12 text-center">
            <span className="eyebrow">How It Works</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Reserving Your Ride in Minutes</h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {aboutSteps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                {i !== aboutSteps.length - 1 && (
                  <ArrowRightIcon
                    width={20}
                    height={20}
                    className="absolute top-9 -right-3 hidden text-gold/40 md:block"
                  />
                )}
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold-dim text-gold">
                  <Icon name={step.icon} width={26} height={26} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-text">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-[13px] leading-relaxed text-text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Swift Chauffeurs */}
      <section className="border-y border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <PlaceholderImage src={aboutImages.whyChooseImg} alt="Swift Chauffeurs professional chauffeur" />
          </div>
          <div>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Why Choose Swift Chauffeurs?
            </h2>
            <div className="mt-7 flex flex-col gap-6">
              {aboutWhyChoose.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gold-dim text-gold">
                    <Icon name={item.icon} width={20} height={20} />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-text">{item.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Swift Chauffeurs Started */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="eyebrow">Our Story</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              How Swift Chauffeurs Started
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Founded since 2017 with a passion for excellence in transportation, Swift Chauffeurs was created to
              meet the growing demand for high-quality chauffeur services in Tennessee. Our team is aware of the
              significance of every aspect as far as traveling is concerned. From our luxurious fleet to our highly
              trained chauffeurs, we strive to make your ride as pleasant as possible.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border bg-panel p-4 text-center">
                  <p className="font-serif text-2xl text-gold">{stat.value}</p>
                  <p className="mt-1 text-[11px] leading-tight text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-2">
            <PlaceholderImage src={aboutImages.storyImg} alt="Swift Chauffeurs founding story" />
          </div>
        </div>
      </section>

      {/* Our Commitment to Safety */}
      <section className="border-y border-border px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Safety First</span>
            <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
              Our Commitment to Safety
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              Safety of our customers is our number one priority at Swift Chauffeurs. We follow all the measures of
              safety and also ensure our cars are checked and serviced often to ensure the safety of our passengers.
              Defensive driving principles are incorporated and each chauffeur complies with all applicable traffic
              laws in that region.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              {aboutSafetyFeatures.map((f) => (
                <span
                  key={f.title}
                  className="flex items-center gap-2.5 rounded-full border border-border-strong bg-panel px-4 py-2.5 text-sm font-semibold text-text"
                >
                  <Icon name={f.icon} width={17} height={17} className="text-gold" />
                  {f.title}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
              <PlaceholderImage src={aboutImages.safetyImg1} alt="Swift Chauffeurs safety commitment" />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-xl border border-border">
              <PlaceholderImage src={aboutImages.safetyImg2} alt="Swift Chauffeurs chauffeur professionalism" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl) rounded-2xl border border-border bg-panel p-10 md:p-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="eyebrow">Get In Touch</span>
              <h2 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl">
                Contact Swift Chauffeurs Today
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
                We value open communication and are here to assist you with all your transportation needs. Whether
                you have questions about our services, want to book a ride, or need further information, our
                dedicated customer support team is ready to help.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
                Your journey is important to us, and we are committed to delivering exceptional service from start
                to finish. Contact us today, and let us take care of your transportation needs with professionalism
                and care.
              </p>
            </div>
            <div className="flex flex-col gap-5 lg:border-l lg:border-border lg:pl-10">
              <a href={toTelHref(settings.phone_2)} className="flex items-center gap-3 text-text hover:text-gold">
                <PhoneIcon width={18} height={18} className="flex-shrink-0 text-gold" />
                {settings.phone_2}
              </a>
              <a href={`mailto:${settings.email}`} className="flex items-center gap-3 text-text hover:text-gold">
                <MailIcon width={18} height={18} className="flex-shrink-0 text-gold" />
                {settings.email}
              </a>
              <Link to="/contact" className="btn btn-gold mt-2">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Customer reviews */}
      <CustomerReviews />
    </>
  );
}

import Hero from "../components/Hero";
import FeaturedInventory from "../components/FeaturedInventory";
import WhyChooseUs from "../components/WhyChooseUs";
import FinancingTrade from "../components/FinancingTrade";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import CardSlider from "../components/CardSlider";
import { airportAreas } from "../data/airportContent";
import { chauffeurServices } from "../data/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedInventory />
      <WhyChooseUs />
      {/* Our Chauffeur Services */}
      <section className="border-y border-border bg-bg-alt px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">What We Offer</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Our Chauffeur Services</h2>
          </div>
          <CardSlider items={chauffeurServices} buttonLabel="Book Now" autoPlayMs={4500} />
        </div>
      </section>
      <FinancingTrade />
      <Stats />
      <Testimonials />
      {/* Areas We Serve */}
      <section className="bg-bg-alt px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Locations</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Areas We Serve in Nashville</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {airportAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2.5 rounded-lg border border-border bg-panel px-4 py-3.5 text-sm text-text-muted transition-colors hover:border-gold-dim hover:text-gold"
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeaturedInventory from "../components/FeaturedInventory";
import WhyChooseUs from "../components/WhyChooseUs";
import FinancingTrade from "../components/FinancingTrade";
import Stats from "../components/Stats";
import CustomerReviews from "../components/CustomerReviews";
import ContactSection from "../components/ContactSection";
import CardSlider from "../components/CardSlider";
import CitiesWeServe from "../components/CitiesWeServe";
import PlanYourTravelBanner from "../components/PlanYourTravelBanner";
import { useAllServices } from "../hooks/useAllServices";

export default function HomePage() {
  const allServices = useAllServices();

  return (
    <>
      <Hero />
      <FeaturedInventory />
      <WhyChooseUs />
      {/* Our Chauffeur Services */}
      <section className="border-y border-border  px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">What We Offer</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Our Chauffeur Services</h2>
          </div>
          <CardSlider
            items={allServices}
            autoPlayMs={4500}
            renderActions={(item) => (
              <div className="flex gap-3">
                <Link to={item.path} className="btn btn-outline flex-1">
                  View More
                </Link>
                <Link to="/contact" className="btn btn-gold flex-1">
                  Book Now
                </Link>
              </div>
            )}
          />
        </div>
      </section>
      <FinancingTrade />
      <Stats />
      <CitiesWeServe />
      <PlanYourTravelBanner />
      <CustomerReviews />
    </>
  );
}

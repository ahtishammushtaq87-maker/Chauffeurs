import Hero from "../components/Hero";
import FeaturedInventory from "../components/FeaturedInventory";
import WhyChooseUs from "../components/WhyChooseUs";
import FinancingTrade from "../components/FinancingTrade";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedInventory />
      <WhyChooseUs />
      <FinancingTrade />
      <Stats />
      <Testimonials />
      <ContactSection />
    </>
  );
}

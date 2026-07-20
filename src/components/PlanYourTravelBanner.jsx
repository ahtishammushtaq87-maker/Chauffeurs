import ctaBanner from "../assets/images/cta-limo-banner.jpg";

export default function PlanYourTravelBanner() {
  return (
    <section
      className="relative flex min-h-[22rem] items-center justify-center bg-cover bg-center px-6 py-20 md:min-h-[26rem] md:px-16 lg:px-24"
      style={{ backgroundImage: `url(${ctaBanner})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold leading-tight text-white drop-shadow-lg sm:text-3xl md:text-4xl">
          Plan Your Journey with Nashville’s Premier Chauffeur & Limousine Service 
        </h2>
        <a href="#quote" className="btn btn-gold mt-8 inline-block px-10 py-3.5">
          Book Now
        </a>
      </div>
    </section>
  );
}

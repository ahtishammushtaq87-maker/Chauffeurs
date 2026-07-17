import CardSlider from "./CardSlider";
import { serviceCities } from "../data/citiesContent";

export default function CitiesWeServe() {
  return (
    <section className="border-y border-border px-6 py-15 md:px-16 lg:px-24">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="mb-10 text-center">
          <span className="eyebrow">Locations</span>
          <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">
            We Are <span className="text-gold">Serving</span>
          </h2>
        </div>
        <CardSlider
          items={serviceCities}
          autoPlayMs={4500}
          renderActions={(item) =>
            item.comingSoon ? (
              <span className="btn btn-outline pointer-events-none w-full opacity-50">Coming Soon</span>
            ) : (
              <a href="#quote" className="btn btn-gold w-full">
                Book Now
              </a>
            )
          }
        />
      </div>
    </section>
  );
}

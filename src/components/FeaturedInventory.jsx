import { lazy, Suspense } from "react";

const FeaturedGallery = lazy(() => import("./FeaturedGallery"));

function GallerySkeleton() {
  return (
    <div className="flex w-full animate-pulse items-center justify-center py-4">
      <div className="h-[11.25rem] w-80 rounded-2xl border-2 border-black/60 bg-panel sm:h-[18rem] sm:w-[32rem] lg:h-[22.5rem] lg:w-[40rem]" />
    </div>
  );
}

export default function FeaturedInventory() {
  return (
    <section className="py-15 ">
      <div className="mx-auto max-w-(--breakpoint-xl) px-6 md:px-16 lg:px-24">
        <div className="mb-8 text-center sm:mb-10">
          <span className="eyebrow">Your Journey, Our Commitment</span>
          <p className="mb-2 text-sm text-text-muted sm:text-base">Serving Nashville and Destinations Across Tennessee</p>
          <h2 className="font-serif text-2xl font-medium leading-tight text-text sm:text-3xl md:text-4xl">
            Our Premium <span className="text-gold">FLEET</span>
          </h2>
        </div>
      </div>

      <Suspense fallback={<GallerySkeleton />}>
        <FeaturedGallery />
      </Suspense>
    </section>
  );
}

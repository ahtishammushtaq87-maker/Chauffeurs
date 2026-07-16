import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./Icons";

const FeaturedGallery = lazy(() => import("./FeaturedGallery"));

function GallerySkeleton() {
  return (
    <div className="flex w-full animate-pulse items-center justify-center py-4">
      <div className="h-[26rem] w-72 rounded-2xl bg-panel sm:h-[28rem] sm:w-80" />
    </div>
  );
}

export default function FeaturedInventory() {
  return (
    <section className="py-30 ">
      <div className="mx-auto max-w-(--breakpoint-xl) px-6 md:px-16 lg:px-24">
        <div className="mb-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="eyebrow mb-0">Featured Fleet </span>
          <Link to="/fleet" className="flex items-center gap-2 text-[13px] font-semibold tracking-wide text-gold uppercase">
            View All Fleet <ArrowRightIcon />
          </Link>
        </div>
      </div>

      <Suspense fallback={<GallerySkeleton />}>
        <FeaturedGallery />
      </Suspense>
    </section>
  );
}

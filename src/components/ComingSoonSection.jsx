import { Link } from "react-router-dom";
import { CarIcon } from "./Icons";

export default function ComingSoonSection({ message }) {
  return (
    <section className="py-24">
      <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col items-center gap-6 px-6 text-center md:px-16 lg:px-24">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border-strong text-gold">
          <CarIcon width={28} height={28} />
        </div>
        <p className="max-w-md text-text-muted">{message}</p>
        <Link to="/contact" className="btn btn-gold">
          Contact Us
        </Link>
      </div>
    </section>
  );
}

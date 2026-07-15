import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router's client-side navigation doesn't reset scroll position like a
// real page load does, so clicking a header/footer link while scrolled down
// would otherwise land on the new page still scrolled down, hiding its hero
// section. Keyed on pathname only (not the full location) so in-page anchor
// links like href="#quote" keep working normally.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

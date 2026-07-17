import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "swiftChauffeurs_cookieConsent";

function hasAccepted() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
}

// Bottom bar shown until the visitor accepts cookies, then hidden for good
// (remembered in localStorage). Sits above the floating call button while visible.
export default function CookieConsent() {
  const [accepted, setAccepted] = useState(hasAccepted);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (accepted) return;
    const timer = setTimeout(() => setShown(true), 400);
    return () => clearTimeout(timer);
  }, [accepted]);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // Private browsing or storage disabled — banner just won't persist across visits.
    }
    setShown(false);
    setTimeout(() => setAccepted(true), 300);
  };

  if (accepted) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className={`fixed inset-x-0 bottom-0 z-[130] border-t border-ink-border bg-ink/97 backdrop-blur-md transition-transform duration-300 ease-out ${
        shown ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col items-stretch gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:px-16 lg:px-24">
        <p className="text-[13px] leading-relaxed text-ink-fg-muted sm:text-sm">
          We use cookies to improve your experience and keep our site running smoothly. By continuing to browse,
          you agree to our use of cookies. See our{" "}
          <Link to="/gdpr-compliance" className="text-gold-light underline underline-offset-2 hover:text-gold">
            Cookie &amp; GDPR Policy
          </Link>{" "}
          for details.
        </p>
        <button type="button" onClick={handleAccept} className="btn btn-gold w-full flex-shrink-0 sm:w-auto">
          Accept Cookies
        </button>
      </div>
    </div>
  );
}

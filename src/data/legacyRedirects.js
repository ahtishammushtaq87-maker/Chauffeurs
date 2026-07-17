// Retired page URLs -> their current path. Every entry here is a URL that was
// live before, so it must keep resolving: old links, bookmarks, and search
// results still point at them.
//
// Two things consume this map, and they must agree:
//   - App.jsx renders a <Navigate> route per entry (in-app links + local dev).
//   - vercel.json serves the real 301s in production. Keep it in sync by hand;
//     JSON can't import this file.
//
// Point every entry straight at the final path — never at another key here, or
// visitors take two hops and the redirect chain dilutes the ranking signal.
export const LEGACY_REDIRECTS = {
  "/services/airport": "/car-service-nashville-airport",
  "/services/airport-chauffeur-service-nashville": "/car-service-nashville-airport",
  "/services/birthday": "/birthday-party-bus-rental",
  "/services/black-car": "/black-car-service",
  "/services/concert": "/concert-transportation",
  "/services/executive": "/executive-chauffeur",
  "/services/prom": "/limo-prom-rental",
  "/services/wedding": "/wedding-limo-chauffeur",
  "/fleet/executive-suv": "/luxury-suv-transportation-nashville",
  "/fleet/luxury-sedan": "/black-mercedes-sedan-hire",
  "/fleet/motor-coach": "/motor-coach-rental-nashville-tn",
  "/fleet/party-bus": "/party-bus-rental-nashville",
  "/fleet/sprinter-van": "/luxury-sprinter-van-rental-nashville",
  "/fleet/stretch-limousine": "/stretch-limousine-hire-nashville",
  "/service-area/brentwood": "/brentwood",
  "/service-area/franklin": "/limo-service-in-franklin-tn",
  "/service-area/murfreesboro": "/murfreesboro-limousine-service",
  "/service-area/nashville": "/nashville",
  "/service-area/spring-hill": "/spring-hill",
  "/service-area/chattanooga/birthday-party-bus": "/chattanooga/birthday-party-bus",
  "/service-area/chattanooga/cha-car-service": "/chattanooga/car-service-to-cha",
  "/service-area/chattanooga/prom-limousine": "/chattanooga/prom-limo-rental",
  "/service-area/chattanooga/wedding-chauffeur": "/chattanooga/wedding-chauffeur-service",
  "/service-area/clarksville/corporate-airport-shuttle": "/services/airport-shuttle",
  "/service-area/clarksville/nashville-airport-shuttle": "/clarksville/shuttle-to-nashville-airport",
  "/about": "/about-us",
  "/privacy-policy": "/privacy-policy-swift-chauffeurs",
  "/terms": "/terms-conditions",
};

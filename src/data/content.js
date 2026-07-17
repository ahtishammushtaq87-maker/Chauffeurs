import heroImg from "../assets/images/hero.webp";
import homeHeroImg from "../assets/images/main_hero.png";
import carMercedes from "../assets/images/car-mercedes.webp";
import carPorsche from "../assets/images/car-porsche.webp";
import carAudi from "../assets/images/car-audi.webp";
import carRangeRover from "../assets/images/car-rangerover.webp";
import carBmw from "../assets/images/car-bmw.webp";
import financingBg from "../assets/images/financing-bg.jpg";
import tradeBg from "../assets/images/trade-bg.webp";
import dealershipImg from "../assets/images/dealership.webp";

// Per-page hero backgrounds
import fleetSedan from "../assets/images/fleet-sedan.webp";
import fleetPartybus from "../assets/images/fleet-partybus.webp";
import fleetVan from "../assets/images/fleet-van.webp";
import fleetCoach from "../assets/images/fleet-coach.webp";
import svcProm from "../assets/images/svc-prom.webp";
import svcAirport from "../assets/images/svc-airport.webp";
import svcBirthday from "../assets/images/svc-birthday.webp";
import svcWedding from "../assets/images/svc-wedding.webp";
import svcConcert from "../assets/images/svc-concert.webp";
import svcBlackcar from "../assets/images/svc-blackcar.jpg";
import svcExecutive from "../assets/images/svc-executive.webp";
import areaNashville from "../assets/images/area-nashville.webp";
import areaCity from "../assets/images/area-city.webp";
import areaCity2 from "../assets/images/area-city2.webp";
import areaTown from "../assets/images/area-town.webp";
import miscBlog from "../assets/images/misc-blog.webp";

// homeHeroImg backs the home hero only. heroImg stays the generic fallback for
// any route without its own entry in heroImages — keep them separate.
export { heroImg, homeHeroImg, financingBg, tradeBg, dealershipImg };

// Hero background per route. Falls back to heroImg via getHeroImage().
export const heroImages = {
  // Our Fleet
  "/fleet": fleetSedan,
  "/black-mercedes-sedan-hire": fleetSedan,
  "/luxury-suv-transportation-nashville": carRangeRover,
  "/stretch-limousine-hire-nashville": tradeBg,
  "/party-bus-rental-nashville": fleetPartybus,
  "/luxury-sprinter-van-rental-nashville": fleetVan,
  "/motor-coach-rental-nashville-tn": fleetCoach,
  // Services
  "/services": svcExecutive,
  "/limo-prom-rental": svcProm,
  "/car-service-nashville-airport": svcAirport,
  "/birthday-party-bus-rental": svcBirthday,
  "/wedding-limo-chauffeur": svcWedding,
  "/concert-transportation": svcConcert,
  "/black-car-service": svcBlackcar,
  "/executive-chauffeur": svcExecutive,
  // Service Area
  "/service-area": areaNashville,
  "/nashville": areaNashville,
  "/service-area/chattanooga": areaCity,
  "/chattanooga/prom-limo-rental": svcProm,
  "/chattanooga/car-service-to-cha": svcBlackcar,
  "/chattanooga/birthday-party-bus": svcBirthday,
  "/chattanooga/wedding-chauffeur-service": svcWedding,
  "/brentwood": areaTown,
  "/limo-service-in-franklin-tn": areaCity2,
  "/murfreesboro-limousine-service": areaCity,
  "/service-area/clarksville": areaNashville,
  "/clarksville/shuttle-to-nashville-airport": svcAirport,
  "/services/airport-shuttle": svcExecutive,
  "/spring-hill": areaTown,
  "/service-area/mt-juliet": areaTown,
  "/service-area/smyrna": areaCity,
  "/service-area/nolensville": areaCity2,
  "/service-area/hendersonville": areaNashville,
  "/service-area/burns": areaTown,
  "/service-area/white-house": areaCity,
  "/service-area/greenbrier": areaCity2,
  "/service-area/lebanon": areaNashville,
  "/service-area/gallatin": areaTown,
  "/service-area/la-vergne": areaCity,
  // About group
  "/about-us": dealershipImg,
  "/privacy-policy-swift-chauffeurs": carPorsche,
  "/terms-conditions": carAudi,
  "/gdpr-compliance": carBmw,
  "/blog": miscBlog,
};

export function getHeroImage(path) {
  return heroImages[path] || heroImg;
}

// Returns a new array of nav/footer items sorted alphabetically (A–Z) by label.
export function sortByLabel(items = []) {
  return [...items].sort((a, b) => a.label.localeCompare(b.label));
}

export const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Our Fleet",
    path: "/fleet",
    dropdown: [
      { label: "Luxury Sedan", path: "/black-mercedes-sedan-hire" },
      { label: "Executive SUV", path: "/luxury-suv-transportation-nashville" },
      { label: "Stretch Limousine", path: "/stretch-limousine-hire-nashville" },
      { label: "Party Bus", path: "/party-bus-rental-nashville" },
      { label: "Sprinter Van", path: "/luxury-sprinter-van-rental-nashville" },
      { label: "Motor Coach", path: "/motor-coach-rental-nashville-tn" },
    ],
  },
  {
    label: "Services",
    path: "/services",
    dropdown: [
      { label: "Prom", path: "/limo-prom-rental" },
      { label: "Airport", path: "/car-service-nashville-airport" },
      { label: "Birthday", path: "/birthday-party-bus-rental" },
      { label: "Wedding", path: "/wedding-limo-chauffeur" },
      { label: "Concert", path: "/concert-transportation" },
      { label: "Black Car", path: "/black-car-service" },
      { label: "Executive", path: "/executive-chauffeur" },
    ],
  },
  {
    label: "Service Area",
    path: "/service-area",
    dropdown: [
      { label: "Nashville", path: "/nashville" },
      {
        label: "Chattanooga",
        path: "/service-area/chattanooga",
        submenu: [
          { label: "Prom Limousine", path: "/chattanooga/prom-limo-rental" },
          { label: "CHA Car Service", path: "/chattanooga/car-service-to-cha" },
          { label: "Birthday Party Bus", path: "/chattanooga/birthday-party-bus" },
          { label: "Wedding Chauffeur", path: "/chattanooga/wedding-chauffeur-service" },
        ],
      },
      { label: "Brentwood", path: "/brentwood" },
      { label: "Franklin", path: "/limo-service-in-franklin-tn" },
      { label: "Murfreesboro", path: "/murfreesboro-limousine-service" },
      {
        label: "Clarksville",
        path: "/service-area/clarksville",
        submenu: [
          { label: "Shuttle to Nashville Airport", path: "/clarksville/shuttle-to-nashville-airport" },
          { label: "Corporate Airport Shuttle", path: "/services/airport-shuttle" },
        ],
      },
      { label: "Spring Hill", path: "/spring-hill" },
    ],
  },
  {
    label: "About",
    path: "/about-us",
    dropdown: [
      { label: "About Us", path: "/about-us" },
      { label: "Contact Us", path: "/contact" },
      { label: "Privacy Policy", path: "/privacy-policy-swift-chauffeurs" },
      { label: "Terms & Conditions", path: "/terms-conditions" },
      { label: "Blog", path: "/blog" },
    ],
  },
];

// Full list of TN service-area landing pages surfaced in the footer's "Top Cities"
// block. Kept separate from navLinks so the header dropdown stays short, while
// these still get real routes and correct page titles via routeOnlyLinks below.
export const cityAreaLinks = [
  { label: "Nashville", path: "/nashville" },
  { label: "Chattanooga", path: "/service-area/chattanooga" },
  { label: "Brentwood", path: "/brentwood" },
  { label: "Franklin", path: "/limo-service-in-franklin-tn" },
  { label: "Murfreesboro", path: "/murfreesboro-limousine-service" },
  { label: "Clarksville", path: "/service-area/clarksville" },
  { label: "Spring Hill", path: "/spring-hill" },
  { label: "Mt. Juliet", path: "/service-area/mt-juliet" },
  { label: "Smyrna", path: "/service-area/smyrna" },
  { label: "Nolensville", path: "/service-area/nolensville" },
  { label: "Hendersonville", path: "/service-area/hendersonville" },
  { label: "Burns", path: "/service-area/burns" },
  { label: "White House", path: "/service-area/white-house" },
  { label: "Greenbrier", path: "/service-area/greenbrier" },
  { label: "Lebanon", path: "/service-area/lebanon" },
  { label: "Gallatin", path: "/service-area/gallatin" },
  { label: "La Vergne", path: "/service-area/la-vergne" },
];

// Route/meta-only tree (not rendered in the header) so every city above gets a
// working route and a proper title via GenericPage.
const routeOnlyLinks = [
  { label: "Service Area", path: "/service-area", dropdown: cityAreaLinks },
  { label: "GDPR Compliance", path: "/gdpr-compliance" },
];

// Flatten nav tree into a unique list of { path, label } route entries.
export function flattenNavRoutes(links = [...navLinks, ...routeOnlyLinks]) {
  const seen = new Set();
  const routes = [];
  const walk = (items) => {
    for (const item of items) {
      if (item.path && !seen.has(item.path)) {
        seen.add(item.path);
        routes.push({ path: item.path, label: item.label });
      }
      if (item.dropdown) walk(item.dropdown);
      if (item.submenu) walk(item.submenu);
    }
  };
  walk(links);
  return routes;
}

// Map each path to { label, parent } so a page can title itself from the nav.
export function buildNavMeta(links = [...navLinks, ...routeOnlyLinks]) {
  const map = {};
  const walk = (items, parent) => {
    for (const item of items) {
      if (item.path) map[item.path] = { label: item.label, parent: parent ? parent.label : null };
      if (item.dropdown) walk(item.dropdown, item);
      if (item.submenu) walk(item.submenu, item);
    }
  };
  walk(links, null);
  return map;
}

export const navMeta = buildNavMeta();

export const featuredCars = [
  {
    id: 1,
    year: 2023,
    make: "Mercedes-Benz",
    model: "S 580 4MATIC®",
    image: carMercedes,
    price: "$109,995",
    mileage: "9,400 mi",
    transmission: "Automatic",
  },
  {
    id: 2,
    year: "",
    make: "Escalade Limousine",
    model: "",
    image: carPorsche,
    price: "$129,995",
    mileage: "8,400 mi",
    transmission: "Automatic",
  },
  {
    id: 3,
    year: "",
    make: "Cadillac Escalade SUV",
    model: "",
    image: carAudi,
    price: "$114,995",
    mileage: "12,100 mi",
    transmission: "Automatic",
  },
  {
    id: 4,
    year: "",
    make: "20 Passenger Party",
    model: "",
    image: carRangeRover,
    price: "$139,995",
    mileage: "15,300 mi",
    transmission: "Automatic",
  },
  {
    id: 5,
    year: "",
    make: "14 Passenger Executive Sprinter Van",
    model: "",
    image: carBmw,
    price: "$96,995",
    mileage: "9,700 mi",
    transmission: "Automatic",
  },
];

export const chauffeurServices = [
  {
    title: "Airport Transfer",
    desc: "Reliable, all-inclusive airport transportation with real-time flight monitoring.",
    image: svcAirport,
    path: "/car-service-nashville-airport",
  },
  {
    title: "Birthday Chauffeur",
    desc: "Celebrate in style with a party-ready limo built for unforgettable nights.",
    image: svcBirthday,
    path: "/birthday-party-bus-rental",
  },
  {
    title: "Black Car Service",
    desc: "Premium comfort and professionalism with black car service, perfect for any special trip.",
    image: svcBlackcar,
    path: "/black-car-service",
  },
  {
    title: "Concert Transportation",
    desc: "Skip the traffic and parking — arrive at every show in comfort and style.",
    image: svcConcert,
    path: "/concert-transportation",
  },
  {
    title: "Executive Chauffeur",
    desc: "Polished, punctual chauffeur service for business travel and VIP clients.",
    image: svcExecutive,
    path: "/executive-chauffeur",
  },
  {
    title: "Prom Limo Rental",
    desc: "Arrive at prom with elegance using our limousine service, creating unforgettable memories forever.",
    image: svcProm,
    path: "/limo-prom-rental",
  },
  {
    title: "Wedding Chauffeur",
    desc: "Experience luxury with our Mercedes chauffeur service, tailored to meet every demand perfectly.",
    image: svcWedding,
    path: "/wedding-limo-chauffeur",
  },
];

export const whyChooseUs = [
  {
    icon: "diamond",
    title: "Premium Selection",
    desc: "Handpicked luxury vehicles inspected to the highest standards.",
  },
  {
    icon: "shield",
    title: "Transparent Process",
    desc: "No hidden fees. No surprises. Just honest pricing.",
  },
  {
    icon: "award",
    title: "Expert Service",
    desc: "Factory-trained technicians and concierge care.",
  },
  {
    icon: "clock",
    title: "24/7 Support",
    desc: "We're here whenever you need us, day or night.",
  },
];

export const bestServiceFeatures = [
  {
    icon: "shield",
    title: "Safety Of Our Customer",
    desc: "We ensure customer safety with strict protocols, properly maintained vehicles, and trained drivers for a secure and comfortable journey.",
  },
  {
    icon: "money",
    title: "Affordable Transparent Pricing",
    desc: "We guarantee transparent pricing with no hidden charges. You'll always receive a clear, upfront price, so there are no surprises for you.",
  },
  {
    icon: "car",
    title: "Licenced Professional Drivers",
    desc: "Our licensed drivers are professional, reliable, and undergo thorough background checks and training to ensure safe, smooth travel.",
  },
];

export const stats = [
  { icon: "trophy", value: "5+", label: "Years in Business" },
  { icon: "people", value: "2,000+", label: "Happy Clients" },
  { icon: "star", value: "4.9", label: "Average Rating" },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "From the moment I walked in, the team at Apex Motors treated me like family. The car is pristine and the experience was flawless.",
    name: "Michael R.",
    role: "Verified Buyer",
  },
  {
    id: 2,
    quote:
      "Best car buying experience I've ever had. Transparent, professional, and no pressure. Highly recommend!",
    name: "Sophia L.",
    role: "Verified Buyer",
  },
  {
    id: 3,
    quote:
      "They gave me top dollar for my trade and helped me into my dream car the same day. Incredible service!",
    name: "David T.",
    role: "Verified Buyer",
  },
];


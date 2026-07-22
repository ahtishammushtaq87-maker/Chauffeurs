import heroImg from "../assets/images/sprinterhero.webp";
import featuresImg from "../assets/images/sprinterhero.webp";
import fleetImg from "../assets/images/sprinterfirst.webp";
import includesImg from "../assets/images/MercedesSprinterVan.webp";
import airportImg from "../assets/images/svc-airport.webp";
import birthdayImg from "../assets/images/svc-birthday.webp";
import blackCarImg from "../assets/images/svc-blackcar.jpg";
import concertImg from "../assets/images/svc-concert.webp";
import executiveImg from "../assets/images/svc-executive.webp";
import promImg from "../assets/images/prom-dining.webp";
import weddingImg from "../assets/images/svc-wedding.webp";

export const sprinterVanImages = {
  heroImg,
  featuresImg,
  includesImg,
};

// Hero copy — targets "Mercedes Sprinter van rental Nashville" and clarifies
// this is chauffeured, not self-drive.
export const sprinterVanHero = {
  eyebrow: "Chauffeured Mercedes Sprinter Van Nashville, TN",
  h1: "Mercedes Sprinter Van Rental in Nashville, TN",
  tagline: "Travel Together. Arrive in Style.",
  subtext:
    "Keep your group together with a professionally chauffeured Mercedes Sprinter van for Nashville airport transfers, corporate travel, weddings, concerts, events, tours, and private group transportation.",
};

// "Why Choose Our Nashville Sprinter Van Service?"
export const sprinterVanIntro =
  "Group travel works best when passenger count, luggage, pickup timing, and the itinerary are planned together. Swift Chauffeurs provides private, professionally chauffeured Sprinter transportation designed to keep families, teams, guests, and corporate groups together from pickup to destination.";

export const sprinterVanFeatures = [
  "Private group transportation",
  "Professional chauffeur",
  "Comfortable passenger seating",
  "Luggage planning",
  "Airport flight monitoring when applicable",
  "Point-to-point and hourly service",
  "Clear pricing",
];

// Fleet — a single verified configuration. Do not invent a second config.
// NOTE: Confirm passenger capacity, luggage limits, and amenities before launch.
export const sprinterVanFleet = {
  eyebrow: "Our Fleet",
  headingLead: "Our Mercedes Sprinter",
  headingAccent: "Van Options",
  card: {
    name: "Mercedes Executive Sprinter",
    capacity: "Seats up to 16 — confirm with passenger & luggage count",
    desc: "Designed for airport, corporate, and private group travel, the Executive Sprinter may include premium seating, climate control, luggage storage, and onboard comfort features. Publish the exact passenger capacity, luggage limits, seating layout, table, connectivity, and entertainment features of the current vehicle.",
    image: fleetImg,
    points: [
      "Premium passenger seating and climate control",
      "Luggage storage for airport and long-distance travel",
      "Professional chauffeur with every reservation",
      "Ideal for airport, corporate, and private group trips",
    ],
  },
};

// "Nashville Sprinter Transportation for Groups and Events" — best uses.
export const sprinterVanUses = {
  eyebrow: "Group Transportation",
  heading: "Nashville Sprinter Transportation for Groups and Events",
  items: [
    {
      icon: "car",
      title: "Nashville Airport Sprinter Van Service",
      desc: "Reserve a private Sprinter for families, business teams, tour groups, and travelers with additional luggage. Provide passenger, bag, airline, and flight details so the team can confirm vehicle fit and coordinate the pickup.",
    },
    {
      icon: "users",
      title: "Corporate, Convention & Executive Group Travel",
      desc: "Keep teams and clients together for meetings, conventions, roadshows, dinners, site visits, and multi-stop itineraries with point-to-point or hourly Sprinter service.",
    },
    {
      icon: "heart",
      title: "Weddings, Concerts, Tours & Private Groups",
      desc: "Coordinate wedding guests, concert groups, family outings, tours, sporting events, and private trips in one vehicle with a planned itinerary and professional chauffeur.",
    },
  ],
};

// "What's Included with Your Nashville Sprinter Van Rental"
export const sprinterVanIncludes = {
  eyebrow: "What's Included",
  heading: "What's Included with Your Nashville Sprinter Van Rental",
  body: "Your reservation includes a private chauffeured Sprinter van, route and schedule planning, vehicle preparation, climate-controlled passenger comfort, luggage coordination, and the verified features of the selected vehicle. Airport reservations may include flight monitoring when complete flight details are provided.",
  features: [
    "Private chauffeured Sprinter van",
    "Route and schedule planning",
    "Vehicle preparation and cleaning",
    "Climate-controlled passenger comfort",
    "Luggage coordination",
    "Airport flight monitoring when applicable",
  ],
};

// Service areas
export const sprinterVanServiceAreas = {
  heading: "Mercedes Sprinter Van Service Areas in Nashville and Middle Tennessee",
  intro:
    "Swift Chauffeurs provides private chauffeured Sprinter van transportation throughout Nashville and surrounding communities for airports, corporate groups, weddings, events, tours, and private travel.",
};

// FAQ
export const sprinterVanFaqs = [
  {
    q: "How many passengers can a Mercedes Sprinter accommodate?",
    a: "Capacity depends on the current seating configuration — our Executive Sprinter typically seats a group comfortably, but passenger and luggage counts must be considered together. Tell our team your group size and luggage needs and we'll confirm the vehicle fit before booking.",
  },
  {
    q: "How much luggage fits in a Sprinter van?",
    a: "Luggage capacity depends on passenger count, bag sizes, and vehicle configuration. Provide complete passenger and luggage details so the reservation team can confirm fit — the same seat and cargo space is shared, so more passengers means less room for bags.",
  },
  {
    q: "Is this a self-drive Sprinter rental?",
    a: "No. This is a private, professionally chauffeured service. A licensed chauffeur drives your group, and the trip is planned around your itinerary — this is not a self-drive cargo or passenger van rental.",
  },
  {
    q: "Can I reserve a Sprinter for Nashville Airport transportation?",
    a: "Yes. Sprinters are ideal for families, teams, and groups traveling with luggage. Share your flight details so we can use them for monitoring and pickup coordination at Nashville International Airport (BNA).",
  },
  {
    q: "Can a Sprinter be booked by the hour?",
    a: "Hourly service may be available for meetings, events, tours, and multi-stop group itineraries. Provide the expected duration and planned stops so we can confirm availability and provide accurate pricing.",
  },
];

export const sprinterVanCrossSell = [
  {
    title: "Airport Transfer",
    desc: "Reliable, all-inclusive airport transportation with real-time flight monitoring.",
    image: airportImg,
    path: "/car-service-nashville-airport",
  },
  {
    title: "Birthday Chauffeur",
    desc: "Celebrate in style with a party-ready limo built for unforgettable nights.",
    image: birthdayImg,
    path: "/birthday-party-bus-rental",
  },
  {
    title: "Black Car Service",
    desc: "Premium comfort and professionalism with black car service, perfect for any special trip.",
    image: blackCarImg,
    path: "/black-car-service",
  },
  {
    title: "Concert Transportation",
    desc: "Skip the traffic and parking — arrive at every show in comfort and style.",
    image: concertImg,
    path: "/concert-transportation",
  },
  {
    title: "Executive Chauffeur",
    desc: "Polished, punctual chauffeur service for business travel and VIP clients.",
    image: executiveImg,
    path: "/executive-chauffeur",
  },
  {
    title: "Prom Limo Rental",
    desc: "Arrive at prom with elegance using our limousine service, creating unforgettable memories forever.",
    image: promImg,
    path: "/limo-prom-rental",
  },
  {
    title: "Wedding Chauffeur",
    desc: "Experience luxury with our Mercedes chauffeur service, tailored to meet every demand perfectly.",
    image: weddingImg,
    path: "/wedding-limo-chauffeur",
  },
];

import heroImg from "../assets/images/mercedes-benz-s-class_100427375_h-1-1536x933.jpg.webp";
import featuresImg from "../assets/images/mercedes-benz-s-class_100427375_h-1-1536x933.jpg.webp";
import includesImg from "../assets/images/sedaninterior.webp";
import fleetPrimary from "../assets/images/car-mercedes.webp";
import airportImg from "../assets/images/svc-airport.webp";
import birthdayImg from "../assets/images/svc-birthday.webp";
import blackCarImg from "../assets/images/svc-blackcar.jpg";
import concertImg from "../assets/images/svc-concert.webp";
import executiveImg from "../assets/images/svc-executive.webp";
import promImg from "../assets/images/prom-dining.webp";
import weddingImg from "../assets/images/svc-wedding.webp";

export const luxurySedanImages = {
  heroImg,
  featuresImg,
  includesImg,
};

// Hero copy — targets "luxury sedan service Nashville" / "Mercedes sedan service Nashville".
export const luxurySedanHero = {
  eyebrow: "Luxury Mercedes Sedan Service Nashville, TN",
  h1: "Luxury Mercedes Sedan Service in Nashville, TN",
  tagline: "Arrive Refined. Travel Effortlessly.",
  subtext:
    "Travel with privacy, comfort, and professional chauffeur service in a luxury Mercedes sedan for Nashville airport transfers, executive travel, meetings, private rides, and special occasions.",
};

// "Why Choose Our Nashville Luxury Sedan Service?"
export const luxurySedanIntro =
  "Swift Chauffeurs provides private luxury sedan transportation for travelers who value discretion, punctuality, and a quiet, comfortable ride. Every reservation is planned around your pickup, destination, schedule, and service preferences.";

export const luxurySedanFeatures = [
  "Professional chauffeurs and private door-to-door service",
  "Clean, professionally maintained luxury sedans",
  "Flight and traffic monitoring when applicable",
  "Clear pre-trip pricing",
  "Point-to-point and hourly service options",
];

// Fleet — a single consolidated Mercedes-Benz S-Class card.
// NOTE: Confirm the current model, passenger capacity, luggage fit, and features before launch.
export const luxurySedanFleet = {
  eyebrow: "Our Fleet",
  headingLead: "Our Luxury",
  headingAccent: "Mercedes Sedan",
  card: {
    name: "Mercedes-Benz S-Class Luxury Sedan",
    capacity: "Seats up to 3 — confirm passenger & luggage count",
    desc: "Designed for private airport transfers, executive travel, business meetings, hotel transportation, date nights, and special occasions. The cabin provides refined comfort, climate control, and a quiet environment for up to the confirmed passenger capacity.",
    image: fleetPrimary,
    points: [
      "Refined, quiet cabin with climate control",
      "Ideal for airport, executive, and private travel",
      "Professional chauffeur with every reservation",
      "Point-to-point or hourly service",
    ],
  },
};

// "Luxury Sedan Transportation for Airport, Business, and Private Travel" — best uses.
export const luxurySedanUses = {
  eyebrow: "Best Uses",
  heading: "Luxury Sedan Transportation for Airport, Business, and Private Travel",
  items: [
    {
      icon: "car",
      title: "Nashville Airport Sedan Service",
      desc: "Reserve a private sedan for arrivals or departures at Nashville International Airport, with flight monitoring when flight details are provided, luggage assistance, and direct transportation to your hotel, office, residence, or next destination.",
    },
    {
      icon: "diamond",
      title: "Executive and Corporate Sedan Service",
      desc: "Choose a discreet luxury sedan for meetings, client transportation, roadshows, corporate dinners, and hourly executive travel. Point-to-point and hourly options allow the itinerary to match your schedule.",
    },
    {
      icon: "clock",
      title: "Private Point-to-Point and Hourly Service",
      desc: "Use point-to-point service for a direct transfer or hourly service when you need the chauffeur and vehicle available across multiple stops or changing plans.",
    },
  ],
};

// "What's Included with Your Luxury Sedan Service"
export const luxurySedanIncludes = {
  eyebrow: "What's Included",
  heading: "What's Included with Your Luxury Sedan Service",
  body: "Your reservation includes a private luxury sedan, professional chauffeur, door-to-door service, route planning, luggage assistance when applicable, flight monitoring for airport reservations, climate-controlled comfort, and clear pricing based on your trip details.",
  features: [
    "Private luxury sedan and professional chauffeur",
    "Door-to-door service and route planning",
    "Luggage assistance when applicable",
    "Flight monitoring for airport reservations",
    "Climate-controlled passenger comfort",
    "Clear pricing based on your trip details",
  ],
};

// Service areas
export const luxurySedanServiceAreas = {
  heading: "Luxury Sedan Service Areas in Nashville and Middle Tennessee",
  intro:
    "Swift Chauffeurs provides private luxury sedan transportation throughout Nashville and surrounding communities for airport, business, hotel, event, and point-to-point travel.",
};

// FAQ
export const luxurySedanFaqs = [
  {
    q: "How many passengers can the luxury sedan accommodate?",
    a: "Our Mercedes-Benz S-Class luxury sedan comfortably seats a small group — passenger comfort and luggage size should be considered together when selecting a vehicle. Share your group size and bags and we'll confirm whether a sedan or SUV is the better fit before booking.",
  },
  {
    q: "How much luggage fits in the sedan?",
    a: "Luggage capacity depends on the number and size of bags. Provide the passenger and luggage count so the reservation team can confirm whether a sedan or SUV is the better fit for your trip.",
  },
  {
    q: "Can I reserve a Mercedes sedan for Nashville Airport?",
    a: "Yes. Airport sedan reservations can include flight monitoring, direct hotel or address service, and luggage assistance when flight details are provided at the time of booking.",
  },
  {
    q: "Can the sedan be booked by the hour?",
    a: "Yes, when hourly service is available. Hourly reservations are useful for meetings, dinners, events, and multi-stop itineraries where you need the chauffeur and vehicle on standby.",
  },
  {
    q: "Will the exact Mercedes model shown be guaranteed?",
    a: "We aim to provide the Mercedes-Benz S-Class or a comparable luxury sedan. If a substitution is needed based on availability, a vehicle of similar class and comfort will be provided.",
  },
];

export const luxurySedanCrossSell = [
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

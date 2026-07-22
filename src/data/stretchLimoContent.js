import heroImg from "../assets/images/limohero.webp";
import featuresImg from "../assets/images/secondlimo.webp";
import includesImg from "../assets/images/limo3.webp";
import fleetEscalade from "../assets/images/limointerior.webp";
import fleetLincoln from "../assets/images/clasiclimo.webp";
import fleetChrysler from "../assets/images/cristalarlimo.wbp.jpg";
import airportImg from "../assets/images/svc-airport.webp";
import birthdayImg from "../assets/images/svc-birthday.webp";
import blackCarImg from "../assets/images/svc-blackcar.jpg";
import concertImg from "../assets/images/svc-concert.webp";
import executiveImg from "../assets/images/svc-executive.webp";
import promImg from "../assets/images/prom-dining.webp";
import weddingImg from "../assets/images/svc-wedding.webp";

export const stretchLimoImages = {
  heroImg,
  featuresImg,
  includesImg,
};

// Hero copy — targets "stretch limousine rental Nashville".
export const stretchLimoHero = {
  eyebrow: "Luxury Stretch Limousine Rental Nashville, TN",
  h1: "Stretch Limousine Rental in Nashville, TN",
  tagline: "Arrive in Style. Travel Like a VIP.",
  subtext:
    "Make the journey part of the occasion with a professionally chauffeured stretch limousine for Nashville weddings, proms, concerts, parties, corporate events, and special celebrations.",
};

// "Why Choose Our Nashville Stretch Limousine Service?"
export const stretchLimoIntro =
  "A stretch limousine is more than transportation; it is part of the occasion. Swift Chauffeurs plans each reservation around your event schedule, group size, pickup details, stops, and preferred vehicle so the experience feels organized from the first pickup to the final destination.";

export const stretchLimoFeatures = [
  "Professional chauffeur service",
  "Private group transportation",
  "Clean and prepared vehicles",
  "Event itinerary coordination",
  "Clear pricing",
  "Vehicle-specific seating and amenity details",
];

// Fleet — two verified configurations. Confirm both remain available before launch.
// NOTE: Publish model-specific capacity and verified amenities per vehicle.
export const stretchLimoFleet = {
  eyebrow: "Our Fleet",
  headingLead: "Choose Your Nashville",
  headingAccent: "Stretch Limousine",
  cards: [
    {
      name: "Cadillac Escalade Super Stretch Limousine",
      capacity: "Up to 18 passengers",
      desc: "Make a bold entrance in a Cadillac Escalade Super Stretch Limousine in Nashville. Designed for weddings, proms, birthdays, bachelor and bachelorette parties, milestone celebrations, and group nights out, this spacious limousine features perimeter seating, a wet bar, premium sound, vibrant mood and strobe lighting, an infinity-style ceiling, climate control, and show-stopping doors. It is an exceptional choice for larger groups seeking luxury, space, and a memorable arrival.",
      image: fleetEscalade,
    },
    {
      name: "Classic Lincoln Town Car Stretch Limousine",
      capacity: "Up to 8 passengers",
      desc: "Experience timeless luxury with a Classic Lincoln Town Car stretch limousine rental in Nashville. Featuring comfortable leather seating, a solid privacy partition, a wet bar with glassware, Bluetooth surround sound, elegant interior lighting, and climate control, it is ideal for weddings, proms, anniversaries, formal events, romantic date nights, and smaller celebrations. Choose this classic limousine when traditional style, privacy, and a refined arrival matter.",
      image: fleetLincoln,
    },
    {
      name: "Chrysler 300 Stretch Limousine — Black or White",
      capacity: "Up to 8 passenger capacity",
      desc: "Book a Chrysler 300 stretch limousine in Nashville for weddings, proms, anniversaries, romantic evenings, formal events, and intimate celebrations. Available in black or white, this chauffeured limousine features a solid privacy partition, a fully equipped wet bar with glassware, Bluetooth surround sound, a stunning fiber-optic ceiling, and dual-zone climate control. It is the perfect choice for modern luxury, private comfort, and an elegant arrival.",
      image: fleetChrysler,
    },
  ],
};

// "Stretch Limousine Service for Nashville Special Occasions" — best uses.
export const stretchLimoUses = {
  eyebrow: "Special Occasions",
  heading: "Stretch Limousine Service for Nashville Special Occasions",
  items: [
    {
      icon: "heart",
      title: "Weddings and Formal Events",
      desc: "Coordinate ceremony, reception, hotel, photo, and send-off transportation with a private stretch limousine and a professionally planned itinerary.",
    },
    {
      icon: "star",
      title: "Proms, Birthdays, and Celebrations",
      desc: "Keep your group together for prom, birthdays, anniversaries, bachelor or bachelorette celebrations, and memorable nights out, with pickup and return details arranged in advance.",
    },
    {
      icon: "diamond",
      title: "Concerts, Corporate Events, and VIP Transportation",
      desc: "Reserve a stretch limousine for concerts, client entertainment, corporate dinners, red-carpet arrivals, and other occasions where presentation and group travel matter.",
    },
  ],
};

// "What's Included with Your Nashville Stretch Limousine Rental"
export const stretchLimoIncludes = {
  eyebrow: "What's Included",
  heading: "What's Included with Your Nashville Stretch Limousine Rental",
  body: "Your reservation includes a private stretch limousine, professional chauffeur, route and itinerary planning, vehicle preparation, climate-controlled comfort, and the confirmed amenities of your selected limousine. Pricing should clearly state the included rental time, pickup details, planned stops, waiting terms, and any applicable fees.",
  features: [
    "Private stretch limousine and professional chauffeur",
    "Route and itinerary planning",
    "Vehicle preparation and cleaning",
    "Climate-controlled passenger comfort",
    "Confirmed amenities of your selected limousine",
    "Clear rental time, stops, and waiting terms",
  ],
};

// Service areas
export const stretchLimoServiceAreas = {
  heading: "Stretch Limousine Service Areas in Nashville and Middle Tennessee",
  intro:
    "Swift Chauffeurs provides professionally chauffeured stretch limousine service throughout Nashville and surrounding communities for weddings, proms, concerts, parties, corporate events, and private celebrations.",
};

// FAQ
export const stretchLimoFaqs = [
  {
    q: "How many passengers fit in a stretch limousine?",
    a: "Capacity depends on the specific limousine. Our Cadillac Escalade super stretch and Classic Lincoln Town Car stretch each seat different group sizes, so we publish the confirmed legal and comfortable passenger limit on each vehicle and match the limousine to your group size before booking.",
  },
  {
    q: "How much does a Nashville stretch limousine rental cost?",
    a: "Pricing may depend on the vehicle, date, rental duration, pickup location, distance, stops, and event demand. Share your complete itinerary — date, hours, pickup, and stops — so we can provide accurate pricing rather than a general estimate.",
  },
  {
    q: "How far in advance should I reserve a stretch limousine?",
    a: "Earlier booking provides more vehicle choice, especially for weddings, proms, major concerts, holidays, and busy weekends. Availability may be limited close to the date, so reserve as soon as your event date is set.",
  },
  {
    q: "What amenities are included in the limousine?",
    a: "Amenities vary by vehicle. We publish only the verified seating, lighting, sound, connectivity, climate-control, privacy, and entertainment features of the selected limousine, and confirm them before your reservation is finalized.",
  },
  {
    q: "Can the limousine make multiple stops?",
    a: "Yes — multiple stops may be arranged when provided in advance. Include all planned locations when you request a quote so the schedule and pricing reflect the full itinerary.",
  },
];

export const stretchLimoCrossSell = [
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

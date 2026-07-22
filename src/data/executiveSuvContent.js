import heroImg from "../assets/images/Main-pic.webp";
import featuresImg from "../assets/images/Main-pic.webp";
import includesImg from "../assets/images/party-escalade-interior.jpeg";
import fleetEscalade from "../assets/images/car-rangerover.webp";
import fleetSuburban from "../assets/images/fleet-van.webp";
import airportImg from "../assets/images/svc-airport.webp";
import birthdayImg from "../assets/images/svc-birthday.webp";
import blackCarImg from "../assets/images/svc-blackcar.jpg";
import concertImg from "../assets/images/svc-concert.webp";
import executiveImg from "../assets/images/svc-executive.webp";
import promImg from "../assets/images/prom-dining.webp";
import weddingImg from "../assets/images/svc-wedding.webp";

export const executiveSuvImages = {
  heroImg,
  featuresImg,
  includesImg,
};

// Hero copy — targets "luxury SUV transportation Nashville".
export const executiveSuvHero = {
  eyebrow: "Luxury SUV Service in Nashville, TN",
  h1: "Luxury SUV Transportation in Nashville, TN",
  tagline: "Travel in Comfort. Arrive in Style.",
  subtext:
    "Travel in comfort and arrive in style with private, professionally chauffeured SUV service for Nashville airport transfers, executive travel, special events, families, and small groups.",
};

// "Why Choose Swift Chauffeurs for Luxury SUV Service in Nashville?"
export const executiveSuvIntro =
  "Swift Chauffeurs provides private luxury SUV transportation for travelers who need extra space, professional service, and dependable coordination. From airport arrivals and corporate schedules to events and family travel, every reservation is planned around your pickup details, passenger count, luggage, and destination.";

export const executiveSuvFeatures = [
  "Spacious luxury SUVs with premium interiors",
  "Professional, licensed, and experienced chauffeurs",
  "Up to 6 passengers, subject to luggage requirements",
  "Flight monitoring for airport reservations",
  "Route planning and real-time traffic awareness",
  "Vehicles cleaned, inspected, and prepared for each trip",
  "Clear pricing based on your itinerary and selected service",
];

// Fleet — two verified SUV configurations.
// NOTE: Confirm capacity and availability before launch.
export const executiveSuvFleet = {
  eyebrow: "The Perfect Luxury SUV for Every Occasion",
  headingLead: "Our Nashville Luxury",
  headingAccent: "SUV Fleet",
  availabilityNote:
    "Vehicle models and colors are subject to availability. Confirm a specific model when requesting your quote.",
  cards: [
    {
      name: "Cadillac Escalade SUV",
      capacity: "Up to 6 passengers · luggage depends on passenger count & bag size",
      desc: "Choose a Cadillac Escalade or similar premium SUV for executive travel, airport transportation, VIP arrivals, weddings, concerts, and private occasions. The Escalade combines a refined interior, comfortable seating, and generous space for travelers who want a polished chauffeured experience.",
      image: fleetEscalade,
    },
    {
      name: "Chevrolet Suburban SUV",
      capacity: "Up to 6 passengers · luggage depends on passenger count & bag size",
      desc: "The Chevrolet Suburban or similar full-size SUV is a practical luxury option for airport transfers, families, corporate guests, and small groups traveling with luggage. Its spacious cabin and smooth ride make it well suited to point-to-point and hourly transportation throughout Nashville.",
      image: fleetSuburban,
    },
  ],
};

// Six SUV-specific service cards (replaces the generic services carousel).
export const executiveSuvServices = {
  eyebrow: "What We Offer",
  heading: "Luxury SUV Transportation Services in Nashville",
  items: [
    {
      icon: "car",
      title: "Nashville Airport SUV Service",
      desc: "Private SUV pickups and drop-offs at BNA and other Nashville-area aviation facilities, with flight-aware coordination and luggage assistance.",
    },
    {
      icon: "diamond",
      title: "Executive & Corporate SUV Transportation",
      desc: "Professional point-to-point or hourly SUV service for meetings, hotels, offices, conferences, roadshows, and corporate guests.",
    },
    {
      icon: "clock",
      title: "Hourly SUV Chauffeur Service",
      desc: "Keep a private SUV and chauffeur available for multi-stop schedules, dining, shopping, events, and flexible itineraries.",
    },
    {
      icon: "star",
      title: "Private Event Transportation",
      desc: "Travel to weddings, concerts, sporting events, dinners, and special occasions without managing parking or coordinating multiple vehicles.",
    },
    {
      icon: "users",
      title: "Family & Small-Group Transportation",
      desc: "A comfortable option for families and groups that need more room for passengers and luggage than a sedan provides.",
    },
    {
      icon: "people",
      title: "Hotel & Guest Transportation",
      desc: "Arrange dependable SUV transportation for clients, speakers, family members, and visiting guests throughout Nashville.",
    },
  ],
};

// Dedicated airport SUV section.
export const executiveSuvAirport = {
  eyebrow: "Airport Transportation",
  heading: "Nashville Airport SUV Service to and from BNA",
  body: "Reserve a private luxury SUV for arrivals and departures at Nashville International Airport (BNA), John C. Tune Airport, Atlantic Aviation, and Signature Aviation. For airport reservations, Swift Chauffeurs can monitor flight status, coordinate curbside pickup or a prearranged meet-and-greet, assist with luggage, and take you directly to your hotel, home, meeting, or event.",
  benefits: [
    "Flight monitoring",
    "Airport pickup and drop-off",
    "Curbside or prearranged meet-and-greet options",
    "Luggage assistance",
    "Direct hotel, residence, meeting, and event transportation",
    "SUVs for up to 6 passengers, depending on luggage",
  ],
  linkLabel: "View Nashville Airport Service",
  linkPath: "/car-service-nashville-airport",
};

// Executive + private travel two-up.
export const executiveSuvUseCases = [
  {
    eyebrow: "Business Travel",
    heading: "Executive SUV Transportation for Business Travel",
    body: "Keep business travel organized with private SUV transportation for meetings, hotels, corporate offices, conferences, roadshows, and visiting executives. Choose point-to-point service for a single transfer or hourly chauffeur service when your schedule includes multiple stops and changing pickup times.",
  },
  {
    eyebrow: "Events & Groups",
    heading: "Private SUV Service for Events, Families, and Small Groups",
    body: "A luxury SUV is a strong choice when a sedan does not provide enough passenger or luggage space but a van is larger than your group needs. Reserve private SUV transportation for weddings, concerts, dinners, sporting events, family travel, guest transportation, and nights out across Nashville.",
  },
];

// "What's Included with Your Nashville Luxury SUV Service"
export const executiveSuvIncludes = {
  eyebrow: "What's Included",
  heading: "What's Included with Your Nashville Luxury SUV Service",
  body: "Your reservation includes a private luxury SUV, a professional chauffeur, pickup and route planning, and direct transportation based on your itinerary. Airport reservations may also include flight monitoring, luggage assistance, and curbside or prearranged meet-and-greet coordination. You will receive a clear quote based on the selected vehicle, service type, schedule, route, passenger count, and trip requirements.",
  features: [
    "Private chauffeured SUV",
    "Pickup and route coordination",
    "Professional vehicle preparation",
    "Luggage assistance when needed",
    "Flight monitoring for airport reservations",
    "Point-to-point or hourly service options",
    "Clear pre-trip quote",
  ],
};

// Four-step booking process.
export const executiveSuvSteps = {
  eyebrow: "Simple Booking",
  heading: "How to Reserve a Luxury SUV in Nashville",
  steps: [
    {
      title: "Share Your Trip Details",
      desc: "Enter the date, pickup time, passenger count, luggage, pickup location, destination, and service type.",
    },
    {
      title: "Confirm the Right SUV",
      desc: "Select an Escalade, Suburban, or SUV class based on availability and your trip requirements.",
    },
    {
      title: "Review Your Quote",
      desc: "Receive clear pricing and confirm the reservation details.",
    },
    {
      title: "Meet Your Chauffeur",
      desc: "Your chauffeur arrives at the scheduled pickup location and handles the route, parking, and driving.",
    },
  ],
};

// Service areas
export const executiveSuvServiceAreas = {
  heading: "Luxury SUV Service Areas Across Nashville and Middle Tennessee",
  intro:
    "Swift Chauffeurs provides private luxury SUV transportation in Downtown Nashville, Nashville International Airport, Brentwood, Franklin, Murfreesboro, Clarksville, Spring Hill, Hendersonville, Mount Juliet, Gallatin, and surrounding Middle Tennessee communities. Availability and pricing depend on the pickup location, destination, schedule, and vehicle requirements.",
};

// FAQ (8 questions)
export const executiveSuvFaqs = [
  {
    q: "How many passengers can a luxury SUV accommodate?",
    a: "The SUV class can accommodate up to 6 passengers. The most suitable capacity depends on the amount and size of your luggage, so provide the exact passenger and bag count when requesting a quote.",
  },
  {
    q: "How much luggage fits in an Escalade or Suburban?",
    a: "Luggage capacity varies by vehicle, passenger count, and bag size. A group using all passenger seats may have less luggage room. Share the number of checked bags, carry-ons, golf clubs, or oversized items so the reservation team can recommend the correct vehicle.",
  },
  {
    q: "Can I reserve a luxury SUV for Nashville Airport transportation?",
    a: "Yes. Luxury SUVs are available for airport pickups and drop-offs at BNA and other Nashville-area aviation facilities, subject to availability. Flight details help the team coordinate timing and pickup instructions.",
  },
  {
    q: "Do you monitor flight delays?",
    a: "Flight monitoring may be included with airport reservations when the correct airline and flight number are provided. Confirm the pickup procedure and included waiting terms when booking.",
  },
  {
    q: "Can I request a Cadillac Escalade or Chevrolet Suburban?",
    a: "You can request a preferred model. Exact vehicle, color, and model availability should be confirmed before the reservation is finalized.",
  },
  {
    q: "How far in advance should I reserve an SUV?",
    a: "Same-day SUV service may be available, and some airport reservations can be arranged only a few hours before arrival or departure. For the best vehicle selection, reserve at least 2 to 3 days ahead, especially for weekends, concerts, conventions, holidays, and major events.",
  },
  {
    q: "Can I book point-to-point or hourly SUV service?",
    a: "Yes. Point-to-point service is suitable for a direct transfer, while hourly service is useful for multi-stop itineraries, meetings, events, dinners, and flexible schedules.",
  },
  {
    q: "Do you provide SUV transportation outside Nashville?",
    a: "Service is available in Nashville and surrounding Middle Tennessee communities, subject to vehicle availability and trip details. Provide the complete pickup and destination addresses for an accurate quote.",
  },
];

export const executiveSuvCrossSell = [
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

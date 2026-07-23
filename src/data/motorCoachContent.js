import heroImg from "../assets/images/herocoach.webp";
import featuresImg from "../assets/images/coachwhite.webp";
import comparisonImg from "../assets/images/LuxuryMotorCoachRental.webp";
import coach25 from "../assets/images/fleet-coach.webp";
import coach31 from "../assets/images/fleet-partybus.webp";
import coach40 from "../assets/images/fleet-coach.webp";
import coach42 from "../assets/images/fleet-partybus.webp";
import coach56 from "../assets/images/fleet-coach.webp";
import airportImg from "../assets/images/svc-airport.webp";
import birthdayImg from "../assets/images/svc-birthday.webp";
import blackCarImg from "../assets/images/svc-blackcar.jpg";
import concertImg from "../assets/images/svc-concert.webp";
import executiveImg from "../assets/images/svc-executive.webp";
import promImg from "../assets/images/prom-dining.webp";
import weddingImg from "../assets/images/svc-wedding.webp";

export const motorCoachImages = {
  heroImg,
  featuresImg,
  comparisonImg,
};

// Hero copy — targets the primary "motor coach rental Nashville" search intent.
export const motorCoachHero = {
  eyebrow: "Motor Coach & Mini Coach Rental Nashville, TN | Swift Chauffeurs",
  h1: "Motor Coach Rental in Nashville, TN",
  tagline: "Travel Together. Arrive Comfortably.",
  subtext:
    "Move large groups comfortably with professionally operated motor coaches and mini coaches for Nashville corporate events, conventions, weddings, tours, schools, churches, sports teams, airport groups, and long-distance travel.",
};

// "Why Choose Swift Chauffeurs for Nashville Group Transportation?"
export const motorCoachIntro =
  "Successful group transportation depends on the right vehicle, accurate passenger and luggage counts, realistic timing, pickup access, and a coordinated itinerary. Swift Chauffeurs helps planners organize local and long-distance coach transportation around the group's schedule and destination requirements.";

export const motorCoachFeatures = [
  "Motor coach and mini coach options",
  "Professional commercial drivers",
  "Route and schedule coordination",
  "Group luggage planning",
  "Local and long-distance service",
  "Clear quote requirements",
  "Support for single or multi-vehicle movements",
];

// Fleet cards — capacity-based headings help planners compare options.
// NOTE: Confirm each vehicle, current capacity, and classification before launch.
export const motorCoachFleet = {
  eyebrow: "Our Fleet",
  headingLead: "Choose the Right",
  headingAccent: "Motor Coach for Your Group",
  intro:
    "Compare mini coaches and full-size motor coaches by capacity, luggage space, and onboard features. Final suitability depends on the specific vehicle assigned and your itinerary.",
  cards: [
    {
      name: "25-Passenger Mini Coach",
      capacity: "Seats up to 25",
      desc: "A compact mini coach for smaller groups, hotel shuttles, wedding guests, and local events. Confirm luggage storage, seating, climate control, accessibility, and connectivity for the assigned vehicle.",
      image: coach25,
    },
    {
      name: "31-Passenger Mini Coach",
      capacity: "Seats up to 31",
      desc: "A mid-size mini coach for growing groups and local or regional trips with moderate luggage. Confirm luggage storage, seating, climate control, accessibility, and connectivity for the assigned vehicle.",
      image: coach31,
    },
    {
      name: "40-Passenger Coach",
      capacity: "Seats up to 40",
      desc: "A larger coach for sizable groups and longer routes. Confirm luggage storage, seating, restroom availability, climate control, accessibility, and connectivity for the assigned vehicle.",
      image: coach40,
    },
    {
      name: "42-Passenger Coach",
      capacity: "Seats up to 42",
      desc: "A full-size coach for larger groups and long-distance travel with substantial luggage. Confirm luggage storage, seating, restroom availability, climate control, accessibility, and connectivity for the assigned vehicle.",
      image: coach42,
    },
    {
      name: "56-Passenger Coach",
      capacity: "Seats up to 56",
      desc: "Our largest motor coach for major groups, conventions, and long-distance itineraries. Confirm luggage storage, seating, restroom availability, climate control, accessibility, and connectivity for the assigned vehicle.",
      image: coach56,
    },
  ],
};

// "Mini Coach vs. Motor Coach" comparison block.
export const motorCoachComparison = {
  eyebrow: "How to Choose",
  heading: "Mini Coach vs. Motor Coach: Which Is Right for Your Group?",
  intro:
    "A mini coach may suit smaller groups, hotel shuttles, wedding guests, local events, and tighter pickup locations. A full-size motor coach may be better for larger groups, long-distance travel, substantial luggage, or trips requiring additional onboard features. Final suitability depends on the specific vehicle and itinerary.",
  mini: {
    title: "Mini Coach",
    points: [
      "Smaller groups and hotel shuttles",
      "Wedding guest transfers and local events",
      "Tighter pickup locations and city venues",
      "Shorter local or regional trips",
    ],
  },
  motor: {
    title: "Full-Size Motor Coach",
    points: [
      "Larger groups and combined parties",
      "Long-distance and multi-day travel",
      "Substantial luggage or equipment",
      "Trips needing additional onboard features",
    ],
  },
};

// "Motor Coach Transportation for Nashville Groups and Events" — best uses.
export const motorCoachUses = {
  eyebrow: "Group Transportation",
  heading: "Motor Coach Transportation for Nashville Groups and Events",
  items: [
    {
      icon: "users",
      title: "Corporate Events, Conventions & Employee Transportation",
      desc: "Coordinate airport arrivals, hotels, convention centers, meeting venues, dinners, site visits, and employee movements with a single vehicle or a planned multi-vehicle schedule.",
    },
    {
      icon: "heart",
      title: "Weddings, Schools, Churches & Community Groups",
      desc: "Arrange guest shuttles, school trips, church outings, retreats, community events, and private group travel with pickup locations, timing, supervision needs, and destination access planned in advance.",
    },
    {
      icon: "trophy",
      title: "Sports Teams, Tours & Long-Distance Travel",
      desc: "Plan transportation for teams, equipment, fans, tour groups, multi-day itineraries, and regional travel with the passenger count, luggage or equipment, stops, and driver-hour requirements considered during quoting.",
    },
  ],
};

// "What's Included with Your Motor Coach Rental"
export const motorCoachIncludes = {
  eyebrow: "What's Included",
  heading: "What's Included with Your Motor Coach Rental",
  body: "Your quote should identify the selected coach, passenger capacity, scheduled service time, pickup and destination details, included mileage or route assumptions, planned stops, luggage requirements, driver scheduling, waiting terms, and any applicable parking, toll, permit, or overnight costs. Vehicle amenities must be listed by the specific coach assigned.",
  features: [
    "Selected coach and confirmed passenger capacity",
    "Scheduled service time and route assumptions",
    "Pickup, destination, and planned stops",
    "Group luggage and equipment planning",
    "Driver scheduling and waiting terms",
    "Applicable parking, toll, permit, or overnight costs",
  ],
};

// Service areas
export const motorCoachServiceAreas = {
  heading: "Motor Coach Service Areas in Nashville, Tennessee, and Beyond",
  intro:
    "Swift Chauffeurs coordinates motor coach and mini coach transportation from Nashville and surrounding communities for local movements, airport groups, statewide trips, and approved long-distance itineraries.",
  areas: [
    { name: "Nashville" },
    { name: "Brentwood" },
    { name: "Franklin" },
    { name: "Murfreesboro" },
    { name: "Clarksville" },
    { name: "Spring Hill" },
    { name: "Mt. Juliet" },
    { name: "Hendersonville" },
    { name: "Lebanon" },
    { name: "Gallatin" },
  ],
};

// FAQ
export const motorCoachFaqs = [
  {
    q: "How many passengers can your motor coaches accommodate?",
    a: "Our fleet includes mini coaches and full-size motor coaches, with capacities that range from smaller mini coaches up to a 56-passenger coach. The right vehicle depends on your passenger count, luggage, trip distance, pickup access, and required amenities. Tell our team your group size and we'll recommend the best fit and confirm the exact capacity before you book.",
  },
  {
    q: "How much does a Nashville motor coach rental cost?",
    a: "Pricing may depend on vehicle size, trip date, service duration, mileage, stops, parking, tolls, driver scheduling, overnight requirements, and demand. A complete itinerary is needed for accurate pricing, so a quote built around your specific trip will always be more accurate than a general figure found online.",
  },
  {
    q: "What information is needed for a motor coach quote?",
    a: "Provide the date, passenger count, pickup locations, destination, schedule, stops, luggage or equipment, accessibility needs, and whether the trip is local, one-way, round-trip, or multi-day. The more detail you share, the more accurate your quote and vehicle recommendation will be.",
  },
  {
    q: "Do your coaches have restrooms, Wi-Fi, or power outlets?",
    a: "Amenities vary by vehicle. Some coaches offer restrooms, Wi-Fi, power outlets, and entertainment features, while others do not. We publish the verified features of each coach and confirm the assigned vehicle's amenities before your reservation is finalized.",
  },
  {
    q: "Can you provide multiple coaches for a large group?",
    a: "Yes — multi-vehicle transportation may be coordinated when availability allows. Provide the group movement plan, timing, and loading locations so the operation can be planned accurately for a single vehicle or a planned multi-vehicle schedule.",
  },
  {
    q: "Do you provide long-distance or overnight motor coach travel?",
    a: "Long-distance and overnight trips are available subject to itinerary review, driver-hour planning, and an accurate quote. Share your full route and schedule so we can confirm operating policies and provide pricing for your specific trip.",
  },
];

export const motorCoachCrossSell = [
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

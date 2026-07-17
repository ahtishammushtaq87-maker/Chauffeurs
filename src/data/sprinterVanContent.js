import heroImg from "../assets/images/Mercedes-Sprinter-Party-Limo7.webp";
import featuresImg from "../assets/images/Mercedes-Sprinter-Party-Limo7.webp";
import fleetImg from "../assets/images/car-mercedes.webp";
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
};

export const sprinterVanFeatures = [
  "Premium Mercedes-Benz Sprinter Vans with luxury interiors",
  "Professional, licensed, and experienced chauffeurs",
  "Spacious seating for groups, families, and corporate teams",
  "Cleaned, sanitized, and inspected before every reservation",
  "Ample luggage space for airport and long-distance travel",
  "Advanced climate control and passenger comfort features",
];

export const sprinterVanFleet = [
  {
    title: "Mercedes Executive Sprinter",
    desc: "The Executive Sprinter features black leather seating, premium suspension, reclining seats, and a full entertainment system, with more than enough luggage space for the road. It's equipped with an expandable table, making it perfect for long trips where you might want to have lunch or play a game of cards with friends. The luxurious vehicle is paired with a world-class professional chauffeur who knows how to respect everyone's privacy.",
    image: fleetImg,
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

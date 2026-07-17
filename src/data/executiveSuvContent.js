import heroImg from "../assets/images/Main-pic.webp";
import featuresImg from "../assets/images/Main-pic.webp";
import fleetPrimary from "../assets/images/car-rangerover.webp";
import fleetSecondary from "../assets/images/fleet-van.webp";
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
};

export const executiveSuvFeatures = [
  "Spacious luxury SUVs with premium leather interiors",
  "Professional, licensed, and experienced chauffeurs",
  "Ideal for airport transfers, executive travel, and private events",
  "Comfortable seating for individuals, families, and small groups",
  "Real-time traffic monitoring for efficient routes",
  "Cleaned, inspected, and maintained before every trip",
];

export const executiveSuvFleet = [
  {
    name: "Premium Cadillac Escalade SUV",
    desc: "While tailored for VIPs, our Cadillac Escalade SUV is versatile enough to cater to a range of events. Whether it's a glamorous wedding, a stylish prom night, or a corporate transfer demanding the utmost in sophistication, this SUV stands ready to make any occasion memorable.",
    image: fleetPrimary,
  },
  {
    name: "Luxurious Suburban SUV",
    desc: "For proms, the Suburban SUV becomes a symbol of glamour, offering a sleek and stylish entrance that complements the excitement of the night. Corporate transfers are elevated to a new level, as the Suburban combines professionalism with comfort, ensuring a smooth and sophisticated journey for executives.",
    image: fleetSecondary,
  },
];

export const executiveSuvCrossSell = [
  {
    title: "Airport Transfer",
    desc: "Reliable, all-inclusive airport transportation with real-time flight monitoring.",
    image: airportImg,
    path: "/services/airport",
  },
  {
    title: "Birthday Chauffeur",
    desc: "Celebrate in style with a party-ready limo built for unforgettable nights.",
    image: birthdayImg,
    path: "/services/birthday",
  },
  {
    title: "Black Car Service",
    desc: "Premium comfort and professionalism with black car service, perfect for any special trip.",
    image: blackCarImg,
    path: "/services/black-car",
  },
  {
    title: "Concert Transportation",
    desc: "Skip the traffic and parking — arrive at every show in comfort and style.",
    image: concertImg,
    path: "/services/concert",
  },
  {
    title: "Executive Chauffeur",
    desc: "Polished, punctual chauffeur service for business travel and VIP clients.",
    image: executiveImg,
    path: "/services/executive",
  },
  {
    title: "Prom Limo Rental",
    desc: "Arrive at prom with elegance using our limousine service, creating unforgettable memories forever.",
    image: promImg,
    path: "/services/prom",
  },
  {
    title: "Wedding Chauffeur",
    desc: "Experience luxury with our Mercedes chauffeur service, tailored to meet every demand perfectly.",
    image: weddingImg,
    path: "/services/wedding",
  },
];

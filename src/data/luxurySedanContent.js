import heroImg from "../assets/images/mercedes-benz-s-class_100427375_h-1-1536x933.jpg.webp";
import featuresImg from "../assets/images/mercedes-benz-s-class_100427375_h-1-1536x933.jpg.webp";
import fleetPrimary from "../assets/images/car-mercedes.webp";
import fleetSecondary from "../assets/images/car-porsche.webp";
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
};

export const luxurySedanFeatures = [
  "Premium black Mercedes-Benz sedans with luxurious interiors",
  "Professional, experienced, and discreet chauffeurs",
  "On-time pickups with real-time flight and traffic monitoring",
  "Ideal for executive travel, airport transfers, VIP transportation, and special events",
  "Spotlessly cleaned, inspected, and maintained before every journey",
  "Comfortable seating, climate control, and a quiet ride environment",
];

export const luxurySedanFleet = [
  {
    name: "Mercedes Chauffeur Service",
    desc: "Feel true comfort and style with our affordable Mercedes chauffeur service. From business travels to special events, we ensure that every ride is easy, dependable, and exceptional.",
    image: fleetPrimary,
  },
  {
    name: "Mercedes S-Class S560",
    desc: "Looking for a dependable chauffeur service? Our exceptional Mercedes Benz S560 chauffeur service is designed to satisfy the highest requirements for elegance, comfort, and professionalism.",
    image: fleetSecondary,
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

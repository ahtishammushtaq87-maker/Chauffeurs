import heroImg from "../assets/images/home-scaled-3_11zon.webp";
import featuresImg from "../assets/images/Caddilac-Esclade-Stretch-Limo-1.jpg.webp";
import fleetEscalade from "../assets/images/car-rangerover.webp";
import fleetLincoln from "../assets/images/fleet-sedan.webp";
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
};

export const stretchLimoFeatures = [
  "Premium stretch limousines with luxurious interiors",
  "Professional, licensed, and experienced chauffeurs",
  "Perfect for weddings, proms, parties, corporate events, and VIP transportation",
  "Spacious seating for groups traveling together in comfort",
  "Immaculately cleaned and inspected before every reservation",
  "Punctual arrivals with dependable service you can trust",
];

export const stretchLimoFleet = [
  {
    name: "Cadillac Escalade Super Stretch Limousine",
    desc: "As you embark on your journey, relish in the cutting-edge technology that accompanies this marvel on wheels. From advanced entertainment systems to intuitive controls, our Escalade Limo is equipped with the latest in-car amenities, ensuring that your experience is as enjoyable as it is stylish.",
    image: fleetEscalade,
  },
  {
    name: "Classic Lincoln Towncar Stretched Limousine",
    desc: "As you embark on your journey, relish in the cutting-edge technology that accompanies this marvel on wheels. From advanced entertainment systems to intuitive controls, our Classic Lincoln is equipped with the latest in-car amenities, ensuring that your experience is as enjoyable as it is stylish.",
    image: fleetLincoln,
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

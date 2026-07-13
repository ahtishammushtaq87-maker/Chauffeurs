import heroImg from "../assets/images/concert-limo-road.jpg";
import featuresImg from "../assets/images/car-bmw.jpg";
import fleetEscalade from "../assets/images/car-rangerover.jpg";
import fleetLincoln from "../assets/images/fleet-sedan.jpg";
import airportImg from "../assets/images/svc-airport.jpg";
import birthdayImg from "../assets/images/svc-birthday.jpg";
import blackCarImg from "../assets/images/svc-blackcar.jpg";
import concertImg from "../assets/images/svc-concert.jpg";
import executiveImg from "../assets/images/svc-executive.jpg";
import promImg from "../assets/images/prom-dining.jpg";
import weddingImg from "../assets/images/svc-wedding.jpg";

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

import heroImg from "../assets/images/fleet-partybus.jpg";
import featuresImg from "../assets/images/prom-party.jpg";
import fleetSprinter from "../assets/images/car-mercedes.jpg";
import fleet20 from "../assets/images/fleet-partybus.jpg";
import fleet30 from "../assets/images/fleet-coach.jpg";
import airportImg from "../assets/images/svc-airport.jpg";
import birthdayImg from "../assets/images/svc-birthday.jpg";
import blackCarImg from "../assets/images/svc-blackcar.jpg";
import concertImg from "../assets/images/svc-concert.jpg";
import executiveImg from "../assets/images/svc-executive.jpg";
import promImg from "../assets/images/prom-dining.jpg";
import weddingImg from "../assets/images/svc-wedding.jpg";

export const partyBusImages = {
  heroImg,
  featuresImg,
};

export const partyBusFeatures = [
  "Professional, licensed, and experienced chauffeurs",
  "Advanced sound systems and entertainment features",
  "Comfortable climate-controlled interiors",
  "Safe, reliable transportation for groups of all sizes",
  "Thoroughly cleaned, inspected, and prepared before every trip",
  "Flexible rental packages tailored to your schedule",
];

export const partyBusFleet = [
  {
    title: "Mercedes Sprinter Party Limo",
    desc: "With its spacious layout and entertainment features, this limo is the ideal choice for a night out with friends, a bachelorette party, or any occasion that calls for revelry.",
    image: fleetSprinter,
  },
  {
    title: "Luxury 20 Passenger Party Bus",
    desc: "We take great satisfaction in offering unmatched transportation services to fulfill all of your requirements, whether you're having a corporate event or commemorating a special occasion.",
    image: fleet20,
  },
  {
    title: "Luxury 30 Passenger Party Bus",
    desc: "Are you organizing a special event that calls for the ideal mix of luxury, fun, and convenience? Our 30 passenger party bus rental service offers an enjoyable experience for any occasion.",
    image: fleet30,
  },
];

export const partyBusCrossSell = [
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

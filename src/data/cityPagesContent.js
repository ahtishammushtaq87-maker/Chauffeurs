// SEO-focused content for the seven Service Area landing pages surfaced in the
// header's "Service Area" dropdown. Keyed by route path (see data/content.js).
// Each entry drives CityPage.jsx: a hero, two image+text rows, a highlights
// grid, and shared sections (services, reviews, the Locations carousel, CTA).
//
// Copy is written per city with local landmarks and the same target keyword
// phrases the previous swiftchauffeurs.com pages ranked for (e.g. "Limo Service
// in Franklin TN", "Murfreesboro Limousine Service").
import cityNashville from "../assets/images/city-nashville.jpg";
import cityChattanooga from "../assets/images/city-chattanooga.jpg";
import cityMurfreesboro from "../assets/images/city-murfreesboro.jpg";
import cityKnoxville from "../assets/images/city-knoxville.jpg";
import cityClarksville from "../assets/images/city-clarksville.jpg";
import cityMemphis from "../assets/images/city-memphis.jpg";
import areaTown from "../assets/images/area-town.webp";
import svcAirport from "../assets/images/svc-airport.webp";
import svcWedding from "../assets/images/svc-wedding.webp";
import svcExecutive from "../assets/images/svc-executive.webp";
import svcBirthday from "../assets/images/svc-birthday.webp";
import svcProm from "../assets/images/svc-prom.webp";
import svcBlackcar from "../assets/images/svc-blackcar.jpg";
import carMercedes from "../assets/images/car-mercedes.webp";
import carRangeRover from "../assets/images/car-rangerover.webp";
import fleetPartybus from "../assets/images/fleet-partybus.webp";

// Reused four-point value grid. Individual cities can override `highlights`.
const defaultHighlights = [
  {
    title: "Local Route Expertise",
    desc: "Chauffeurs who know the fastest, smoothest routes — avoiding traffic and getting you there on time, every time.",
  },
  {
    title: "Punctual & Reliable",
    desc: "Real-time flight tracking and proactive scheduling mean we're always early, never late for your pickup.",
  },
  {
    title: "Luxury, Spotless Fleet",
    desc: "Late-model sedans, SUVs, sprinter vans, and limousines — meticulously cleaned and maintained for every ride.",
  },
  {
    title: "Professional Chauffeurs",
    desc: "Licensed, background-checked, and discreet professionals dedicated to a safe, five-star experience.",
  },
];

export const cityPages = {
  "/nashville": {
    label: "Nashville",
    keyword: "Chauffeur Service in Nashville, TN",
    heroImage: cityNashville,
    seoTitle: "Chauffeur & Limo Service in Nashville, TN | Swift Chauffeurs",
    seoDescription:
      "Premium chauffeur and limousine service in Nashville, TN. Airport transfers to BNA, weddings, corporate travel, concerts on Broadway, and nights out in Music City.",
    intro: {
      eyebrow: "Service Area",
      heading: "Luxury Chauffeur Service in Nashville, Tennessee",
      image: cityNashville,
      text: `Swift Chauffeurs is Nashville's trusted name in premium ground transportation. From the honky-tonks of Broadway and the studios of Music Row to the boardrooms of Downtown and The Gulch, our professional chauffeurs deliver reliable, comfortable, and stylish rides across Music City.

Whether you're a visitor exploring Nashville's legendary music scene or a local heading to an important meeting, our meticulously maintained fleet and punctual service make every journey effortless. Book a luxury sedan, executive SUV, sprinter van, or limousine and let us handle the driving, the traffic, and the parking.`,
    },
    section: {
      eyebrow: "Airport & Events",
      heading: "BNA Airport Transfers, Weddings & Corporate Travel",
      image: svcExecutive,
      text: `Nashville International Airport (BNA) transfers are one of our most requested services. We monitor your flight in real time, greet you curbside or at baggage claim, and get you to your hotel or meeting without the stress of rideshare surge pricing or long waits.

Beyond the airport, Swift Chauffeurs is the go-to choice for Nashville weddings, corporate roadshows, bachelorette parties, concerts, and sporting events. Arrive at the Grand Ole Opry, Nissan Stadium, Bridgestone Arena, or Music City Center in comfort and on schedule — every single time.`,
    },
  },

  "/service-area/chattanooga": {
    label: "Chattanooga",
    keyword: "Chauffeur & Limo Service in Chattanooga, TN",
    heroImage: cityChattanooga,
    seoTitle: "Limo & Party Bus Service in Chattanooga, TN | Swift Chauffeurs",
    seoDescription:
      "Luxury chauffeur, limo, and party bus service in Chattanooga, TN. Airport transfers to CHA, weddings, proms, and tours of the Scenic City with professional drivers.",
    intro: {
      eyebrow: "Service Area",
      heading: "Premium Chauffeur & Party Bus Service in Chattanooga",
      image: cityChattanooga,
      text: `Explore the Scenic City in comfort and style with Swift Chauffeurs. From Lookout Mountain and Ruby Falls to the Tennessee Aquarium and the vibrant Southside district, our professional chauffeurs make getting around Chattanooga effortless and enjoyable.

Our Chattanooga fleet ranges from luxury sedans and executive SUVs to spacious party buses and elegant limousines — perfect for business travel, special occasions, or a memorable night out. Every ride is smooth, timely, and tailored to your plans.`,
    },
    section: {
      eyebrow: "Celebrations",
      heading: "CHA Airport Rides, Proms, Weddings & Party Buses",
      image: svcBirthday,
      text: `Whether you're flying in or out of Chattanooga Metropolitan Airport (CHA) or planning a celebration, we've got you covered. Our chauffeurs provide punctual airport pickups with flight tracking, plus luggage assistance and a stress-free start to your trip.

Chattanooga's best party bus and limo experiences start here — ideal for proms, birthdays, wedding parties, and group tours of the Scenic City. Sit back, enjoy the ride, and let our professional team handle the logistics while you make memories.`,
    },
  },

  "/brentwood": {
    label: "Brentwood",
    keyword: "Car Service in Brentwood, TN",
    heroImage: cityKnoxville,
    seoTitle: "Luxury Car & Chauffeur Service in Brentwood, TN | Swift Chauffeurs",
    seoDescription:
      "Discreet, professional car and chauffeur service in Brentwood, TN. Executive airport transfers, corporate travel, and luxury transportation around Maryland Farms and Cool Springs.",
    intro: {
      eyebrow: "Service Area",
      heading: "Executive Car Service in Brentwood, Tennessee",
      image: cityKnoxville,
      text: `Brentwood's professionals and families trust Swift Chauffeurs for discreet, dependable luxury transportation. From the Maryland Farms business district to Cool Springs and the quiet residential streets in between, we deliver a refined chauffeur experience designed around you.

Our polished fleet and courteous, background-checked chauffeurs are ideal for executives, corporate guests, and anyone who values privacy, punctuality, and comfort. Whether it's a daily commute or a special evening out, we make every mile seamless.`,
    },
    section: {
      eyebrow: "Corporate & Airport",
      heading: "BNA Transfers & Corporate Transportation in Brentwood",
      image: carMercedes,
      text: `Brentwood sits minutes from Nashville International Airport (BNA), and our executive airport transfers make catching a flight or welcoming clients effortless. We track arrivals, plan for traffic, and provide a quiet, comfortable cabin so you can work or unwind en route.

For businesses around Maryland Farms and CoolSprings Galleria, Swift Chauffeurs offers reliable corporate accounts, roadshow coordination, and VIP client transportation. Make the right impression with a professional chauffeur and an immaculate luxury vehicle.`,
    },
  },

  "/limo-service-in-franklin-tn": {
    label: "Franklin",
    keyword: "Limo Service in Franklin, TN",
    heroImage: cityMemphis,
    seoTitle: "Limo Service in Franklin, TN | Weddings & Chauffeur | Swift Chauffeurs",
    seoDescription:
      "Elegant limo and chauffeur service in Franklin, TN. Wedding transportation, airport transfers, and luxury rides around historic Downtown Franklin, The Factory, and Cool Springs.",
    intro: {
      eyebrow: "Service Area",
      heading: "Luxury Limo Service in Franklin, Tennessee",
      image: cityMemphis,
      text: `Historic charm meets modern luxury with Swift Chauffeurs in Franklin, TN. From the boutiques and restaurants of Main Street to The Factory, Carnton, and Cool Springs, our chauffeurs know Franklin inside and out and deliver a first-class ride every time.

Whether you're planning a wedding, a corporate event, or a night on the town, our elegant limousines, sedans, and SUVs set the perfect tone. Enjoy Franklin's vibrant energy and scenic beauty while a professional handles the road.`,
    },
    section: {
      eyebrow: "Weddings & Events",
      heading: "Franklin Wedding Transportation & Airport Transfers",
      image: svcWedding,
      text: `Franklin is one of Tennessee's most beloved wedding destinations, and Swift Chauffeurs helps make the day flawless. We coordinate timing for the couple, wedding party, and guests, arriving on schedule in a spotless vehicle that looks stunning in every photo.

We also provide dependable transfers to and from Nashville International Airport (BNA), corporate travel for Cool Springs businesses, and luxury rides for anniversaries, proms, and special celebrations. Reliable, elegant, and always on time.`,
    },
  },

  "/murfreesboro-limousine-service": {
    label: "Murfreesboro",
    keyword: "Murfreesboro Limousine Service",
    heroImage: cityMurfreesboro,
    seoTitle: "Murfreesboro Limousine Service | Chauffeur & Airport Rides | Swift Chauffeurs",
    seoDescription:
      "Refined limousine and chauffeur service in Murfreesboro, TN. Airport transfers, weddings, MTSU events, corporate travel, and nights out with professional, punctual drivers.",
    intro: {
      eyebrow: "Service Area",
      heading: "Refined Limousine Service in Murfreesboro, Tennessee",
      image: cityMurfreesboro,
      text: `Swift Chauffeurs brings dependable, refined chauffeur service to Murfreesboro and the surrounding area. From Middle Tennessee State University (MTSU) and The Avenue to the historic town square and Stones River, our professional drivers keep you moving in comfort and style.

Our Murfreesboro fleet includes luxury sedans, executive SUVs, sprinter vans, and limousines — ready for airport runs, corporate travel, weddings, and group celebrations. Reliable scheduling and local expertise mean you always arrive relaxed and on time.`,
    },
    section: {
      eyebrow: "Airport & Groups",
      heading: "BNA Airport Transfers, Weddings & Group Travel",
      image: svcAirport,
      text: `Skip the parking headaches and rideshare surge pricing with our Murfreesboro airport transfer service. We track your flight to Nashville International Airport (BNA), arrive early, and provide a smooth, comfortable ride to or from your terminal.

Planning a wedding, prom, MTSU event, or corporate outing? Our spacious vehicles and party options keep groups together and the celebration rolling. Professional chauffeurs handle the details so you can focus on the moment.`,
    },
  },

  "/service-area/clarksville": {
    label: "Clarksville",
    keyword: "Limousine Service in Clarksville, TN",
    heroImage: cityClarksville,
    seoTitle: "Limousine Service in Clarksville, TN | Airport Shuttle | Swift Chauffeurs",
    seoDescription:
      "Luxury limousine and chauffeur service in Clarksville, TN. Corporate airport shuttle to BNA, weddings, Fort Campbell transfers, and premium rides with professional drivers.",
    intro: {
      eyebrow: "Service Area",
      heading: "Luxury Limousine Service in Clarksville, Tennessee",
      image: cityClarksville,
      text: `From historic Downtown Clarksville to Austin Peay State University and Fort Campbell, Swift Chauffeurs delivers premium chauffeur and limousine service across the region. Our professional drivers combine local knowledge with reliable, on-time service for a seamless experience.

Whether you need a scenic city tour, a wedding limousine, or dependable corporate transportation, our meticulously maintained fleet has the right vehicle. Relax in comfort while an experienced chauffeur takes care of the route.`,
    },
    section: {
      eyebrow: "Airport Shuttle",
      heading: "Clarksville Shuttle to Nashville Airport (BNA)",
      image: svcAirport,
      text: `Our Corporate Airport Shuttle and private car service connect Clarksville directly to Nashville International Airport (BNA). With flight tracking and punctual pickups, you'll never worry about missing a flight or waiting after landing — even for early departures and late arrivals.

We also serve Fort Campbell families, Austin Peay events, weddings, and business travelers with luxury sedans, SUVs, and limousines. Professional, discreet, and always dependable transportation you can count on.`,
    },
  },

  "/spring-hill": {
    label: "Spring Hill",
    keyword: "Chauffeur Service in Spring Hill, TN",
    heroImage: areaTown,
    seoTitle: "Luxury Chauffeur & Limo Service in Spring Hill, TN | Swift Chauffeurs",
    seoDescription:
      "Premium chauffeur and limo service in Spring Hill, TN. Airport transfers to BNA, corporate travel, weddings, and luxury transportation around The Crossings and Rippa Villa.",
    intro: {
      eyebrow: "Service Area",
      heading: "Premium Chauffeur Service in Spring Hill, Tennessee",
      image: areaTown,
      text: `Swift Chauffeurs proudly serves Spring Hill with luxury chauffeur and limousine transportation. From The Crossings of Spring Hill to historic Rippa Villa and the surrounding communities, our professional drivers deliver comfortable, reliable rides for every occasion.

Whether you're commuting for work, catching a flight, or celebrating a milestone, our spotless fleet and courteous chauffeurs make every trip effortless. Sit back, relax, and enjoy a smooth, stress-free journey.`,
    },
    section: {
      eyebrow: "Airport & Corporate",
      heading: "BNA Airport Transfers & Executive Travel in Spring Hill",
      image: carRangeRover,
      text: `Spring Hill's convenient location makes airport travel easy with Swift Chauffeurs. We provide punctual, flight-tracked transfers to and from Nashville International Airport (BNA), along with comfortable long-distance rides throughout Middle Tennessee.

For local businesses and professionals, our executive car service offers a quiet, productive cabin, dependable scheduling, and a polished, professional image for client transportation. Wedding parties and special events are welcome too — reserve your ride today.`,
    },
  },
  // ---- Chattanooga sub-pages ------------------------------------------------
  "/chattanooga/birthday-party-bus": {
    label: "Chattanooga Birthday Party Bus",
    cityName: "Chattanooga",
    keyword: "Birthday Party Bus Rental in Chattanooga",
    heroImage: fleetPartybus,
    seoTitle: "Birthday Party Bus Rental in Chattanooga, TN | Swift Chauffeurs",
    seoDescription:
      "Celebrate in style with a birthday party bus rental in Chattanooga, TN. Spacious, fully-loaded party buses with a professional chauffeur for an unforgettable night.",
    intro: {
      eyebrow: "Chattanooga",
      heading: "Birthday Party Bus Rental in Chattanooga",
      image: fleetPartybus,
      text: `Make your birthday unforgettable with a party bus rental from Swift Chauffeurs in Chattanooga. Our spacious, fully-loaded party buses turn the ride itself into part of the celebration — perfect for milestone birthdays, group nights out, and everything in between.

Cruise the Scenic City with your friends while a professional chauffeur handles the driving, the route, and the parking. Premium sound, comfortable seating, and ambient lighting set the mood from the first pickup to the last drop-off.`,
    },
    section: {
      eyebrow: "Group Celebrations",
      heading: "The Ultimate Birthday Ride in the Scenic City",
      image: svcBirthday,
      text: `From downtown Chattanooga and the Southside to Lookout Mountain and the riverfront, we keep your whole group together and the party rolling. No coordinating multiple cars, no designated-driver worries — just a safe, fun, and stylish experience for everyone.

Book early for weekends and peak birthday season. Tell us your plans and we'll tailor the perfect itinerary, so all you have to do is show up and celebrate.`,
    },
  },

  "/chattanooga/car-service-to-cha": {
    label: "CHA Car Service",
    cityName: "Chattanooga",
    keyword: "CHA Airport Car Service in Chattanooga",
    heroImage: svcAirport,
    seoTitle: "CHA Airport Car Service in Chattanooga, TN | Swift Chauffeurs",
    seoDescription:
      "Reliable car service to Chattanooga Metropolitan Airport (CHA). Flight-tracked pickups, meet-and-greet, and luxury chauffeured transfers for business and leisure travelers.",
    intro: {
      eyebrow: "Chattanooga",
      heading: "CHA Airport Car Service in Chattanooga",
      image: svcAirport,
      text: `Start and end your trip stress-free with Swift Chauffeurs' car service to Chattanooga Metropolitan Airport (CHA). We track your flight in real time, arrive early, and provide a smooth, comfortable transfer to or from your terminal.

No surge pricing, no waiting in a rideshare queue after a long flight — just a professional chauffeur, luggage assistance, and a spotless luxury vehicle ready when you land.`,
    },
    section: {
      eyebrow: "Business & Leisure",
      heading: "Punctual, Professional Airport Transfers",
      image: carMercedes,
      text: `Whether you're a business traveler heading to a morning flight or a visitor arriving to explore the Scenic City, our chauffeurs get you there on schedule and in comfort. We serve hotels, downtown, and the surrounding Chattanooga area.

Prefer to work or relax en route? Our quiet, climate-controlled cabins are ideal for both. Reserve your CHA airport transfer today for dependable, five-star service.`,
    },
  },

  "/chattanooga/prom-limo-rental": {
    label: "Chattanooga Prom Limousine",
    cityName: "Chattanooga",
    keyword: "Prom Limo Rental in Chattanooga",
    heroImage: svcProm,
    seoTitle: "Prom Limo Rental in Chattanooga, TN | Swift Chauffeurs",
    seoDescription:
      "Arrive at prom in style with a limousine rental in Chattanooga, TN. Safe, elegant, chauffeur-driven transportation that parents trust and students love.",
    intro: {
      eyebrow: "Chattanooga",
      heading: "Prom Limo Rental in Chattanooga",
      image: svcProm,
      text: `Make prom night truly special with an elegant limousine from Swift Chauffeurs in Chattanooga. Arrive in style, take unforgettable photos, and enjoy a safe, chauffeur-driven experience the whole group will remember.

Our licensed, background-checked chauffeurs give parents peace of mind while students enjoy a glamorous, worry-free night. Split the cost with friends and travel together in comfort and luxury.`,
    },
    section: {
      eyebrow: "Safe & Stylish",
      heading: "A Prom Night to Remember",
      image: carRangeRover,
      text: `From pickup to the venue and safely back home, we handle every detail so the night runs smoothly. Our spotless limousines and SUVs make a stunning entrance at any Chattanooga-area prom.

Prom season books up fast — reserve early to guarantee your vehicle. Tell us your schedule and stops, and we'll craft the perfect timeline for your group.`,
    },
  },

  "/chattanooga/wedding-chauffeur-service": {
    label: "Chattanooga Wedding Chauffeur",
    cityName: "Chattanooga",
    keyword: "Wedding Chauffeur Service in Chattanooga",
    heroImage: svcWedding,
    seoTitle: "Wedding Chauffeur Service in Chattanooga, TN | Swift Chauffeurs",
    seoDescription:
      "Elegant wedding chauffeur service in Chattanooga, TN. On-time luxury transportation for the couple, wedding party, and guests, in a spotless vehicle that looks stunning in photos.",
    intro: {
      eyebrow: "Chattanooga",
      heading: "Wedding Chauffeur Service in Chattanooga",
      image: svcWedding,
      text: `Your wedding day deserves flawless transportation, and Swift Chauffeurs delivers. We provide elegant, on-time chauffeur service in Chattanooga for the couple, the wedding party, and your guests — so every arrival is graceful and every moment stays on schedule.

Our meticulously maintained vehicles look beautiful in photos and provide a comfortable, luxurious ride between the ceremony, reception, and beyond. Relax and enjoy your day while we manage the timing and logistics.`,
    },
    section: {
      eyebrow: "Your Perfect Day",
      heading: "Effortless Wedding Transportation in the Scenic City",
      image: carMercedes,
      text: `From venues on Lookout Mountain to downtown Chattanooga and the riverfront, our chauffeurs know the area and plan for traffic so no one is ever left waiting. We coordinate multiple pickups and precise timing to keep your celebration running perfectly.

Let us tailor the ideal package for your wedding — sedans, SUVs, sprinter vans, or limousines. Reserve early to secure your date and vehicles.`,
    },
  },

  // ---- Clarksville sub-pages ------------------------------------------------
  "/services/airport-shuttle": {
    label: "Corporate Airport Shuttle",
    cityName: "Clarksville",
    keyword: "Corporate Airport Shuttle in Clarksville",
    heroImage: svcExecutive,
    seoTitle: "Corporate Airport Shuttle in Clarksville, TN | Swift Chauffeurs",
    seoDescription:
      "Reliable corporate airport shuttle in Clarksville, TN to Nashville International Airport (BNA). Flight-tracked, punctual group transfers for businesses and Fort Campbell.",
    intro: {
      eyebrow: "Clarksville",
      heading: "Corporate Airport Shuttle in Clarksville",
      image: svcExecutive,
      text: `Swift Chauffeurs provides dependable corporate airport shuttle service between Clarksville and Nashville International Airport (BNA). Ideal for companies, teams, and Fort Campbell travelers, our shuttles keep everyone together, comfortable, and on schedule.

With real-time flight tracking and proactive scheduling, we plan for traffic and timing so your group never misses a flight or waits after landing. Professional chauffeurs and clean, spacious vehicles make every corporate transfer seamless.`,
    },
    section: {
      eyebrow: "Business Travel",
      heading: "Group & Executive Transfers You Can Rely On",
      image: carMercedes,
      text: `From executive sedans and SUVs to spacious sprinter vans, we match the right vehicle to your group size and travel needs. Corporate accounts, priority booking, and consistent service make us the trusted choice for Clarksville businesses.

Whether it's a single executive or an entire team, we deliver a quiet, productive ride with a polished, professional image. Reserve your corporate airport shuttle today.`,
    },
  },

  "/clarksville/shuttle-to-nashville-airport": {
    label: "Clarksville Shuttle to Nashville Airport",
    cityName: "Clarksville",
    keyword: "Clarksville Shuttle to Nashville Airport (BNA)",
    heroImage: svcAirport,
    seoTitle: "Clarksville Shuttle to Nashville Airport (BNA) | Swift Chauffeurs",
    seoDescription:
      "Private shuttle and car service from Clarksville to Nashville International Airport (BNA). Flight-tracked, punctual pickups for early departures and late arrivals.",
    intro: {
      eyebrow: "Clarksville",
      heading: "Clarksville Shuttle to Nashville Airport (BNA)",
      image: svcAirport,
      text: `Traveling from Clarksville to Nashville International Airport (BNA)? Swift Chauffeurs offers private, door-to-door shuttle and car service with flight tracking and punctual pickups — even for the earliest departures and latest arrivals.

Skip the long-term parking fees and rideshare uncertainty. Our professional chauffeurs handle the 45-minute-plus drive so you can relax, work, or rest before your flight, arriving refreshed and on time.`,
    },
    section: {
      eyebrow: "Door-to-Door",
      heading: "Reliable BNA Transfers for Clarksville Travelers",
      image: carMercedes,
      text: `We serve Downtown Clarksville, Austin Peay State University, Fort Campbell families, and the surrounding communities with comfortable, luxury transportation to and from BNA. Every ride is spotless, private, and dependable.

Book solo or for the whole family — our sedans, SUVs, and sprinter vans have room for everyone and their luggage. Reserve your Clarksville-to-BNA shuttle today.`,
    },
  },
};

export const cityHighlights = defaultHighlights;

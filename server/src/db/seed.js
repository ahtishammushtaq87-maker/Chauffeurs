import "dotenv/config";
import bcrypt from "bcryptjs";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import db from "./index.js";
import { uniqueSlug } from "../utils/slugify.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceImagesDir = path.join(__dirname, "..", "..", "..", "src", "assets", "images");
const uploadsDir = path.join(__dirname, "..", "..", "uploads");

function seedAdmin() {
  const count = db.prepare("SELECT COUNT(*) AS n FROM users").get().n;
  if (count > 0) return;

  const name = process.env.BOOTSTRAP_ADMIN_NAME || "Site Admin";
  const email = (process.env.BOOTSTRAP_ADMIN_EMAIL || "admin@swiftchauffeurs.com").toLowerCase();
  const password = process.env.BOOTSTRAP_ADMIN_PASSWORD || "ChangeMe123!";
  const passwordHash = bcrypt.hashSync(password, 10);

  db.prepare("INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, 'admin')").run(
    name,
    email,
    passwordHash
  );

  console.log(`Seeded admin user: ${email} (password from .env — change it after first login)`);
}

function seedBlogPosts() {
  const count = db.prepare("SELECT COUNT(*) AS n FROM blog_posts").get().n;
  if (count > 0) return;

  const slugExists = db.prepare("SELECT 1 FROM blog_posts WHERE slug = ?");
  const insert = db.prepare(`
    INSERT INTO blog_posts (title, slug, category, excerpt, content, image, author, published, published_at)
    VALUES (@title, @slug, @category, @excerpt, @content, NULL, @author, 1, @published_at)
  `);

  const samples = [
    {
      title: "5 Reasons to Hire a Chauffeur for Your Wedding Day",
      category: "Weddings",
      published_at: "2026-06-02",
      excerpt:
        "Your wedding day should be stress-free from start to finish. Here's why a professional chauffeur belongs on your checklist.",
      content: [
        "Your wedding day is one of the most important days of your life, and every detail matters — including how you and your guests get from place to place. A professional chauffeur service takes the logistics off your plate so you can focus on what matters.",
        "First, punctuality is everything on a wedding day. A dedicated chauffeur monitors traffic and timing so your ceremony, photos, and reception all stay on schedule.",
        "Second, a chauffeured ride makes for stunning photo opportunities. Arriving in a polished luxury vehicle adds elegance to your entrance and departure.",
        "Third, it keeps everyone safe. With open bars and long celebrations, having a sober, professional driver means no one has to worry about getting home safely.",
        "Finally, it's simply more comfortable. Spacious, climate-controlled interiors let you relax in your gown or suit without the wrinkles and stress of driving yourself.",
      ].join("\n\n"),
    },
    {
      title: "The Ultimate Guide to Airport Limo Etiquette",
      category: "Airport Transfers",
      published_at: "2026-05-18",
      excerpt: "Booking an airport car for the first time? Here's everything you need to know before your ride arrives.",
      content: [
        "Airport transportation is one of the most popular reasons travelers book a chauffeur service — and for good reason. It removes the stress of parking, traffic, and rideshare surge pricing.",
        "Always share your flight number when booking. This lets your chauffeur track delays and adjust pickup time automatically, so you're never left waiting.",
        "Be ready a few minutes early. Your chauffeur will typically wait curbside or at an agreed meeting point, and having your luggage ready speeds up the pickup.",
        "Finally, don't hesitate to communicate special requests, whether it's extra stops, child seats, or specific luggage needs.",
      ].join("\n\n"),
    },
    {
      title: "How to Plan the Perfect Prom Night Limo Experience",
      category: "Prom",
      published_at: "2026-04-27",
      excerpt: "From booking early to setting a curfew, here's how parents and students can plan a safe, unforgettable prom night.",
      content: [
        "Prom night is a milestone worth doing right — and that starts with reliable, safe transportation for the whole group.",
        "Book early. Prom season is one of the busiest times of year for limo and party bus services, so reserving 6-8 weeks ahead guarantees availability.",
        "Split costs with friends. Group bookings for a limo or party bus are often more affordable per person than individual rides.",
        "Talk to your teens about expectations. A licensed, professional chauffeur means peace of mind for parents and a fun, safe night for students.",
      ].join("\n\n"),
    },
  ];

  for (const s of samples) {
    const slug = uniqueSlug(s.title, (candidate) => Boolean(slugExists.get(candidate)));
    insert.run({
      title: s.title,
      slug,
      category: s.category,
      excerpt: s.excerpt,
      content: s.content,
      author: "Swift Chauffeurs Team",
      published_at: s.published_at,
    });
  }

  console.log(`Seeded ${samples.length} sample blog posts.`);
}

// Copies a source image from the frontend's asset folder into uploads/ once,
// reusing the same copy if the same source file is referenced again.
const copiedImages = new Map();
function copyImage(filename) {
  if (!filename) return null;
  if (copiedImages.has(filename)) return copiedImages.get(filename);

  const src = path.join(sourceImagesDir, filename);
  if (!fs.existsSync(src)) return null;

  const ext = path.extname(filename);
  const destName = `seed-${crypto.randomBytes(8).toString("hex")}${ext}`;
  fs.copyFileSync(src, path.join(uploadsDir, destName));

  const publicPath = `/uploads/${destName}`;
  copiedImages.set(filename, publicPath);
  return publicPath;
}

// The site's original hand-built fleet pages, migrated into the database so they
// become fully editable (and deletable) from the dashboard like any other entry.
// Each bespoke page fetches its cards by this fixed slug (see FleetHighlightSection).
const pageSections = [
  {
    slug: "luxury-sedan-fleet",
    name: "Luxury Sedan — Fleet Section",
    category: "Luxury Sedan",
    cards: [
      {
        title: "Mercedes Chauffeur Service",
        image: "car-mercedes.jpg",
        description:
          "Feel true comfort and style with our affordable Mercedes chauffeur service. From business travels to special events, we ensure that every ride is easy, dependable, and exceptional.",
      },
      {
        title: "Mercedes S-Class S560",
        image: "car-porsche.jpg",
        description:
          "Looking for a dependable chauffeur service? Our exceptional Mercedes Benz S560 chauffeur service is designed to satisfy the highest requirements for elegance, comfort, and professionalism.",
      },
    ],
  },
  {
    slug: "executive-suv-fleet",
    name: "Executive SUV — Fleet Section",
    category: "Executive SUV",
    cards: [
      {
        title: "Premium Cadillac Escalade SUV",
        image: "car-rangerover.jpg",
        description:
          "While tailored for VIPs, our Cadillac Escalade SUV is versatile enough to cater to a range of events. Whether it's a glamorous wedding, a stylish prom night, or a corporate transfer demanding the utmost in sophistication, this SUV stands ready to make any occasion memorable.",
      },
      {
        title: "Luxurious Suburban SUV",
        image: "fleet-van.jpg",
        description:
          "For proms, the Suburban SUV becomes a symbol of glamour, offering a sleek and stylish entrance that complements the excitement of the night. Corporate transfers are elevated to a new level, as the Suburban combines professionalism with comfort, ensuring a smooth and sophisticated journey for executives.",
      },
    ],
  },
  {
    slug: "stretch-limo-fleet",
    name: "Stretch Limousine — Fleet Section",
    category: "Stretch Limousine",
    cards: [
      {
        title: "Cadillac Escalade Super Stretch Limousine",
        image: "car-rangerover.jpg",
        description:
          "As you embark on your journey, relish in the cutting-edge technology that accompanies this marvel on wheels. From advanced entertainment systems to intuitive controls, our Escalade Limo is equipped with the latest in-car amenities, ensuring that your experience is as enjoyable as it is stylish.",
      },
      {
        title: "Classic Lincoln Towncar Stretched Limousine",
        image: "fleet-sedan.jpg",
        description:
          "As you embark on your journey, relish in the cutting-edge technology that accompanies this marvel on wheels. From advanced entertainment systems to intuitive controls, our Classic Lincoln is equipped with the latest in-car amenities, ensuring that your experience is as enjoyable as it is stylish.",
      },
    ],
  },
  {
    slug: "party-bus-fleet",
    name: "Party Bus — Fleet Section",
    category: "Party Bus",
    cards: [
      {
        title: "Mercedes Sprinter Party Limo",
        image: "car-mercedes.jpg",
        description:
          "With its spacious layout and entertainment features, this limo is the ideal choice for a night out with friends, a bachelorette party, or any occasion that calls for revelry.",
      },
      {
        title: "Luxury 20 Passenger Party Bus",
        image: "fleet-partybus.jpg",
        description:
          "We take great satisfaction in offering unmatched transportation services to fulfill all of your requirements, whether you're having a corporate event or commemorating a special occasion.",
      },
      {
        title: "Luxury 30 Passenger Party Bus",
        image: "fleet-coach.jpg",
        description:
          "Are you organizing a special event that calls for the ideal mix of luxury, fun, and convenience? Our 30 passenger party bus rental service offers an enjoyable experience for any occasion.",
      },
    ],
  },
  {
    slug: "sprinter-van-fleet",
    name: "Sprinter Van — Fleet Section",
    category: "Sprinter Van",
    cards: [
      {
        title: "Mercedes Executive Sprinter",
        image: "car-mercedes.jpg",
        description:
          "The Executive Sprinter features black leather seating, premium suspension, reclining seats, and a full entertainment system, with more than enough luggage space for the road. It's equipped with an expandable table, making it perfect for long trips where you might want to have lunch or play a game of cards with friends. The luxurious vehicle is paired with a world-class professional chauffeur who knows how to respect everyone's privacy.",
      },
    ],
  },
  {
    slug: "motor-coach-fleet",
    name: "Motor Coach — Fleet Section",
    category: "Motor Coach",
    cards: [
      {
        title: "25-Passenger Mini Coach",
        image: "fleet-coach.jpg",
        description:
          "Choose our elegant 25 Passenger Mini Coach for an occasion marked by comfort, style, and sophistication. Ride with us and let every journey become a celebration of opulence and refinement, setting the tone for memorable moments ahead.",
      },
      {
        title: "31-Passenger Mini Coach",
        image: "fleet-partybus.jpg",
        description:
          "Choose our elegant 31 Passenger Mini Coach for an occasion marked by comfort, style, and sophistication. Ride with us and let every journey become a celebration of opulence and refinement, setting the tone for memorable moments ahead.",
      },
      {
        title: "40-Passenger Coach",
        image: "fleet-coach.jpg",
        description:
          "Choose our elegant 40 Passenger Mini Coach for an occasion marked by comfort, style, and sophistication. Ride with us and let every journey become a celebration of opulence and refinement, setting the tone for memorable moments ahead.",
      },
      {
        title: "43-Passenger Coach",
        image: "fleet-partybus.jpg",
        description:
          "Choose our elegant 43 Passenger Executive Coach for an occasion marked by comfort, style, and sophistication. Ride with us and let every journey become a celebration of opulence and refinement, setting the tone for memorable moments ahead.",
      },
      {
        title: "56-Passenger Coach",
        image: "fleet-coach.jpg",
        description:
          "Choose our 56 Passenger Executive Coach for a travel experience that transcends the ordinary. From the lavish interior to the spacious luggage compartments, every detail is crafted to perfection. Elevate your events — ride with us and let the journey be as exceptional as the destination.",
      },
    ],
  },
];

function seedStaticFleet() {
  const getBySlug = db.prepare("SELECT id FROM fleet_vehicles WHERE slug = ?");
  const insertVehicle = db.prepare(`
    INSERT INTO fleet_vehicles (name, slug, category, excerpt, description, image, published, hidden)
    VALUES (@name, @slug, @category, @excerpt, @description, @image, 1, 1)
  `);
  const insertCard = db.prepare(`
    INSERT INTO fleet_cards (vehicle_id, title, description, image, sort_order)
    VALUES (@vehicle_id, @title, @description, @image, @sort_order)
  `);

  let seededCount = 0;
  for (const section of pageSections) {
    if (getBySlug.get(section.slug)) continue;

    const firstImage = copyImage(section.cards[0]?.image);
    const result = insertVehicle.run({
      name: section.name,
      slug: section.slug,
      category: section.category,
      excerpt: `Fleet highlight cards shown on the ${section.category} page.`,
      description: `Fleet highlight cards shown on the ${section.category} page.`,
      image: firstImage,
    });

    section.cards.forEach((card, i) => {
      insertCard.run({
        vehicle_id: result.lastInsertRowid,
        title: card.title,
        description: card.description,
        image: copyImage(card.image),
        sort_order: i,
      });
    });

    seededCount += 1;
  }

  if (seededCount > 0) {
    console.log(`Migrated ${seededCount} static fleet page section(s) into the database.`);
  }
}

// The site's original 7 chauffeur services, migrated into the database with the
// same slugs their bespoke pages already use (e.g. "airport" -> /services/airport)
// so editing them here updates the service cards shown in sliders/listings, while
// "View More" still opens the real hand-built page for that service.
const staticServices = [
  {
    slug: "airport",
    title: "Airport Transfer",
    excerpt: "Reliable, all-inclusive airport transportation with real-time flight monitoring.",
    image: "svc-airport.jpg",
  },
  {
    slug: "birthday",
    title: "Birthday Chauffeur",
    excerpt: "Celebrate in style with a party-ready limo built for unforgettable nights.",
    image: "svc-birthday.jpg",
  },
  {
    slug: "black-car",
    title: "Black Car Service",
    excerpt: "Premium comfort and professionalism with black car service, perfect for any special trip.",
    image: "svc-blackcar.jpg",
  },
  {
    slug: "concert",
    title: "Concert Transportation",
    excerpt: "Skip the traffic and parking — arrive at every show in comfort and style.",
    image: "svc-concert.jpg",
  },
  {
    slug: "executive",
    title: "Executive Chauffeur",
    excerpt: "Polished, punctual chauffeur service for business travel and VIP clients.",
    image: "svc-executive.jpg",
  },
  {
    slug: "prom",
    title: "Prom Limo Rental",
    excerpt: "Arrive at prom with elegance using our limousine service, creating unforgettable memories forever.",
    image: "svc-prom.jpg",
  },
  {
    slug: "wedding",
    title: "Wedding Chauffeur",
    excerpt: "Experience luxury with our Mercedes chauffeur service, tailored to meet every demand perfectly.",
    image: "svc-wedding.jpg",
  },
];

function seedStaticServices() {
  const getBySlug = db.prepare("SELECT id, hidden_from_nav FROM services WHERE slug = ?");
  const insertService = db.prepare(`
    INSERT INTO services (title, slug, excerpt, description, image, published, hidden_from_nav)
    VALUES (@title, @slug, @excerpt, @description, @image, 1, 1)
  `);
  // These slugs are already listed in the header's static Services dropdown, so mark
  // them hidden_from_nav to avoid a duplicate entry — they still show in every slider
  // and the /services browse page, which pull from the services table directly.
  const markHiddenFromNav = db.prepare("UPDATE services SET hidden_from_nav = 1 WHERE id = ?");

  let seededCount = 0;
  for (const svc of staticServices) {
    const existing = getBySlug.get(svc.slug);
    if (existing) {
      if (!existing.hidden_from_nav) markHiddenFromNav.run(existing.id);
      continue;
    }

    insertService.run({
      title: svc.title,
      slug: svc.slug,
      excerpt: svc.excerpt,
      description: svc.excerpt,
      image: copyImage(svc.image),
    });
    seededCount += 1;
  }

  if (seededCount > 0) {
    console.log(`Migrated ${seededCount} static service(s) into the database.`);
  }
}

seedAdmin();
seedBlogPosts();
seedStaticFleet();
seedStaticServices();
console.log("Seed complete.");

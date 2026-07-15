import { DatabaseSync } from "node:sqlite";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "..", "..", "data");
fs.mkdirSync(dataDir, { recursive: true });

const dbPath = path.join(dataDir, "app.sqlite");
export const db = new DatabaseSync(dbPath);

db.exec("PRAGMA journal_mode = WAL;");
db.exec("PRAGMA foreign_keys = ON;");

// Migration: service_fleet used to link services only to whole fleet_vehicles rows.
// It now supports linking to either a vehicle or an individual fleet_cards item, so
// databases created before this shape existed need the old table rebuilt.
try {
  const cols = db.prepare("PRAGMA table_info(service_fleet)").all();
  if (cols.length > 0 && !cols.some((c) => c.name === "kind")) {
    db.exec("DROP TABLE service_fleet;");
  }
} catch {
  // Table doesn't exist yet; nothing to migrate.
}

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('admin','editor')) DEFAULT 'editor',
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT NOT NULL DEFAULT '',
    description TEXT NOT NULL DEFAULT '',
    image TEXT,
    published INTEGER NOT NULL DEFAULT 1,
    hidden_from_nav INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS fleet_vehicles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    category TEXT NOT NULL DEFAULT '',
    excerpt TEXT NOT NULL DEFAULT '',
    description TEXT NOT NULL DEFAULT '',
    image TEXT,
    passenger_capacity TEXT NOT NULL DEFAULT '',
    published INTEGER NOT NULL DEFAULT 1,
    hidden INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS fleet_cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vehicle_id INTEGER NOT NULL REFERENCES fleet_vehicles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    image TEXT,
    sort_order INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS service_sections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    service_id INTEGER NOT NULL REFERENCES services(id) ON DELETE CASCADE,
    eyebrow TEXT NOT NULL DEFAULT '',
    heading TEXT NOT NULL DEFAULT '',
    text TEXT NOT NULL DEFAULT '',
    image TEXT,
    sort_order INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS service_fleet (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    service_id INTEGER NOT NULL REFERENCES services(id) ON DELETE CASCADE,
    kind TEXT NOT NULL CHECK (kind IN ('vehicle','card')),
    ref_id INTEGER NOT NULL,
    sort_order INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS seo_meta (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    path TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL DEFAULT '',
    description TEXT NOT NULL DEFAULT '',
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS quote_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL DEFAULT '',
    passengers TEXT NOT NULL DEFAULT '',
    contact_no TEXT NOT NULL DEFAULT '',
    email TEXT NOT NULL DEFAULT '',
    service_type TEXT NOT NULL DEFAULT '',
    vehicle TEXT NOT NULL DEFAULT '',
    pickup_date TEXT NOT NULL DEFAULT '',
    pickup_time TEXT NOT NULL DEFAULT '',
    hours TEXT NOT NULL DEFAULT '',
    pickup_address TEXT NOT NULL DEFAULT '',
    destination_address TEXT NOT NULL DEFAULT '',
    source_path TEXT NOT NULL DEFAULT '',
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','contacted','booked','closed')),
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL DEFAULT '',
    last_name TEXT NOT NULL DEFAULT '',
    email TEXT NOT NULL DEFAULT '',
    phone TEXT NOT NULL DEFAULT '',
    interest TEXT NOT NULL DEFAULT '',
    hear_about TEXT NOT NULL DEFAULT '',
    message TEXT NOT NULL DEFAULT '',
    source_path TEXT NOT NULL DEFAULT '',
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','contacted','booked','closed')),
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS email_settings (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    smtp_host TEXT NOT NULL DEFAULT '',
    smtp_port TEXT NOT NULL DEFAULT '587',
    smtp_secure INTEGER NOT NULL DEFAULT 0,
    smtp_user TEXT NOT NULL DEFAULT '',
    smtp_password TEXT NOT NULL DEFAULT '',
    from_name TEXT NOT NULL DEFAULT 'Swift Chauffeurs',
    from_email TEXT NOT NULL DEFAULT '',
    notify_email TEXT NOT NULL DEFAULT '',
    enabled INTEGER NOT NULL DEFAULT 0,
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS site_settings (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    phone_1 TEXT NOT NULL DEFAULT '',
    phone_2 TEXT NOT NULL DEFAULT '',
    email TEXT NOT NULL DEFAULT '',
    whatsapp_number TEXT NOT NULL DEFAULT '',
    address TEXT NOT NULL DEFAULT '',
    facebook_url TEXT NOT NULL DEFAULT '',
    instagram_url TEXT NOT NULL DEFAULT '',
    tiktok_url TEXT NOT NULL DEFAULT '',
    logo_url TEXT NOT NULL DEFAULT '',
    favicon_url TEXT NOT NULL DEFAULT '',
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    category TEXT NOT NULL DEFAULT '',
    excerpt TEXT NOT NULL DEFAULT '',
    content TEXT NOT NULL DEFAULT '',
    image TEXT,
    author TEXT NOT NULL DEFAULT 'Swift Chauffeurs Team',
    published INTEGER NOT NULL DEFAULT 1,
    published_at TEXT NOT NULL DEFAULT (datetime('now')),
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

// Migration for databases created before the `hidden` column existed.
try {
  db.exec("ALTER TABLE fleet_vehicles ADD COLUMN hidden INTEGER NOT NULL DEFAULT 0;");
} catch {
  // Column already exists.
}

// Migration for databases created before the `hidden_from_nav` column existed.
try {
  db.exec("ALTER TABLE services ADD COLUMN hidden_from_nav INTEGER NOT NULL DEFAULT 0;");
} catch {
  // Column already exists.
}

// Migration: add SEO alt text / title columns to every table that stores an
// uploaded image, for databases created before these columns existed.
for (const table of ["fleet_vehicles", "fleet_cards", "services", "service_sections", "blog_posts"]) {
  for (const column of ["image_alt", "image_title"]) {
    try {
      db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} TEXT NOT NULL DEFAULT '';`);
    } catch {
      // Column already exists.
    }
  }
}

// Migration for databases created before the site_settings `logo_url` /
// `favicon_url` columns existed.
for (const column of ["logo_url", "favicon_url"]) {
  try {
    db.exec(`ALTER TABLE site_settings ADD COLUMN ${column} TEXT NOT NULL DEFAULT '';`);
  } catch {
    // Column already exists.
  }
}

export default db;

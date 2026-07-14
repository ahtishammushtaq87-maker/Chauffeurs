import { Router } from "express";
import db from "../db/index.js";
import { requireAuth, requireRole } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";
import { uniqueSlug } from "../utils/slugify.js";

const router = Router();

const listPublished = db.prepare(
  "SELECT * FROM fleet_vehicles WHERE published = 1 AND hidden = 0 ORDER BY created_at DESC"
);
const listAll = db.prepare("SELECT * FROM fleet_vehicles WHERE hidden = 0 ORDER BY created_at DESC");
const listHidden = db.prepare("SELECT * FROM fleet_vehicles WHERE hidden = 1 ORDER BY category ASC");
const getBySlug = db.prepare("SELECT * FROM fleet_vehicles WHERE slug = ?");
const getById = db.prepare("SELECT * FROM fleet_vehicles WHERE id = ?");
const slugExists = db.prepare("SELECT 1 FROM fleet_vehicles WHERE slug = ?");
const insertVehicle = db.prepare(`
  INSERT INTO fleet_vehicles (name, slug, category, excerpt, description, image, passenger_capacity, published)
  VALUES (@name, @slug, @category, @excerpt, @description, @image, @passenger_capacity, @published)
`);
const updateVehicle = db.prepare(`
  UPDATE fleet_vehicles
  SET name = @name, category = @category, excerpt = @excerpt, description = @description,
      image = COALESCE(@image, image), passenger_capacity = @passenger_capacity,
      published = @published, updated_at = datetime('now')
  WHERE id = @id
`);
const deleteVehicle = db.prepare("DELETE FROM fleet_vehicles WHERE id = ?");

const listCardsByVehicle = db.prepare(
  "SELECT id, title, description, image, sort_order FROM fleet_cards WHERE vehicle_id = ? ORDER BY sort_order ASC, id ASC"
);
const deleteCardsByVehicle = db.prepare("DELETE FROM fleet_cards WHERE vehicle_id = ?");
const insertCard = db.prepare(`
  INSERT INTO fleet_cards (vehicle_id, title, description, image, sort_order)
  VALUES (@vehicle_id, @title, @description, @image, @sort_order)
`);

// `cards` arrives as a JSON string: [{ title, description, keepImage }, ...].
// Any new file for card index i is sent as a separate field named cardImage_<i>.
// keepImage tells us whether to carry over that card's previous image when no new file was sent.
function parseCardsInput(req) {
  let raw = [];
  try {
    raw = req.body?.cards ? JSON.parse(req.body.cards) : [];
  } catch {
    return [];
  }
  if (!Array.isArray(raw)) return [];

  const files = Array.isArray(req.files) ? req.files : [];
  return raw
    .map((card, i) => ({
      title: String(card.title || "").trim(),
      description: String(card.description || "").trim(),
      keepImage: Boolean(card.keepImage),
      file: files.find((f) => f.fieldname === `cardImage_${i}`) || null,
    }))
    .filter((card) => card.title);
}

function saveCards(vehicleId, cards, previousCards = []) {
  deleteCardsByVehicle.run(vehicleId);
  cards.forEach((card, i) => {
    let image = null;
    if (card.file) {
      image = `/uploads/${card.file.filename}`;
    } else if (card.keepImage && previousCards[i]) {
      image = previousCards[i].image;
    }
    insertCard.run({
      vehicle_id: vehicleId,
      title: card.title,
      description: card.description,
      image,
      sort_order: i,
    });
  });
}

function findMainImageFile(req) {
  const files = Array.isArray(req.files) ? req.files : [];
  return files.find((f) => f.fieldname === "image") || null;
}

router.get("/", (req, res) => {
  const rows = req.query.all === "1" ? listAll.all() : listPublished.all();
  res.json({ vehicles: rows });
});

// Hidden "page section" rows that back the fleet highlight cards on the
// original bespoke fleet pages (e.g. /fleet/luxury-sedan). Public read (same
// content already shown on those live pages); only admin/editor can edit them.
router.get("/sections", (_req, res) => {
  const sections = listHidden.all().map((row) => ({ ...row, cards: listCardsByVehicle.all(row.id) }));
  res.json({ sections });
});

router.get("/:slug", (req, res) => {
  const row = getBySlug.get(req.params.slug);
  if (!row || (!row.published && req.query.all !== "1")) {
    return res.status(404).json({ error: "Vehicle not found." });
  }
  res.json({ vehicle: { ...row, cards: listCardsByVehicle.all(row.id) } });
});

router.post("/", requireAuth, requireRole("admin", "editor"), upload.any(), (req, res) => {
  const { name, category = "", excerpt = "", description = "", passenger_capacity = "", published = "1" } =
    req.body || {};
  if (!name || !name.trim()) {
    return res.status(400).json({ error: "Name is required." });
  }
  const slug = uniqueSlug(name, (s) => Boolean(slugExists.get(s)));
  const mainImage = findMainImageFile(req);
  const image = mainImage ? `/uploads/${mainImage.filename}` : null;

  const result = insertVehicle.run({
    name: name.trim(),
    slug,
    category: category.trim(),
    excerpt: excerpt.trim(),
    description: description.trim(),
    image,
    passenger_capacity: passenger_capacity.trim(),
    published: published === "0" ? 0 : 1,
  });

  const vehicleId = result.lastInsertRowid;
  saveCards(vehicleId, parseCardsInput(req));

  res.status(201).json({ vehicle: { ...getById.get(vehicleId), cards: listCardsByVehicle.all(vehicleId) } });
});

router.patch("/:id", requireAuth, requireRole("admin", "editor"), upload.any(), (req, res) => {
  const id = Number(req.params.id);
  const existing = getById.get(id);
  if (!existing) return res.status(404).json({ error: "Vehicle not found." });

  const { name, category, excerpt, description, passenger_capacity, published } = req.body || {};
  const mainImage = findMainImageFile(req);
  const image = mainImage ? `/uploads/${mainImage.filename}` : null;

  updateVehicle.run({
    id,
    name: (name ?? existing.name).trim(),
    category: (category ?? existing.category).trim(),
    excerpt: (excerpt ?? existing.excerpt).trim(),
    description: (description ?? existing.description).trim(),
    image,
    passenger_capacity: (passenger_capacity ?? existing.passenger_capacity).trim(),
    published: published === undefined ? existing.published : published === "0" ? 0 : 1,
  });

  if (req.body?.cards !== undefined) {
    const previousCards = listCardsByVehicle.all(id);
    saveCards(id, parseCardsInput(req), previousCards);
  }

  res.json({ vehicle: { ...getById.get(id), cards: listCardsByVehicle.all(id) } });
});

router.delete("/:id", requireAuth, requireRole("admin", "editor"), (req, res) => {
  const id = Number(req.params.id);
  if (!getById.get(id)) return res.status(404).json({ error: "Vehicle not found." });
  deleteVehicle.run(id);
  res.json({ ok: true });
});

export default router;

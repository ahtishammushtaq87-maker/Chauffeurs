import { Router } from "express";
import db from "../db/index.js";
import { requireAuth, requireRole } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";
import { uniqueSlug } from "../utils/slugify.js";

const router = Router();

const listPublished = db.prepare("SELECT * FROM services WHERE published = 1 ORDER BY created_at DESC");
const listAll = db.prepare("SELECT * FROM services ORDER BY created_at DESC");
const getBySlug = db.prepare("SELECT * FROM services WHERE slug = ?");
const getById = db.prepare("SELECT * FROM services WHERE id = ?");
const slugExists = db.prepare("SELECT 1 FROM services WHERE slug = ?");
const insertService = db.prepare(`
  INSERT INTO services (title, slug, excerpt, description, image, image_alt, image_title, published)
  VALUES (@title, @slug, @excerpt, @description, @image, @image_alt, @image_title, @published)
`);
const updateService = db.prepare(`
  UPDATE services
  SET title = @title, excerpt = @excerpt, description = @description,
      image = COALESCE(@image, image), image_alt = @image_alt, image_title = @image_title,
      published = @published, updated_at = datetime('now')
  WHERE id = @id
`);
const deleteService = db.prepare("DELETE FROM services WHERE id = ?");

const getLinkedFleet = db.prepare(`
  SELECT
    (CASE WHEN sf.kind = 'vehicle' THEN 'v' ELSE 'c' END) || ':' || sf.ref_id AS id,
    CASE WHEN sf.kind = 'vehicle' THEN v.name ELSE c.title END AS name,
    CASE WHEN sf.kind = 'vehicle' THEN v.image ELSE c.image END AS image,
    CASE WHEN sf.kind = 'vehicle' THEN v.image_alt ELSE c.image_alt END AS image_alt,
    CASE WHEN sf.kind = 'vehicle' THEN v.image_title ELSE c.image_title END AS image_title,
    CASE WHEN sf.kind = 'vehicle' THEN NULLIF(v.excerpt, '') ELSE NULL END AS excerpt,
    CASE WHEN sf.kind = 'vehicle' THEN v.description ELSE c.description END AS description
  FROM service_fleet sf
  LEFT JOIN fleet_vehicles v ON sf.kind = 'vehicle' AND v.id = sf.ref_id
  LEFT JOIN fleet_cards c ON sf.kind = 'card' AND c.id = sf.ref_id
  WHERE sf.service_id = ? AND (v.id IS NOT NULL OR c.id IS NOT NULL)
  ORDER BY sf.sort_order ASC
`);
const deleteFleetLinks = db.prepare("DELETE FROM service_fleet WHERE service_id = ?");
const insertFleetLink = db.prepare(
  "INSERT INTO service_fleet (service_id, kind, ref_id, sort_order) VALUES (?, ?, ?, ?)"
);
const vehicleExists = db.prepare("SELECT 1 FROM fleet_vehicles WHERE id = ?");
const cardExists = db.prepare("SELECT 1 FROM fleet_cards WHERE id = ?");

const listSections = db.prepare(
  "SELECT id, eyebrow, heading, text, image, image_alt, image_title, sort_order FROM service_sections WHERE service_id = ? ORDER BY sort_order ASC, id ASC"
);
const deleteSections = db.prepare("DELETE FROM service_sections WHERE service_id = ?");
const insertSection = db.prepare(`
  INSERT INTO service_sections (service_id, eyebrow, heading, text, image, image_alt, image_title, sort_order)
  VALUES (@service_id, @eyebrow, @heading, @text, @image, @image_alt, @image_title, @sort_order)
`);

// Each selection is a string like "v:6" (fleet_vehicles.id) or "c:12" (fleet_cards.id).
function parseFleetIds(req) {
  try {
    const raw = req.body?.fleetIds ? JSON.parse(req.body.fleetIds) : [];
    if (!Array.isArray(raw)) return [];
    return raw
      .map((s) => {
        const m = /^(v|c):(\d+)$/.exec(String(s));
        if (!m) return null;
        return { kind: m[1] === "v" ? "vehicle" : "card", refId: Number(m[2]) };
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

function saveFleetLinks(serviceId, selections) {
  deleteFleetLinks.run(serviceId);
  selections.forEach((sel, i) => {
    const exists = sel.kind === "vehicle" ? vehicleExists.get(sel.refId) : cardExists.get(sel.refId);
    if (exists) {
      insertFleetLink.run(serviceId, sel.kind, sel.refId, i);
    }
  });
}

// `sections` arrives as a JSON string: [{ eyebrow, heading, text, keepImage, imageAlt, imageTitle }, ...].
// Any new file for section index i is sent as a separate field named sectionImage_<i>.
function parseSectionsInput(req) {
  let raw = [];
  try {
    raw = req.body?.sections ? JSON.parse(req.body.sections) : [];
  } catch {
    return [];
  }
  if (!Array.isArray(raw)) return [];

  const files = Array.isArray(req.files) ? req.files : [];
  return raw
    .map((section, i) => ({
      eyebrow: String(section.eyebrow || "").trim(),
      heading: String(section.heading || "").trim(),
      text: String(section.text || "").trim(),
      imageAlt: String(section.imageAlt || "").trim(),
      imageTitle: String(section.imageTitle || "").trim(),
      keepImage: Boolean(section.keepImage),
      file: files.find((f) => f.fieldname === `sectionImage_${i}`) || null,
    }))
    .filter((section) => section.heading || section.text);
}

function saveSections(serviceId, sections, previousSections = []) {
  deleteSections.run(serviceId);
  sections.forEach((section, i) => {
    let image = null;
    if (section.file) {
      image = `/uploads/${section.file.filename}`;
    } else if (section.keepImage && previousSections[i]) {
      image = previousSections[i].image;
    }
    insertSection.run({
      service_id: serviceId,
      eyebrow: section.eyebrow,
      heading: section.heading,
      text: section.text,
      image,
      image_alt: section.imageAlt,
      image_title: section.imageTitle,
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
  res.json({ services: rows });
});

router.get("/:slug", (req, res) => {
  const row = getBySlug.get(req.params.slug);
  if (!row || (!row.published && req.query.all !== "1")) {
    return res.status(404).json({ error: "Service not found." });
  }
  res.json({
    service: { ...row, fleet: getLinkedFleet.all(row.id), sections: listSections.all(row.id) },
  });
});

router.post("/", requireAuth, requireRole("admin", "editor"), upload.any(), (req, res) => {
  const { title, excerpt = "", description = "", image_alt = "", image_title = "", published = "1" } =
    req.body || {};
  if (!title || !title.trim()) {
    return res.status(400).json({ error: "Title is required." });
  }
  const slug = uniqueSlug(title, (s) => Boolean(slugExists.get(s)));
  const mainImage = findMainImageFile(req);
  const image = mainImage ? `/uploads/${mainImage.filename}` : null;

  const result = insertService.run({
    title: title.trim(),
    slug,
    excerpt: excerpt.trim(),
    description: description.trim(),
    image,
    image_alt: image_alt.trim(),
    image_title: image_title.trim(),
    published: published === "0" ? 0 : 1,
  });

  const serviceId = result.lastInsertRowid;
  saveFleetLinks(serviceId, parseFleetIds(req));
  saveSections(serviceId, parseSectionsInput(req));

  res.status(201).json({
    service: {
      ...getById.get(serviceId),
      fleet: getLinkedFleet.all(serviceId),
      sections: listSections.all(serviceId),
    },
  });
});

router.patch("/:id", requireAuth, requireRole("admin", "editor"), upload.any(), (req, res) => {
  const id = Number(req.params.id);
  const existing = getById.get(id);
  if (!existing) return res.status(404).json({ error: "Service not found." });

  const { title, excerpt, description, image_alt, image_title, published } = req.body || {};
  const mainImage = findMainImageFile(req);
  const image = mainImage ? `/uploads/${mainImage.filename}` : null;

  updateService.run({
    id,
    title: (title ?? existing.title).trim(),
    excerpt: (excerpt ?? existing.excerpt).trim(),
    description: (description ?? existing.description).trim(),
    image,
    image_alt: (image_alt ?? existing.image_alt ?? "").trim(),
    image_title: (image_title ?? existing.image_title ?? "").trim(),
    published: published === undefined ? existing.published : published === "0" ? 0 : 1,
  });

  if (req.body?.fleetIds !== undefined) {
    saveFleetLinks(id, parseFleetIds(req));
  }

  if (req.body?.sections !== undefined) {
    const previousSections = listSections.all(id);
    saveSections(id, parseSectionsInput(req), previousSections);
  }

  res.json({
    service: { ...getById.get(id), fleet: getLinkedFleet.all(id), sections: listSections.all(id) },
  });
});

router.delete("/:id", requireAuth, requireRole("admin", "editor"), (req, res) => {
  const id = Number(req.params.id);
  if (!getById.get(id)) return res.status(404).json({ error: "Service not found." });
  deleteService.run(id);
  res.json({ ok: true });
});

export default router;

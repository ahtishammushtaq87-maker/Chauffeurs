import { Router } from "express";
import db from "../db/index.js";
import { requireAuth, requireRole } from "../middleware/auth.js";

const router = Router();

const listAll = db.prepare("SELECT id, path, title, description FROM seo_meta ORDER BY path ASC");
const getByPath = db.prepare("SELECT id, path, title, description FROM seo_meta WHERE path = ?");
const getById = db.prepare("SELECT id, path, title, description FROM seo_meta WHERE id = ?");
const insertMeta = db.prepare(
  "INSERT INTO seo_meta (path, title, description) VALUES (@path, @title, @description)"
);
const updateMeta = db.prepare(
  "UPDATE seo_meta SET title = @title, description = @description, updated_at = datetime('now') WHERE path = @path"
);
const deleteMeta = db.prepare("DELETE FROM seo_meta WHERE id = ?");

// Public: every visitor's browser reads this once to apply per-page title/description overrides.
router.get("/", (_req, res) => {
  res.json({ items: listAll.all() });
});

router.put("/", requireAuth, requireRole("admin", "editor"), (req, res) => {
  const { path: pagePath, title = "", description = "" } = req.body || {};
  if (!pagePath || !String(pagePath).trim()) {
    return res.status(400).json({ error: "Page path is required." });
  }
  const normalizedPath = String(pagePath).trim();

  const existing = getByPath.get(normalizedPath);
  if (existing) {
    updateMeta.run({ path: normalizedPath, title: title.trim(), description: description.trim() });
    return res.json({ item: getByPath.get(normalizedPath) });
  }

  const result = insertMeta.run({ path: normalizedPath, title: title.trim(), description: description.trim() });
  res.status(201).json({ item: getById.get(result.lastInsertRowid) });
});

router.delete("/:id", requireAuth, requireRole("admin", "editor"), (req, res) => {
  const id = Number(req.params.id);
  if (!getById.get(id)) return res.status(404).json({ error: "Not found." });
  deleteMeta.run(id);
  res.json({ ok: true });
});

export default router;

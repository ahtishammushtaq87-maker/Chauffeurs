import { Router } from "express";
import db from "../db/index.js";
import { requireAuth, requireRole } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";
import { uniqueSlug } from "../utils/slugify.js";

const router = Router();

const listPublished = db.prepare(
  "SELECT * FROM blog_posts WHERE published = 1 ORDER BY published_at DESC"
);
const listAll = db.prepare("SELECT * FROM blog_posts ORDER BY published_at DESC");
const getBySlug = db.prepare("SELECT * FROM blog_posts WHERE slug = ?");
const getById = db.prepare("SELECT * FROM blog_posts WHERE id = ?");
const slugExists = db.prepare("SELECT 1 FROM blog_posts WHERE slug = ?");
const insertPost = db.prepare(`
  INSERT INTO blog_posts (title, slug, category, excerpt, content, image, image_alt, image_title, author, published, published_at)
  VALUES (@title, @slug, @category, @excerpt, @content, @image, @image_alt, @image_title, @author, @published, datetime('now'))
`);
const updatePost = db.prepare(`
  UPDATE blog_posts
  SET title = @title, category = @category, excerpt = @excerpt, content = @content,
      image = COALESCE(@image, image), image_alt = @image_alt, image_title = @image_title,
      author = @author, published = @published,
      updated_at = datetime('now')
  WHERE id = @id
`);
const deletePost = db.prepare("DELETE FROM blog_posts WHERE id = ?");

router.get("/", (req, res) => {
  const rows = req.query.all === "1" ? listAll.all() : listPublished.all();
  res.json({ posts: rows });
});

router.get("/:slug", (req, res) => {
  const row = getBySlug.get(req.params.slug);
  if (!row || (!row.published && req.query.all !== "1")) {
    return res.status(404).json({ error: "Post not found." });
  }
  res.json({ post: row });
});

router.post("/", requireAuth, requireRole("admin", "editor"), upload.single("image"), (req, res) => {
  const {
    title,
    category = "",
    excerpt = "",
    content = "",
    image_alt = "",
    image_title = "",
    author = "Swift Chauffeurs Team",
    published = "1",
  } = req.body || {};
  if (!title || !title.trim()) {
    return res.status(400).json({ error: "Title is required." });
  }
  const slug = uniqueSlug(title, (s) => Boolean(slugExists.get(s)));
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  const result = insertPost.run({
    title: title.trim(),
    slug,
    category: category.trim(),
    excerpt: excerpt.trim(),
    content: content.trim(),
    image,
    image_alt: image_alt.trim(),
    image_title: image_title.trim(),
    author: author.trim() || "Swift Chauffeurs Team",
    published: published === "0" ? 0 : 1,
  });
  res.status(201).json({ post: getById.get(result.lastInsertRowid) });
});

router.patch("/:id", requireAuth, requireRole("admin", "editor"), upload.single("image"), (req, res) => {
  const id = Number(req.params.id);
  const existing = getById.get(id);
  if (!existing) return res.status(404).json({ error: "Post not found." });

  const { title, category, excerpt, content, image_alt, image_title, author, published } = req.body || {};
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  updatePost.run({
    id,
    title: (title ?? existing.title).trim(),
    category: (category ?? existing.category).trim(),
    excerpt: (excerpt ?? existing.excerpt).trim(),
    content: (content ?? existing.content).trim(),
    image,
    image_alt: (image_alt ?? existing.image_alt ?? "").trim(),
    image_title: (image_title ?? existing.image_title ?? "").trim(),
    author: (author ?? existing.author).trim(),
    published: published === undefined ? existing.published : published === "0" ? 0 : 1,
  });
  res.json({ post: getById.get(id) });
});

router.delete("/:id", requireAuth, requireRole("admin", "editor"), (req, res) => {
  const id = Number(req.params.id);
  if (!getById.get(id)) return res.status(404).json({ error: "Post not found." });
  deletePost.run(id);
  res.json({ ok: true });
});

export default router;

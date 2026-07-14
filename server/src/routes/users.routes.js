import { Router } from "express";
import bcrypt from "bcryptjs";
import db from "../db/index.js";
import { requireAuth, requireRole } from "../middleware/auth.js";

const router = Router();
router.use(requireAuth, requireRole("admin"));

const listUsers = db.prepare("SELECT id, name, email, role, created_at FROM users ORDER BY created_at ASC");
const getUserByEmail = db.prepare("SELECT id FROM users WHERE email = ?");
const insertUser = db.prepare(
  "INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)"
);
const getUserById = db.prepare("SELECT id, name, email, role FROM users WHERE id = ?");
const updateUserRole = db.prepare("UPDATE users SET role = ? WHERE id = ?");
const updateUserName = db.prepare("UPDATE users SET name = ? WHERE id = ?");
const updateUserPassword = db.prepare("UPDATE users SET password_hash = ? WHERE id = ?");
const deleteUser = db.prepare("DELETE FROM users WHERE id = ?");
const countAdmins = db.prepare("SELECT COUNT(*) AS n FROM users WHERE role = 'admin'");

router.get("/", (_req, res) => {
  res.json({ users: listUsers.all() });
});

router.post("/", (req, res) => {
  const { name, email, password, role } = req.body || {};
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Name, email, and password are required." });
  }
  if (password.length < 8) {
    return res.status(400).json({ error: "Password must be at least 8 characters." });
  }
  const normalizedEmail = String(email).toLowerCase().trim();
  if (getUserByEmail.get(normalizedEmail)) {
    return res.status(409).json({ error: "A user with that email already exists." });
  }
  const finalRole = role === "admin" ? "admin" : "editor";
  const passwordHash = bcrypt.hashSync(password, 10);
  const result = insertUser.run(name.trim(), normalizedEmail, passwordHash, finalRole);
  res.status(201).json({ user: getUserById.get(result.lastInsertRowid) });
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const existing = getUserById.get(id);
  if (!existing) return res.status(404).json({ error: "User not found." });

  const { name, role, password } = req.body || {};

  if (role && role !== existing.role) {
    if (existing.role === "admin" && role !== "admin" && countAdmins.get().n <= 1) {
      return res.status(400).json({ error: "At least one admin account must remain." });
    }
    updateUserRole.run(role === "admin" ? "admin" : "editor", id);
  }
  if (name && name.trim()) {
    updateUserName.run(name.trim(), id);
  }
  if (password) {
    if (password.length < 8) {
      return res.status(400).json({ error: "Password must be at least 8 characters." });
    }
    updateUserPassword.run(bcrypt.hashSync(password, 10), id);
  }

  res.json({ user: getUserById.get(id) });
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const existing = getUserById.get(id);
  if (!existing) return res.status(404).json({ error: "User not found." });
  if (id === req.user.id) {
    return res.status(400).json({ error: "You can't delete your own account while logged in." });
  }
  if (existing.role === "admin" && countAdmins.get().n <= 1) {
    return res.status(400).json({ error: "At least one admin account must remain." });
  }
  deleteUser.run(id);
  res.json({ ok: true });
});

export default router;

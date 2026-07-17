import { Router } from "express";
import db from "../db/index.js";
import { requireAuth, requireRole } from "../middleware/auth.js";
import { sendNotificationEmail } from "../utils/mailer.js";
import { renderAppointmentEmail } from "../utils/emailTemplates.js";

const router = Router();

const insertAppointment = db.prepare(`
  INSERT INTO appointments (first_name, last_name, email, phone, interest, hear_about, message, source_path)
  VALUES (@first_name, @last_name, @email, @phone, @interest, @hear_about, @message, @source_path)
`);
const getById = db.prepare("SELECT * FROM appointments WHERE id = ?");
const updateStatus = db.prepare("UPDATE appointments SET status = ? WHERE id = ?");
const deleteAppointment = db.prepare("DELETE FROM appointments WHERE id = ?");

// Public: anyone submitting the "Get in Touch" form (Home page or /contact).
router.post("/", (req, res) => {
  const b = req.body || {};
  if (!b.email?.trim() && !b.phone?.trim()) {
    return res.status(400).json({ error: "Please provide at least an email or phone number." });
  }

  const result = insertAppointment.run({
    first_name: (b.firstName || "").trim(),
    last_name: (b.lastName || "").trim(),
    email: (b.email || "").trim(),
    phone: (b.phone || "").trim(),
    interest: (b.interest || "").trim(),
    hear_about: (b.hearAbout || "").trim(),
    message: (b.message || "").trim(),
    source_path: (b.sourcePath || "").trim(),
  });

  const appointment = getById.get(result.lastInsertRowid);
  res.status(201).json({ appointment });

  const name = [appointment.first_name, appointment.last_name].filter(Boolean).join(" ");
  sendNotificationEmail({
    subject: `New Appointment Request — ${name || appointment.email || "Website Visitor"}`,
    html: renderAppointmentEmail(appointment),
  }).catch(() => {});
});

// Admin: list with optional filters — status, interest, q (search), from/to (created_at date range).
router.get("/", requireAuth, requireRole("admin", "editor"), (req, res) => {
  const { status, interest, q, from, to } = req.query;
  const clauses = [];
  const params = {};

  if (status) {
    clauses.push("status = @status");
    params.status = status;
  }
  if (interest) {
    clauses.push("interest = @interest");
    params.interest = interest;
  }
  if (from) {
    clauses.push("date(created_at) >= date(@from)");
    params.from = from;
  }
  if (to) {
    clauses.push("date(created_at) <= date(@to)");
    params.to = to;
  }
  if (q) {
    clauses.push("(first_name LIKE @q OR last_name LIKE @q OR email LIKE @q OR phone LIKE @q)");
    params.q = `%${q}%`;
  }

  const where = clauses.length ? `WHERE ${clauses.join(" AND ")}` : "";
  const rows = db.prepare(`SELECT * FROM appointments ${where} ORDER BY created_at DESC`).all(params);
  res.json({ appointments: rows });
});

// Renders the exact HTML that was (or would be) emailed for this request, so
// admins can preview the notification design from the dashboard.
router.get("/:id/email-preview", requireAuth, requireRole("admin", "editor"), (req, res) => {
  const appointment = getById.get(Number(req.params.id));
  if (!appointment) return res.status(404).send("Not found.");
  res.set("Content-Type", "text/html").send(renderAppointmentEmail(appointment));
});

router.patch("/:id", requireAuth, requireRole("admin", "editor"), (req, res) => {
  const id = Number(req.params.id);
  if (!getById.get(id)) return res.status(404).json({ error: "Not found." });
  const { status } = req.body || {};
  if (!["new", "contacted", "booked", "closed"].includes(status)) {
    return res.status(400).json({ error: "Invalid status." });
  }
  updateStatus.run(status, id);
  res.json({ appointment: getById.get(id) });
});

router.delete("/:id", requireAuth, requireRole("admin", "editor"), (req, res) => {
  const id = Number(req.params.id);
  if (!getById.get(id)) return res.status(404).json({ error: "Not found." });
  deleteAppointment.run(id);
  res.json({ ok: true });
});

export default router;

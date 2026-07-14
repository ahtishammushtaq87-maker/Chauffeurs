import { Router } from "express";
import db from "../db/index.js";
import { requireAuth, requireRole } from "../middleware/auth.js";
import { sendNotificationEmail } from "../utils/mailer.js";
import { renderQuoteEmail } from "../utils/emailTemplates.js";

const router = Router();

const insertQuote = db.prepare(`
  INSERT INTO quote_requests
    (name, passengers, contact_no, email, service_type, vehicle, pickup_date, pickup_time, hours,
     pickup_address, destination_address, source_path)
  VALUES (@name, @passengers, @contact_no, @email, @service_type, @vehicle, @pickup_date, @pickup_time, @hours,
          @pickup_address, @destination_address, @source_path)
`);
const getById = db.prepare("SELECT * FROM quote_requests WHERE id = ?");
const updateStatus = db.prepare("UPDATE quote_requests SET status = ? WHERE id = ?");
const deleteQuote = db.prepare("DELETE FROM quote_requests WHERE id = ?");

// Public: anyone submitting the "Get An Instant Quote" form on any page.
router.post("/", (req, res) => {
  const b = req.body || {};
  if (!b.name?.trim() && !b.contactNo?.trim() && !b.email?.trim()) {
    return res.status(400).json({ error: "Please provide at least a name, phone, or email." });
  }

  const result = insertQuote.run({
    name: (b.name || "").trim(),
    passengers: (b.passengers || "").trim(),
    contact_no: (b.contactNo || "").trim(),
    email: (b.email || "").trim(),
    service_type: (b.serviceType || "").trim(),
    vehicle: (b.vehicle || "").trim(),
    pickup_date: (b.pickupDate || "").trim(),
    pickup_time: (b.pickupTime || "").trim(),
    hours: (b.hours || "").trim(),
    pickup_address: (b.pickupAddress || "").trim(),
    destination_address: (b.destinationAddress || "").trim(),
    source_path: (b.sourcePath || "").trim(),
  });

  const quote = getById.get(result.lastInsertRowid);
  res.status(201).json({ quote });

  // Don't let email delivery delay or break the visitor's form submission.
  sendNotificationEmail({
    subject: `New Instant Quote Request — ${quote.name || quote.email || "Website Visitor"}`,
    html: renderQuoteEmail(quote),
  }).catch(() => {});
});

// Admin: list with optional filters — status, serviceType, vehicle, q (search), from/to (created_at date range).
router.get("/", requireAuth, requireRole("admin", "editor"), (req, res) => {
  const { status, serviceType, vehicle, q, from, to } = req.query;
  const clauses = [];
  const params = {};

  if (status) {
    clauses.push("status = @status");
    params.status = status;
  }
  if (serviceType) {
    clauses.push("service_type = @serviceType");
    params.serviceType = serviceType;
  }
  if (vehicle) {
    clauses.push("vehicle = @vehicle");
    params.vehicle = vehicle;
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
    clauses.push("(name LIKE @q OR email LIKE @q OR contact_no LIKE @q)");
    params.q = `%${q}%`;
  }

  const where = clauses.length ? `WHERE ${clauses.join(" AND ")}` : "";
  const rows = db.prepare(`SELECT * FROM quote_requests ${where} ORDER BY created_at DESC`).all(params);
  res.json({ quotes: rows });
});

// Renders the exact HTML that was (or would be) emailed for this request, so
// admins can preview the notification design from the dashboard.
router.get("/:id/email-preview", requireAuth, requireRole("admin", "editor"), (req, res) => {
  const quote = getById.get(Number(req.params.id));
  if (!quote) return res.status(404).send("Not found.");
  res.set("Content-Type", "text/html").send(renderQuoteEmail(quote));
});

router.patch("/:id", requireAuth, requireRole("admin", "editor"), (req, res) => {
  const id = Number(req.params.id);
  if (!getById.get(id)) return res.status(404).json({ error: "Not found." });
  const { status } = req.body || {};
  if (!["new", "contacted", "booked", "closed"].includes(status)) {
    return res.status(400).json({ error: "Invalid status." });
  }
  updateStatus.run(status, id);
  res.json({ quote: getById.get(id) });
});

router.delete("/:id", requireAuth, requireRole("admin", "editor"), (req, res) => {
  const id = Number(req.params.id);
  if (!getById.get(id)) return res.status(404).json({ error: "Not found." });
  deleteQuote.run(id);
  res.json({ ok: true });
});

export default router;

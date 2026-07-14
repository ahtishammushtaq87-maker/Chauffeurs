import { Router } from "express";
import db from "../db/index.js";

const router = Router();

const services = db.prepare(
  "SELECT title AS label, slug FROM services WHERE published = 1 AND hidden_from_nav = 0 ORDER BY created_at DESC"
);
const vehicles = db.prepare(
  "SELECT name AS label, slug FROM fleet_vehicles WHERE published = 1 AND hidden = 0 ORDER BY created_at DESC"
);

router.get("/", (_req, res) => {
  res.json({
    services: services.all().map((s) => ({ label: s.label, path: `/services/${s.slug}` })),
    fleet: vehicles.all().map((v) => ({ label: v.label, path: `/fleet/${v.slug}` })),
  });
});

export default router;

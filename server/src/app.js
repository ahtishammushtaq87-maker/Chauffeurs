import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { uploadsDir } from "./middleware/upload.js";

import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";
import servicesRoutes from "./routes/services.routes.js";
import fleetRoutes from "./routes/fleet.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import menuRoutes from "./routes/menu.routes.js";
import seoRoutes from "./routes/seo.routes.js";
import quotesRoutes from "./routes/quotes.routes.js";
import appointmentsRoutes from "./routes/appointments.routes.js";
import settingsRoutes from "./routes/settings.routes.js";
import captchaRoutes from "./routes/captcha.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(uploadsDir));

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/fleet", fleetRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/seo", seoRoutes);
app.use("/api/quotes", quotesRoutes);
app.use("/api/appointments", appointmentsRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/captcha", captchaRoutes);

// Multer and other request errors land here instead of crashing the process.
app.use((err, _req, res, _next) => {
  console.error(err);
  const status = err.status || 400;
  res.status(status).json({ error: err.message || "Something went wrong." });
});

export default app;

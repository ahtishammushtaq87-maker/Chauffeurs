import { Router } from "express";
import { requireAuth, requireRole } from "../middleware/auth.js";
import { getEmailSettings, saveEmailSettings, sendTestEmail } from "../utils/mailer.js";
import { getSiteSettings, saveSiteSettings } from "../utils/siteSettings.js";
import { uploadBranding } from "../middleware/upload.js";

const router = Router();

// Public: the site-wide contact/social info shown in the header, footer, and
// every "Call Now" / WhatsApp button. Read-only here — editing requires auth below.
router.get("/site", (_req, res) => {
  const settings = getSiteSettings();
  res.json({
    settings: {
      phone_1: settings?.phone_1 || "",
      phone_2: settings?.phone_2 || "",
      email: settings?.email || "",
      whatsapp_number: settings?.whatsapp_number || "",
      address: settings?.address || "",
      facebook_url: settings?.facebook_url || "",
      instagram_url: settings?.instagram_url || "",
      tiktok_url: settings?.tiktok_url || "",
      logo_url: settings?.logo_url || "",
      favicon_url: settings?.favicon_url || "",
    },
  });
});

// Admin-only: these routes expose/manage SMTP credentials.
router.use(requireAuth, requireRole("admin"));

router.put("/site", uploadBranding.any(), (req, res) => {
  const b = req.body || {};
  const files = Array.isArray(req.files) ? req.files : [];
  const logoFile = files.find((f) => f.fieldname === "logo");
  const faviconFile = files.find((f) => f.fieldname === "favicon");

  const saved = saveSiteSettings({
    phone_1: b.phone_1?.trim(),
    phone_2: b.phone_2?.trim(),
    email: b.email?.trim(),
    whatsapp_number: b.whatsapp_number?.trim(),
    address: b.address?.trim(),
    facebook_url: b.facebook_url?.trim(),
    instagram_url: b.instagram_url?.trim(),
    tiktok_url: b.tiktok_url?.trim(),
    logo_url: logoFile ? `/uploads/${logoFile.filename}` : undefined,
    favicon_url: faviconFile ? `/uploads/${faviconFile.filename}` : undefined,
  });
  res.json({ settings: saved });
});

router.get("/email", (_req, res) => {
  const settings = getEmailSettings();
  res.json({
    settings: {
      smtp_host: settings?.smtp_host || "",
      smtp_port: settings?.smtp_port || "587",
      smtp_secure: Boolean(settings?.smtp_secure),
      smtp_user: settings?.smtp_user || "",
      smtp_password_set: Boolean(settings?.smtp_password),
      from_name: settings?.from_name || "Swift Chauffeurs",
      from_email: settings?.from_email || "",
      notify_email: settings?.notify_email || "",
      enabled: Boolean(settings?.enabled),
    },
  });
});

router.put("/email", (req, res) => {
  const b = req.body || {};
  const saved = saveEmailSettings({
    smtp_host: b.smtp_host?.trim(),
    smtp_port: b.smtp_port?.trim(),
    smtp_secure: Boolean(b.smtp_secure),
    smtp_user: b.smtp_user?.trim(),
    smtp_password: b.smtp_password?.trim(), // blank = keep existing (handled in saveEmailSettings)
    from_name: b.from_name?.trim(),
    from_email: b.from_email?.trim(),
    notify_email: b.notify_email?.trim(),
    enabled: Boolean(b.enabled),
  });
  res.json({
    settings: {
      smtp_host: saved.smtp_host,
      smtp_port: saved.smtp_port,
      smtp_secure: Boolean(saved.smtp_secure),
      smtp_user: saved.smtp_user,
      smtp_password_set: Boolean(saved.smtp_password),
      from_name: saved.from_name,
      from_email: saved.from_email,
      notify_email: saved.notify_email,
      enabled: Boolean(saved.enabled),
    },
  });
});

router.post("/email/test", async (_req, res) => {
  try {
    await sendTestEmail();
    res.json({ ok: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;

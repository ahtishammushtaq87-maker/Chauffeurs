import nodemailer from "nodemailer";
import db from "../db/index.js";

const getSettings = db.prepare("SELECT * FROM email_settings WHERE id = 1");
const upsertSettings = db.prepare(`
  INSERT INTO email_settings (id, smtp_host, smtp_port, smtp_secure, smtp_user, smtp_password, from_name, from_email, notify_email, enabled, updated_at)
  VALUES (1, @smtp_host, @smtp_port, @smtp_secure, @smtp_user, @smtp_password, @from_name, @from_email, @notify_email, @enabled, datetime('now'))
  ON CONFLICT(id) DO UPDATE SET
    smtp_host = excluded.smtp_host,
    smtp_port = excluded.smtp_port,
    smtp_secure = excluded.smtp_secure,
    smtp_user = excluded.smtp_user,
    smtp_password = excluded.smtp_password,
    from_name = excluded.from_name,
    from_email = excluded.from_email,
    notify_email = excluded.notify_email,
    enabled = excluded.enabled,
    updated_at = datetime('now')
`);

export function getEmailSettings() {
  return getSettings.get() || null;
}

export function saveEmailSettings(next) {
  const current = getEmailSettings();
  upsertSettings.run({
    smtp_host: next.smtp_host ?? current?.smtp_host ?? "",
    smtp_port: next.smtp_port ?? current?.smtp_port ?? "587",
    smtp_secure: next.smtp_secure ? 1 : 0,
    smtp_user: next.smtp_user ?? current?.smtp_user ?? "",
    // Keep the existing password when the field is left blank (frontend never re-sends the real value).
    smtp_password: next.smtp_password ? next.smtp_password : current?.smtp_password ?? "",
    from_name: next.from_name ?? current?.from_name ?? "Swift Chauffeurs",
    from_email: next.from_email ?? current?.from_email ?? "",
    notify_email: next.notify_email ?? current?.notify_email ?? "",
    enabled: next.enabled ? 1 : 0,
  });
  return getEmailSettings();
}

function buildTransport(settings) {
  return nodemailer.createTransport({
    host: settings.smtp_host,
    port: Number(settings.smtp_port) || 587,
    secure: Boolean(settings.smtp_secure),
    auth: settings.smtp_user ? { user: settings.smtp_user, pass: settings.smtp_password } : undefined,
  });
}

// Fire-and-forget style: callers should not let a mail failure block the
// public form submission response, so errors are caught and logged here.
export async function sendNotificationEmail({ subject, html }) {
  const settings = getEmailSettings();
  if (!settings || !settings.enabled || !settings.smtp_host || !settings.notify_email) {
    return { sent: false, reason: "Email notifications are not configured or enabled." };
  }

  try {
    const transport = buildTransport(settings);
    await transport.sendMail({
      from: `"${settings.from_name || "Swift Chauffeurs"}" <${settings.from_email || settings.smtp_user}>`,
      to: settings.notify_email,
      subject,
      html,
    });
    return { sent: true };
  } catch (err) {
    console.error("Failed to send notification email:", err.message);
    return { sent: false, reason: err.message };
  }
}

export async function sendTestEmail(settingsOverride) {
  const settings = settingsOverride || getEmailSettings();
  if (!settings || !settings.smtp_host || !settings.notify_email) {
    throw new Error("SMTP host and notify email are required to send a test email.");
  }
  const transport = buildTransport(settings);
  await transport.sendMail({
    from: `"${settings.from_name || "Swift Chauffeurs"}" <${settings.from_email || settings.smtp_user}>`,
    to: settings.notify_email,
    subject: "Swift Chauffeurs — Test Email",
    html: "<p>This is a test email from your Swift Chauffeurs dashboard settings. If you received this, your email notifications are configured correctly.</p>",
  });
}

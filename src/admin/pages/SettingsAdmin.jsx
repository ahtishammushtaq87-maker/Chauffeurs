import { useEffect, useState } from "react";
import { apiGet, apiJson, apiForm } from "../../lib/api";

const emptyForm = {
  smtp_host: "",
  smtp_port: "587",
  smtp_secure: false,
  smtp_user: "",
  smtp_password: "",
  from_name: "Swift Chauffeurs",
  from_email: "",
  notify_email: "",
  enabled: false,
};

const emptySiteForm = {
  phone_1: "",
  phone_2: "",
  email: "",
  whatsapp_number: "",
  address: "",
  facebook_url: "",
  instagram_url: "",
  tiktok_url: "",
  logo_url: "",
  favicon_url: "",
};

function SiteContactSettings() {
  const [form, setForm] = useState(emptySiteForm);
  const [logoFile, setLogoFile] = useState(null);
  const [faviconFile, setFaviconFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [faviconPreview, setFaviconPreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    apiGet("/settings/site").then(({ settings }) => {
      setForm(settings);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!logoFile) {
      setLogoPreview(null);
      return;
    }
    const url = URL.createObjectURL(logoFile);
    setLogoPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [logoFile]);

  useEffect(() => {
    if (!faviconFile) {
      setFaviconPreview(null);
      return;
    }
    const url = URL.createObjectURL(faviconFile);
    setFaviconPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [faviconFile]);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setSaving(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (key !== "logo_url" && key !== "favicon_url") fd.append(key, value ?? "");
      });
      if (logoFile) fd.append("logo", logoFile);
      if (faviconFile) fd.append("favicon", faviconFile);

      const { settings } = await apiForm("/settings/site", "PUT", fd);
      setForm(settings);
      setLogoFile(null);
      setFaviconFile(null);
      setMessage("Contact info saved.");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="text-sm text-text-muted">Loading…</p>;
  }

  return (
    <form onSubmit={handleSave} className="flex max-w-xl flex-col gap-4 rounded-xl border border-border bg-panel p-6">
      <h2 className="text-sm font-semibold text-text">Contact &amp; Social Links</h2>
      <p className="text-xs text-text-muted">
        Used everywhere across the site — header, footer, "Call Now" buttons, the WhatsApp button, and the Contact
        page.
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
            Phone Number 1
          </label>
          <input
            value={form.phone_1}
            onChange={handleChange("phone_1")}
            placeholder="+1 (615) 882-1722"
            className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
            Phone Number 2
          </label>
          <input
            value={form.phone_2}
            onChange={handleChange("phone_2")}
            placeholder="+1 (201) 979-7374"
            className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
            WhatsApp Number
          </label>
          <input
            value={form.whatsapp_number}
            onChange={handleChange("whatsapp_number")}
            placeholder="16158821722 (digits only, with country code)"
            className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            placeholder="contact@swiftchauffeurs.com"
            className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">Address</label>
        <input
          value={form.address}
          onChange={handleChange("address")}
          placeholder="Nashville, TN, USA"
          className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
        />
      </div>

      <div className="border-t border-border pt-4">
        <p className="mb-3 text-xs font-semibold tracking-wide text-text-muted uppercase">Branding</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">Logo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
              className="w-full text-sm text-text-muted"
            />
            {(logoPreview || form.logo_url) && (
              <div className="mt-2 flex h-14 w-auto max-w-[160px] items-center overflow-hidden rounded-md border border-border-strong bg-ink p-2">
                <img src={logoPreview || form.logo_url} alt="Logo preview" className="h-full w-auto object-contain" />
              </div>
            )}
            <p className="mt-1.5 text-[11px] text-text-faint">Shown in the header and footer. Leave blank to keep the default.</p>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">Favicon</label>
            <input
              type="file"
              accept="image/*,.ico,.svg"
              onChange={(e) => setFaviconFile(e.target.files?.[0] || null)}
              className="w-full text-sm text-text-muted"
            />
            {(faviconPreview || form.favicon_url) && (
              <div className="mt-2 flex h-14 w-14 items-center justify-center overflow-hidden rounded-md border border-border-strong bg-bg p-2">
                <img src={faviconPreview || form.favicon_url} alt="Favicon preview" className="h-full w-full object-contain" />
              </div>
            )}
            <p className="mt-1.5 text-[11px] text-text-faint">Shown in the browser tab. Square images work best.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <p className="mb-3 text-xs font-semibold tracking-wide text-text-muted uppercase">Social Links</p>
        <div className="flex flex-col gap-3">
          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              Facebook URL
            </label>
            <input
              value={form.facebook_url}
              onChange={handleChange("facebook_url")}
              placeholder="https://facebook.com/yourpage"
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              Instagram URL
            </label>
            <input
              value={form.instagram_url}
              onChange={handleChange("instagram_url")}
              placeholder="https://instagram.com/yourpage"
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              TikTok URL
            </label>
            <input
              value={form.tiktok_url}
              onChange={handleChange("tiktok_url")}
              placeholder="https://tiktok.com/@yourpage"
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
            />
          </div>
        </div>
        <p className="mt-3 text-xs text-text-faint">Leave a social link blank to hide that icon on the site.</p>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {message && <p className="text-sm text-green-600">{message}</p>}

      <button type="submit" disabled={saving} className="btn btn-gold w-fit disabled:opacity-60">
        {saving ? "Saving…" : "Save Contact Info"}
      </button>
    </form>
  );
}

export default function SettingsAdmin() {
  const [form, setForm] = useState(emptyForm);
  const [passwordSet, setPasswordSet] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const load = async () => {
    setLoading(true);
    const { settings } = await apiGet("/settings/email");
    setForm({
      smtp_host: settings.smtp_host,
      smtp_port: settings.smtp_port,
      smtp_secure: settings.smtp_secure,
      smtp_user: settings.smtp_user,
      smtp_password: "",
      from_name: settings.from_name,
      from_email: settings.from_email,
      notify_email: settings.notify_email,
      enabled: settings.enabled,
    });
    setPasswordSet(settings.smtp_password_set);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setSaving(true);
    try {
      const { settings } = await apiJson("/settings/email", "PUT", form);
      setPasswordSet(settings.smtp_password_set);
      setForm((f) => ({ ...f, smtp_password: "" }));
      setMessage("Settings saved.");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleTest = async () => {
    setError("");
    setMessage("");
    setTesting(true);
    try {
      await apiJson("/settings/email/test", "POST", {});
      setMessage(`Test email sent to ${form.notify_email}. Check your inbox.`);
    } catch (err) {
      setError(err.message);
    } finally {
      setTesting(false);
    }
  };

  if (loading) {
    return <p className="text-sm text-text-muted">Loading…</p>;
  }

  return (
    <div>
      <h1 className="mb-2 font-serif text-2xl font-medium text-text">Settings</h1>
      <p className="mb-6 text-sm text-text-muted">
        Manage the contact details shown across the site and the email account used for form notifications.
      </p>

      <div className="flex flex-col gap-8">
        <SiteContactSettings />

      <form onSubmit={handleSave} className="flex max-w-xl flex-col gap-4 rounded-xl border border-border bg-panel p-6">
        <h2 className="text-sm font-semibold text-text">Email Notifications</h2>

        <label className="flex items-center gap-2 text-sm text-text-muted">
          <input
            type="checkbox"
            checked={form.enabled}
            onChange={(e) => setForm((f) => ({ ...f, enabled: e.target.checked }))}
          />
          Send an email notification for each new submission
        </label>

        <div>
          <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
            Notify Email (where submissions are sent)
          </label>
          <input
            type="email"
            value={form.notify_email}
            onChange={(e) => setForm((f) => ({ ...f, notify_email: e.target.value }))}
            placeholder="you@swiftchauffeurs.com"
            className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              From Name
            </label>
            <input
              value={form.from_name}
              onChange={(e) => setForm((f) => ({ ...f, from_name: e.target.value }))}
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              From Email
            </label>
            <input
              type="email"
              value={form.from_email}
              onChange={(e) => setForm((f) => ({ ...f, from_email: e.target.value }))}
              placeholder="notifications@swiftchauffeurs.com"
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
            />
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <p className="mb-3 text-xs font-semibold tracking-wide text-text-muted uppercase">SMTP Server</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-[2fr_1fr]">
            <div>
              <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">Host</label>
              <input
                value={form.smtp_host}
                onChange={(e) => setForm((f) => ({ ...f, smtp_host: e.target.value }))}
                placeholder="smtp.hostinger.com"
                className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">Port</label>
              <input
                value={form.smtp_port}
                onChange={(e) => setForm((f) => ({ ...f, smtp_port: e.target.value }))}
                placeholder="587"
                className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
              />
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
                Username
              </label>
              <input
                value={form.smtp_user}
                onChange={(e) => setForm((f) => ({ ...f, smtp_user: e.target.value }))}
                className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
                Password {passwordSet && <span className="text-text-faint normal-case">(set — leave blank to keep)</span>}
              </label>
              <input
                type="password"
                value={form.smtp_password}
                onChange={(e) => setForm((f) => ({ ...f, smtp_password: e.target.value }))}
                placeholder={passwordSet ? "••••••••" : ""}
                className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
              />
            </div>
          </div>

          <label className="mt-3 flex items-center gap-2 text-sm text-text-muted">
            <input
              type="checkbox"
              checked={form.smtp_secure}
              onChange={(e) => setForm((f) => ({ ...f, smtp_secure: e.target.checked }))}
            />
            Use SSL/TLS (usually on for port 465, off for 587)
          </label>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}
        {message && <p className="text-sm text-green-600">{message}</p>}

        <div className="flex flex-wrap gap-3">
          <button type="submit" disabled={saving} className="btn btn-gold disabled:opacity-60">
            {saving ? "Saving…" : "Save Settings"}
          </button>
          <button
            type="button"
            onClick={handleTest}
            disabled={testing || !form.notify_email}
            className="btn btn-outline disabled:opacity-60"
          >
            {testing ? "Sending…" : "Send Test Email"}
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

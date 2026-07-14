import { useEffect, useState } from "react";
import { apiGet, apiJson } from "../../lib/api";

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
        Configure the email account used to notify you when someone submits the Instant Quote or Get in Touch forms.
      </p>

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
  );
}

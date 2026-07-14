import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet } from "../../lib/api";

const cards = [
  { key: "services", label: "Services", to: "/admin/services", endpoint: "/services" },
  { key: "fleet", label: "Fleet Vehicles", to: "/admin/fleet", endpoint: "/fleet" },
  { key: "blog", label: "Blog Posts", to: "/admin/blog", endpoint: "/blog" },
  { key: "appointments", label: "Appointments", to: "/admin/appointments", endpoint: "/appointments" },
  { key: "quotes", label: "Quote Requests", to: "/admin/quotes", endpoint: "/quotes" },
];

export default function DashboardHome() {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    cards.forEach(async (c) => {
      try {
        const data = await apiGet(c.endpoint, { includeUnpublished: true });
        const list = data.services || data.vehicles || data.posts || data.appointments || data.quotes || [];
        setCounts((prev) => ({ ...prev, [c.key]: list.length }));
      } catch {
        setCounts((prev) => ({ ...prev, [c.key]: "—" }));
      }
    });
  }, []);

  return (
    <div>
      <h1 className="mb-2 font-serif text-2xl font-medium text-text">Overview</h1>
      <p className="mb-8 text-sm text-text-muted">
        Add a service or fleet vehicle here and it appears in the site header menu automatically.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.key}
            to={c.to}
            className="rounded-xl border border-border bg-panel p-6 transition-colors hover:border-gold-dim"
          >
            <p className="text-xs font-semibold tracking-wide text-text-muted uppercase">{c.label}</p>
            <p className="mt-2 font-serif text-3xl text-gold">{counts[c.key] ?? "…"}</p>
            <p className="mt-3 text-[13px] text-text-muted">Manage {c.label.toLowerCase()} →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

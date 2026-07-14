import { useEffect, useState } from "react";
import { apiGet, apiJson, apiDelete } from "../../lib/api";
import EmailPreviewModal from "../EmailPreviewModal";

const STATUSES = ["new", "contacted", "booked", "closed"];

const statusBadgeClasses = {
  new: "border-gold-dim text-gold",
  contacted: "border-blue-400/40 text-blue-500",
  booked: "border-green-500/40 text-green-600",
  closed: "border-border-strong text-text-faint",
};

const interestLabels = {
  buying: "Buying a Vehicle",
  selling: "Selling / Trading",
  financing: "Financing",
  service: "Service",
};

function formatDate(iso) {
  return new Date(iso.replace(" ", "T")).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function AppointmentsAdmin() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ status: "", interest: "", q: "", from: "", to: "" });
  const [previewUrl, setPreviewUrl] = useState(null);

  const load = async () => {
    setLoading(true);
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    const qs = params.toString();
    const { appointments } = await apiGet(`/appointments${qs ? `?${qs}` : ""}`);
    setAppointments(appointments);
    setLoading(false);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const updateStatus = async (id, status) => {
    await apiJson(`/appointments/${id}`, "PATCH", { status });
    await load();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this appointment? This can't be undone.")) return;
    await apiDelete(`/appointments/${id}`);
    await load();
  };

  return (
    <div>
      <h1 className="mb-2 font-serif text-2xl font-medium text-text">Appointments</h1>
      <p className="mb-6 text-sm text-text-muted">
        Submissions from the "Get in Touch" form on the Home page and Contact page.
      </p>

      <div className="mb-6 flex flex-wrap items-end gap-3 rounded-xl border border-border bg-panel p-4">
        <div>
          <label className="mb-1 block text-[11px] font-semibold tracking-wide text-text-muted uppercase">
            Status
          </label>
          <select
            value={filters.status}
            onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value }))}
            className="rounded-sm border border-border-strong bg-bg px-3 py-2 text-sm text-text outline-none focus:border-gold"
          >
            <option value="">All</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s[0].toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-[11px] font-semibold tracking-wide text-text-muted uppercase">
            Interested In
          </label>
          <select
            value={filters.interest}
            onChange={(e) => setFilters((f) => ({ ...f, interest: e.target.value }))}
            className="rounded-sm border border-border-strong bg-bg px-3 py-2 text-sm text-text outline-none focus:border-gold"
          >
            <option value="">All</option>
            {Object.entries(interestLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-[11px] font-semibold tracking-wide text-text-muted uppercase">From</label>
          <input
            type="date"
            value={filters.from}
            onChange={(e) => setFilters((f) => ({ ...f, from: e.target.value }))}
            className="rounded-sm border border-border-strong bg-bg px-3 py-2 text-sm text-text outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="mb-1 block text-[11px] font-semibold tracking-wide text-text-muted uppercase">To</label>
          <input
            type="date"
            value={filters.to}
            onChange={(e) => setFilters((f) => ({ ...f, to: e.target.value }))}
            className="rounded-sm border border-border-strong bg-bg px-3 py-2 text-sm text-text outline-none focus:border-gold"
          />
        </div>

        <div className="min-w-48 flex-1">
          <label className="mb-1 block text-[11px] font-semibold tracking-wide text-text-muted uppercase">
            Search
          </label>
          <input
            type="text"
            placeholder="Name, email, or phone..."
            value={filters.q}
            onChange={(e) => setFilters((f) => ({ ...f, q: e.target.value }))}
            className="w-full rounded-sm border border-border-strong bg-bg px-3 py-2 text-sm text-text outline-none focus:border-gold"
          />
        </div>

        {(filters.status || filters.interest || filters.q || filters.from || filters.to) && (
          <button
            type="button"
            onClick={() => setFilters({ status: "", interest: "", q: "", from: "", to: "" })}
            className="text-xs font-semibold tracking-wide text-gold uppercase hover:opacity-75"
          >
            Clear Filters
          </button>
        )}
      </div>

      <p className="mb-4 text-sm text-text-muted">{loading ? "Loading…" : `${appointments.length} appointment(s)`}</p>

      {!loading && appointments.length === 0 ? (
        <div className="rounded-xl border border-border bg-panel px-6 py-16 text-center">
          <p className="text-text-muted">No appointments match your filters.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {appointments.map((a) => (
            <div key={a.id} className="rounded-xl border border-border bg-panel p-5">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-text">
                    {[a.first_name, a.last_name].filter(Boolean).join(" ") || "(no name given)"}
                  </p>
                  <p className="text-xs text-text-faint">
                    {formatDate(a.created_at)} · from {a.source_path || "unknown page"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={a.status}
                    onChange={(e) => updateStatus(a.id, e.target.value)}
                    className={`rounded-full border bg-bg px-3 py-1 text-[11px] font-semibold tracking-wide uppercase outline-none ${statusBadgeClasses[a.status]}`}
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s[0].toUpperCase() + s.slice(1)}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => setPreviewUrl(`/api/appointments/${a.id}/email-preview`)}
                    className="text-xs font-semibold text-gold hover:opacity-75"
                  >
                    Preview Email
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(a.id)}
                    className="text-xs font-semibold text-red-600 hover:opacity-75"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-text-muted sm:grid-cols-3">
                {a.email && <p><span className="text-text-faint">Email:</span> {a.email}</p>}
                {a.phone && <p><span className="text-text-faint">Phone:</span> {a.phone}</p>}
                {a.interest && <p><span className="text-text-faint">Interested in:</span> {interestLabels[a.interest] || a.interest}</p>}
                {a.hear_about && <p><span className="text-text-faint">Heard via:</span> {a.hear_about}</p>}
              </div>
              {a.message && <p className="mt-3 text-sm text-text-muted">"{a.message}"</p>}
            </div>
          ))}
        </div>
      )}

      <EmailPreviewModal url={previewUrl} onClose={() => setPreviewUrl(null)} />
    </div>
  );
}

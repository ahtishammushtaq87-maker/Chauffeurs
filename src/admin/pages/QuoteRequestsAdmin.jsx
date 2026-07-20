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

function formatDate(iso) {
  return new Date(iso.replace(" ", "T")).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

// The pickup date is stored as "YYYY-MM-DD" (from the <input type="date">).
// Show it as month/day/year without letting timezone parsing shift the day.
function formatPickupDate(value) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || "");
  return m ? `${m[2]}/${m[3]}/${m[1]}` : value;
}

export default function QuoteRequestsAdmin() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ status: "", serviceType: "", q: "", from: "", to: "" });
  const [previewUrl, setPreviewUrl] = useState(null);

  const load = async () => {
    setLoading(true);
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    const qs = params.toString();
    const { quotes } = await apiGet(`/quotes${qs ? `?${qs}` : ""}`);
    setQuotes(quotes);
    setLoading(false);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const serviceTypeOptions = [...new Set(quotes.map((q) => q.service_type).filter(Boolean))];

  const updateStatus = async (id, status) => {
    await apiJson(`/quotes/${id}`, "PATCH", { status });
    await load();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this quote request? This can't be undone.")) return;
    await apiDelete(`/quotes/${id}`);
    await load();
  };

  return (
    <div>
      <h1 className="mb-2 font-serif text-2xl font-medium text-text">Instant Quote Requests</h1>
      <p className="mb-6 text-sm text-text-muted">
        Submissions from the "Get An Instant Quote" form shown in the hero section on every page.
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
            Service Type
          </label>
          <select
            value={filters.serviceType}
            onChange={(e) => setFilters((f) => ({ ...f, serviceType: e.target.value }))}
            className="rounded-sm border border-border-strong bg-bg px-3 py-2 text-sm text-text outline-none focus:border-gold"
          >
            <option value="">All</option>
            {serviceTypeOptions.map((s) => (
              <option key={s} value={s}>
                {s}
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

        {(filters.status || filters.serviceType || filters.q || filters.from || filters.to) && (
          <button
            type="button"
            onClick={() => setFilters({ status: "", serviceType: "", q: "", from: "", to: "" })}
            className="text-xs font-semibold tracking-wide text-gold uppercase hover:opacity-75"
          >
            Clear Filters
          </button>
        )}
      </div>

      <p className="mb-4 text-sm text-text-muted">{loading ? "Loading…" : `${quotes.length} request(s)`}</p>

      {!loading && quotes.length === 0 ? (
        <div className="rounded-xl border border-border bg-panel px-6 py-16 text-center">
          <p className="text-text-muted">No quote requests match your filters.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {quotes.map((q) => (
            <div key={q.id} className="rounded-xl border border-border bg-panel p-5">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-text">{q.name || "(no name given)"}</p>
                  <p className="text-xs text-text-faint">{formatDate(q.created_at)} · from {q.source_path || "unknown page"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={q.status}
                    onChange={(e) => updateStatus(q.id, e.target.value)}
                    className={`rounded-full border bg-bg px-3 py-1 text-[11px] font-semibold tracking-wide uppercase outline-none ${statusBadgeClasses[q.status]}`}
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s[0].toUpperCase() + s.slice(1)}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => setPreviewUrl(`/api/quotes/${q.id}/email-preview`)}
                    className="text-xs font-semibold text-gold hover:opacity-75"
                  >
                    Preview Email
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(q.id)}
                    className="text-xs font-semibold text-red-600 hover:opacity-75"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-text-muted sm:grid-cols-3 lg:grid-cols-4">
                {q.contact_no && <p><span className="text-text-faint">Phone:</span> {q.contact_no}</p>}
                {q.email && <p><span className="text-text-faint">Email:</span> {q.email}</p>}
                {q.passengers && <p><span className="text-text-faint">Passengers:</span> {q.passengers}</p>}
                {q.service_type && <p><span className="text-text-faint">Service:</span> {q.service_type}</p>}
                {q.vehicle && <p><span className="text-text-faint">Vehicle:</span> {q.vehicle}</p>}
                {q.pickup_date && <p><span className="text-text-faint">Date:</span> {formatPickupDate(q.pickup_date)}</p>}
                {q.pickup_time && <p><span className="text-text-faint">Time:</span> {q.pickup_time}</p>}
                {q.hours && <p><span className="text-text-faint">Hours:</span> {q.hours}</p>}
                {q.pickup_address && <p className="col-span-2"><span className="text-text-faint">Pickup:</span> {q.pickup_address}</p>}
                {q.destination_address && <p className="col-span-2"><span className="text-text-faint">Destination:</span> {q.destination_address}</p>}
                {q.notes && <p className="col-span-2"><span className="text-text-faint">Special Requests:</span> {q.notes}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      <EmailPreviewModal url={previewUrl} onClose={() => setPreviewUrl(null)} />
    </div>
  );
}

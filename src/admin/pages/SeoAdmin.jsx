import { useEffect, useMemo, useState } from "react";
import { apiGet, apiJson, apiDelete } from "../../lib/api";
import { flattenNavRoutes } from "../../data/content";

export default function SeoAdmin() {
  const [dynamicPages, setDynamicPages] = useState([]);
  const [overrides, setOverrides] = useState({});
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [selectedPath, setSelectedPath] = useState(null);
  const [form, setForm] = useState({ title: "", description: "" });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const loadOverrides = async () => {
    const { items } = await apiGet("/seo");
    const map = {};
    items.forEach((item) => {
      map[item.path] = item;
    });
    setOverrides(map);
  };

  useEffect(() => {
    const loadAll = async () => {
      setLoading(true);
      const [{ services }, { vehicles }, { posts }] = await Promise.all([
        apiGet("/services"),
        apiGet("/fleet"),
        apiGet("/blog"),
      ]);
      setDynamicPages([
        ...services.map((s) => ({ path: `/services/${s.slug}`, label: s.title })),
        ...vehicles.map((v) => ({ path: `/fleet/${v.slug}`, label: v.name })),
        ...posts.map((p) => ({ path: `/blog/${p.slug}`, label: p.title })),
      ]);
      await loadOverrides();
      setLoading(false);
    };
    loadAll();
  }, []);

  const allPages = useMemo(() => {
    const staticPages = flattenNavRoutes();
    const combined = [...staticPages, ...dynamicPages];
    const seen = new Set();
    return combined.filter((p) => {
      if (seen.has(p.path)) return false;
      seen.add(p.path);
      return true;
    });
  }, [dynamicPages]);

  const filteredPages = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allPages;
    return allPages.filter((p) => `${p.label} ${p.path}`.toLowerCase().includes(q));
  }, [allPages, query]);

  const selectPage = (page) => {
    setError("");
    setSelectedPath(page.path);
    const existing = overrides[page.path];
    setForm({ title: existing?.title || "", description: existing?.description || "" });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!selectedPath) return;
    setError("");
    setSaving(true);
    try {
      await apiJson("/seo", "PUT", { path: selectedPath, title: form.title, description: form.description });
      await loadOverrides();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    const existing = overrides[selectedPath];
    if (!existing) return;
    if (!confirm("Reset this page to the site default title/description?")) return;
    await apiDelete(`/seo/${existing.id}`);
    setForm({ title: "", description: "" });
    await loadOverrides();
  };

  const selectedPage = allPages.find((p) => p.path === selectedPath);

  return (
    <div>
      <h1 className="mb-2 font-serif text-2xl font-medium text-text">SEO</h1>
      <p className="mb-6 text-sm text-text-muted">
        Select any page to set a custom meta title and description. Pages without an override use the site
        default.
      </p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="rounded-xl border border-border bg-panel p-6">
          <h2 className="mb-3 text-sm font-semibold text-text">
            All Pages {loading ? "" : `(${allPages.length})`}
          </h2>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages..."
            className="mb-3 w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
          />
          {loading ? (
            <p className="text-sm text-text-muted">Loading…</p>
          ) : (
            <ul className="flex max-h-[32rem] flex-col divide-y divide-border overflow-y-auto">
              {filteredPages.map((page) => (
                <li key={page.path}>
                  <button
                    type="button"
                    onClick={() => selectPage(page)}
                    className={`flex w-full items-center justify-between gap-3 py-3 text-left text-sm transition-colors ${
                      selectedPath === page.path ? "text-gold" : "text-text hover:text-gold"
                    }`}
                  >
                    <span className="min-w-0">
                      <span className="block truncate font-medium">{page.label}</span>
                      <span className="block truncate text-xs text-text-faint">{page.path}</span>
                    </span>
                    {overrides[page.path] && (
                      <span className="flex-shrink-0 rounded-full border border-gold-dim px-2 py-0.5 text-[10px] font-semibold tracking-wide text-gold uppercase">
                        Custom
                      </span>
                    )}
                  </button>
                </li>
              ))}
              {filteredPages.length === 0 && <p className="py-4 text-sm text-text-faint">No pages match your search.</p>}
            </ul>
          )}
        </div>

        <div className="rounded-xl border border-border bg-panel p-6">
          {!selectedPath ? (
            <p className="text-sm text-text-muted">Select a page on the left to edit its meta title and description.</p>
          ) : (
            <form onSubmit={handleSave} className="flex flex-col gap-4">
              <div>
                <h2 className="text-sm font-semibold text-text">{selectedPage?.label}</h2>
                <p className="text-xs text-text-faint">{selectedPath}</p>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
                  Meta Title
                </label>
                <input
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  placeholder="Swift Chauffeurs | Nashville's Premier Chauffeur & Limousine Service"
                  className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
                />
                <p className="mt-1 text-xs text-text-faint">{form.title.length} characters (~50-60 recommended)</p>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
                  Meta Description
                </label>
                <textarea
                  rows={4}
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  placeholder="Premium chauffeur and limousine service in Nashville, TN..."
                  className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
                />
                <p className="mt-1 text-xs text-text-faint">
                  {form.description.length} characters (~150-160 recommended)
                </p>
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <div className="flex gap-3">
                <button type="submit" disabled={saving} className="btn btn-gold flex-1 disabled:opacity-60">
                  {saving ? "Saving…" : "Save"}
                </button>
                {overrides[selectedPath] && (
                  <button type="button" onClick={handleReset} className="btn btn-outline">
                    Reset to Default
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

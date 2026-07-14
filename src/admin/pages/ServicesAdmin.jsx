import { useEffect, useState } from "react";
import { apiGet, apiForm, apiDelete } from "../../lib/api";

const emptyForm = {
  id: null,
  title: "",
  excerpt: "",
  description: "",
  published: true,
  image: null,
  fleetIds: [],
};

const emptySection = { eyebrow: "", heading: "", text: "", image: null, existingImage: null, keepImage: false };

function ServiceSectionFields({ section, index, onChange, onRemove }) {
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (section.image) {
      const url = URL.createObjectURL(section.image);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreviewUrl(section.existingImage || null);
  }, [section.image, section.existingImage]);

  return (
    <div className="rounded-lg border border-border-strong p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-wide text-text-muted uppercase">Section {index + 1}</span>
        <button type="button" onClick={onRemove} className="text-xs font-semibold text-red-600 hover:opacity-75">
          Remove
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <input
          value={section.eyebrow}
          onChange={(e) => onChange({ ...section, eyebrow: e.target.value })}
          placeholder="Eyebrow (small label above heading)"
          className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
        />
        <input
          value={section.heading}
          onChange={(e) => onChange({ ...section, heading: e.target.value })}
          placeholder="Heading"
          className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
        />
        <textarea
          rows={3}
          value={section.text}
          onChange={(e) => onChange({ ...section, text: e.target.value })}
          placeholder="Section text"
          className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => onChange({ ...section, image: e.target.files?.[0] || null })}
          className="w-full text-sm text-text-muted"
        />
        {previewUrl && (
          <div className="aspect-[4/3] w-full max-w-[200px] overflow-hidden rounded-md border border-border-strong">
            <img src={previewUrl} alt="Preview" className="h-full w-full object-cover" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function ServicesAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fleetOptions, setFleetOptions] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [sections, setSections] = useState([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    const { services } = await apiGet("/services", { includeUnpublished: true });
    setItems(services);
    setLoading(false);
  };

  const loadFleetOptions = async () => {
    const [{ vehicles }, { sections }] = await Promise.all([
      apiGet("/fleet", { includeUnpublished: true }),
      apiGet("/fleet/sections"),
    ]);
    const fromSections = sections.flatMap((s) =>
      s.cards.map((c) => ({ id: `c:${c.id}`, label: c.title, group: s.category }))
    );
    const fromVehicles = vehicles.map((v) => ({
      id: `v:${v.id}`,
      label: v.name,
      group: v.category || "Other Vehicles",
    }));
    setFleetOptions([...fromSections, ...fromVehicles]);
  };

  useEffect(() => {
    load();
    loadFleetOptions();
  }, []);

  const startEdit = async (item) => {
    setError("");
    setForm({
      id: item.id,
      title: item.title,
      excerpt: item.excerpt,
      description: item.description,
      published: Boolean(item.published),
      image: null,
      fleetIds: [],
    });
    setSections([]);
    try {
      const { service } = await apiGet(`/services/${item.slug}`, { includeUnpublished: true });
      setForm((f) => ({ ...f, fleetIds: (service.fleet || []).map((v) => v.id) }));
      setSections(
        (service.sections || []).map((s) => ({
          eyebrow: s.eyebrow,
          heading: s.heading,
          text: s.text,
          image: null,
          existingImage: s.image || null,
          keepImage: Boolean(s.image),
        }))
      );
    } catch {
      // Keep an empty selection if the fetch fails.
    }
  };

  const resetForm = () => {
    setForm(emptyForm);
    setSections([]);
  };

  const toggleFleet = (id) => {
    setForm((f) => ({
      ...f,
      fleetIds: f.fleetIds.includes(id) ? f.fleetIds.filter((x) => x !== id) : [...f.fleetIds, id],
    }));
  };

  const addSection = () => setSections((s) => [...s, { ...emptySection }]);
  const updateSection = (i, next) => setSections((s) => s.map((sec, idx) => (idx === i ? next : sec)));
  const removeSection = (i) => setSections((s) => s.filter((_, idx) => idx !== i));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.title.trim()) {
      setError("Title is required.");
      return;
    }
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("excerpt", form.excerpt);
      fd.append("description", form.description);
      fd.append("published", form.published ? "1" : "0");
      fd.append("fleetIds", JSON.stringify(form.fleetIds));
      if (form.image) fd.append("image", form.image);

      const sectionsPayload = sections.map((s) => ({
        eyebrow: s.eyebrow.trim(),
        heading: s.heading.trim(),
        text: s.text.trim(),
        keepImage: Boolean(s.keepImage && !s.image),
      }));
      fd.append("sections", JSON.stringify(sectionsPayload));
      sections.forEach((s, i) => {
        if (s.image) fd.append(`sectionImage_${i}`, s.image);
      });

      if (form.id) {
        await apiForm(`/services/${form.id}`, "PATCH", fd);
      } else {
        await apiForm("/services", "POST", fd);
      }
      resetForm();
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this service? This can't be undone.")) return;
    await apiDelete(`/services/${id}`);
    if (form.id === id) resetForm();
    await load();
  };

  return (
    <div>
      <h1 className="mb-6 font-serif text-2xl font-medium text-text">Services</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-xl border border-border bg-panel p-6">
          <h2 className="text-sm font-semibold text-text">{form.id ? "Edit Service" : "Add New Service"}</h2>

          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">Title</label>
            <input
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              Excerpt (short card summary)
            </label>
            <textarea
              rows={2}
              value={form.excerpt}
              onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              Full Description
            </label>
            <textarea
              rows={5}
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              Main Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setForm((f) => ({ ...f, image: e.target.files?.[0] || null }))}
              className="w-full text-sm text-text-muted"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-text-muted">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) => setForm((f) => ({ ...f, published: e.target.checked }))}
            />
            Published (visible on the site)
          </label>

          <div className="border-t border-border pt-4">
            <label className="mb-1 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              Premium Fleet
            </label>
            <p className="mb-3 text-[13px] text-text-muted">
              Check any vehicles — from the fleet page sections or added directly in the Fleet tab — to feature in
              this service's "Premium Fleet" section.
            </p>
            {fleetOptions.length === 0 ? (
              <p className="text-sm text-text-faint">
                No fleet vehicles yet — add one in the Fleet tab first, then come back here to select it.
              </p>
            ) : (
              <div className="flex max-h-72 flex-col gap-3 overflow-y-auto rounded-md border border-border-strong p-3">
                {Object.entries(
                  fleetOptions.reduce((groups, opt) => {
                    (groups[opt.group] ||= []).push(opt);
                    return groups;
                  }, {})
                ).map(([group, options]) => (
                  <div key={group}>
                    <p className="mb-1.5 text-[11px] font-semibold tracking-wide text-text-faint uppercase">{group}</p>
                    <div className="flex flex-col gap-1.5">
                      {options.map((opt) => (
                        <label key={opt.id} className="flex items-center gap-2.5 text-sm text-text">
                          <input
                            type="checkbox"
                            checked={form.fleetIds.includes(opt.id)}
                            onChange={() => toggleFleet(opt.id)}
                          />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-border pt-4">
            <div className="mb-3 flex items-center justify-between">
              <label className="text-xs font-semibold tracking-wide text-text-muted uppercase">
                Content Sections
              </label>
              <button type="button" onClick={addSection} className="text-xs font-semibold text-gold hover:opacity-75">
                + Add Section
              </button>
            </div>
            <p className="mb-3 text-[13px] text-text-muted">
              Extra text + image blocks shown on the service page (like the "Nashville Airport Car Service" section
              on other pages). Each is fully editable — add as many as you need.
            </p>
            {sections.length === 0 ? (
              <p className="text-sm text-text-faint">No content sections yet — add one to describe this service further.</p>
            ) : (
              <div className="flex flex-col gap-4">
                {sections.map((section, i) => (
                  <ServiceSectionFields
                    key={i}
                    section={section}
                    index={i}
                    onChange={(next) => updateSection(i, next)}
                    onRemove={() => removeSection(i)}
                  />
                ))}
              </div>
            )}
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="btn btn-gold flex-1 disabled:opacity-60">
              {saving ? "Saving…" : form.id ? "Save Changes" : "Add Service"}
            </button>
            {form.id && (
              <button type="button" onClick={resetForm} className="btn btn-outline">
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="rounded-xl border border-border bg-panel p-6">
          <h2 className="mb-4 text-sm font-semibold text-text">All Services ({items.length})</h2>
          {loading ? (
            <p className="text-sm text-text-muted">Loading…</p>
          ) : items.length === 0 ? (
            <p className="text-sm text-text-muted">No services yet. Add your first one.</p>
          ) : (
            <ul className="flex flex-col divide-y divide-border">
              {items.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-text">{item.title}</p>
                    <p className="text-xs text-text-faint">
                      /services/{item.slug} {!item.published && "· Draft"}
                    </p>
                  </div>
                  <div className="flex flex-shrink-0 gap-3 text-xs font-semibold tracking-wide uppercase">
                    <button type="button" onClick={() => startEdit(item)} className="text-gold hover:opacity-75">
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:opacity-75"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

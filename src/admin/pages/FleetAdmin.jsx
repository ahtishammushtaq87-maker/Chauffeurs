import { useEffect, useState } from "react";
import { apiGet, apiForm, apiDelete } from "../../lib/api";
import { FLEET_SECTION_PAGE_PATHS } from "../../data/fleetSections";

const emptyForm = {
  id: null,
  name: "",
  category: "",
  passenger_capacity: "",
  excerpt: "",
  description: "",
  published: true,
  image: null,
  existingImage: null,
  image_alt: "",
  image_title: "",
};

const emptyCard = {
  title: "",
  description: "",
  image: null,
  existingImage: null,
  keepImage: false,
  image_alt: "",
  image_title: "",
};

function FleetCardFields({ card, index, onChange, onRemove }) {
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (card.image) {
      const url = URL.createObjectURL(card.image);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreviewUrl(card.existingImage || null);
  }, [card.image, card.existingImage]);

  return (
    <div className="rounded-lg border border-border-strong p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-wide text-text-muted uppercase">Card {index + 1}</span>
        <button type="button" onClick={onRemove} className="text-xs font-semibold text-red-600 hover:opacity-75">
          Remove
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <input
          value={card.title}
          onChange={(e) => onChange({ ...card, title: e.target.value })}
          placeholder="Card title"
          className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
        />
        <textarea
          rows={2}
          value={card.description}
          onChange={(e) => onChange({ ...card, description: e.target.value })}
          placeholder="Card description"
          className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => onChange({ ...card, image: e.target.files?.[0] || null })}
          className="w-full text-sm text-text-muted"
        />
        {previewUrl && (
          <div className="aspect-[16/10] w-full max-w-[200px] overflow-hidden rounded-md border border-border-strong">
            <img src={previewUrl} alt="Preview" className="h-full w-full object-cover" />
          </div>
        )}
        <input
          value={card.image_alt}
          onChange={(e) => onChange({ ...card, image_alt: e.target.value })}
          placeholder="Image alt text (for SEO)"
          className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
        />
        <input
          value={card.image_title}
          onChange={(e) => onChange({ ...card, image_title: e.target.value })}
          placeholder="Image title (for SEO)"
          className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
        />
      </div>
    </div>
  );
}

export default function FleetAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState([]);
  const [sectionsLoading, setSectionsLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [cards, setCards] = useState([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (form.image) {
      const url = URL.createObjectURL(form.image);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreviewUrl(form.existingImage || null);
  }, [form.image, form.existingImage]);

  const load = async () => {
    setLoading(true);
    const { vehicles } = await apiGet("/fleet", { includeUnpublished: true });
    setItems(vehicles);
    setLoading(false);
  };

  const loadSections = async () => {
    setSectionsLoading(true);
    const { sections } = await apiGet("/fleet/sections");
    setSections(sections);
    setSectionsLoading(false);
  };

  useEffect(() => {
    load();
    loadSections();
  }, []);

  const startEdit = async (item) => {
    setError("");
    setForm({
      id: item.id,
      name: item.name,
      category: item.category,
      passenger_capacity: item.passenger_capacity,
      excerpt: item.excerpt,
      description: item.description,
      published: Boolean(item.published),
      image: null,
      existingImage: item.image || null,
      image_alt: item.image_alt || "",
      image_title: item.image_title || "",
    });
    try {
      const { vehicle } = await apiGet(`/fleet/${item.slug}`, { includeUnpublished: true });
      setCards(
        (vehicle.cards || []).map((c) => ({
          title: c.title,
          description: c.description,
          image: null,
          existingImage: c.image || null,
          keepImage: Boolean(c.image),
          image_alt: c.image_alt || "",
          image_title: c.image_title || "",
        }))
      );
    } catch {
      setCards([]);
    }
  };

  const resetForm = () => {
    setForm(emptyForm);
    setCards([]);
  };

  const addCard = () => setCards((c) => [...c, { ...emptyCard }]);
  const updateCard = (i, next) => setCards((c) => c.map((card, idx) => (idx === i ? next : card)));
  const removeCard = (i) => setCards((c) => c.filter((_, idx) => idx !== i));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim()) {
      setError("Name is required.");
      return;
    }
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("category", form.category);
      fd.append("passenger_capacity", form.passenger_capacity);
      fd.append("excerpt", form.excerpt);
      fd.append("description", form.description);
      fd.append("published", form.published ? "1" : "0");
      fd.append("image_alt", form.image_alt);
      fd.append("image_title", form.image_title);
      if (form.image) fd.append("image", form.image);

      const cardsPayload = cards.map((c) => ({
        title: c.title.trim(),
        description: c.description.trim(),
        keepImage: Boolean(c.keepImage && !c.image),
        imageAlt: c.image_alt.trim(),
        imageTitle: c.image_title.trim(),
      }));
      fd.append("cards", JSON.stringify(cardsPayload));
      cards.forEach((c, i) => {
        if (c.image) fd.append(`cardImage_${i}`, c.image);
      });

      if (form.id) {
        await apiForm(`/fleet/${form.id}`, "PATCH", fd);
      } else {
        await apiForm("/fleet", "POST", fd);
      }
      resetForm();
      await Promise.all([load(), loadSections()]);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this vehicle? This can't be undone.")) return;
    await apiDelete(`/fleet/${id}`);
    if (form.id === id) resetForm();
    await Promise.all([load(), loadSections()]);
  };

  return (
    <div>
      <h1 className="mb-6 font-serif text-2xl font-medium text-text">Fleet</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-xl border border-border bg-panel p-6">
          <h2 className="text-sm font-semibold text-text">{form.id ? "Edit Vehicle" : "Add New Vehicle"}</h2>

          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              Vehicle Group Name
            </label>
            <input
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
                Category
              </label>
              <input
                value={form.category}
                onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                placeholder="e.g. Party Bus"
                className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
                Passenger Capacity
              </label>
              <input
                value={form.passenger_capacity}
                onChange={(e) => setForm((f) => ({ ...f, passenger_capacity: e.target.value }))}
                placeholder="e.g. 20"
                className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
              />
            </div>
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
            {previewUrl && (
              <div className="mt-3 aspect-[16/10] w-full max-w-xs overflow-hidden rounded-md border border-border-strong">
                <img src={previewUrl} alt="Preview" className="h-full w-full object-cover" />
              </div>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              Image Alt Text (for SEO)
            </label>
            <input
              value={form.image_alt}
              onChange={(e) => setForm((f) => ({ ...f, image_alt: e.target.value }))}
              placeholder="e.g. Black Mercedes S-Class sedan parked outside Nashville venue"
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              Image Title (for SEO)
            </label>
            <input
              value={form.image_title}
              onChange={(e) => setForm((f) => ({ ...f, image_title: e.target.value }))}
              placeholder="e.g. Swift Chauffeurs Luxury Sedan"
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
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
            <div className="mb-3 flex items-center justify-between">
              <label className="text-xs font-semibold tracking-wide text-text-muted uppercase">
                Fleet Option Cards
              </label>
              <button type="button" onClick={addCard} className="text-xs font-semibold text-gold hover:opacity-75">
                + Add Card
              </button>
            </div>
            <p className="mb-3 text-[13px] text-text-muted">
              Shown in the "We Have the Perfect Option for Every Journey" section on this vehicle's page. Add more
              than 2 and it automatically becomes a slider.
            </p>
            {cards.length === 0 ? (
              <p className="text-sm text-text-faint">No cards yet — add one to show multiple options.</p>
            ) : (
              <div className="flex flex-col gap-4">
                {cards.map((card, i) => (
                  <FleetCardFields
                    key={i}
                    card={card}
                    index={i}
                    onChange={(next) => updateCard(i, next)}
                    onRemove={() => removeCard(i)}
                  />
                ))}
              </div>
            )}
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="btn btn-gold flex-1 disabled:opacity-60">
              {saving ? "Saving…" : form.id ? "Save Changes" : "Add Vehicle"}
            </button>
            {form.id && (
              <button type="button" onClick={resetForm} className="btn btn-outline">
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="flex flex-col gap-8">
          <div className="rounded-xl border border-border bg-panel p-6">
            <h2 className="mb-4 text-sm font-semibold text-text">Added From Dashboard ({items.length})</h2>
            {loading ? (
              <p className="text-sm text-text-muted">Loading…</p>
            ) : items.length === 0 ? (
              <p className="text-sm text-text-muted">No vehicles yet. Add your first one.</p>
            ) : (
              <ul className="flex flex-col divide-y divide-border">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center justify-between gap-4 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-text">{item.name}</p>
                      <p className="text-xs text-text-faint">
                        /fleet/{item.slug} {item.category && `· ${item.category}`} {!item.published && "· Draft"}
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

          <div className="rounded-xl border border-border bg-panel p-6">
            <h2 className="mb-1 text-sm font-semibold text-text">Fleet Page Sections ({sections.length})</h2>
            <p className="mb-4 text-[13px] text-text-muted">
              The original fleet vehicles built into each fleet category page (Luxury Sedan, Executive SUV, etc).
              Edit or delete their cards here — changes show up live on that page.
            </p>
            {sectionsLoading ? (
              <p className="text-sm text-text-muted">Loading…</p>
            ) : (
              <ul className="flex flex-col divide-y divide-border">
                {sections.map((item) => (
                  <li key={item.id} className="flex items-center justify-between gap-4 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-text">{item.category}</p>
                      <p className="text-xs text-text-faint">
                        {FLEET_SECTION_PAGE_PATHS[item.slug] || `/fleet/${item.slug}`} · {item.cards.length} card
                        {item.cards.length === 1 ? "" : "s"}
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
    </div>
  );
}

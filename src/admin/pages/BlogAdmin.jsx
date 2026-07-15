import { useEffect, useState } from "react";
import { apiGet, apiForm, apiDelete } from "../../lib/api";

const emptyForm = {
  id: null,
  title: "",
  category: "",
  author: "Swift Chauffeurs Team",
  excerpt: "",
  content: "",
  published: true,
  image: null,
  image_alt: "",
  image_title: "",
};

export default function BlogAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    const { posts } = await apiGet("/blog", { includeUnpublished: true });
    setItems(posts);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const startEdit = (item) => {
    setForm({
      id: item.id,
      title: item.title,
      category: item.category,
      author: item.author,
      excerpt: item.excerpt,
      content: item.content,
      published: Boolean(item.published),
      image: null,
      image_alt: item.image_alt || "",
      image_title: item.image_title || "",
    });
    setError("");
  };

  const resetForm = () => setForm(emptyForm);

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
      fd.append("category", form.category);
      fd.append("author", form.author);
      fd.append("excerpt", form.excerpt);
      fd.append("content", form.content);
      fd.append("published", form.published ? "1" : "0");
      fd.append("image_alt", form.image_alt);
      fd.append("image_title", form.image_title);
      if (form.image) fd.append("image", form.image);

      if (form.id) {
        await apiForm(`/blog/${form.id}`, "PATCH", fd);
      } else {
        await apiForm("/blog", "POST", fd);
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
    if (!confirm("Delete this post? This can't be undone.")) return;
    await apiDelete(`/blog/${id}`);
    if (form.id === id) resetForm();
    await load();
  };

  return (
    <div>
      <h1 className="mb-6 font-serif text-2xl font-medium text-text">Blog</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-xl border border-border bg-panel p-6">
          <h2 className="text-sm font-semibold text-text">{form.id ? "Edit Post" : "Add New Post"}</h2>

          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">Title</label>
            <input
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
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
                placeholder="e.g. Weddings"
                className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
                Author
              </label>
              <input
                value={form.author}
                onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
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
              Article Content
            </label>
            <textarea
              rows={8}
              value={form.content}
              onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
              placeholder="Separate paragraphs with a blank line."
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setForm((f) => ({ ...f, image: e.target.files?.[0] || null }))}
              className="w-full text-sm text-text-muted"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              Image Alt Text (for SEO)
            </label>
            <input
              value={form.image_alt}
              onChange={(e) => setForm((f) => ({ ...f, image_alt: e.target.value }))}
              placeholder="e.g. Bride and groom stepping out of a white stretch limo"
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
              placeholder="e.g. Swift Chauffeurs Wedding Transportation"
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

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="btn btn-gold flex-1 disabled:opacity-60">
              {saving ? "Saving…" : form.id ? "Save Changes" : "Add Post"}
            </button>
            {form.id && (
              <button type="button" onClick={resetForm} className="btn btn-outline">
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="rounded-xl border border-border bg-panel p-6">
          <h2 className="mb-4 text-sm font-semibold text-text">All Posts ({items.length})</h2>
          {loading ? (
            <p className="text-sm text-text-muted">Loading…</p>
          ) : items.length === 0 ? (
            <p className="text-sm text-text-muted">No posts yet. Add your first one.</p>
          ) : (
            <ul className="flex flex-col divide-y divide-border">
              {items.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-text">{item.title}</p>
                    <p className="text-xs text-text-faint">
                      /blog/{item.slug} {!item.published && "· Draft"}
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

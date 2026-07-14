import { useEffect, useState } from "react";
import { apiGet, apiJson, apiDelete } from "../../lib/api";
import { useAuth } from "../AuthContext";

const emptyForm = { name: "", email: "", password: "", role: "editor" };

export default function UsersAdmin() {
  const { user: currentUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    const { users } = await apiGet("/users");
    setUsers(users);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      await apiJson("/users", "POST", form);
      setForm(emptyForm);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const toggleRole = async (u) => {
    try {
      await apiJson(`/users/${u.id}`, "PATCH", { role: u.role === "admin" ? "editor" : "admin" });
      await load();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = async (u) => {
    if (!confirm(`Remove ${u.name}'s account?`)) return;
    try {
      await apiDelete(`/users/${u.id}`);
      await load();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1 className="mb-6 font-serif text-2xl font-medium text-text">Users</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-xl border border-border bg-panel p-6">
          <h2 className="text-sm font-semibold text-text">Add Team Member</h2>

          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              Temporary Password
            </label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              placeholder="At least 8 characters"
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">Role</label>
            <select
              value={form.role}
              onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
              className="w-full rounded-sm border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-gold"
            >
              <option value="editor">Editor (manage content)</option>
              <option value="admin">Admin (manage content + users)</option>
            </select>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button type="submit" disabled={saving} className="btn btn-gold disabled:opacity-60">
            {saving ? "Adding…" : "Add User"}
          </button>
        </form>

        <div className="rounded-xl border border-border bg-panel p-6">
          <h2 className="mb-4 text-sm font-semibold text-text">Team ({users.length})</h2>
          {loading ? (
            <p className="text-sm text-text-muted">Loading…</p>
          ) : (
            <ul className="flex flex-col divide-y divide-border">
              {users.map((u) => (
                <li key={u.id} className="flex items-center justify-between gap-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-text">
                      {u.name} {u.id === currentUser.id && <span className="text-text-faint">(you)</span>}
                    </p>
                    <p className="text-xs text-text-faint">
                      {u.email} · {u.role}
                    </p>
                  </div>
                  <div className="flex flex-shrink-0 gap-3 text-xs font-semibold tracking-wide uppercase">
                    <button type="button" onClick={() => toggleRole(u)} className="text-gold hover:opacity-75">
                      Make {u.role === "admin" ? "Editor" : "Admin"}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(u)}
                      disabled={u.id === currentUser.id}
                      className="text-red-600 hover:opacity-75 disabled:pointer-events-none disabled:opacity-30"
                    >
                      Remove
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

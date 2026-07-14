import { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const links = [
  { to: "/admin", label: "Overview", end: true },
  { to: "/admin/services", label: "Services" },
  { to: "/admin/fleet", label: "Fleet" },
  { to: "/admin/blog", label: "Blog" },
  { to: "/admin/seo", label: "SEO" },
  { to: "/admin/appointments", label: "Appointments" },
  { to: "/admin/quotes", label: "Quote Requests" },
];

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block rounded-md px-3.5 py-2.5 text-sm font-medium transition-colors ${
      isActive ? "bg-gold text-[#17140d]" : "text-text-muted hover:bg-panel-alt hover:text-text"
    }`;

  return (
    <div className="min-h-svh bg-bg-alt">
      <header className="sticky top-0 z-50 border-b border-border bg-panel px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-(--breakpoint-xl) items-center justify-between gap-4">
          <Link to="/admin" className="min-w-0 truncate font-serif text-lg font-medium text-text">
            Swift Chauffeurs <span className="text-gold">Dashboard</span>
          </Link>

          {/* Desktop header actions */}
          <div className="hidden flex-shrink-0 items-center gap-4 lg:flex">
            <span className="text-sm text-text-muted">
              {user?.name} <span className="text-text-faint">({user?.role})</span>
            </span>
            {user?.role === "admin" && (
              <>
                <NavLink to="/admin/settings" className="text-xs font-semibold tracking-wide text-gold uppercase">
                  Settings
                </NavLink>
                <NavLink to="/admin/users" className="text-xs font-semibold tracking-wide text-gold uppercase">
                  Users
                </NavLink>
              </>
            )}
            <Link to="/" className="text-xs font-semibold tracking-wide text-text-muted uppercase hover:text-gold">
              View Site
            </Link>
            <button
              type="button"
              onClick={logout}
              className="text-xs font-semibold tracking-wide text-text-muted uppercase hover:text-gold"
            >
              Log Out
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 flex-shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`h-px w-6 bg-text transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-text transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-6 bg-text transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu drawer */}
        {mobileOpen && (
          <div className="mt-4 flex flex-col gap-1 border-t border-border pt-4 lg:hidden">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={navLinkClass} onClick={() => setMobileOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            {user?.role === "admin" && (
              <>
                <NavLink to="/admin/settings" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                  Settings
                </NavLink>
                <NavLink to="/admin/users" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                  Users
                </NavLink>
              </>
            )}
            <div className="mt-2 flex flex-col gap-1 border-t border-border pt-2">
              <p className="px-3.5 py-1 text-xs text-text-muted">
                {user?.name} <span className="text-text-faint">({user?.role})</span>
              </p>
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3.5 py-2.5 text-sm font-medium text-text-muted hover:bg-panel-alt hover:text-text"
              >
                View Site
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  logout();
                }}
                className="rounded-md px-3.5 py-2.5 text-left text-sm font-medium text-text-muted hover:bg-panel-alt hover:text-text"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </header>

      <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:flex-row lg:gap-8">
        <nav className="hidden w-48 flex-shrink-0 lg:block">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end} className={navLinkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <main className="min-w-0 flex-1 overflow-x-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

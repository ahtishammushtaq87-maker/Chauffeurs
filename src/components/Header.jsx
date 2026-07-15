import { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, sortByLabel } from "../data/content";
import { ChevronDown, ChevronRight } from "./Icons";
import { apiGet } from "../lib/api";
import mascot from "../assets/images/chauffeur-mascot.webp";
import HeaderMobileActions from "./HeaderMobileActions";
import { useSiteSettings } from "../context/SiteSettingsContext";

export default function Header() {
  const { logo_url } = useSiteSettings();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openTop, setOpenTop] = useState(null);
  const [openSub, setOpenSub] = useState(null);
  const [dynamicMenu, setDynamicMenu] = useState({ services: [], fleet: [] });

  useEffect(() => {
    apiGet("/menu")
      .then(setDynamicMenu)
      .catch(() => {});
  }, []);

  // Newly added services/fleet vehicles (from the dashboard) are appended to
  // their matching dropdown automatically, without touching the static nav data.
  const mergedNavLinks = useMemo(
    () =>
      navLinks.map((link) => {
        if (link.label === "Services" && dynamicMenu.services.length) {
          return { ...link, dropdown: [...link.dropdown, ...dynamicMenu.services] };
        }
        if (link.label === "Our Fleet" && dynamicMenu.fleet.length) {
          return { ...link, dropdown: [...link.dropdown, ...dynamicMenu.fleet] };
        }
        return link;
      }),
    [dynamicMenu]
  );

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenTop(null);
    setOpenSub(null);
  };

  return (
    <header className="sticky top-0 z-[200] border-b border-ink-border bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-(--breakpoint-l) items-center justify-between gap-6 px-6 md:px-10">
        <Link to="/" aria-label="Swift Chauffeurs" className="flex min-w-0 flex-shrink-0 items-center gap-2.5" onClick={closeMobile}>
          <img src={logo_url || mascot} alt="" className="h-10 w-auto flex-shrink-0 sm:h-12 md:h-14" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-15">
            {mergedNavLinks.map((link) => (
              <li key={link.label} className="group/item relative">
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 py-6 text-[13px] font-medium tracking-wide uppercase transition-colors ${
                      isActive ? "text-gold-light" : "text-ink-fg-muted group-hover/item:text-gold-light"
                    }`
                  }
                >
                  {link.label}
                  {link.dropdown && <ChevronDown />}
                </NavLink>

                {link.dropdown && (
                  <ul className="invisible absolute top-full left-0 min-w-[220px] -translate-y-1 border border-ink-border bg-ink-panel py-2.5 opacity-0 transition-all duration-150 group-hover/item:visible group-hover/item:translate-y-0 group-hover/item:opacity-100">
                    {sortByLabel(link.dropdown).map((item) => (
                      <li key={item.label} className="group/sub relative">
                        {item.submenu ? (
                          <>
                            <Link
                              to={item.path}
                              className="flex items-center justify-between px-5 py-2.5 text-[13px] text-ink-fg-muted transition-colors hover:bg-white/[0.03] hover:text-gold-light"
                            >
                              {item.label}
                              <ChevronRight width={12} height={12} />
                            </Link>
                            <ul className="invisible absolute top-[-10px] left-full ml-px min-w-[230px] border border-ink-border bg-ink-panel py-2.5 opacity-0 transition-opacity duration-150 group-hover/sub:visible group-hover/sub:opacity-100">
                              {sortByLabel(item.submenu).map((sub) => (
                                <li key={sub.label}>
                                  <Link
                                    to={sub.path}
                                    className="block px-5 py-2.5 text-[13px] text-ink-fg-muted transition-colors hover:bg-white/[0.03] hover:text-gold-light"
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link
                            to={item.path}
                            className="block px-5 py-2.5 text-[13px] text-ink-fg-muted transition-colors hover:bg-white/[0.03] hover:text-gold-light"
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-shrink-0 items-center gap-3 sm:gap-6">
          <Link
            to="/contact"
            className="btn btn-outline hidden border-ink-border-strong text-ink-fg hover:border-gold-light hover:text-gold-light md:inline-flex"
          >
            Book Appointment
          </Link>
          <HeaderMobileActions />
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="h-px w-6 bg-ink-fg" />
            <span className="h-px w-6 bg-ink-fg" />
            <span className="h-px w-6 bg-ink-fg" />
          </button>
        </div>
      </div>

      {/* Mobile nav (accordion) */}
      {mobileOpen && (
        <nav className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-ink-border bg-ink lg:hidden">
          <ul className="flex flex-col px-6 py-3">
            {mergedNavLinks.map((link) => (
              <li key={link.label} className="border-b border-ink-border/60 last:border-0">
                {link.dropdown ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3.5 text-sm font-medium tracking-wide text-ink-fg uppercase"
                      onClick={() => setOpenTop((o) => (o === link.label ? null : link.label))}
                    >
                      {link.label}
                      <ChevronDown
                        className={`transition-transform ${openTop === link.label ? "rotate-180" : ""}`}
                        width={12}
                        height={12}
                      />
                    </button>
                    {openTop === link.label && (
                      <ul className="pb-2">
                        {sortByLabel(link.dropdown).map((item) => (
                          <li key={item.label}>
                            {item.submenu ? (
                              <>
                                <button
                                  type="button"
                                  className="flex w-full items-center justify-between py-2.5 pl-4 text-[13px] text-ink-fg-muted"
                                  onClick={() => setOpenSub((o) => (o === item.label ? null : item.label))}
                                >
                                  {item.label}
                                  <ChevronDown
                                    className={`transition-transform ${openSub === item.label ? "rotate-180" : ""}`}
                                    width={11}
                                    height={11}
                                  />
                                </button>
                                {openSub === item.label && (
                                  <ul>
                                    {sortByLabel(item.submenu).map((sub) => (
                                      <li key={sub.label}>
                                        <Link
                                          to={sub.path}
                                          onClick={closeMobile}
                                          className="block py-2.5 pl-8 text-[13px] text-ink-fg-faint hover:text-gold-light"
                                        >
                                          {sub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            ) : (
                              <Link
                                to={item.path}
                                onClick={closeMobile}
                                className="block py-2.5 pl-4 text-[13px] text-ink-fg-muted hover:text-gold-light"
                              >
                                {item.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={closeMobile}
                    className="block py-3.5 text-sm font-medium tracking-wide text-ink-fg uppercase hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="py-4">
              <Link
                to="/contact"
                className="btn btn-outline w-full border-ink-border-strong text-ink-fg hover:border-gold-light hover:text-gold-light"
                onClick={closeMobile}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

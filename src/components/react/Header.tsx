import { useState, useEffect, useRef } from "react";
import { NAV_ITEMS as links, Servicios } from "@/lib/consts";
import { basePath } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updatePath = () => {
      if (typeof window !== "undefined") {
        const path = window.location.pathname;
        const normalizedPath = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
        setCurrentPath(normalizedPath);
      }
    };

    updatePath();

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("popstate", updatePath);
    document.addEventListener("astro:page-load", updatePath);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("popstate", updatePath);
      document.removeEventListener("astro:page-load", updatePath);
    };
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const isLinkActive = (href: string) => {
    if (!currentPath) return false;
    const targetPath = basePath(href);
    const rootPath = basePath('/');
    const cleanRoot = rootPath.endsWith('/') && rootPath.length > 1 ? rootPath.slice(0, -1) : rootPath;
    if (href === "/") {
      return currentPath === rootPath || currentPath === cleanRoot;
    }
    const cleanTarget = targetPath.endsWith('/') && targetPath.length > 1 ? targetPath.slice(0, -1) : targetPath;
    return currentPath === cleanTarget || currentPath.startsWith(cleanTarget + "/");
  };

  return (
    <nav
      className={`fixed w-full top-0 z-40 transition-all duration-300 mb-7 ${
        scrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="group max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href={basePath('/')} className="font-display font-bold text-xl tracking-tight group-hover:text-(--accent) transition-colors">
          Emii Rosgz<span className="text-(--accent) group-hover:text-white">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          {links.map((l) => {
            const active = isLinkActive(l.href);
            const isServices = l.href === "/servicios";

            if (isServices) {
              return (
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={basePath(l.href)}
                    className={`relative py-1 flex items-center gap-1.5 transition-colors ${
                      active ? "text-(--accent) font-semibold" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <span>{l.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180 text-(--accent)" : "text-zinc-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    {active && (
                      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-(--accent) rounded-full shadow-[0_0_8px_var(--accent)]" />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 z-50">
                      <div className="bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2 flex flex-col gap-1">
                        <a
                          href={basePath('/servicios')}
                          onClick={() => setDropdownOpen(false)}
                          className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                            currentPath === basePath('/servicios')
                              ? "bg-(--accent)/10 text-(--accent) border border-(--accent)/20 font-semibold"
                              : "text-zinc-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span>Ver todos los servicios</span>
                          <span className="text-[11px] font-mono opacity-60 group-hover:translate-x-0.5 transition-transform">→</span>
                        </a>

                        <div className="h-[1px] bg-white/5 my-1" />

                        {Servicios.map((s) => {
                          const serviceHref = `/servicios/${s.href}`;
                          const targetHref = basePath(serviceHref);
                          const isSubActive = currentPath === targetHref;
                          return (
                            <a
                              key={s.id}
                              href={targetHref}
                              onClick={() => setDropdownOpen(false)}
                              className={`group flex flex-col px-3.5 py-2.5 rounded-xl transition-all ${
                                isSubActive
                                  ? "bg-(--accent)/10 text-(--accent) border border-(--accent)/20"
                                  : "text-zinc-300 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className={`text-sm font-medium ${isSubActive ? "text-(--accent) font-semibold" : "group-hover:text-(--accent) transition-colors"}`}>
                                  {s.titulo}
                                </span>
                                {isSubActive && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-(--accent) shadow-[0_0_6px_var(--accent)]" />
                                )}
                              </div>
                              {s.descripcion && (
                                <span className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5 font-normal">
                                  {s.descripcion}
                                </span>
                              )}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={l.href}
                href={basePath(l.href)}
                className={`relative py-1 transition-colors ${
                  active ? "text-(--accent) font-semibold" : "text-zinc-400 hover:text-white"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-(--accent) rounded-full shadow-[0_0_8px_var(--accent)]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-5 max-h-[85vh] overflow-y-auto">
          {links.map((l) => {
            const active = isLinkActive(l.href);
            const isServices = l.href === "/servicios";

            if (isServices) {
              return (
                <div key={l.href} className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <a
                      href={basePath(l.href)}
                      onClick={() => setMenuOpen(false)}
                      className={`font-display text-lg transition-colors flex items-center gap-2 ${
                        active ? "text-(--accent) font-semibold" : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <span>{l.label}</span>
                      {active && (
                        <span className="w-2 h-2 rounded-full bg-(--accent) shadow-[0_0_8px_var(--accent)]" />
                      )}
                    </a>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-1.5 text-zinc-400 hover:text-white"
                      aria-label="Toggle servicios list"
                    >
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180 text-(--accent)" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div className="pl-4 border-l border-white/10 flex flex-col gap-3 ml-1 py-1">
                      <a
                        href={basePath('/servicios')}
                        onClick={() => setMenuOpen(false)}
                        className={`text-sm transition-colors flex items-center justify-between ${
                          currentPath === basePath('/servicios')
                            ? "text-(--accent) font-semibold"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        <span>Todos los servicios</span>
                        {currentPath === basePath('/servicios') && (
                          <span className="w-1.5 h-1.5 rounded-full bg-(--accent)" />
                        )}
                      </a>
                      {Servicios.map((s) => {
                        const serviceHref = `/servicios/${s.href}`;
                        const targetHref = basePath(serviceHref);
                        const isSubActive = currentPath === targetHref;
                        return (
                          <a
                            key={s.id}
                            href={targetHref}
                            onClick={() => setMenuOpen(false)}
                            className={`text-sm transition-colors flex items-center justify-between ${
                              isSubActive
                                ? "text-(--accent) font-semibold"
                                : "text-zinc-400 hover:text-white"
                            }`}
                          >
                            <span>{s.titulo}</span>
                            {isSubActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-(--accent) shadow-[0_0_6px_var(--accent)]" />
                            )}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={l.href}
                href={basePath(l.href)}
                onClick={() => setMenuOpen(false)}
                className={`font-display text-lg transition-colors flex items-center justify-between ${
                  active ? "text-(--accent) font-semibold" : "text-zinc-300 hover:text-white"
                }`}
              >
                <span>{l.label}</span>
                {active && (
                  <span className="w-2 h-2 rounded-full bg-(--accent) shadow-[0_0_8px_var(--accent)]" />
                )}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
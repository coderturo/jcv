import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export interface HeaderProps {
  theme?: "dark" | "light" | "auto";
  currentPath?: string;
}

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Conócenos", href: "/conocenos" },
  { label: "Visítanos", href: "/visitanos" },
  { label: "Ministerios", href: "/#ministerios" },
  { label: "Ubicación", href: "/#ubicacion" },
  { label: "Oremos", href: "/#oremos" },
  { label: "Donar", href: "/#donar", isCta: true },
];

export default function Header({ theme = "auto", currentPath = "" }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [activePath, setActivePath] = useState(currentPath);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);
    }
  }, []);

  // Determinar si es tema oscuro o claro
  const isLight =
    theme === "light" ||
    (theme === "auto" && activePath !== "" && activePath !== "/");

  return (
    <header
      className={
        isLight
          ? "sticky top-0 z-40 bg-[#F5EBE1]/90 backdrop-blur-md border-b border-black/10 transition-colors"
          : "absolute inset-x-0 top-0 z-30"
      }
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 ${
          isLight ? "py-3.5 md:py-4" : "pt-5 md:pt-8"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="/"
          className={`flex items-center gap-3 group select-none z-10 ${
            isLight ? "text-foreground" : "text-white"
          }`}
          aria-label="Jesús Camino de Vida - Inicio"
        >
          <div className="size-9 rounded-xl bg-[#7D5836] flex items-center justify-center shadow-md font-heading font-black text-white text-base tracking-wider shrink-0 group-hover:scale-105 transition-transform">
            JCV
          </div>
          <div className="flex flex-col text-left">
            <span
              className={`font-heading font-bold text-base tracking-wide leading-none ${
                isLight ? "text-foreground" : "text-white"
              }`}
            >
              Jesús Camino de Vida
            </span>
            <span
              className={`text-xs font-semibold tracking-wider uppercase mt-1 ${
                isLight ? "text-[#7D5836]" : "text-white/80"
              }`}
            >
              Callao · Perú
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              activePath === link.href ||
              (link.href !== "/" && activePath.startsWith(link.href));

            if (link.isCta) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl bg-[#7D5836] px-5 py-2 text-white text-sm font-bold shadow-md hover:bg-[#69492C] transition-all duration-200 active:scale-95 ml-1"
                >
                  {link.label}
                </a>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-200 ${
                  isLight
                    ? isActive
                      ? "text-[#7D5836] font-bold after:w-full after:bg-[#7D5836]"
                      : "text-foreground/80 hover:text-[#7D5836] after:w-0 hover:after:w-full after:bg-[#7D5836]"
                    : isActive
                    ? "text-white font-bold after:w-full after:bg-white"
                    : "text-white/90 hover:text-white after:w-0 hover:after:w-full after:bg-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className={`md:hidden inline-flex items-center justify-center rounded-xl p-2.5 transition-colors cursor-pointer ${
            isLight
              ? "bg-black/5 hover:bg-black/10 text-foreground"
              : "bg-black/30 backdrop-blur-md text-white/90 hover:text-white"
          }`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile drawer unificado */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden animate-in fade-in duration-200">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          <div className="relative h-full w-full flex flex-col justify-between px-8 py-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-white">
                <div className="size-9 rounded-xl bg-[#7D5836] flex items-center justify-center font-heading font-black text-white text-base">
                  JCV
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-heading font-bold text-white text-base leading-none">
                    Jesús Camino de Vida
                  </span>
                  <span className="text-xs text-[#E6D3C2] font-semibold tracking-wider uppercase mt-0.5">
                    Callao · Perú
                  </span>
                </div>
              </div>
              <button
                className="rounded-xl p-2 text-white/80 hover:text-white bg-white/10 cursor-pointer"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Links centrados */}
            <div className="flex flex-col items-center justify-center gap-5 text-white text-center my-auto">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    link.isCta
                      ? "mt-4 w-60 rounded-xl bg-[#7D5836] py-3 text-center text-base font-bold shadow-lg hover:bg-[#69492C]"
                      : `text-xl font-heading font-semibold hover:text-[#E6D3C2] transition-colors ${
                          activePath === link.href ? "text-[#E6D3C2] underline underline-offset-8" : ""
                        }`
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="text-center text-xs text-white/70">
              Parque Ricardo Palma 144 · Bellavista, Callao
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

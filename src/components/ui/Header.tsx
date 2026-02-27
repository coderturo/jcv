import { Menu, X } from "lucide-react";
import { useState } from "react";

const LINKS = [
  { label: "Inicio", href: "#" },
  { label: "Conócenos", href: "#conocenos" },
  { label: "Visítanos", href: "#visitanos" },
  { label: "Donar", href: "#donar", isCta: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-5 md:px-10 md:pt-8">
        {/* Desktop nav */}
        <nav className="hidden md:flex absolute top-11.25 left-1/2 -translate-x-1/2 items-center gap-10">
          {LINKS.map((link) =>
            link.isCta ? (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg bg-[#BA9A7D] px-4 py-2 text-white font-bold hover:bg-[#a5866b] transition"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-white/90 font-bold hover:text-white transition"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        {/* Mobile button */}
        <div className="md:hidden text-white font-bold text-xl tracking-[0.2em] select-none">
          JCV
        </div>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:text-white transition"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Dentro de la X */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* fondo con blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          {/* contenido del menú */}
          <div className="relative h-full w-full px-8 pt-8">
            {/* X arriba a la derecha */}
            <button
              className="absolute right-6 top-6 text-white/90 hover:text-white"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <X className="h-7 w-7" />
            </button>

            {/* Links centrados */}
            <div className="flex h-full flex-col items-center justify-center gap-6 text-white text-center">
              <a className="text-xl" href="#" onClick={() => setOpen(false)}>
                Inicio
              </a>
              <a
                className="text-xl"
                href="#conocenos"
                onClick={() => setOpen(false)}
              >
                Conócenos
              </a>
              <a
                className="text-xl"
                href="#visitanos"
                onClick={() => setOpen(false)}
              >
                Visítanos
              </a>

              <a
                className="mt-6 w-60 rounded-full bg-[#BA9A7D] py-3 text-center font-semibold"
                href="#donar"
                onClick={() => setOpen(false)}
              >
                Donar
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { HoverButton } from "@/components/ui/hover-glow-button";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

/**
 * Header fijo que aparece recién cuando el usuario pasa el sentinela
 * `#nav-trigger` (ubicado tras el módulo 3) y se oculta al volver a subir
 * por encima de esa línea.
 */
export function SiteNavbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById("nav-trigger");
    if (!trigger) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      // Visible cuando el sentinela (tras el módulo 3) ya pasó el borde
      // superior del viewport; se oculta al volver a subir por encima.
      setVisible(trigger.getBoundingClientRect().top <= 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Cerrar el menú mobile al ocultarse el navbar.
  useEffect(() => {
    if (!visible) setMenuOpen(false);
  }, [visible]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#b566ff]/10 bg-black/70 backdrop-blur-md transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Marca */}
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b566ff] text-lg font-bold text-black shadow-[0_0_20px_-4px_#b566ff]">
            R
          </span>
          <span className="bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
            Reac Studio
          </span>
        </a>

        {/* Enlaces desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-light tracking-wide text-white/60 transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <HoverButton href="#contacto" className="px-5 py-2 text-sm">
            Hablemos
          </HoverButton>
        </div>

        {/* Botón menú mobile */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#b566ff]/20 text-white/80 transition-colors hover:text-white md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 12h16" />
                <path d="M4 6h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Menú desplegable mobile */}
      <div
        className={`overflow-hidden border-t border-[#b566ff]/10 transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="mt-2 px-3">
            <HoverButton
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="w-full"
            >
              Hablemos
            </HoverButton>
          </li>
        </ul>
      </div>
    </header>
  );
}

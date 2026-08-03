import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/plano", label: "Plano" },
  { to: "/metodologia", label: "5I's" },
  { to: "/encontros", label: "Encontros" },
  { to: "/avaliacao", label: "Avaliação" },
  { to: "/entregas", label: "Entregas" },
  { to: "/bibliografia", label: "Bibliografia" },
  { to: "/admin", label: "Painel" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a10]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-card font-display text-sm font-black text-primary italic ring-1 ring-primary/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:ring-primary/50 group-hover:shadow-[0_0_20px_color-mix(in_oklab,var(--primary)_25%,transparent)]">
            Li
          </span>
          <span className="font-display text-sm leading-tight font-black uppercase italic tracking-tight transition-colors duration-300 group-hover:text-primary">
            Lab. de Projeto
            <span className="label-mono block text-xs tracking-[0.22em]">
              de Interfaces · UFSM
            </span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="link-underline relative rounded-full border border-transparent px-3 py-1.5 font-mono text-xs tracking-wider uppercase text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary focus-glow data-[status=active]:border-primary/40 data-[status=active]:bg-primary/10 data-[status=active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
          className="press-scale flex min-h-11 min-w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-200 hover:brightness-110 focus-glow md:hidden"
        >
          <span className="relative size-4">
            <Menu
              className={`absolute inset-0 size-4 transition-all duration-200 ${open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
            />
            <X
              className={`absolute inset-0 size-4 transition-all duration-200 ${open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navegação principal (móvel)"
          className="animate-slide-down grid gap-1 border-t border-white/5 px-5 pt-2 pb-4 md:hidden"
        >
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              style={{ "--stagger": i + 1 } as React.CSSProperties}
              className="animate-fade-in-up stagger-1 rounded-2xl px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:bg-white/5 focus-glow data-[status=active]:bg-primary/10 data-[status=active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Laboratório de Projeto de Interfaces · Desenho Industrial · UFSM · 2026/2</p>
        <nav aria-label="Sites de referência" className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href="https://laboratoriointerfacedi.vercel.app/#design-system"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-foreground transition-colors hover:text-primary"
          >
            Conceitos operacionais
          </a>
          <a
            href="https://metodologia5-is-labinterfaceddi.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-foreground transition-colors hover:text-primary"
          >
            Metodologia 5I's
          </a>
          <a
            href="https://www.ufsm.br/editoras/facos/metodologia-5is"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-foreground transition-colors hover:text-primary"
          >
            FACOS/UFSM
          </a>
        </nav>
      </div>
    </footer>
  );
}

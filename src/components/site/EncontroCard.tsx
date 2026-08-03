import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Encontro } from "@/data/curso";
import { getFase } from "@/data/curso";

export function EncontroCard({ encontro }: { encontro: Encontro }) {
  const fase = getFase(encontro.fase);
  return (
    <Link
      to="/encontros/$numero"
      params={{ numero: String(encontro.numero) }}
      className="glass card-lift group relative flex flex-col gap-3 overflow-hidden rounded-3xl p-5 press-scale"
    >
      <span
        className="absolute inset-x-0 top-0 h-px opacity-70 transition-all duration-500 group-hover:h-0.5 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${fase.cor}, transparent)` }}
      />
      <span
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at 50% 0%, color-mix(in oklab, ${fase.cor} 10%, transparent), transparent 40%)`,
        }}
      />
      <div className="flex items-start justify-between gap-3">
        <span
          className="font-mono text-3xl leading-none font-bold transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_currentColor]"
          style={{ color: fase.cor }}
        >
          {String(encontro.numero).padStart(2, "0")}
        </span>
        <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
      <div>
        <h3 className="text-base leading-snug font-semibold transition-colors duration-300 group-hover:text-foreground">
          {encontro.titulo}
        </h3>
        {encontro.tema && (
          <p className="mt-1 text-sm text-muted-foreground italic transition-colors duration-300 group-hover:text-muted-foreground/80">
            {encontro.tema}
          </p>
        )}
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
        <span
          className="rounded-full px-2.5 py-1 text-xs tracking-wide transition-all duration-300 group-hover:brightness-110"
          style={{
            color: fase.cor,
            background: `color-mix(in oklab, ${fase.cor} 14%, transparent)`,
          }}
        >
          {fase.nome}
        </span>
        {encontro.entrega?.[0] && (
          <span className="line-clamp-1 text-xs text-muted-foreground">
            Entrega: {encontro.entrega[0].replace(/\.$/, "")}
          </span>
        )}
      </div>
    </Link>
  );
}

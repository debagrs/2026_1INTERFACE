import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="aurora relative overflow-hidden">
      <div className="grid-noise pointer-events-none absolute inset-0" />
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 sm:pt-24">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.28em] text-accent uppercase">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="text-gradient mt-4 text-4xl leading-[1.05] font-bold sm:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
          </Reveal>
        )}
        {children && <Reveal delay={220}>{children}</Reveal>}
      </div>
    </section>
  );
}

export function Section({
  titulo,
  children,
  id,
}: {
  titulo?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-10">
      {titulo && (
        <Reveal>
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold sm:text-3xl">
            <span className="h-6 w-1.5 rounded-full bg-primary" />
            {titulo}
          </h2>
        </Reveal>
      )}
      {children}
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="glass space-y-4 rounded-3xl p-6 text-[15px] leading-relaxed text-muted-foreground sm:p-8">
      {children}
    </div>
  );
}

export function Chip({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <span
      className="rounded-full border px-3 py-1 text-xs"
      style={{
        borderColor: color ? `color-mix(in oklab, ${color} 45%, transparent)` : undefined,
        color: color,
        background: color ? `color-mix(in oklab, ${color} 12%, transparent)` : undefined,
      }}
    >
      {children}
    </span>
  );
}

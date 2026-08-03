import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { encontros, fases } from "@/data/curso";

export const Route = createFileRoute("/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodologia 5I's · Lab. de Projeto de Interfaces" },
      {
        name: "description",
        content:
          "As cinco fases da metodologia 5I's — Ideação, Inambulação, Instauração, Inspeção e Implementação — aplicadas ao projeto do semestre.",
      },
      { property: "og:title", content: "Metodologia 5I's aplicada ao projeto de interfaces" },
      {
        property: "og:description",
        content: "Ideação, Inambulação, Instauração, Inspeção e Implementação, encontro a encontro.",
      },
    ],
  }),
  component: Metodologia,
});

function Metodologia() {
  return (
    <>
      <PageHero
        eyebrow="Estrutura do semestre"
        title="Metodologia 5I's"
        subtitle="Proposta para sistematizar o processo de projeto em Design de Interfaces Centrado no Usuário, organizando o desenvolvimento de forma iterativa. Cada fase corresponde a um conjunto de encontros do laboratório."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://metodologia5-is-labinterfaceddi.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="glass press-scale inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all hover:bg-secondary hover:border-primary/30 focus-glow"
          >
            Site da Metodologia 5I's
          </a>
          <a
            href="https://laboratoriointerfacedi.vercel.app/#design-system"
            target="_blank"
            rel="noreferrer"
            className="glass press-scale inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all hover:bg-secondary hover:border-primary/30 focus-glow"
          >
            Conceitos operacionais
          </a>
          <a
            href="https://www.ufsm.br/editoras/facos/metodologia-5is"
            target="_blank"
            rel="noreferrer"
            className="glass press-scale inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all hover:bg-secondary hover:border-primary/30 focus-glow"
          >
            Referência: FACOS/UFSM — Metodologia 5I's
          </a>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-5">
          {fases.map((f, i) => {
            const doFase = encontros.filter((e) => e.fase === f.id);
            return (
              <Reveal key={f.id} delay={i * 70}>
                <article
                  id={f.id}
                  className="glass card-lift relative scroll-mt-24 overflow-hidden rounded-3xl p-6 sm:p-8"
                >
                  <span
                    className="absolute top-0 left-0 h-full w-1"
                    style={{ background: f.cor }}
                  />
                  <div className="flex flex-wrap items-baseline gap-4">
                    <span className="font-mono text-4xl font-bold" style={{ color: f.cor }}>
                      {f.numero}
                    </span>
                    <h2 className="text-2xl font-semibold">{f.nome}</h2>
                    <span className="font-mono text-xs text-muted-foreground">
                      encontros {f.encontros[0]}–{f.encontros[1]}
                    </span>
                  </div>
                  <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{f.descricao}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {doFase.map((e) => (
                      <Link
                        key={e.numero}
                        to="/encontros/$numero"
                        params={{ numero: String(e.numero) }}
                        className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground hover:bg-primary/5 press-scale"
                      >
                        <span className="font-mono">{String(e.numero).padStart(2, "0")}</span>{" "}
                        {e.titulo}
                      </Link>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { bibliografiaBasica, bibliografiaComplementar } from "@/data/curso";

export const Route = createFileRoute("/bibliografia")({
  head: () => ({
    meta: [
      { title: "Bibliografia · Lab. de Projeto de Interfaces" },
      {
        name: "description",
        content:
          "Bibliografia básica e complementar da disciplina: Garrett, Norman, Krug, Teixeira, Gasparetto, Lidwell, Nielsen, Munari e outros.",
      },
      { property: "og:title", content: "Bibliografia da disciplina" },
      {
        property: "og:description",
        content: "Referências básicas e complementares de UX, UI e design de interfaces.",
      },
    ],
  }),
  component: Bibliografia,
});

function Bibliografia() {
  return (
    <>
      <PageHero
        eyebrow="Leituras orientadas"
        title="Bibliografia"
        subtitle="Ler é um dos quatro movimentos permanentes do laboratório. Estas são as referências que sustentam as discussões e decisões de projeto."
      />

      <Section titulo="Bibliografia básica">
        <div className="grid gap-3 sm:grid-cols-2">
          {bibliografiaBasica.map((b, i) => (
            <Reveal key={b.autor + b.obra} delay={i * 50}>
              <div className="glass card-lift group rounded-2xl p-5 transition-all duration-300 hover:border-primary/20">
                <p className="font-mono text-xs tracking-wider text-accent uppercase transition-all group-hover:drop-shadow-[0_0_8px_currentColor]">
                  {b.autor}
                </p>
                <p className="mt-2 text-sm transition-colors group-hover:text-foreground">{b.obra}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section titulo="Bibliografia complementar">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {bibliografiaComplementar.map((b, i) => (
            <Reveal key={b.autor} delay={i * 40}>
              <div className="glass card-lift group rounded-2xl p-4 transition-all duration-300 hover:border-primary/20">
                <p className="font-mono text-xs tracking-wider text-primary uppercase transition-all group-hover:drop-shadow-[0_0_8px_currentColor]">
                  {b.autor}
                </p>
                {b.obra && <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">{b.obra}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

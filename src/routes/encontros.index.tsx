import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { EncontroCard } from "@/components/site/EncontroCard";
import { encontros, fases } from "@/data/curso";

export const Route = createFileRoute("/encontros/")({
  head: () => ({
    meta: [
      { title: "Os 30 encontros · Lab. de Projeto de Interfaces" },
      {
        name: "description",
        content:
          "Cronograma completo dos 30 encontros da disciplina, agrupados pelas fases da metodologia 5I's.",
      },
      { property: "og:title", content: "Cronograma dos 30 encontros" },
      {
        property: "og:description",
        content: "Do conceito de interface à apresentação final dos projetos.",
      },
    ],
  }),
  component: Encontros,
});

function Encontros() {
  return (
    <>
      <PageHero
        eyebrow="Cronograma das atividades"
        title="30 encontros"
        subtitle="Cada encontro é uma página com objetivos, conteúdos, metodologia, atividades e entrega. Use como roteiro de aula."
      />

      {fases.map((f) => {
        const lista = encontros.filter((e) => e.fase === f.id);
        return (
          <Section key={f.id}>
            <Reveal>
              <div className="mb-5 flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-2xl font-bold" style={{ color: f.cor }}>
                  {f.numero}
                </span>
                <h2 className="text-xl font-semibold sm:text-2xl">{f.nome}</h2>
                <span className="font-mono text-xs text-muted-foreground">
                  {lista.length} encontro{lista.length > 1 ? "s" : ""}
                </span>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {lista.map((e, i) => (
                <Reveal key={e.numero} delay={i * 60}>
                  <EncontroCard encontro={e} />
                </Reveal>
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}

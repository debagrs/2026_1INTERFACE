import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { avaliacao } from "@/data/curso";

export const Route = createFileRoute("/avaliacao")({
  head: () => ({
    meta: [
      { title: "Avaliação · Lab. de Projeto de Interfaces" },
      {
        name: "description",
        content:
          "Avaliação contínua, processual e formativa: participação 20%, projeto individual 20%, projeto principal 40% e portfólio final 20%.",
      },
      { property: "og:title", content: "Como a disciplina é avaliada" },
      {
        property: "og:description",
        content: "Participação 20%, nivelamento 20%, projeto principal 40%, portfólio 20%.",
      },
    ],
  }),
  component: Avaliacao,
});

function Avaliacao() {
  return (
    <>
      <PageHero
        eyebrow="Critérios"
        title="Avaliação"
        subtitle="A avaliação será contínua, processual e formativa, considerando o desenvolvimento do estudante durante todas as fases da metodologia 5I's. Serão avaliados não apenas os resultados finais, mas principalmente a qualidade do processo projetual, a capacidade investigativa, a fundamentação das decisões, a documentação das etapas, o trabalho colaborativo, a participação nas discussões, a qualidade das apresentações e a evolução do projeto ao longo do semestre."
      />

      <Section titulo="Composição da nota final">
        <div className="grid gap-4">
          {avaliacao.map((a, i) => (
            <Reveal key={a.titulo} delay={i * 80}>
              <article className="glass card-lift rounded-3xl p-6 transition-all duration-300 hover:border-primary/20">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold">{a.titulo}</h3>
                  <span className="font-mono text-2xl font-bold text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_10px_currentColor]">{a.peso}%</span>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="animate-grow-bar h-full rounded-full bg-primary"
                    style={{ width: `${a.peso}%`, animationDelay: `${i * 120}ms` }}
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{a.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

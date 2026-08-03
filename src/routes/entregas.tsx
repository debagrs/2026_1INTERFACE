import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero, Prose, Section } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { encontros, entregasFinais } from "@/data/curso";

export const Route = createFileRoute("/entregas")({
  head: () => ({
    meta: [
      { title: "Entregas · Lab. de Projeto de Interfaces" },
      {
        name: "description",
        content:
          "Entregas de cada encontro e checklist completo do portfólio final com a documentação das cinco fases da metodologia 5I's.",
      },
      { property: "og:title", content: "Entregas e portfólio final" },
      {
        property: "og:description",
        content: "Checklist completo da documentação exigida em cada fase do projeto.",
      },
    ],
  }),
  component: Entregas,
});

function Entregas() {
  const comEntrega = encontros.filter((e) => e.entrega?.length);

  return (
    <>
      <PageHero
        eyebrow="Documentação do processo"
        title="Entregas"
        subtitle="Cada encontro produz um artefato. Ao final, cada equipe entrega o portfólio completo com a documentação das cinco fases da metodologia 5I's."
      />

      <Section titulo="Entrega final de cada equipe">
        <div className="grid gap-3 sm:grid-cols-2">
          {entregasFinais.map((item, i) => (
            <Reveal key={item} delay={i * 25}>
              <div className="glass card-lift group flex gap-3 rounded-2xl p-4 transition-all duration-300 hover:border-primary/20">
                <Check className="mt-0.5 size-4 shrink-0 text-accent transition-transform duration-300 group-hover:scale-125" />
                <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section titulo="Entregas encontro a encontro">
        <div className="grid gap-3">
          {comEntrega.map((e, i) => (
            <Reveal key={e.numero} delay={i * 30}>
              <div className="glass group flex flex-col gap-1 rounded-2xl p-4 transition-all duration-300 hover:border-primary/20 sm:flex-row sm:items-center sm:gap-5">
                <span className="font-mono text-sm text-primary transition-all group-hover:drop-shadow-[0_0_8px_currentColor] sm:w-10">
                  {String(e.numero).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium transition-colors group-hover:text-foreground sm:w-72">{e.titulo}</span>
                <span className="text-sm text-muted-foreground">{e.entrega!.join(" ")}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section titulo="Registro do uso de IA">
        <Reveal>
          <Prose>
            <p>
              É obrigatório registrar criticamente o uso da Inteligência Artificial durante todo o
              processo, explicitando os prompts utilizados, as respostas obtidas, as limitações
              identificadas e as decisões tomadas pela equipe.
            </p>
          </Prose>
        </Reveal>
      </Section>
    </>
  );
}

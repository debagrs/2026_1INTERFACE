import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Ear, Footprints, BookOpen, Sparkles } from "lucide-react";
import { PageHero, Section } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { EncontroCard } from "@/components/site/EncontroCard";
import { encontros, fases, movimentos, dadosDisciplina } from "@/data/curso";
import heroImg from "@/assets/hero-interfaces.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laboratório de Projeto de Interfaces · UFSM 2026/2" },
      {
        name: "description",
        content:
          "Portal da disciplina Laboratório de Projeto de Interfaces (Desenho Industrial · UFSM): 30 encontros conduzidos pela metodologia 5I's.",
      },
      { property: "og:title", content: "Laboratório de Projeto de Interfaces · UFSM" },
      {
        property: "og:description",
        content: "30 encontros, metodologia 5I's e projeto de interfaces centrado no usuário.",
      },
    ],
  }),
  component: Index,
});

const icones = [Footprints, Ear, BookOpen, Sparkles];

function Index() {
  const destaque = encontros.slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="UFSM · Desenho Industrial · 2026/2"
        title="Laboratório de Projeto de Interfaces"
        subtitle="Um estúdio de projeto de 120 horas onde pesquisa, experimentação, prototipação e crítica acontecem juntas — guiado pela metodologia 5I's: Ideação, Inambulação, Instauração, Inspeção e Implementação."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/encontros"
            className="btn-shine press-scale group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 focus-glow"
          >
            Ver os 30 encontros
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/metodologia"
            className="glass press-scale inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all hover:bg-secondary hover:border-primary/30 focus-glow"
          >
            Entender as 5I's
          </Link>
        </div>

        <div className="animate-float-slow mt-12 overflow-hidden rounded-[2rem] border border-border/70">
          <img
            src={heroImg}
            alt="Ilustração abstrata das cinco fases da metodologia 5I's"
            className="h-auto w-full object-cover"
            loading="eager"
          />
        </div>
      </PageHero>

      <Section titulo="Quatro movimentos permanentes">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {movimentos.map((m, i) => {
            const Icone = icones[i]!;
            return (
              <Reveal key={m.nome} delay={i * 90}>
                <div className="glass card-lift group h-full rounded-3xl p-5 transition-all duration-300 hover:border-primary/20">
                  <Icone className="size-5 text-accent transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_currentColor]" />
                  <h3 className="mt-4 text-lg font-semibold transition-colors group-hover:text-foreground">{m.nome}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.texto}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section titulo="A trilha do semestre">
        <div className="grid gap-3">
          {fases.map((f, i) => (
            <Reveal key={f.id} delay={i * 60}>
              <Link
                to="/metodologia"
                hash={f.id}
                className="glass card-lift press-scale group flex flex-col gap-3 rounded-3xl p-5 sm:flex-row sm:items-center sm:gap-6"
              >
                <span
                  className="font-mono text-2xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_currentColor] sm:w-16"
                  style={{ color: f.cor }}
                >
                  {f.numero}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-foreground">{f.nome}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.descricao}</p>
                </div>
                <span className="font-mono text-xs whitespace-nowrap text-muted-foreground transition-colors group-hover:text-foreground">
                  encontros {f.encontros[0]}–{f.encontros[1]}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section titulo="Comece por aqui">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destaque.map((e, i) => (
            <Reveal key={e.numero} delay={i * 80}>
              <EncontroCard encontro={e} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section titulo="A disciplina em números">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {dadosDisciplina.map((d, i) => (
            <Reveal key={d.rotulo} delay={i * 50}>
              <div className="glass card-lift group rounded-2xl p-4 transition-all duration-300 hover:border-primary/20">
                <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  {d.rotulo}
                </p>
                <p className="mt-1 text-sm font-medium transition-colors group-hover:text-foreground">{d.valor}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

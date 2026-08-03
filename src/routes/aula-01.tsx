import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Target, Layers, Compass, Hammer, PackageCheck, FileText, ExternalLink, BookOpen, Sparkles } from "lucide-react";
import { PageHero, Section } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Materiais } from "@/components/site/Materiais";
import { getEncontro, getFase } from "@/data/curso";
import { getMateriais } from "@/data/materiais";
import apresentacaoAula01 from "@/assets/interfaces-aula-01.pdf.asset.json";

export const Route = createFileRoute("/aula-01")({
  head: () => ({
    meta: [
      { title: "Aula 01 — Apresentação da disciplina · Lab. de Projeto de Interfaces" },
      {
        name: "description",
        content:
          "Primeiro encontro do Laboratório de Projeto de Interfaces (UFSM 2026/2): apresentação em PDF, conceitos operacionais e metodologia 5I's.",
      },
      { property: "og:title", content: "Aula 01 — Apresentação da disciplina · Lab. de Projeto de Interfaces" },
      {
        property: "og:description",
        content:
          "Primeiro encontro do Laboratório de Projeto de Interfaces (UFSM 2026/2): apresentação em PDF, conceitos operacionais e metodologia 5I's.",
      },
    ],
  }),
  component: Aula01,
});

const blocos = [
  { chave: "objetivos", rotulo: "Objetivos", Icone: Target },
  { chave: "conteudos", rotulo: "Conteúdos", Icone: Layers },
  { chave: "metodologia", rotulo: "Metodologia", Icone: Compass },
  { chave: "atividades", rotulo: "Atividades", Icone: Hammer },
  { chave: "entrega", rotulo: "Entrega", Icone: PackageCheck },
] as const;

const linksReferencia = [
  {
    titulo: "Conceitos operacionais",
    descricao: "Design system, princípios e fundamentos do LabInterface DI.",
    url: "https://laboratoriointerfacedi.vercel.app/#design-system",
    cor: "#00ffff",
  },
  {
    titulo: "Metodologia 5I's",
    descricao: "Ideação, Inambulação, Instauração, Inspeção e Implementação.",
    url: "https://metodologia5-is-labinterfaceddi.vercel.app/",
    cor: "#d2a979",
  },
];

function Aula01() {
  const encontro = getEncontro(1)!;
  const fase = getFase(encontro.fase);
  const materiais = getMateriais(1);

  return (
    <>
      <PageHero
        eyebrow="Encontro 01 · Fase Fundamentos"
        title="Aula 01 — Apresentação da disciplina"
        subtitle="O que é uma interface? Abertura do laboratório, apresentação do plano de ensino e os primeiros passos pela metodologia 5I's."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/encontros/$numero"
            params={{ numero: "2" }}
            className="btn-shine press-scale group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 focus-glow"
          >
            Ir para o Encontro 02
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/encontros"
            className="glass press-scale inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all hover:bg-secondary hover:border-primary/30 focus-glow"
          >
            Todos os encontros
          </Link>
        </div>
      </PageHero>

      <Section titulo="Apresentação em destaque" id="apresentacao">
        <Reveal>
          <article className="glass relative overflow-hidden rounded-3xl border border-primary/20 p-1">
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{ background: fase.cor }}
            />
            <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-2 lg:items-center">
              <div className="space-y-4">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    color: fase.cor,
                    background: `color-mix(in oklab, ${fase.cor} 14%, transparent)`,
                  }}
                >
                  <FileText className="size-3.5" />
                  PDF da aula
                </div>
                <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
                  Apresentação da disciplina — Encontro 01
                </h2>
                <p className="text-sm text-muted-foreground">
                  Material principal da primeira aula. Abre em nova aba para leitura em tela cheia ou download.
                </p>
                <a
                  href={apresentacaoAula01.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine press-scale group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 focus-glow"
                >
                  Abrir apresentação
                  <ExternalLink className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              <a
                href={apresentacaoAula01.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-secondary press-scale"
                aria-label="Abrir PDF da apresentação da Aula 01"
              >
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center transition-transform duration-500 group-hover:scale-105">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:shadow-[0_0_24px_currentColor]"
                    style={{
                      background: `color-mix(in oklab, ${fase.cor} 14%, transparent)`,
                      color: fase.cor,
                    }}
                  >
                    <FileText className="size-8 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    Clique para visualizar o PDF
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  Abrir em nova aba
                  <ExternalLink className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>
          </article>
        </Reveal>
      </Section>

      <Section titulo="Sites de referência">
        <div className="grid gap-4 sm:grid-cols-2">
          {linksReferencia.map((link, i) => (
            <Reveal key={link.url} delay={i * 80}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass card-lift press-scale group flex h-full flex-col rounded-3xl p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <BookOpen className="size-6 shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ color: link.cor }} />
                  <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold transition-colors group-hover:text-foreground">{link.titulo}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{link.descricao}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium" style={{ color: link.cor }}>
                  Acessar site
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section titulo="Resumo do encontro">
        <div className="grid gap-4">
          {blocos.map(({ chave, rotulo, Icone }, i) => {
            const valor = encontro[chave];
            if (!valor) return null;
            const itens = Array.isArray(valor) ? valor : [valor];
            return (
              <Reveal key={chave} delay={i * 70}>
                <article className="glass card-lift rounded-3xl p-6">
                  <h2 className="flex items-center gap-2 text-sm font-semibold tracking-[0.16em] uppercase">
                    <Icone className="size-4" style={{ color: fase.cor }} />
                    {rotulo}
                  </h2>
                  {chave === "conteudos" ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {itens.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <ul className="mt-4 space-y-2">
                      {itens.map((t) => (
                        <li key={t} className="flex gap-3 text-[15px] text-muted-foreground">
                          <span
                            className="mt-2 size-1.5 shrink-0 rounded-full"
                            style={{ background: fase.cor }}
                          />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {materiais.length > 0 && (
        <Section titulo="Materiais da aula">
          <Materiais materiais={materiais} cor={fase.cor} />
        </Section>
      )}

      <Section>
        <Reveal>
          <div className="glass flex flex-col items-start justify-between gap-4 rounded-3xl p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                Próximo passo
              </p>
              <h2 className="mt-1 text-lg font-semibold">Encontro 02 — Metodologia 5I's</h2>
            </div>
            <Link
              to="/encontros/$numero"
              params={{ numero: "2" }}
              className="btn-shine press-scale group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 focus-glow"
            >
              Continuar trilha
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

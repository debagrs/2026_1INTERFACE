import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, Section } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { dadosDisciplina, objetivosEspecificos } from "@/data/curso";

export const Route = createFileRoute("/plano")({
  head: () => ({
    meta: [
      { title: "Plano de ensino · Laboratório de Projeto de Interfaces" },
      {
        name: "description",
        content:
          "Ementa, justificativa, objetivos, competências, metodologia de ensino e recursos didáticos da disciplina.",
      },
      { property: "og:title", content: "Plano de ensino · Lab. de Projeto de Interfaces" },
      {
        property: "og:description",
        content: "Ementa, objetivos, competências e metodologia da disciplina na UFSM.",
      },
    ],
  }),
  component: Plano,
});

function Plano() {
  return (
    <>
      <PageHero
        eyebrow="Documento oficial"
        title="Plano de ensino"
        subtitle="Universidade Federal de Santa Maria · Curso de Desenho Industrial · Laboratório de Projeto de Interfaces · 120 horas · 08 créditos · 2026/2."
      />

      <Section>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {dadosDisciplina.map((d, i) => (
            <Reveal key={d.rotulo} delay={i * 40}>
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

      <Section titulo="Ementa">
        <Reveal>
          <Prose>
            <p>
              Desenvolvimento de projetos de design de interfaces digitais centrados no usuário por
              meio da metodologia 5I's (Ideação, Inambulação, Instauração, Inspeção e
              Implementação). Investigação de problemas complexos de interação, pesquisa com
              usuários, construção de requisitos, arquitetura da informação, design de interação,
              design de informação, design sensorial, prototipação, testes de usabilidade,
              avaliações heurísticas, acessibilidade, documentação do processo projetual e
              desenvolvimento de sistemas de interfaces digitais. Aplicação de metodologias ativas,
              aprendizagem baseada em projetos e uso crítico da Inteligência Artificial como
              ferramenta de apoio ao processo criativo e investigativo.
            </p>
          </Prose>
        </Reveal>
      </Section>

      <Section titulo="Justificativa">
        <Reveal>
          <Prose>
            <p>
              O design de interfaces contemporâneo demanda profissionais capazes de compreender
              sistemas complexos de interação, considerando simultaneamente aspectos tecnológicos,
              comunicacionais, culturais, cognitivos e sociais. Mais do que dominar ferramentas
              digitais, o designer deve desenvolver competências investigativas, críticas e
              projetuais que permitam compreender as necessidades dos usuários e transformar essas
              necessidades em soluções significativas.
            </p>
            <p>
              O Laboratório de Projeto de Interfaces constitui o principal espaço de experimentação
              prática da área de Interface do Curso de Desenho Industrial da Universidade Federal de
              Santa Maria. A disciplina organiza-se como um estúdio de projeto, no qual pesquisa,
              reflexão, experimentação, prototipação, avaliação e documentação acontecem de maneira
              integrada durante todo o semestre.
            </p>
            <p>
              A estrutura da disciplina fundamenta-se na metodologia 5I's, proposta para
              sistematizar o processo de projeto em Design de Interfaces Centrado no Usuário. As
              cinco fases — Ideação, Inambulação, Instauração, Inspeção e Implementação — organizam
              o desenvolvimento do projeto de forma iterativa, permitindo que os estudantes
              construam soluções progressivamente refinadas a partir da investigação do contexto, da
              compreensão dos usuários, da elaboração de alternativas, da validação contínua e da
              documentação do processo.
            </p>
            <p>
              Paralelamente, a disciplina incorpora metodologias ativas de aprendizagem,
              aprendizagem baseada em projetos (Project Based Learning), aprendizagem em estúdio
              (Studio Based Learning), aprendizagem colaborativa e sessões de crítica de projeto
              (Design Critique), aproximando a dinâmica da disciplina das práticas profissionais
              contemporâneas.
            </p>
            <p>
              Também integra, de forma transversal, o uso crítico da Inteligência Artificial
              Generativa como ferramenta de pesquisa, ideação, análise e experimentação, estimulando
              reflexões sobre autoria, ética, vieses algorítmicos, confiabilidade das informações,
              privacidade, acessibilidade e responsabilidade no desenvolvimento de sistemas
              digitais.
            </p>
            <p>
              Ao longo do semestre, os estudantes desenvolvem inicialmente um pequeno projeto
              individual de nivelamento, seguido de um projeto completo em equipes, documentando
              todas as etapas da metodologia 5I's e produzindo um portfólio final que evidencia
              tanto o resultado obtido quanto o processo de construção da solução.
            </p>
          </Prose>
        </Reveal>
      </Section>

      <Section titulo="Objetivo geral">
        <Reveal>
          <Prose>
            <p>
              Desenvolver projetos de interfaces digitais centrados no usuário por meio da aplicação
              da metodologia 5I's, articulando pesquisa, análise, projeto, prototipação, avaliação e
              documentação, utilizando metodologias ativas e recursos tecnológicos contemporâneos
              para a construção de soluções digitais inovadoras, acessíveis e socialmente
              relevantes.
            </p>
          </Prose>
        </Reveal>
      </Section>

      <Section titulo="Objetivos específicos">
        <p className="mb-4 text-sm text-muted-foreground">
          Ao final da disciplina espera-se que o estudante seja capaz de:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {objetivosEspecificos.map((o, i) => (
            <Reveal key={o} delay={i * 30}>
              <div className="glass card-lift group flex gap-3 rounded-2xl p-4 transition-all duration-300 hover:border-primary/20">
                <span className="font-mono text-xs text-primary transition-all group-hover:drop-shadow-[0_0_8px_currentColor]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">{o}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section titulo="Competências e habilidades">
        <Reveal>
          <Prose>
            <p>
              Ao longo da disciplina o estudante deverá desenvolver competências relacionadas à
              investigação científica, pensamento crítico, resolução de problemas complexos,
              trabalho colaborativo, comunicação visual, documentação de processos, criatividade,
              prototipação, experimentação, validação de hipóteses, tomada de decisão projetual,
              argumentação técnica e responsabilidade ética no desenvolvimento de produtos digitais.
            </p>
            <p>
              Serão estimuladas habilidades relacionadas à observação, escuta ativa, pesquisa com
              usuários, síntese de informações, organização de dados, planejamento de projetos,
              elaboração de narrativas visuais, construção de sistemas de interface, análise crítica
              de soluções existentes, utilização de tecnologias digitais e comunicação
              interdisciplinar.
            </p>
          </Prose>
        </Reveal>
      </Section>

      <Section titulo="Metodologia de ensino">
        <Reveal>
          <Prose>
            <p>
              A disciplina será desenvolvida em formato de laboratório de projeto, estruturado como
              um estúdio colaborativo de criação, investigação e experimentação.
            </p>
            <p>
              As atividades combinarão exposições dialogadas, oficinas práticas, seminários,
              caminhadas investigativas (Inambulação), estudos dirigidos, leituras orientadas,
              escuta de podcasts, análises de casos, sessões de crítica coletiva (Design Critique),
              aprendizagem baseada em projetos (Project Based Learning), aprendizagem em estúdio
              (Studio Based Learning), aprendizagem entre pares, desenvolvimento de protótipos e
              testes com usuários.
            </p>
            <p>
              Durante todo o semestre os estudantes manterão um diário de projeto registrando
              decisões, referências, dificuldades, experimentações, testes, resultados e reflexões
              sobre o processo.
            </p>
            <p>
              A Inteligência Artificial será utilizada como ferramenta complementar de pesquisa,
              geração de alternativas, análise de informações e apoio ao desenvolvimento projetual,
              sendo obrigatório registrar criticamente seu uso, explicitando prompts utilizados,
              respostas obtidas, limitações identificadas e decisões tomadas pela equipe.
            </p>
            <p>
              As atividades do laboratório serão organizadas em quatro movimentos permanentes:
              caminhar, ouvir, ler e criar. Esses quatro movimentos acompanharão todas as fases da
              metodologia 5I's, promovendo um processo contínuo de observação, investigação,
              experimentação e reflexão.
            </p>
          </Prose>
        </Reveal>
      </Section>

      <Section titulo="Recursos didáticos">
        <Reveal>
          <Prose>
            <p>
              As atividades da disciplina serão desenvolvidas utilizando diferentes recursos físicos
              e digitais, buscando favorecer processos de aprendizagem colaborativos,
              investigativos e experimentais.
            </p>
            <p>
              Serão utilizados o laboratório de informática, computadores, dispositivos móveis,
              softwares de prototipação e design de interfaces, plataformas colaborativas, ambientes
              virtuais de aprendizagem, ferramentas de Inteligência Artificial Generativa,
              aplicativos para organização de projetos, equipamentos para registro audiovisual,
              projetor multimídia e materiais de desenho.
            </p>
            <p>
              Além dos recursos tecnológicos, serão utilizados artigos científicos, livros,
              podcasts, vídeos, estudos de caso, aplicativos, websites, sistemas digitais e demais
              interfaces que possibilitem análises críticas durante o processo projetual.
            </p>
            <p>
              As caminhadas investigativas (Inambulação) constituirão um recurso metodológico
              permanente da disciplina, estimulando a observação direta de ambientes, serviços e
              sistemas de interação presentes na cidade e no cotidiano dos estudantes.
            </p>
          </Prose>
        </Reveal>
      </Section>

      <Section titulo="Considerações finais">
        <Reveal>
          <Prose>
            <p>
              A disciplina será conduzida como um estúdio de projeto, privilegiando a aprendizagem
              baseada em problemas reais, a investigação sistemática, a experimentação, a
              colaboração e a reflexão crítica. A metodologia 5I's orientará todo o desenvolvimento
              do projeto, desde a identificação do problema até a implementação e avaliação das
              soluções propostas. Espera-se que, ao final do semestre, os estudantes tenham
              desenvolvido competências para conceber, projetar, prototipar, avaliar e comunicar
              soluções de interfaces digitais centradas no usuário, fundamentadas em pesquisa,
              evidências e princípios contemporâneos de Design de Interação, UI e UX.
            </p>
          </Prose>
        </Reveal>
      </Section>
    </>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Target, Layers, Compass, Hammer, PackageCheck } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Reveal } from "@/components/site/Reveal";
import { Materiais } from "@/components/site/Materiais";
import { getMateriais, type Material, type TipoMaterial } from "@/data/materiais";
import { supabase } from "@/integrations/supabase/client";
import { encontros, getEncontro, getFase } from "@/data/curso";

export const Route = createFileRoute("/encontros/$numero")({
  loader: ({ params }) => {
    const numero = Number(params.numero);
    const encontro = getEncontro(numero);
    if (!encontro) throw notFound();
    return { encontro };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Encontro não encontrado" }, { name: "robots", content: "noindex" }],
      };
    }
    const e = loaderData.encontro;
    const titulo = `Encontro ${e.numero} — ${e.titulo} · Lab. de Interfaces`;
    const desc =
      e.objetivos ?? `Conteúdos e atividades do encontro ${e.numero}: ${e.titulo}.`;
    return {
      meta: [
        { title: titulo },
        { name: "description", content: desc.slice(0, 158) },
        { property: "og:title", content: titulo },
        { property: "og:description", content: desc.slice(0, 158) },
      ],
    };
  },
  component: EncontroPage,
});

const blocos = [
  { chave: "objetivos", rotulo: "Objetivos", Icone: Target },
  { chave: "conteudos", rotulo: "Conteúdos", Icone: Layers },
  { chave: "metodologia", rotulo: "Metodologia", Icone: Compass },
  { chave: "atividades", rotulo: "Atividades", Icone: Hammer },
  { chave: "entrega", rotulo: "Entrega", Icone: PackageCheck },
] as const;

function EncontroPage() {
  const { encontro } = Route.useLoaderData();
  const fase = getFase(encontro.fase);
  const { data: materiaisDb } = useQuery({
    queryKey: ["materiais", encontro.numero],
    queryFn: async (): Promise<Material[]> => {
      const { data } = await supabase
        .from("materiais")
        .select("titulo, tipo, url, storage_path, ordem")
        .eq("encontro", encontro.numero)
        .order("ordem");
      return (data ?? []).map((m) => ({
        titulo: m.titulo,
        url: m.url,
        tipo: (m.tipo as TipoMaterial) ?? "link",
        storagePath: m.storage_path,
      }));
    },
  });
  const materiais = [...getMateriais(encontro.numero), ...(materiaisDb ?? [])];
  const anterior = encontros.find((e) => e.numero === encontro.numero - 1);
  const proximo = encontros.find((e) => e.numero === encontro.numero + 1);
  const progresso = (encontro.numero / encontros.length) * 100;

  return (
    <>
      <section className="aurora relative overflow-hidden">
        <div className="grid-noise pointer-events-none absolute inset-0" />
        <div className="mx-auto max-w-4xl px-5 pt-12 pb-8 sm:pt-16">
          <Reveal>
            <Link
              to="/encontros"
              className="group inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" /> todos os encontros
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-xs"
                style={{
                  color: fase.cor,
                  background: `color-mix(in oklab, ${fase.cor} 14%, transparent)`,
                }}
              >
                Fase {fase.numero} · {fase.nome}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                encontro {encontro.numero} de {encontros.length}
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="text-gradient mt-4 text-3xl leading-tight font-bold sm:text-5xl">
              {encontro.titulo}
            </h1>
          </Reveal>
          {encontro.tema && (
            <Reveal delay={180}>
              <p className="mt-3 text-lg text-muted-foreground italic">{encontro.tema}</p>
            </Reveal>
          )}

          <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="animate-grow-bar h-full rounded-full"
              style={{ width: `${progresso}%`, background: fase.cor }}
            />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-4xl gap-4 px-5 py-6">
        {blocos.map(({ chave, rotulo, Icone }, i) => {
          const valor = encontro[chave];
          if (!valor) return null;
          const itens = Array.isArray(valor) ? valor : [valor];
          return (
            <Reveal key={chave} delay={i * 70}>
              <article className="glass card-lift rounded-3xl p-6 transition-all duration-300 hover:border-primary/20">
                <h2 className="flex items-center gap-2 text-sm font-semibold tracking-[0.16em] uppercase">
                  <Icone className="size-4 transition-transform duration-300 group-hover:scale-110" style={{ color: fase.cor }} />
                  {rotulo}
                </h2>
                {chave === "conteudos" ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {itens.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground hover:bg-primary/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : (
                  <ul className="mt-4 space-y-2">
                    {itens.map((t) => (
                      <li key={t} className="group flex gap-3 text-[15px] text-muted-foreground transition-colors hover:text-foreground">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full transition-all group-hover:scale-150"
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

        {materiais.length > 0 && (
          <Reveal>
            <Materiais materiais={materiais} cor={fase.cor} />
          </Reveal>
        )}



        <nav className="mt-6 grid gap-3 sm:grid-cols-2">
          {anterior ? (
            <Link
              to="/encontros/$numero"
              params={{ numero: String(anterior.numero) }}
              className="glass card-lift press-scale group rounded-2xl p-4"
            >
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
                Encontro {anterior.numero}
              </span>
              <p className="mt-1 text-sm font-medium transition-colors group-hover:text-primary">{anterior.titulo}</p>
            </Link>
          ) : (
            <span />
          )}
          {proximo && (
            <Link
              to="/encontros/$numero"
              params={{ numero: String(proximo.numero) }}
              className="glass card-lift press-scale group rounded-2xl p-4 sm:text-right"
            >
              <span className="flex items-center gap-2 text-xs text-muted-foreground sm:justify-end">
                Encontro {proximo.numero}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <p className="mt-1 text-sm font-medium transition-colors group-hover:text-primary">{proximo.titulo}</p>
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}

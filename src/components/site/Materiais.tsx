import { ExternalLink, FileText, Presentation, Link2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Material } from "@/data/materiais";

const icones = {
  slides: Presentation,
  pdf: FileText,
  link: Link2,
} as const;

const rotulos = {
  slides: "Slides",
  pdf: "PDF",
  link: "Link",
} as const;

export function Materiais({ materiais, cor }: { materiais: Material[]; cor: string }) {
  if (materiais.length === 0) return null;

  async function abrirArquivo(caminho: string) {
    const { data } = await supabase.storage.from("materiais").createSignedUrl(caminho, 3600);
    if (data?.signedUrl) window.open(data.signedUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <article className="glass card-lift rounded-3xl p-6">
      <h2 className="flex items-center gap-2 text-sm font-semibold tracking-[0.16em] uppercase">
        <Presentation className="size-4" style={{ color: cor }} />
        Materiais da aula
      </h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {materiais.map((m) => {
          const Icone = icones[m.tipo] ?? Link2;
          const classe =
            "group flex w-full items-center gap-3 rounded-2xl border border-border px-4 py-3 text-left text-sm transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_20px_color-mix(in_oklab,var(--primary)_8%,transparent)] press-scale";
          const conteudo = (
            <>
              <Icone className="size-4 shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ color: cor }} aria-hidden />
              <span className="min-w-0 flex-1">
                <span className="block truncate font-medium transition-colors group-hover:text-foreground">{m.titulo}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {rotulos[m.tipo] ?? "Material"} · abre em nova aba
                </span>
              </span>
              <ExternalLink className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </>
          );

          return (
            <li key={m.storagePath ?? m.url}>
              {m.storagePath ? (
                <button
                  type="button"
                  onClick={() => abrirArquivo(m.storagePath!)}
                  className={classe}
                >
                  {conteudo}
                </button>
              ) : (
                <a href={m.url} target="_blank" rel="noopener noreferrer" className={classe}>
                  {conteudo}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
}

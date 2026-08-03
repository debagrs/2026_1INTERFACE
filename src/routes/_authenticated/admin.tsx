import { createFileRoute, useNavigate, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { encontros } from "@/data/curso";
import { sincronizarAdmin } from "@/lib/admin.functions";
import { Loader2, Trash2, Upload, Link2, LogOut, ShieldCheck, Plus } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin")({
  ssr: false,
  // Bloqueio antes de renderizar: o servidor decide se a conta é a admin.
  beforeLoad: async () => {
    let admin = false;
    try {
      admin = (await sincronizarAdmin()).admin;
    } catch {
      admin = false;
    }
    if (!admin) throw redirect({ to: "/" });
  },
  head: () => ({
    meta: [
      { title: "Painel de materiais · Lab. de Projeto de Interfaces" },
      {
        name: "description",
        content: "Painel para professores publicarem slides, PDFs e links em cada encontro.",
      },
      { property: "og:title", content: "Painel de materiais" },
      { property: "og:description", content: "Gerencie os materiais de cada encontro." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

type MaterialRow = {
  id: string;
  encontro: number;
  titulo: string;
  tipo: string;
  url: string;
  storage_path: string | null;
  ordem: number;
};

function AdminPage() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [encontro, setEncontro] = useState(1);
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");
  const [tipo, setTipo] = useState<"slides" | "pdf" | "link">("slides");
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  const admin = useQuery({
    queryKey: ["admin-status"],
    queryFn: async () => (await sincronizarAdmin()).admin,
  });

  const materiais = useQuery({
    queryKey: ["materiais", encontro],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("materiais")
        .select("id, encontro, titulo, tipo, url, storage_path, ordem")
        .eq("encontro", encontro)
        .order("ordem");
      if (error) throw error;
      return (data ?? []) as MaterialRow[];
    },
  });

  async function sair() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  async function salvar(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    setEnviando(true);
    try {
      let publicUrl = url.trim();
      let storagePath: string | null = null;

      if (arquivo) {
        const caminho = `${encontro}/${Date.now()}-${arquivo.name.replace(/\s+/g, "-")}`;
        const { error } = await supabase.storage
          .from("materiais")
          .upload(caminho, arquivo, { upsert: false });
        if (error) throw error;
        storagePath = caminho;
        publicUrl = caminho;
      }

      if (!publicUrl) throw new Error("Informe um link ou selecione um arquivo.");

      const { error } = await supabase.from("materiais").insert({
        encontro,
        titulo: titulo.trim() || arquivo?.name || "Material",
        tipo,
        url: publicUrl,
        storage_path: storagePath,
        ordem: (materiais.data?.length ?? 0) + 1,
      });
      if (error) throw error;

      setTitulo("");
      setUrl("");
      setArquivo(null);
      qc.invalidateQueries({ queryKey: ["materiais", encontro] });
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Não foi possível salvar.");
    } finally {
      setEnviando(false);
    }
  }

  async function excluir(m: MaterialRow) {
    if (m.storage_path) {
      await supabase.storage.from("materiais").remove([m.storage_path]);
    }
    await supabase.from("materiais").delete().eq("id", m.id);
    qc.invalidateQueries({ queryKey: ["materiais", encontro] });
  }

  if (admin.isLoading) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-20 text-sm text-muted-foreground">
        <Loader2 className="mb-3 size-5 animate-spin" /> Verificando acesso…
      </div>
    );
  }

  if (admin.data !== true) {
    return (
      <div className="mx-auto max-w-md px-5 py-20">
        <h1 className="font-display text-2xl font-black uppercase italic">Acesso restrito</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Sua conta não está autorizada como professora/professor. Peça a um admin para incluir
          seu e-mail na lista de acesso.
        </p>
        <button
          onClick={sair}
          className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-border px-4 py-2 text-sm transition-all hover:border-primary/50 hover:bg-primary/5 press-scale focus-glow"
        >
          <LogOut className="size-4" /> Sair
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-black uppercase italic tracking-tight">
            Painel de materiais
          </h1>
          <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="size-3.5 text-primary" /> acesso de professor
          </p>
        </div>
        <button
          onClick={sair}
          className="inline-flex items-center gap-2 rounded-2xl border border-border px-4 py-2 text-sm transition-all hover:border-primary/50 hover:bg-primary/5 press-scale focus-glow"
        >
          <LogOut className="size-4" /> Sair
        </button>
      </div>

      <div className="glass mt-8 rounded-3xl p-6">
        <label className="grid gap-1 text-xs text-muted-foreground">
          Encontro
          <select
            value={encontro}
            onChange={(e) => setEncontro(Number(e.target.value))}
            className="focus-glow rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/30"
          >
            {encontros.map((e) => (
              <option key={e.numero} value={e.numero}>
                {e.numero}. {e.titulo}
              </option>
            ))}
          </select>
        </label>

        <form onSubmit={salvar} className="mt-6 grid gap-3">
          <label className="grid gap-1 text-xs text-muted-foreground">
            Título do material
            <input
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Slides — IA no processo"
              className="focus-glow rounded-2xl border border-border bg-transparent px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/30"
            />
          </label>

          <label className="grid gap-1 text-xs text-muted-foreground">
            Tipo
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value as typeof tipo)}
              className="focus-glow rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/30"
            >
              <option value="slides">Slides</option>
              <option value="pdf">PDF</option>
              <option value="link">Link</option>
            </select>
          </label>

          <label className="grid gap-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <Link2 className="size-3.5" /> Link externo (Drive, Canva, YouTube…)
            </span>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://…"
              className="focus-glow rounded-2xl border border-border bg-transparent px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/30"
            />
          </label>

          <label className="grid gap-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <Upload className="size-3.5" /> ou enviar arquivo (PDF, PPT…)
            </span>
            <input
              type="file"
              onChange={(e) => setArquivo(e.target.files?.[0] ?? null)}
              className="focus-glow rounded-2xl border border-border bg-transparent px-4 py-3 text-sm text-foreground transition-colors file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-3 file:py-1 file:text-primary-foreground file:transition-all file:hover:brightness-110"
            />
          </label>

          <button
            type="submit"
            disabled={enviando}
            className="btn-shine press-scale mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60 focus-glow"
          >
            {enviando ? <Loader2 className="size-4 animate-spin" /> : <Plus className="size-4" />}
            Adicionar ao encontro {encontro}
          </button>
          {erro && <p className="animate-fade-in-up text-sm text-destructive">{erro}</p>}
        </form>
      </div>

      <div className="glass mt-6 rounded-3xl p-6">
        <h2 className="text-sm font-semibold tracking-[0.16em] uppercase">
          Materiais do encontro {encontro}
        </h2>
        {materiais.isLoading ? (
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" /> Carregando…
          </p>
        ) : (materiais.data?.length ?? 0) === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">Nenhum material ainda.</p>
        ) : (
          <ul className="mt-4 grid gap-2">
            {materiais.data!.map((m) => (
              <li
                key={m.id}
                className="group flex items-center gap-3 rounded-2xl border border-border px-4 py-3 text-sm transition-all hover:border-primary/30 hover:bg-primary/5"
              >
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-medium transition-colors group-hover:text-foreground">{m.titulo}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {m.tipo}
                    {m.storage_path ? " · arquivo enviado" : " · link"}
                  </span>
                </span>
                <button
                  onClick={() => excluir(m)}
                  aria-label={`Excluir ${m.titulo}`}
                  className="press-scale rounded-full p-2 text-muted-foreground transition-all hover:bg-destructive/10 hover:text-destructive focus-glow"
                >
                  <Trash2 className="size-4 transition-transform group-hover:scale-110" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}

import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { sincronizarAdmin } from "@/lib/admin.functions";
import { LogIn, Loader2 } from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Entrar · Lab. de Projeto de Interfaces" },
      {
        name: "description",
        content:
          "Área restrita para professores da disciplina Laboratório de Projeto de Interfaces gerenciarem materiais das aulas.",
      },
      { property: "og:title", content: "Entrar · Lab. de Projeto de Interfaces" },
      {
        property: "og:description",
        content: "Acesso de professores para gerenciar materiais de cada encontro.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modo, setModo] = useState<"entrar" | "criar">("entrar");
  const [erro, setErro] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    let ativo = true;
    supabase.auth.getSession().then(async ({ data }) => {
      if (!ativo || !data.session) return;
      await sincronizarAdmin().catch(() => null);
      navigate({ to: "/admin", replace: true });
    });
    return () => {
      ativo = false;
    };
  }, [navigate]);

  async function entrarComGoogle() {
    setErro(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/auth",
    });
    if ("error" in result && result.error) {
      setErro("Não foi possível entrar com o Google.");
      return;
    }
    if ("redirected" in result && result.redirected) return;
    await sincronizarAdmin().catch(() => null);
    navigate({ to: "/admin", replace: true });
  }

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    setAviso(null);
    setCarregando(true);
    try {
      if (modo === "criar") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password: senha,
          options: { emailRedirectTo: window.location.origin + "/auth" },
        });
        if (error) throw error;
        if (!data.session) {
          setAviso("Conta criada. Confirme o e-mail pelo link enviado e depois entre.");
          return;
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password: senha });
        if (error) throw error;
      }
      await sincronizarAdmin().catch(() => null);
      navigate({ to: "/admin", replace: true });
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Não foi possível entrar.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <section className="aurora relative overflow-hidden">
      <div className="grid-noise pointer-events-none absolute inset-0" />
      <div className="mx-auto max-w-md px-5 py-16">
        <h1 className="font-display text-3xl font-black uppercase italic tracking-tight">
          Área do professor
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Entre para adicionar slides, PDFs e links em cada encontro.
        </p>

        <div className="glass mt-8 rounded-3xl p-6">
          <button
            onClick={entrarComGoogle}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/5"
          >
            <LogIn className="size-4" /> Entrar com Google
          </button>

          <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border" /> ou e-mail
            <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={enviar} className="grid gap-3">
            <label className="grid gap-1 text-xs text-muted-foreground">
              E-mail
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-2xl border border-border bg-transparent px-4 py-3 text-sm text-foreground"
              />
            </label>
            <label className="grid gap-1 text-xs text-muted-foreground">
              Senha
              <input
                type="password"
                required
                minLength={6}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="rounded-2xl border border-border bg-transparent px-4 py-3 text-sm text-foreground"
              />
            </label>
            <button
              type="submit"
              disabled={carregando}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {carregando && <Loader2 className="size-4 animate-spin" />}
              {modo === "entrar" ? "Entrar" : "Criar conta"}
            </button>
          </form>

          {erro && <p className="mt-4 text-sm text-destructive">{erro}</p>}
          {aviso && <p className="mt-4 text-sm text-muted-foreground">{aviso}</p>}

          <button
            onClick={() => setModo(modo === "entrar" ? "criar" : "entrar")}
            className="mt-5 text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            {modo === "entrar" ? "Não tem conta? Criar acesso" : "Já tenho conta"}
          </button>
        </div>

        <Link
          to="/"
          className="mt-6 inline-block text-xs text-muted-foreground hover:text-foreground"
        >
          voltar ao site
        </Link>
      </div>
    </section>
  );
}

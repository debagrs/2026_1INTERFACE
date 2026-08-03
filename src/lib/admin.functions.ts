import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/** Único e-mail com acesso à área do professor. */
const OWNER_EMAIL = "deboraaitagasparetto@gmail.com";

/** Concede o papel de admin apenas para a proprietária do site. */
export const sincronizarAdmin = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: userData } = await context.supabase.auth.getUser();
    const user = userData.user;
    const email = user?.email?.toLowerCase();
    const verificado = Boolean(user?.email_confirmed_at ?? user?.confirmed_at);
    if (!email || !verificado || email !== OWNER_EMAIL) return { admin: false };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    await supabaseAdmin
      .from("user_roles")
      .upsert(
        { user_id: context.userId, role: "admin" as const },
        { onConflict: "user_id,role" },
      );

    return { admin: true };
  });

/** Apenas verifica (sem conceder) se quem chama é a proprietária admin. */
export const verificarAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: userData } = await context.supabase.auth.getUser();
    const user = userData.user;
    const email = user?.email?.toLowerCase();
    const verificado = Boolean(user?.email_confirmed_at ?? user?.confirmed_at);
    if (!email || !verificado || email !== OWNER_EMAIL) return { admin: false };

    const { data } = await context.supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", context.userId)
      .eq("role", "admin")
      .maybeSingle();

    return { admin: Boolean(data) };
  });

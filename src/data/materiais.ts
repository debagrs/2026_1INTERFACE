import apresentacaoAula01 from "@/assets/interfaces-aula-01.pdf.asset.json";
import aplicacaoMetodologia from "@/assets/papita-delicia-metodologia-5is.pdf.asset.json";

export type TipoMaterial = "slides" | "pdf" | "link";

export type Material = {
  titulo: string;
  url: string;
  tipo: TipoMaterial;
  /** Caminho no armazenamento quando o material é um arquivo enviado pelo painel. */
  storagePath?: string | null;
};

/**
 * Materiais fixos no código (opcional).
 * O caminho recomendado é usar o painel em /admin, que grava no banco.
 */
export const materiaisPorEncontro: Record<number, Material[]> = {
  1: [
    {
      titulo: "Apresentação da disciplina — Encontro 01",
      url: apresentacaoAula01.url,
      tipo: "slides",
    },
    {
      titulo: "Conceitos operacionais — LabInterface DI",
      url: "https://laboratoriointerfacedi.vercel.app/#design-system",
      tipo: "link",
    },
    {
      titulo: "Metodologia 5I's — site de referência",
      url: "https://metodologia5-is-labinterfaceddi.vercel.app/",
      tipo: "link",
    },
  ],
  2: [
    {
      titulo: "Aplicação da metodologia 5I's — Papita Delícia",
      url: aplicacaoMetodologia.url,
      tipo: "slides",
    },
    {
      titulo: "Metodologia 5I's — site de referência",
      url: "https://metodologia5-is-labinterfaceddi.vercel.app/",
      tipo: "link",
    },
  ],
};

export function getMateriais(numero: number): Material[] {
  return materiaisPorEncontro[numero] ?? [];
}

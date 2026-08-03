import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setVisible(scrollTop > 120);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[60] h-0.5 bg-primary"
        style={{
          width: `${progress}%`,
          transition: "width 0.1s linear",
          boxShadow: "0 0 12px color-mix(in oklab, var(--primary) 60%, transparent)",
        }}
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        className={`fixed right-5 bottom-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-background/90 text-primary shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground focus-glow ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"}`}
      >
        <ArrowUp className="size-5" />
      </button>
    </>
  );
}

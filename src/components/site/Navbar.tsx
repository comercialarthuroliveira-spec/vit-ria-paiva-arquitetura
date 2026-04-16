import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-vitorya-paiva.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a href="#top" className="flex items-center" aria-label="Vitórya Paiva — Arquitetura e Urbanismo">
          <img
            src={logo}
            alt="Vitórya Paiva Arquitetura e Urbanismo"
            className="h-12 w-auto md:h-14"
            loading="eager"
          />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden rounded-sm border border-foreground px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-background md:inline-block"
        >
          Orçamento
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className={cn("h-px w-6 bg-foreground transition-all", open && "translate-y-1.5 rotate-45")} />
          <span className={cn("h-px w-6 bg-foreground transition-all", open && "opacity-0")} />
          <span className={cn("h-px w-6 bg-foreground transition-all", open && "-translate-y-1.5 -rotate-45")} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-6 py-6">
            {links.map((l) => (
              <li key={l.href} className="border-b border-border/60 last:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-sm tracking-wide"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

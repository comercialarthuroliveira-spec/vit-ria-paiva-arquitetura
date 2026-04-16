import { useState } from "react";
import { cn } from "@/lib/utils";
import r1 from "@/assets/portfolio-residential-1.jpg";
import r2 from "@/assets/portfolio-residential-2.jpg";
import r3 from "@/assets/portfolio-residential-3.jpg";
import c1 from "@/assets/portfolio-commercial-1.jpg";
import i1 from "@/assets/portfolio-interior-1.jpg";
import i2 from "@/assets/portfolio-interior-2.jpg";

type Cat = "Todos" | "Residencial" | "Comercial" | "Interiores";

const projects: { src: string; title: string; cat: Exclude<Cat, "Todos">; tall?: boolean }[] = [
  { src: r1, title: "Residência Jardins", cat: "Residencial", tall: true },
  { src: i2, title: "Cozinha Setor Bueno", cat: "Interiores" },
  { src: r2, title: "Suíte Master", cat: "Residencial" },
  { src: c1, title: "Boutique Marista", cat: "Comercial", tall: true },
  { src: i1, title: "Home Office Park Lozandes", cat: "Interiores" },
  { src: r3, title: "Fachada Alphaville", cat: "Residencial" },
];

const cats: Cat[] = ["Todos", "Residencial", "Comercial", "Interiores"];

export const Portfolio = () => {
  const [active, setActive] = useState<Cat>("Todos");
  const list = active === "Todos" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-6">— Portfólio</p>
            <h2 className="max-w-2xl text-balance font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
              Projetos realizados em Goiânia e região.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all",
                  active === c
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-foreground/70 hover:border-foreground hover:text-foreground"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {list.map((p, idx) => (
            <figure
              key={p.title}
              className={cn(
                "group overflow-hidden",
                p.tall ? "lg:row-span-2" : "",
                idx === 0 && "md:col-span-2 lg:col-span-1"
              )}
            >
              <div className="relative overflow-hidden bg-muted">
                <img
                  src={p.src}
                  alt={`${p.title} — projeto de ${p.cat.toLowerCase()} em Goiânia`}
                  loading="lazy"
                  className={cn(
                    "image-zoom w-full object-cover",
                    p.tall ? "h-[640px]" : "h-[420px]"
                  )}
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <h3 className="font-serif text-xl md:text-2xl">{p.title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.cat}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-16 text-center text-sm italic text-muted-foreground">
          Projetos realizados em Goiânia e região.
        </p>
      </div>
    </section>
  );
};

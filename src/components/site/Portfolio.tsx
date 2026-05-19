import { Fragment } from "react";
import gramado1 from "@/assets/portfolio-gramado-1.jpg";
import gramado2 from "@/assets/portfolio-gramado-2.jpg";
import gramado3 from "@/assets/portfolio-gramado-3.jpg";
import recanto1 from "@/assets/portfolio-recanto-1.jpg";
import recanto2 from "@/assets/portfolio-recanto-2.jpg";
import guiLucas1 from "@/assets/portfolio-gui-lucas-1.jpg";
import guiLucas2 from "@/assets/portfolio-gui-lucas-2.jpg";
import mpCozinha from "@/assets/portfolio-mp-cozinha.jpg";
import mpLavanderia from "@/assets/portfolio-mp-lavanderia.jpg";
import lavaboArte from "@/assets/portfolio-lavabo-arte.jpg";
import lavaboVerde from "@/assets/portfolio-lavabo-verde.jpg";
import banhoPedras from "@/assets/portfolio-banho-pedras.jpg";
import banhoPedras2 from "@/assets/portfolio-banho-pedras-2.jpg";
import cozinhaVerde from "@/assets/portfolio-cozinha-verde.jpg";
import livingIntegrado from "@/assets/portfolio-living-integrado.jpg";
import nogal1 from "@/assets/portfolio-nogal-1.jpg";
import nogal2 from "@/assets/portfolio-nogal-2.jpg";
import nogal3 from "@/assets/portfolio-nogal-3.jpg";

type Project = { src: string; title: string; subtitle: string; variant?: "default" | "grayscale" | "overlay" | "wide-caption" };

const projects: Project[] = [
  { src: gramado1, title: "Apê Gramado", subtitle: "Sala de Jantar", variant: "grayscale" },
  { src: banhoPedras, title: "Banho Texturas", subtitle: "Revestimentos Naturais", variant: "overlay" },
  { src: guiLucas2, title: "Apê Gui e Lucas", subtitle: "Integração total para criar um ambiente de convívio e luz.", variant: "wide-caption" },
  { src: nogal1, title: "Apê Nogal", subtitle: "Cozinha Gourmet" },
  { src: recanto1, title: "Apê Recanto", subtitle: "Living" },
  { src: gramado2, title: "Apê Gramado", subtitle: "Cozinha", variant: "grayscale" },
  { src: lavaboVerde, title: "Lavabo Mármore Verde", subtitle: "Detalhe Autoral" },
  { src: mpCozinha, title: "Projeto M|P", subtitle: "Cozinha" },
  { src: nogal2, title: "Apê Nogal", subtitle: "Ilha Central", variant: "overlay" },
  { src: cozinhaVerde, title: "Cozinha Verde Sage", subtitle: "Ambiente Social" },
  { src: livingIntegrado, title: "Living Integrado", subtitle: "Área Social", variant: "wide-caption" },
  { src: guiLucas1, title: "Apê Gui e Lucas", subtitle: "Jantar" },
  { src: lavaboArte, title: "Lavabo Autoral", subtitle: "Curadoria de Arte" },
  { src: mpLavanderia, title: "Projeto M|P", subtitle: "Lavanderia", variant: "grayscale" },
  { src: banhoPedras2, title: "Banho Casal", subtitle: "Suíte Master" },
  { src: gramado3, title: "Apê Gramado", subtitle: "Estar" },
  { src: recanto2, title: "Apê Recanto", subtitle: "Cozinha", variant: "overlay" },
  { src: nogal3, title: "Apê Nogal", subtitle: "Bancada" },
];

const fontDisplay = { fontFamily: "'Instrument Serif', Georgia, serif" } as const;
const fontBody = { fontFamily: "'Work Sans', system-ui, sans-serif" } as const;

const PHILOSOPHY_INDEX = 3; // posição do bloco de filosofia no fluxo

export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-[#f5f3ee] py-28 md:py-40 text-[#2d2d2d]"
      style={fontBody}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <header className="mb-20 flex flex-col justify-between gap-10 md:mb-24 md:flex-row md:items-end md:gap-12">
          <div className="max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#0d0d0d]/40">
              <span className="h-px w-8 bg-[#0d0d0d]/20" />
              Portfólio Selecionado
            </p>
            <h2
              style={fontDisplay}
              className="text-5xl leading-[0.9] tracking-tight text-[#0d0d0d] md:text-7xl lg:text-8xl"
            >
              Projetos realizados <br className="hidden md:block" />em Goiânia e região.
            </h2>
          </div>
          <p className="max-w-xs text-sm italic leading-relaxed text-[#2d2d2d]/70 md:text-right">
            Onde a funcionalidade contemporânea encontra a alma da arquitetura brasileira.
          </p>
        </header>

        {/* Masonry */}
        <div className="columns-1 gap-8 space-y-8 md:columns-2 md:gap-10 md:space-y-10 lg:columns-3">
          {projects.map((p, i) => (
            <Fragment key={p.title + i}>
              {i === PHILOSOPHY_INDEX && (
                <div
                  className="break-inside-avoid bg-[#e8e4dd] p-10 md:p-12 flex flex-col justify-center md:h-[400px]"
                >
                  <h3
                    style={fontDisplay}
                    className="mb-8 text-3xl leading-tight text-[#0d0d0d] md:text-4xl"
                  >
                    A sensibilidade do material é o que define a permanência do espaço.
                  </h3>
                  <div className="mb-4 h-px w-12 bg-[#0d0d0d]" />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#2d2d2d]">
                    Nossa Filosofia — Vitória Paiva
                  </p>
                </div>
              )}
              <ProjectCard project={p} index={i} />
            </Fragment>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-28 flex flex-col items-start justify-between gap-10 border-t border-[#0d0d0d]/10 pt-12 md:mt-32 md:flex-row md:gap-12">
          <div className="max-w-xs">
            <h4
              style={fontDisplay}
              className="mb-4 text-2xl italic text-[#0d0d0d] md:text-3xl"
            >
              Interessado em transformar seu espaço?
            </h4>
            <p className="text-sm leading-relaxed text-[#2d2d2d]/60">
              Cada projeto é uma jornada singular de descoberta e design.
            </p>
          </div>
          <a
            href="#contato"
            className="group flex items-center gap-6 bg-[#0d0d0d] px-8 py-5 text-xs uppercase tracking-[0.25em] text-[#f5f3ee] transition-all hover:bg-[#2d2d2d]"
          >
            Fale Conosco
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { src, title, subtitle, variant = "default" } = project;
  const num = String(index + 1).padStart(2, "0");

  if (variant === "overlay") {
    return (
      <figure className="group relative break-inside-avoid">
        <img
          src={src}
          alt={`${title} — ${subtitle}`}
          loading="lazy"
          className="w-full bg-[#e8e4dd] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute right-4 top-4 bg-[#f5f3ee]/90 p-4 backdrop-blur-sm">
          <h3 style={fontDisplay} className="text-xl text-[#0d0d0d] md:text-2xl">
            {title}
          </h3>
        </div>
        <figcaption className="mt-4 text-right text-[10px] uppercase tracking-[0.2em] text-[#2d2d2d]/60">
          {subtitle}
        </figcaption>
      </figure>
    );
  }

  if (variant === "wide-caption") {
    return (
      <figure className="group break-inside-avoid">
        <div className="overflow-hidden bg-[#e8e4dd]">
          <img
            src={src}
            alt={`${title} — ${subtitle}`}
            loading="lazy"
            className="w-full object-cover transition-transform duration-700 group-hover:scale-[0.99]"
          />
        </div>
        <figcaption className="mt-8 max-w-[85%]">
          <h3 style={fontDisplay} className="text-3xl italic leading-none text-[#0d0d0d] md:text-4xl">
            {title}
          </h3>
          <p className="mt-3 text-xs leading-relaxed text-[#2d2d2d]/70">{subtitle}</p>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="group break-inside-avoid">
      <div className="overflow-hidden bg-[#e8e4dd]">
        <img
          src={src}
          alt={`${title} — ${subtitle}`}
          loading="lazy"
          className={`w-full object-cover transition-all duration-700 group-hover:scale-[1.02] ${
            variant === "grayscale" ? "grayscale group-hover:grayscale-0" : ""
          }`}
        />
      </div>
      <figcaption className="mt-5 flex items-baseline justify-between gap-4">
        <div>
          <h3 style={fontDisplay} className="text-2xl italic text-[#0d0d0d] md:text-3xl">
            {title}
          </h3>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#2d2d2d]/55">
            {subtitle}
          </p>
        </div>
        <span className="text-[10px] font-medium text-[#0d0d0d]/30">{num}</span>
      </figcaption>
    </figure>
  );
};

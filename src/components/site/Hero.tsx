import heroImg from "@/assets/hero-living.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Projeto residencial sofisticado em Goiânia por Vitória Paiva"
          width={1600}
          height={1920}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40 lg:px-12 lg:pb-32">
        <p className="eyebrow reveal mb-6">Arquitetura & Interiores · Goiânia</p>
        <h1 className="reveal reveal-delay-1 max-w-4xl text-balance font-serif text-5xl leading-[1.05] text-foreground md:text-7xl lg:text-8xl">
          Projetos de Arquitetura e Interiores em <em className="not-italic text-stone">Goiânia</em> que traduzem a sua identidade.
        </h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Projetos residenciais e comerciais em Goiânia, com foco em funcionalidade, estética e valorização do seu investimento.
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contato"
            className="group relative inline-flex items-center gap-3 overflow-hidden bg-foreground px-10 py-5 text-xs font-medium uppercase tracking-[0.25em] text-background shadow-[0_18px_40px_-12px_hsl(var(--foreground)/0.55)] ring-1 ring-foreground/20 transition-all duration-500 hover:-translate-y-0.5 hover:bg-stone hover:shadow-[0_24px_50px_-12px_hsl(var(--foreground)/0.65)]"
          >
            <span className="relative z-10">Solicitar orçamento</span>
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1.5">→</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-background/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-3 px-2 py-5 text-xs uppercase tracking-[0.25em] text-foreground underline-offset-8 hover:underline"
          >
            Ver portfólio
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground lg:flex">
        <span className="h-px w-12 bg-muted-foreground/50" />
        Goiânia · GO
      </div>
    </section>
  );
};

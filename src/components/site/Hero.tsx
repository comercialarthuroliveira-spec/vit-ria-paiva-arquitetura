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
          Arquitetura que traduz sua <em className="not-italic text-stone">identidade</em> em cada detalhe.
        </h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Projetos residenciais e comerciais em Goiânia, com foco em funcionalidade, estética e valorização do seu investimento.
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background transition-all hover:bg-stone"
          >
            Solicitar orçamento
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-3 px-2 py-4 text-xs uppercase tracking-[0.25em] text-foreground underline-offset-8 hover:underline"
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

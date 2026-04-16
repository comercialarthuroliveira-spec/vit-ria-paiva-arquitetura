import portrait from "@/assets/vitoria-portrait.jpg";

export const About = () => {
  return (
    <section id="sobre" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden">
            <img
              src={portrait}
              alt="Vitória Paiva, arquiteta em Goiânia"
              loading="lazy"
              className="image-zoom h-[640px] w-full object-cover"
            />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Vitória Paiva — Arquiteta e Urbanista
          </p>
        </div>

        <div className="lg:col-span-7 lg:pt-16">
          <p className="eyebrow mb-6">— Sobre</p>
          <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            Espaços que refletem a <em className="not-italic text-stone">essência</em> de quem os habita.
          </h2>
          <div className="mt-10 max-w-xl space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Vitória Paiva é arquiteta e urbanista especializada em projetos de arquitetura
              e interiores em Goiânia. Seu trabalho une estética, funcionalidade e estratégia,
              criando espaços que refletem a identidade de cada cliente.
            </p>
            <p>
              Cada projeto é desenvolvido de forma personalizada, considerando estilo de vida,
              necessidades e objetivos — resultando em ambientes únicos, atemporais e pensados
              para a valorização do imóvel.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <p className="font-serif text-3xl md:text-4xl">+50</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Projetos</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl">100%</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Personalizado</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl">GO</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Goiânia & região</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

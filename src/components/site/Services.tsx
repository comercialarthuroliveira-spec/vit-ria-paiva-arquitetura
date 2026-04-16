const services = [
  { n: "01", title: "Projetos Residenciais", desc: "Casas e apartamentos pensados para refletir o estilo de vida e a identidade de cada cliente." },
  { n: "02", title: "Arquitetura de Interiores", desc: "Ambientes funcionais, atemporais e com curadoria refinada de materiais, mobiliário e iluminação." },
  { n: "03", title: "Projetos Comerciais", desc: "Espaços que comunicam marca, otimizam fluxos e elevam a experiência do cliente final." },
  { n: "04", title: "Consultoria Arquitetônica", desc: "Direcionamento estratégico para decisões de projeto, materiais, briefing e investimento." },
  { n: "05", title: "Reformas e Readequações", desc: "Transformação completa de ambientes existentes com foco em funcionalidade e valorização." },
];

export const Services = () => {
  return (
    <section id="servicos" className="relative bg-secondary py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">— Serviços</p>
            <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
              Projetos pensados para a valorização do imóvel e a experiência de quem vive.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Atuação completa em arquitetura e interiores em Goiânia — do conceito à entrega,
              com método, sensibilidade e visão estratégica.
            </p>
          </div>

          <ul className="lg:col-span-7">
            {services.map((s, i) => (
              <li
                key={s.n}
                className="group grid grid-cols-12 gap-4 border-t border-border py-8 transition-colors last:border-b hover:bg-background/60"
              >
                <h3 className="col-span-12 font-serif text-2xl md:col-span-5 md:text-3xl">{s.title}</h3>
                <p className="col-span-12 text-sm leading-relaxed text-muted-foreground md:col-span-7 md:text-base">
                  {s.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

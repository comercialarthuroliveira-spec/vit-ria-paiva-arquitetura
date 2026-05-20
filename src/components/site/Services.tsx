import { Home, Sofa, Building2, Compass, Hammer, ClipboardCheck } from "lucide-react";

const services = [
  { icon: Home, title: "Projetos Residenciais", tag: "Casas e apartamentos sob medida", desc: "Casas e apartamentos pensados para refletir o estilo de vida e a identidade de cada cliente." },
  { icon: Sofa, title: "Arquitetura de Interiores", tag: "Ambientes atemporais e funcionais", desc: "Curadoria refinada de materiais, mobiliário e iluminação para espaços únicos." },
  { icon: Building2, title: "Projetos Comerciais", tag: "Espaços que comunicam marca", desc: "Otimizam fluxos e elevam a experiência do cliente final." },
  { icon: Compass, title: "Consultoria Arquitetônica", tag: "Direcionamento estratégico", desc: "Decisões assertivas de projeto, materiais, briefing e investimento." },
  { icon: Hammer, title: "Reformas e Readequações", tag: "Transformação completa", desc: "Ambientes existentes repensados com foco em funcionalidade e valorização." },
  { icon: ClipboardCheck, title: "Acompanhamento de Obra", tag: "Tranquilidade e fidelidade do projeto à execução", desc: "Gestão e curadoria de obra do briefing à entrega final." },
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

          <ul className="grid grid-cols-1 gap-px bg-border lg:col-span-7 sm:grid-cols-2">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.title}
                  className="group flex flex-col gap-3 bg-secondary p-8 transition-colors hover:bg-background"
                >
                  <Icon className="h-7 w-7 text-stone transition-transform duration-500 group-hover:-translate-y-0.5" strokeWidth={1.25} />
                  <h3 className="mt-2 font-serif text-2xl md:text-[1.65rem]">{s.title}</h3>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.tag}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

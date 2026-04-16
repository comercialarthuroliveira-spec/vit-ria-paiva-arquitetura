const items = [
  { title: "Atendimento personalizado", desc: "Cada cliente é único — e o projeto também." },
  { title: "Projetos exclusivos", desc: "Soluções autorais, jamais replicadas." },
  { title: "Acompanhamento completo", desc: "Do briefing à entrega final, com curadoria de obra." },
  { title: "Funcionalidade + estética", desc: "Beleza que se vive no dia a dia." },
  { title: "Valorização do imóvel", desc: "Projetos que se traduzem em retorno patrimonial." },
  { title: "Visão estratégica", desc: "Decisões que respeitam orçamento, tempo e estilo de vida." },
];

export const Differentials = () => {
  return (
    <section id="diferenciais" className="bg-foreground py-28 text-background md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <p className="mb-6 text-xs uppercase tracking-[0.28em] text-background/60">— Diferenciais</p>
        <h2 className="max-w-3xl text-balance font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
          Método, sensibilidade e estratégia em cada projeto.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px bg-background/15 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={it.title} className="bg-foreground p-8 transition-colors hover:bg-stone md:p-10">
              <p className="font-serif text-sm text-background/50">0{i + 1}</p>
              <h3 className="mt-6 font-serif text-2xl text-background md:text-3xl">{it.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-background/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote:
      "Excelente profissional, transformou completamente nosso espaço. Superou todas as expectativas e entregou um projeto que reflete exatamente quem somos.",
    name: "Marina C.",
    role: "Cliente residencial · Setor Marista",
  },
  {
    quote:
      "Atendimento impecável, com olhar estratégico em cada decisão. Nosso showroom ganhou uma identidade que potencializou as vendas.",
    name: "Rafael A.",
    role: "Cliente comercial · Goiânia",
  },
  {
    quote:
      "A Vitória entendeu nosso estilo de vida desde a primeira conversa. O resultado é uma casa funcional, sofisticada e atemporal.",
    name: "Família Oliveira",
    role: "Residência · Alphaville",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-secondary py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <p className="eyebrow mb-6">— Depoimentos</p>
        <h2 className="max-w-3xl text-balance font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
          Histórias de quem confiou no <em className="not-italic text-stone">processo</em>.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col border-t border-foreground/20 pt-8">
              <span className="font-serif text-5xl leading-none text-foreground/30">“</span>
              <blockquote className="mt-2 font-serif text-xl leading-snug text-foreground md:text-2xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-foreground">{t.name}</span> · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-3xl px-6 py-28 lg:px-12 md:py-40">
        <p className="eyebrow mb-6">— Documento legal</p>
        <h1 className="font-serif text-4xl leading-tight md:text-5xl">Política de Privacidade</h1>
        <p className="mt-6 text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <div className="prose prose-stone mt-10 max-w-none space-y-6 text-base leading-relaxed text-foreground/90">
          <p>
            A Vitória Paiva Arquitetura e Interiores ("nós") respeita a privacidade dos visitantes
            deste site e está comprometida com a proteção dos dados pessoais coletados,
            em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
          </p>

          <h2 className="font-serif text-2xl">1. Dados coletados</h2>
          <p>
            Podemos coletar informações fornecidas voluntariamente pelo usuário ao entrar em contato
            via WhatsApp, e-mail ou redes sociais, como nome, telefone, e-mail e detalhes do projeto.
          </p>

          <h2 className="font-serif text-2xl">2. Uso das informações</h2>
          <p>
            Os dados são utilizados exclusivamente para responder ao contato, elaborar propostas
            comerciais e prestar atendimento personalizado. Não comercializamos nem compartilhamos
            dados com terceiros sem autorização.
          </p>

          <h2 className="font-serif text-2xl">3. Cookies e analytics</h2>
          <p>
            Este site pode utilizar cookies e ferramentas de análise (como Google Analytics) para
            entender o comportamento de navegação e melhorar a experiência do usuário.
          </p>

          <h2 className="font-serif text-2xl">4. Direitos do titular</h2>
          <p>
            Você pode, a qualquer momento, solicitar acesso, correção ou exclusão dos seus dados
            pessoais entrando em contato pelo WhatsApp (62) 98428-7873.
          </p>

          <h2 className="font-serif text-2xl">5. Contato</h2>
          <p>
            Em caso de dúvidas sobre esta Política, entre em contato pelo e-mail ou WhatsApp
            divulgados no rodapé deste site.
          </p>
        </div>

        <div className="mt-16">
          <a href="/" className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] underline-offset-8 hover:underline">
            ← Voltar para o site
          </a>
        </div>
      </section>
    </main>
  );
}

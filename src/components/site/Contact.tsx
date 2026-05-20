const WHATSAPP = "https://wa.me/5562984287873?text=Ol%C3%A1%20Vit%C3%B3ria%2C%20gostaria%20de%20um%20or%C3%A7amento%20de%20arquitetura.";
const INSTAGRAM = "https://www.instagram.com/vitoryapaivaarquitetura/";
const INSTAGRAM_HANDLE = "@vitoryapaivaarquitetura";
const CNPJ = "00.000.000/0001-00";

export const Contact = () => {
  return (
    <>
      {/* CTA */}
      <section id="contato" className="relative overflow-hidden bg-background py-28 md:py-40">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
          <p className="eyebrow mb-8">— Vamos conversar</p>
          <h2 className="text-balance font-serif text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
            Vamos transformar <em className="not-italic text-stone">seu espaço</em>?
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Conte sobre o seu projeto. Atendimento personalizado para residências e empresas
            em Goiânia e região.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row md:flex-wrap">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden bg-foreground px-12 py-6 text-sm font-medium uppercase tracking-[0.25em] text-background shadow-[0_24px_60px_-18px_hsl(var(--foreground)/0.65)] ring-1 ring-foreground/20 transition-all duration-500 hover:-translate-y-0.5 hover:bg-stone hover:shadow-[0_30px_70px_-18px_hsl(var(--foreground)/0.75)] md:w-auto md:text-base"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="relative z-10 h-5 w-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              <span className="relative z-10">Falar no WhatsApp</span>
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1.5">→</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-background/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-2 py-5 text-xs uppercase tracking-[0.25em] underline-offset-8 hover:underline"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </div>

          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-8 border-t border-border pt-12 text-left md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">WhatsApp</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-2 block font-serif text-xl hover:text-stone">(62) 98428-7873</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Instagram</p>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mt-2 block font-serif text-xl hover:text-stone">{INSTAGRAM_HANDLE}</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Localização</p>
              <p className="mt-2 font-serif text-xl">Goiânia · GO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <p className="font-serif text-lg text-foreground">Vitória Paiva</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">Arquitetura &amp; Interiores</p>
              <p className="mt-4 text-xs text-muted-foreground">CNPJ: {CNPJ}</p>
              <p className="mt-1 text-xs text-muted-foreground">Goiânia · GO</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Institucional</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#sobre" className="hover:text-stone">Sobre</a></li>
                <li><a href="#portfolio" className="hover:text-stone">Portfólio</a></li>
                <li><a href="/politica-de-privacidade" className="hover:text-stone">Política de Privacidade</a></li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Redes sociais</p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <rect x="3" y="3" width="18" height="18" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
            <p>© {new Date().getFullYear()} Vitória Paiva Arquitetura. Todos os direitos reservados.</p>
            <p className="uppercase tracking-[0.25em]">Goiânia · GO</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-[0_10px_30px_-10px_hsl(var(--foreground)/0.5)] transition-all hover:scale-110 hover:bg-stone md:h-16 md:w-16"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 md:h-7 md:w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
};

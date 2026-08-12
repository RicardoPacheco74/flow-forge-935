import { ArrowRight, CreditCard, Infinity as InfinityIcon, ShieldCheck } from "lucide-react";

import logoAcademia from "@/assets/logo-academia-transparente.png.asset.json";
import { MODULES, OFFER, TOTAL_LESSONS_LABEL } from "@/data/course";
import { CtaButton, Reveal, Section } from "./primitives";

export function FinalCta() {


  return (
    <Section id="checkout" className="pb-32">
      <Reveal>
        <div className="glow-ring relative overflow-hidden rounded-[36px] p-[1.5px]">
          <div className="gradient-neon absolute inset-0 opacity-50" />
          <div className="relative overflow-hidden rounded-[35px] bg-surface px-6 py-14 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[640px] -translate-x-1/2 rounded-full bg-neon/20 blur-[120px]" />
            <div className="relative">
              <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] tracking-wide text-neon">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                Turma com acesso imediato
              </span>
              <h2 className="mx-auto mt-7 max-w-3xl font-display text-3xl leading-[1.1] font-light tracking-tight text-balance md:text-5xl">
                Comece hoje a construir seus{" "}
                <span className="text-neon text-glow">agentes de IA com n8n</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {MODULES.length} módulos · {TOTAL_LESSONS_LABEL} aulas · projetos completos,
                templates prontos e atualizações vitalícias.
              </p>

              <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-1">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground">
                  Acesso vitalício
                </span>
                <p className="font-display text-4xl font-light tracking-tight md:text-5xl">
                  {OFFER.price}
                </p>
                <span className="text-xs text-muted-foreground">Pagamento único</span>
              </div>


              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <CtaButton href={OFFER.checkoutUrl} className="px-9 py-4 text-base">
                  Garantir minha vaga
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </CtaButton>
                <CtaButton href="#conteudo" variant="ghost">
                  Rever o conteúdo
                </CtaButton>
              </div>

              <div className="mt-12 grid gap-4 text-left md:grid-cols-3">
                {[
                  {
                    icon: ShieldCheck,
                    title: `Garantia de ${OFFER.guaranteeDays} dias`,
                    text: "Não gostou? Reembolso integral, sem perguntas.",
                  },
                  {
                    icon: CreditCard,
                    title: "Pagamento seguro",
                    text: "PIX, boleto ou cartão.",
                  },
                  {
                    icon: InfinityIcon,
                    title: "Acesso vitalício",
                    text: "Conteúdo e atualizações futuras inclusas.",
                  },
                ].map((b) => (
                  <div key={b.title} className="glass rounded-2xl p-5">
                    <b.icon className="h-4.5 w-4.5 text-neon" />
                    <p className="mt-3 text-sm font-medium">{b.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="mt-16 flex flex-col items-center gap-4 text-center text-xs text-muted-foreground">
        <p>Automação e Criação de Agentes de IA com n8n</p>
        <a
          href="https://www.academiadanuvem.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80"
        >
          <img
            src={logoAcademia.url}
            alt="Academia da Nuvem"
            className="h-9 w-auto"
            loading="lazy"
          />
        </a>
        <p>
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.academiadanuvem.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-neon"
          >
            Academia da Nuvem
          </a>{" "}
          · Todos os direitos reservados.
        </p>
      </footer>
    </Section>
  );
}

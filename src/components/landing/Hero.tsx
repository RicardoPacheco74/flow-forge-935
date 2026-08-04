import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Bot, ChevronsDown, Sparkles, Zap } from "lucide-react";

import heroImage from "@/assets/hero-automation.jpg";
import { OFFER, TECHS } from "@/data/course";
import { CtaButton, Eyebrow } from "./primitives";

function TechMarquee() {
  const items = [...TECHS, ...TECHS];
  return (
    <div className="relative mt-16 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="animate-marquee flex w-max gap-3">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="glass flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs whitespace-nowrap text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-neon" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 pb-16 md:pt-28">
      <div className="grid w-full items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col items-start lg:col-span-7">
          <Eyebrow icon={Sparkles}>Curso completo · do zero ao multiagente</Eyebrow>
          <h1 className="mt-7 max-w-2xl font-display text-4xl leading-[1.05] font-light tracking-tight text-balance md:text-6xl lg:text-[68px]">
            Construa <span className="text-neon text-glow">agentes de IA</span> que trabalham por
            você — com <span className="text-neon text-glow">n8n</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Automação, infraestrutura própria, RAG, multiagentes e MCP. Um caminho único para sair do
            zero e entregar sistemas de IA que atendem, decidem e agendam 24 horas por dia.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CtaButton href={OFFER.checkoutUrl}>
              Comprar agora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </CtaButton>
            <CtaButton href="#conteudo" variant="ghost">
              Ver conteúdo
              <ChevronsDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </CtaButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-neon" /> {OFFER.price} · pagamento único
            </span>
            <span className="flex items-center gap-2">
              <Bot className="h-3.5 w-3.5 text-neon" /> 12 módulos · {TOTAL_LESSONS_LABEL} aulas
            </span>

            <span className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-neon" /> Acesso vitalício
            </span>
          </div>
        </div>

        <motion.div
          className="lg:col-span-5"
          initial={reduced ? false : { opacity: 0, scale: 0.94, filter: "blur(14px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
        >

          <div className="glow-ring relative rounded-[34px] p-[1.5px]">
            <div className="gradient-neon absolute inset-0 rounded-[34px] opacity-60" />
            <div className="relative overflow-hidden rounded-[32px] bg-surface">
              <img
                src={heroImage}
                alt="Diagrama de um agente de IA conectado a banco de dados, chat e relatórios em um workflow n8n"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-background via-background/80 to-transparent p-5">
                <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
                  </span>
                  workflow.executando
                </div>
                <span className="font-mono text-[11px] text-neon">24/7</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <TechMarquee />
    </section>
  );
}

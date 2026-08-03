import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { Chip, Reveal, Section, SectionHeading } from "./primitives";

const STEPS = [
  {
    title: "Automações",
    description: "Fluxos que executam tarefas repetitivas sem você.",
    stack: ["n8n", "Triggers"],
  },
  {
    title: "Integrações",
    description: "Qualquer sistema conectado via API, JSON e webhooks.",
    stack: ["HTTP", "Webhooks"],
  },
  {
    title: "IA",
    description: "Modelos aplicados com prompts profissionais e saída estruturada.",
    stack: ["OpenAI", "Claude", "Gemini"],
  },
  {
    title: "Agentes",
    description: "Decisão autônoma com ferramentas e memória de conversa.",
    stack: ["AI Agent", "Tools"],
  },
  {
    title: "RAG",
    description: "Conhecimento próprio consultável por busca semântica.",
    stack: ["PgVector", "Embeddings"],
  },
  {
    title: "Multiagentes",
    description: "Especialistas coordenados por um orquestrador.",
    stack: ["Sub-workflows", "Redis"],
  },
  {
    title: "MCP",
    description: "Ferramentas padronizadas e interoperáveis entre agentes.",
    stack: ["MCP Server", "MCP Client"],
  },
];

export function Evolution() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const height = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 60,
    damping: 20,
  });

  return (
    <Section id="diferencial">
      <SectionHeading
        eyebrow="Trilha de evolução"
        title={
          <>
            O que <span className="text-neon">diferencia</span> este curso
          </>
        }
        description="Outros cursos param na automação básica. Aqui a trilha continua até o estado da arte em agentes de IA."
      />

      <div ref={ref} className="relative mt-16 pl-10 md:pl-16">
        <div className="absolute top-0 bottom-0 left-3 w-px bg-white/8 md:left-6" />
        <motion.div
          className="absolute top-0 left-3 w-px bg-gradient-to-b from-neon via-n8n to-transparent md:left-6"
          style={{ height }}
        />

        <div className="flex flex-col gap-10">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={0.04 * i}>
              <div className="group relative">
                <span className="absolute top-2 -left-[30px] flex h-3 w-3 items-center justify-center md:-left-[46px]">
                  <span className="absolute h-3 w-3 rounded-full bg-neon/30 blur-[6px] transition-all group-hover:bg-neon/60" />
                  <span className="relative h-2 w-2 rounded-full bg-neon" />
                </span>
                <div className="glass rounded-2xl p-6 transition-all duration-500 group-hover:border-neon/30 group-hover:bg-neon/[0.04]">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-neon">
                      ETAPA {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-light tracking-tight md:text-2xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

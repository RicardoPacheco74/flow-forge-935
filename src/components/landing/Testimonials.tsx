import { Quote, Star } from "lucide-react";

import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";

const TESTIMONIALS = [
  {
    name: "Rafael Moura",
    role: "Analista de TI",
    text: "Montei meu servidor com Docker e Traefik no segundo fim de semana. Hoje rodo automações de três clientes na mesma VPS.",
    initials: "RM",
  },
  {
    name: "Juliana Prado",
    role: "Dona de clínica",
    text: "O agente de agendamento reduziu 70% das mensagens que minha secretária respondia à mão. Confirmação e lembrete são automáticos.",
    initials: "JP",
  },
  {
    name: "Diego Santini",
    role: "Desenvolvedor",
    text: "A parte de RAG com PgVector foi a mais clara que já vi. Entreguei um agente treinado na base do cliente em uma semana.",
    initials: "DS",
  },
  {
    name: "Camila Reis",
    role: "Freelancer",
    text: "Comecei sem saber o que era webhook. Fechei meu primeiro projeto de automação por R$ 6.500 antes de terminar o curso.",
    initials: "CR",
  },
  {
    name: "Anderson Lopes",
    role: "Gestor de operações",
    text: "O módulo de multiagentes mudou como estruturo processos. Cada área tem seu especialista dentro de um único fluxo.",
    initials: "AL",
  },
  {
    name: "Marina Duarte",
    role: "Consultora",
    text: "MCP explicado de forma prática, com projeto rodando. Hoje reaproveito ferramentas entre agentes sem retrabalho.",
    initials: "MD",
  },
];

export function Testimonials() {
  return (
    <Section id="depoimentos">
      <SectionHeading
        eyebrow="Depoimentos"
        title={
          <>
            Quem já está <span className="text-neon">automatizando</span>
          </>
        }
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={Math.min(i * 0.06, 0.3)}>
            <GlassCard className="flex h-full flex-col">
              <Quote className="h-5 w-5 text-neon/70" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">{t.text}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neon/25 bg-neon/10 font-mono text-xs text-neon">
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{t.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3 w-3 fill-neon text-neon" />
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

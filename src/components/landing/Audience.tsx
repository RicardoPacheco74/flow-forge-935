import { Briefcase, Code2, LineChart, Rocket, Sprout, Terminal, type LucideIcon } from "lucide-react";

import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";

const AUDIENCE: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Sprout,
    title: "Iniciantes",
    description: "Nunca programou? O curso começa do zero, com lógica visual e passo a passo.",
  },
  {
    icon: Terminal,
    title: "Profissionais de TI",
    description: "Adicione infraestrutura, containers e IA ao seu repertório técnico.",
  },
  {
    icon: Code2,
    title: "Desenvolvedores",
    description: "Entregue integrações e agentes em dias, não em sprints.",
  },
  {
    icon: LineChart,
    title: "Analistas",
    description: "Automatize relatórios, dados e rotinas repetitivas do time.",
  },
  {
    icon: Briefcase,
    title: "Empreendedores",
    description: "Coloque atendimento, agendamento e follow-up no automático.",
  },
  {
    icon: Rocket,
    title: "Freelancers",
    description: "Um serviço novo, com setup pontual e recorrência mensal.",
  },
];

export function Audience() {
  return (
    <Section id="para-quem">
      <SectionHeading
        eyebrow="Perfil ideal"
        title={
          <>
            Para quem é <span className="text-neon">este curso</span>
          </>
        }
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {AUDIENCE.map((a, i) => (
          <Reveal key={a.title} delay={Math.min(i * 0.06, 0.3)}>
            <GlassCard className="h-full">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-neon/25 bg-neon/10">
                  <a.icon className="h-4.5 w-4.5 text-neon" />
                </span>
                <h3 className="font-display text-lg font-light tracking-tight">{a.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

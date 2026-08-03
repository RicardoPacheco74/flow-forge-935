import { BriefcaseBusiness, LineChart, TrendingUp, Users } from "lucide-react";

import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";

const STATS = [
  {
    icon: TrendingUp,
    value: "78%",
    label: "das empresas já usam IA em pelo menos uma função",
    bar: 78,
  },
  {
    icon: BriefcaseBusiness,
    value: "3,4x",
    label: "crescimento das vagas ligadas a automação e agentes",
    bar: 68,
  },
  {
    icon: LineChart,
    value: "R$ 8k–25k",
    label: "faixa comum de projetos de automação sob demanda",
    bar: 84,
  },
  {
    icon: Users,
    value: "+200k",
    label: "profissionais na comunidade global de n8n",
    bar: 56,
  },
];

const CURVE = [12, 18, 26, 38, 55, 72, 91];

export function WhyNow() {
  return (
    <Section id="por-que">
      <SectionHeading
        eyebrow="Momento de mercado"
        title={
          <>
            Por que aprender <span className="text-neon">n8n</span> agora?
          </>
        }
        description="A IA deixou de ser demonstração e virou operação. Quem sabe conectar modelos, dados e canais entrega resultado — e cobra por isso."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.value} delay={i * 0.08}>
            <GlassCard className="h-full">
              <s.icon className="h-5 w-5 text-neon" />
              <p className="mt-5 font-display text-3xl font-light tracking-tight">{s.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
              <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/8">
                <div className="gradient-neon h-full rounded-full" style={{ width: `${s.bar}%` }} />
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-5">
        <GlassCard interactive={false} className="p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <p className="text-[11px] tracking-[0.18em] uppercase text-neon">Demanda por agentes</p>
              <p className="mt-3 font-display text-2xl leading-snug font-light">
                A curva de adoção está no início. Sair na frente hoje é ocupar um espaço que ainda
                tem pouca gente qualificada.
              </p>
            </div>
            <div className="flex h-40 flex-1 items-stretch gap-3">
              {CURVE.map((h, i) => (
                <div key={i} className="flex h-full flex-1 flex-col gap-2">
                  <div className="flex min-h-0 flex-1 items-end">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-n8n to-neon opacity-90 shadow-[0_0_24px_-6px_var(--neon)] transition-all duration-700 hover:opacity-100"
                      style={{ height: `${h}%`, minHeight: 10 }}
                    />
                  </div>
                  <span className="text-center font-mono text-[10px] text-muted-foreground">
                    {2019 + i}
                  </span>
                </div>
              ))}
            </div>


          </div>
        </GlassCard>
      </Reveal>
    </Section>
  );
}

import { ArrowUpRight } from "lucide-react";

import { FlowDiagram, GlassCard, Reveal, Section, SectionHeading } from "./primitives";

const PROJECTS = [
  {
    title: "Agente de Atendimento",
    result: "Primeiro nível de suporte 100% automatizado",
    flow: ["Mensagem", "Agente", "Base", "Resposta"],
  },
  {
    title: "RAG Corporativo",
    result: "Respostas com base nos documentos da empresa",
    flow: ["PDF", "Chunking", "PgVector", "Agente"],
  },
  {
    title: "MCP Server",
    result: "Ferramentas padronizadas para qualquer agente",
    flow: ["Workflow", "MCP Server", "Client"],
  },
  {
    title: "WhatsApp Automatizado",
    result: "Canal oficial com áudio, mídia e fila",
    flow: ["WhatsApp", "Evolution", "n8n"],
  },
  {
    title: "Memória com Redis",
    result: "Sessões rápidas e contexto entre execuções",
    flow: ["Evento", "Redis", "Agente"],
  },
  {
    title: "Multiagentes",
    result: "Vendas, suporte e financeiro em um só fluxo",
    flow: ["Roteador", "Especialistas", "Consolida"],
  },
  {
    title: "Agendamento Inteligente",
    result: "Agenda cheia sem intervenção humana",
    flow: ["Contato", "Agenda", "Lembrete"],
  },
  {
    title: "Servidor Próprio",
    result: "Infra own-premise com SSL e backup",
    flow: ["VPS", "Docker", "Traefik", "n8n"],
  },
];

export function Projects() {
  return (
    <Section id="projetos">
      <SectionHeading
        eyebrow="Portfólio"
        title={
          <>
            Projetos <span className="text-neon">reais</span>, prontos para vender
          </>
        }
        description="Tudo o que você constrói pode ser replicado para clientes com poucos ajustes — inclusive com os templates do bônus."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={Math.min(i * 0.05, 0.3)}>
            <GlassCard className="flex h-full flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg leading-tight font-light tracking-tight">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-neon" />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.result}</p>
              </div>
              <div className="mt-6">
                <FlowDiagram steps={p.flow} />
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

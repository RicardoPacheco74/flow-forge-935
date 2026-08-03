import {
  Bot,
  CalendarClock,
  Database,
  MessageCircle,
  Network,
  Plug,
  Server,
  type LucideIcon,
} from "lucide-react";

import { Chip, GlassCard, Reveal, Section, SectionHeading } from "./primitives";

type Item = { icon: LucideIcon; title: string; description: string; stack: string[] };

const ITEMS: Item[] = [
  {
    icon: Bot,
    title: "Agente de atendimento",
    description: "Responde dúvidas, qualifica leads e escala para humano quando necessário.",
    stack: ["AI Agent", "Tools", "Memory"],
  },
  {
    icon: MessageCircle,
    title: "Agente para WhatsApp",
    description: "Canal oficial conectado via Evolution API com texto, áudio e mídia.",
    stack: ["Evolution API", "Webhooks"],
  },
  {
    icon: Database,
    title: "RAG sobre sua base",
    description: "Documentos vetorizados para respostas precisas e com fonte.",
    stack: ["PgVector", "Embeddings"],
  },
  {
    icon: Network,
    title: "Sistema multiagente",
    description: "Orquestrador roteando tarefas entre agentes especialistas.",
    stack: ["Sub-workflows", "Redis"],
  },
  {
    icon: CalendarClock,
    title: "Agente de agendamento",
    description: "Consulta disponibilidade, marca, confirma e envia lembretes.",
    stack: ["Google Calendar"],
  },
  {
    icon: Plug,
    title: "Integração com APIs",
    description: "Conecte qualquer serviço, mesmo sem node nativo no n8n.",
    stack: ["HTTP", "OAuth2", "JSON"],
  },
  {
    icon: Server,
    title: "Servidor próprio",
    description: "n8n auto-hospedado com domínio, SSL e execuções ilimitadas.",
    stack: ["Docker", "Traefik", "Portainer"],
  },
];

export function BuildGrid() {
  return (
    <Section id="construir">
      <SectionHeading
        eyebrow="Mão na massa"
        title={
          <>
            O que você vai <span className="text-neon">construir</span> durante o curso
          </>
        }
        description="Nenhuma teoria solta. Cada bloco do curso termina com um sistema funcionando no seu ambiente."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={Math.min(i * 0.06, 0.3)}>
            <GlassCard className="h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neon/25 bg-neon/10">
                <item.icon className="h-5 w-5 text-neon" />
              </div>
              <h3 className="mt-5 font-display text-xl leading-tight font-light tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

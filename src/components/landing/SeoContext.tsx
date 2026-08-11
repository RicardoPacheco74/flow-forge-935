import { Reveal, Section, SectionHeading } from "./primitives";

const TOPICS = [
  {
    title: "O que é o n8n",
    text: "O n8n é uma plataforma de automação de workflows em que você conecta aplicativos, APIs e bancos de dados em fluxos visuais. Pode rodar na nuvem oficial ou em servidor próprio com Docker.",
  },
  {
    title: "Automação com inteligência artificial",
    text: "Combinando gatilhos, webhooks e modelos de linguagem, o n8n executa tarefas repetitivas com decisão automática: triagem de mensagens, respostas no WhatsApp, geração de relatórios e integração com APIs.",
  },
  {
    title: "Agentes de IA, RAG e MCP",
    text: "Agentes de IA usam memória e ferramentas para agir por conta própria. Com RAG, o agente consulta sua própria base de conhecimento em PostgreSQL/Supabase; com MCP e multiagentes, vários especialistas dividem tarefas dentro do mesmo fluxo.",
  },
];

export function SeoContext() {
  return (
    <Section id="sobre-n8n" className="pb-16">
      <SectionHeading eyebrow="Contexto" title="Entenda os conceitos do curso" />
      <Reveal delay={0.05} className="mt-10">
        <div className="grid gap-4 md:grid-cols-3">
          {TOPICS.map((t) => (
            <article key={t.title} className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-light tracking-tight">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

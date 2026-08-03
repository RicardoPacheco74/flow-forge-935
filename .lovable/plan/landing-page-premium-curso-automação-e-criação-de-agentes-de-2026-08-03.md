# Landing Page Premium — Curso "Automação e Criação de Agentes de IA com n8n"

Página única (rota `/`), em PT-BR, escura e cinematográfica, construída para funcionar também como roteiro visual de VSL: quase todo o conteúdo vive dentro de Accordions elegantes que você abre enquanto grava.

## Linguagem visual

Herdada do Design System "Luminous" anexado, com a paleta trocada para a identidade n8n:

- Fundo `#050505` / `#0A0A0A`, superfícies grafite, textos em cinzas neutros
- Acento: verde n8n (~`#EA4B71` substituído) → **verde n8n/neon** (`#00E28A` a `#0FD3A3`) com glow; zero laranja
- Glass: `bg-white/5`, `border-white/10`, `backdrop-blur`, cantos generosos (rounded-2xl/3xl)
- Botão principal com gradiente verde + `ring-inset` + sombra glow; botão secundário claro sólido
- Fundo global: partículas/estrelas, blobs desfocados verdes, grid técnico sutil e linhas de conexão animadas (SVG) evocando workflow de nodes
- Entrada de seção com fade + translate + blur (curva do design system), hover scale discreto, microinterações
- Tipografia display de peso leve e tracking apertado para headlines + sans para corpo, carregada via `<link>` no root

## Estrutura das seções

1. **Hero** — badge, headline forte, subheadline, CTA "Comprar Agora" + "Ver Conteúdo", ilustração gerada de automação/agentes, faixa animada de tecnologias (n8n, OpenAI, Claude, Gemini, Supabase, Docker, Redis, Postgres, WhatsApp, Google Drive) em chips glass
2. **Por que aprender n8n agora** — cards de números (crescimento IA, demanda por agentes, faixas salariais, mercado) com barras/mini-gráficos e contadores animados
3. **O que você vai construir** — grid de cards de projeto (atendimento, WhatsApp, RAG, multiagentes, agendamento, integração de APIs, servidor próprio)
4. **Conteúdo do Curso (seção protagonista)** — Accordion shadcn/ui altamente customizado, um item por módulo, com barra de progresso de módulos abertos, número do capítulo, ícone, contagem de aulas e borda iluminada no item ativo. Módulos: Introdução ao n8n · Infraestrutura própria (Docker, Portainer, Traefik) · APIs, JSON, HTTP, Postman, Webhooks · WhatsApp / Evolution API · Engenharia de Prompt e LLMs · OpenAI e Embeddings · Agentes de IA · Supabase e Redis · RAG com PgVector · Multiagentes · Agente de Agendamento · MCP · Bônus
   Ao abrir, cada módulo mostra: objetivo em callout, grid de aulas (ícone, título, descrição, duração, dificuldade), badges de tecnologias, mini-fluxograma do que é construído, box "projeto entregue" e checklist de conhecimentos adquiridos — nunca texto solto
5. **Projetos Reais** — cards glass com mini diagramas (atendimento, RAG, MCP, WhatsApp, Redis, multiagentes, agendamento, servidor próprio)
6. **Para quem é** — cards com ícones (iniciantes, TI, devs, analistas, empreendedores, freelancers)
7. **O que diferencia este curso** — timeline vertical animada: Automações → Integrações → IA → Agentes → RAG → Multiagentes → MCP, com linha luminosa preenchendo no scroll
8. **Depoimentos** — cards glass com avatar, estrelas e destaque
9. **FAQ** — segundo Accordion, mais compacto
10. **CTA Final** — card premium com oferta, garantia, formas de pagamento e botão grande com glow

Placeholders de preço/checkout ficam em um único arquivo de conteúdo para você trocar depois (o link real do checkout ainda não foi informado).

## Detalhes técnicos

- Rota `/` reescrita em `src/routes/index.tsx` com `head()` próprio (title/description/og/twitter em PT-BR)
- Tokens de cor/gradiente/glow adicionados em `src/styles.css` (`@theme inline`, oklch), tema escuro forçado; nenhuma cor hardcoded nos componentes
- Animações: `motion` (Framer Motion) instalado para entrada por scroll, timeline e microinterações; Accordion continua o do shadcn/ui com estilo customizado
- Componentes em `src/components/landing/*` (Hero, TechMarquee, WhyNow, BuildGrid, Curriculum, ModuleContent, Projects, Audience, Timeline, Testimonials, Faq, FinalCta) e dados do curso em `src/data/course.ts`
- Fundo com partículas/linhas: componente canvas/SVG leve, respeitando `prefers-reduced-motion`
- Ícones Lucide; imagens do hero e mockups geradas e importadas de `src/assets`
- Projeto roda em TanStack Start (não Next.js), mesma stack React + Tailwind + shadcn/ui pedida

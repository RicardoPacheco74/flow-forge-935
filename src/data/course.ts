export const OFFER = {
  price: "R$ 997",
  installments: "12x de R$ 97,00",
  oldPrice: "R$ 1.997",
  checkoutUrl: "#checkout",
  guaranteeDays: 7,
};

export type Lesson = {
  title: string;
  description: string;
  duration: string;
  level: "Iniciante" | "Intermediário" | "Avançado";
};

export type Module = {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  objective: string;
  lessons: Lesson[];
  stack: string[];
  flow: string[];
  project: string;
  outcomes: string[];
};

export const MODULES: Module[] = [
  {
    id: "intro-n8n",
    icon: "Workflow",
    title: "Introdução ao n8n",
    tagline: "Fundamentos, interface e primeiros fluxos",
    objective:
      "Dominar a lógica de automação por nodes e construir seus primeiros workflows funcionais em poucas horas.",
    lessons: [
      {
        title: "O que é n8n e por que ele domina automação com IA",
        description: "Panorama do mercado, comparação com Make e Zapier.",
        duration: "18 min",
        level: "Iniciante",
      },
      {
        title: "Interface, canvas e anatomia de um node",
        description: "Triggers, actions, inputs, outputs e execuções.",
        duration: "24 min",
        level: "Iniciante",
      },
      {
        title: "Primeiro workflow ponta a ponta",
        description: "Trigger, tratamento de dados e envio de notificação.",
        duration: "32 min",
        level: "Iniciante",
      },
      {
        title: "Expressions, variáveis e manipulação de dados",
        description: "Sintaxe de expressions, referências entre nodes e loops.",
        duration: "29 min",
        level: "Iniciante",
      },
      {
        title: "Debug, logs e tratamento de erros",
        description: "Como investigar execuções e criar fluxos resilientes.",
        duration: "21 min",
        level: "Iniciante",
      },
    ],
    stack: ["n8n", "JSON", "Webhooks"],
    flow: ["Trigger", "Tratamento", "Ação", "Log"],
    project: "Workflow de notificação automática com tratamento de erros",
    outcomes: [
      "Lógica de automação por nodes",
      "Leitura fluente de execuções",
      "Manipulação de dados com expressions",
    ],
  },
  {
    id: "infra",
    icon: "Server",
    title: "Infraestrutura própria",
    tagline: "Docker, Portainer e Traefik na sua VPS",
    objective:
      "Sair do plano cloud e rodar seu próprio n8n com domínio, HTTPS e escalabilidade — sem limites de execução.",
    lessons: [
      {
        title: "Contratando e preparando a VPS",
        description: "Acesso SSH, usuários, firewall e boas práticas.",
        duration: "26 min",
        level: "Intermediário",
      },
      {
        title: "Docker e Docker Compose do zero",
        description: "Imagens, containers, volumes e redes.",
        duration: "38 min",
        level: "Intermediário",
      },
      {
        title: "Portainer: gerenciando stacks visualmente",
        description: "Deploy, logs e atualização de containers.",
        duration: "22 min",
        level: "Intermediário",
      },
      {
        title: "Traefik, domínio e SSL automático",
        description: "Proxy reverso, certificados e subdomínios.",
        duration: "31 min",
        level: "Avançado",
      },
      {
        title: "n8n em produção com Postgres e workers",
        description: "Filas, variáveis de ambiente e backup.",
        duration: "35 min",
        level: "Avançado",
      },
    ],
    stack: ["Docker", "Portainer", "Traefik", "Postgres", "VPS"],
    flow: ["VPS", "Docker", "Traefik", "n8n + Postgres"],
    project: "Servidor próprio de automação com HTTPS e backup",
    outcomes: [
      "Deploy autônomo de infraestrutura",
      "Domínio e SSL configurados",
      "n8n escalável em produção",
    ],
  },
  {
    id: "apis",
    icon: "Plug",
    title: "APIs, JSON e HTTP",
    tagline: "Postman, requisições e webhooks",
    objective:
      "Integrar qualquer serviço do mundo, mesmo sem node nativo, entendendo o protocolo por trás das integrações.",
    lessons: [
      {
        title: "Como funciona uma API REST",
        description: "Endpoints, métodos, headers e status codes.",
        duration: "23 min",
        level: "Iniciante",
      },
      {
        title: "JSON na prática",
        description: "Objetos, arrays, aninhamento e parsing no n8n.",
        duration: "19 min",
        level: "Iniciante",
      },
      {
        title: "Postman para testar antes de automatizar",
        description: "Collections, autenticação e variáveis.",
        duration: "25 min",
        level: "Intermediário",
      },
      {
        title: "HTTP Request node sem medo",
        description: "Bearer token, API key, OAuth2 e paginação.",
        duration: "34 min",
        level: "Intermediário",
      },
      {
        title: "Webhooks: recebendo eventos em tempo real",
        description: "Payloads, validação e respostas customizadas.",
        duration: "27 min",
        level: "Intermediário",
      },
    ],
    stack: ["HTTP", "JSON", "Postman", "Webhooks", "OAuth2"],
    flow: ["Webhook", "HTTP Request", "Parse JSON", "Resposta"],
    project: "Integração completa com uma API externa sem node nativo",
    outcomes: ["Autonomia total em integrações", "Debug de payloads", "Autenticação de APIs"],
  },
  {
    id: "whatsapp",
    icon: "MessageCircle",
    title: "API de WhatsApp e Evolution API",
    tagline: "Seu canal principal de atendimento automatizado",
    objective:
      "Conectar o WhatsApp aos seus fluxos e agentes com estabilidade, mídia, áudio e múltiplas instâncias.",
    lessons: [
      {
        title: "Panorama: Cloud API vs Evolution API",
        description: "Custos, limites e quando usar cada um.",
        duration: "20 min",
        level: "Iniciante",
      },
      {
        title: "Instalando a Evolution API no seu servidor",
        description: "Docker, instâncias e conexão via QR Code.",
        duration: "30 min",
        level: "Intermediário",
      },
      {
        title: "Enviando e recebendo mensagens no n8n",
        description: "Texto, imagens, documentos e áudio.",
        duration: "28 min",
        level: "Intermediário",
      },
      {
        title: "Tratando áudio com transcrição",
        description: "Speech-to-text aplicado ao atendimento.",
        duration: "22 min",
        level: "Avançado",
      },
      {
        title: "Controle de sessão e fila de mensagens",
        description: "Buffer de digitação, delays humanos e antiflood.",
        duration: "26 min",
        level: "Avançado",
      },
    ],
    stack: ["Evolution API", "WhatsApp", "Docker", "Webhooks"],
    flow: ["WhatsApp", "Evolution API", "n8n", "Agente"],
    project: "Canal de WhatsApp conectado ao n8n com mídia e áudio",
    outcomes: ["Instância própria de WhatsApp", "Fluxo bidirecional", "Tratamento de mídias"],
  },
  {
    id: "prompt",
    icon: "Sparkles",
    title: "Engenharia de Prompt e LLMs",
    tagline: "A camada que separa agente amador de agente profissional",
    objective:
      "Escrever prompts determinísticos, com persona, regras, guardrails e saídas estruturadas em JSON.",
    lessons: [
      {
        title: "Como um LLM realmente pensa",
        description: "Tokens, contexto, temperatura e alucinação.",
        duration: "24 min",
        level: "Iniciante",
      },
      {
        title: "Anatomia de um system prompt profissional",
        description: "Persona, objetivo, regras, tom e limites.",
        duration: "31 min",
        level: "Intermediário",
      },
      {
        title: "Saídas estruturadas em JSON",
        description: "Structured output para encadear decisões.",
        duration: "27 min",
        level: "Intermediário",
      },
      {
        title: "Guardrails e antialucinação",
        description: "Validação, fallback e respostas seguras.",
        duration: "23 min",
        level: "Avançado",
      },
      {
        title: "Escolhendo modelos: OpenAI, Claude e Gemini",
        description: "Custo, velocidade e qualidade por tarefa.",
        duration: "18 min",
        level: "Intermediário",
      },
    ],
    stack: ["OpenAI", "Claude", "Gemini", "JSON Schema"],
    flow: ["Contexto", "System prompt", "LLM", "JSON validado"],
    project: "Biblioteca de prompts reutilizáveis para seus agentes",
    outcomes: ["Prompts determinísticos", "Saídas estruturadas", "Seleção de modelos por custo"],
  },
  {
    id: "agentes",
    icon: "Bot",
    title: "Agentes de IA no n8n",
    tagline: "Memória, tools e tomada de decisão",
    objective:
      "Construir agentes que decidem, chamam ferramentas e mantêm contexto de conversa em produção.",
    lessons: [
      {
        title: "AI Agent node por dentro",
        description: "Modelo, memória, tools e loop de raciocínio.",
        duration: "29 min",
        level: "Intermediário",
      },
      {
        title: "Tools: dando poderes ao agente",
        description: "HTTP tools, workflows como tool e calculadora.",
        duration: "33 min",
        level: "Avançado",
      },
      {
        title: "Memória de conversa",
        description: "Janela de contexto, resumo e persistência.",
        duration: "26 min",
        level: "Avançado",
      },
      {
        title: "Agente de atendimento completo",
        description: "Qualificação, respostas e escalada humana.",
        duration: "41 min",
        level: "Avançado",
      },
      {
        title: "Testes, custos e observabilidade",
        description: "Medindo tokens, latência e qualidade.",
        duration: "22 min",
        level: "Avançado",
      },
    ],
    stack: ["n8n AI Agent", "OpenAI", "Tools", "Memory"],
    flow: ["Mensagem", "Agente", "Tools", "Resposta"],
    project: "Agente de atendimento com tools e escalada humana",
    outcomes: ["Agentes com ferramentas", "Memória persistente", "Controle de custos"],
  },
  {
    id: "dados",
    icon: "Database",
    title: "Supabase e Redis",
    tagline: "Persistência, cache e estado dos agentes",
    objective:
      "Dar memória de longo prazo e velocidade aos seus fluxos com banco relacional e cache em memória.",
    lessons: [
      {
        title: "Supabase do zero para automações",
        description: "Tabelas, chaves, API e políticas de acesso.",
        duration: "30 min",
        level: "Intermediário",
      },
      {
        title: "CRUD completo dentro do n8n",
        description: "Criar, ler, atualizar e remover registros.",
        duration: "27 min",
        level: "Intermediário",
      },
      {
        title: "Redis como memória rápida",
        description: "Chaves, TTL, contadores e controle de sessão.",
        duration: "25 min",
        level: "Avançado",
      },
      {
        title: "Histórico de conversas persistente",
        description: "Modelagem de mensagens por contato.",
        duration: "24 min",
        level: "Avançado",
      },
    ],
    stack: ["Supabase", "Postgres", "Redis"],
    flow: ["Evento", "Redis (cache)", "Supabase", "Agente"],
    project: "Base de dados de contatos e conversas com cache Redis",
    outcomes: ["Modelagem de dados", "Cache e TTL", "Estado entre execuções"],
  },
  {
    id: "rag",
    icon: "BookOpen",
    title: "RAG com PgVector e Embeddings",
    tagline: "Agentes que conhecem o seu negócio",
    objective:
      "Transformar documentos, PDFs e bases internas em conhecimento consultável pelo agente com precisão.",
    lessons: [
      {
        title: "O que é RAG e quando usar",
        description: "Limites do contexto vs busca semântica.",
        duration: "20 min",
        level: "Intermediário",
      },
      {
        title: "Embeddings na prática",
        description: "Vetores, similaridade e custo por token.",
        duration: "24 min",
        level: "Intermediário",
      },
      {
        title: "PgVector no Supabase",
        description: "Extensão, tabelas vetoriais e índices.",
        duration: "28 min",
        level: "Avançado",
      },
      {
        title: "Ingestão de documentos e chunking",
        description: "PDF, Google Drive, tamanho de chunk e overlap.",
        duration: "34 min",
        level: "Avançado",
      },
      {
        title: "Vector Store como tool do agente",
        description: "Recuperação, ranking e citação de fontes.",
        duration: "30 min",
        level: "Avançado",
      },
    ],
    stack: ["PgVector", "Supabase", "OpenAI Embeddings", "Google Drive"],
    flow: ["Documento", "Chunking", "Embeddings", "PgVector", "Agente"],
    project: "Agente RAG treinado na base de conhecimento da empresa",
    outcomes: ["Pipeline de ingestão", "Busca semântica", "Respostas com fonte"],
  },
  {
    id: "multiagentes",
    icon: "Network",
    title: "Multiagentes",
    tagline: "Orquestração de especialistas",
    objective:
      "Dividir responsabilidades entre agentes especialistas coordenados por um orquestrador central.",
    lessons: [
      {
        title: "Arquiteturas multiagente",
        description: "Orquestrador, roteador e especialistas.",
        duration: "26 min",
        level: "Avançado",
      },
      {
        title: "Agente roteador de intenção",
        description: "Classificação e delegação de tarefas.",
        duration: "29 min",
        level: "Avançado",
      },
      {
        title: "Sub-workflows como agentes",
        description: "Comunicação, payloads e retorno estruturado.",
        duration: "31 min",
        level: "Avançado",
      },
      {
        title: "Handoff e memória compartilhada",
        description: "Passagem de contexto sem perder histórico.",
        duration: "27 min",
        level: "Avançado",
      },
    ],
    stack: ["n8n", "Sub-workflows", "OpenAI", "Redis"],
    flow: ["Orquestrador", "Roteador", "Especialistas", "Consolidação"],
    project: "Sistema multiagente de vendas, suporte e financeiro",
    outcomes: ["Arquitetura de agentes", "Roteamento de intenção", "Handoff com contexto"],
  },
  {
    id: "agendamento",
    icon: "CalendarClock",
    title: "Agente de Agendamento",
    tagline: "Do primeiro contato ao evento na agenda",
    objective:
      "Criar um agente que consulta disponibilidade, agenda, confirma e remarca compromissos automaticamente.",
    lessons: [
      {
        title: "Integração com Google Calendar",
        description: "Autenticação, eventos e disponibilidade.",
        duration: "26 min",
        level: "Intermediário",
      },
      {
        title: "Regras de negócio e janelas de horário",
        description: "Fuso, duração, buffer e bloqueios.",
        duration: "24 min",
        level: "Avançado",
      },
      {
        title: "Confirmação, lembrete e remarcação",
        description: "Fluxos de follow-up automático no WhatsApp.",
        duration: "30 min",
        level: "Avançado",
      },
    ],
    stack: ["Google Calendar", "WhatsApp", "Supabase"],
    flow: ["Contato", "Disponibilidade", "Agendamento", "Lembrete"],
    project: "Agente de agendamento com confirmação e lembretes",
    outcomes: ["Integração com agenda", "Regras de horário", "Follow-up automático"],
  },
  {
    id: "mcp",
    icon: "Cpu",
    title: "MCP — Model Context Protocol",
    tagline: "O padrão que conecta agentes a ferramentas",
    objective:
      "Publicar e consumir servidores MCP para dar aos seus agentes ferramentas padronizadas e reutilizáveis.",
    lessons: [
      {
        title: "O que é MCP e por que mudou o jogo",
        description: "Cliente, servidor, tools e recursos.",
        duration: "22 min",
        level: "Avançado",
      },
      {
        title: "n8n como MCP Client",
        description: "Consumindo servidores MCP prontos.",
        duration: "27 min",
        level: "Avançado",
      },
      {
        title: "Publicando seu MCP Server",
        description: "Expondo workflows como ferramentas.",
        duration: "33 min",
        level: "Avançado",
      },
    ],
    stack: ["MCP", "n8n", "Docker"],
    flow: ["Agente", "MCP Client", "MCP Server", "Workflows"],
    project: "MCP Server próprio com ferramentas dos seus workflows",
    outcomes: ["Domínio do protocolo MCP", "Tools padronizadas", "Agentes interoperáveis"],
  },
  {
    id: "bonus",
    icon: "Gift",
    title: "Bônus",
    tagline: "Templates, monetização e comunidade",
    objective:
      "Acelerar entregas com ativos prontos e transformar o conhecimento em serviço vendável.",
    lessons: [
      {
        title: "Pacote de workflows prontos para importar",
        description: "Atendimento, RAG, agendamento e multiagentes.",
        duration: "Acesso vitalício",
        level: "Iniciante",
      },
      {
        title: "Como precificar projetos de automação",
        description: "Escopo, setup, mensalidade e contrato.",
        duration: "28 min",
        level: "Iniciante",
      },
      {
        title: "Entregando para clientes",
        description: "Ambiente isolado, documentação e suporte.",
        duration: "24 min",
        level: "Intermediário",
      },
    ],
    stack: ["Templates", "Comunidade", "Contratos"],
    flow: ["Template", "Personalização", "Entrega", "Recorrência"],
    project: "Portfólio com automações replicáveis para clientes",
    outcomes: ["Ativos prontos", "Precificação clara", "Processo de entrega"],
  },
];

export const TECHS = [
  "n8n",
  "OpenAI",
  "Claude",
  "Gemini",
  "Supabase",
  "Docker",
  "Redis",
  "Postgres",
  "WhatsApp",
  "Google Drive",
  "Traefik",
  "Portainer",
  "Evolution API",
  "PgVector",
  "MCP",
];

export const FAQ = [
  {
    q: "Preciso saber programar?",
    a: "Não. O curso começa do zero, com lógica visual por nodes. Quando aparece código, é apenas JavaScript pontual — sempre explicado linha por linha.",
  },
  {
    q: "Preciso pagar servidor ou APIs?",
    a: "Você pode começar com a versão gratuita do n8n e créditos mínimos de API. Para o módulo de infraestrutura, uma VPS de baixo custo é suficiente.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "Acesso vitalício ao conteúdo e a todas as atualizações futuras dos módulos, incluindo novos bônus.",
  },
  {
    q: "Serve para vender automações como serviço?",
    a: "Sim. O módulo bônus cobre precificação, escopo, entrega para clientes e recorrência mensal.",
  },
  {
    q: "E se eu não gostar?",
    a: `Você tem ${OFFER.guaranteeDays} dias de garantia incondicional. Basta pedir reembolso e devolvemos 100% do valor.`,
  },
];

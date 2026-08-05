export const OFFER = {
  price: "R$ 24,90",
  checkoutUrl:
    "https://www.udemy.com/course/n8n-do-zero-ao-profissional/?couponCode=AGO2026",
  guaranteeDays: 30,
};

export const TOTAL_LESSONS_LABEL = "150+";

export type Lesson = {
  title: string;
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

type Level = Lesson["level"];

const lessons = (level: Level, titles: string[]): Lesson[] =>
  titles.map((title) => ({ title, level }));

export const MODULES: Module[] = [
  {
    id: "intro-n8n",
    icon: "Workflow",
    title: "Introdução",
    tagline: "Do conceito de automação ao seu primeiro agente de IA",
    objective:
      "Entender o que é automação, dominar a interface do n8n e sair da seção com um agente de IA funcionando, com memória, ferramenta e credenciais configuradas.",
    lessons: lessons("Iniciante", [
      "Bem-vindo ao curso",
      "Conceitos básicos – o que é uma automação",
      "O que é o n8n",
      "Criação de uma conta de avaliação do n8n",
      "Exploração da interface do n8n",
      "Biblioteca de templates do n8n",
      "Criando o primeiro agente de IA",
      "Colocando memória no Agente de IA",
      "Como adicionar uma ferramenta ao agente",
      "Credenciais no n8n",
      "Como colocar o fluxo em produção e acompanhar as execuções",
      "Exportando e Importando um fluxo",
    ]),
    stack: ["n8n Cloud", "Templates", "AI Agent", "Credenciais"],
    flow: ["Trigger", "Agente", "Memória + Tool", "Produção"],
    project: "Primeiro agente de IA em produção, com memória e ferramenta",
    outcomes: [
      "Lógica de automação por nodes",
      "Leitura de execuções",
      "Importação e exportação de fluxos",
    ],
  },
  {
    id: "infra",
    icon: "Server",
    title: "Infraestrutura própria para o n8n",
    tagline: "VPS, domínio, Docker, Portainer e Traefik do zero",
    objective:
      "Sair do plano cloud e rodar o seu próprio n8n: escolher e criar a VPS, registrar domínio, configurar DNS, subir Postgres e Redis e manter tudo atualizado.",
    lessons: lessons("Intermediário", [
      "Apresentação da seção",
      "Escolhendo entre as opções de serviço VPS",
      "Criação de uma conta na Digital Ocean",
      "Criação do servidor VPS para o n8n",
      "Apresentação do Easypanel",
      "Instalação do servidor n8n e ativação da chave",
      "Comparação do n8n serviço online com o que instalamos",
      "Como acrescentar um nome de domínio ao servidor do n8n",
      "Instalação de um servidor de banco de dados Postgres",
      "Instalação de um servidor de banco de dados Redis",
      "Criação de uma conta na Hetzner",
      "Criação da VPS na Hetzner",
      "Como acessar a VPS a partir de uma estação através do SSH",
      "Criação de uma conta na Hostinger",
      "Registro do domínio",
      "Como utilizar o Cloudflare",
      "Criação dos subdomínios DNS necessários",
      "Como verificar o DNS",
      "Conceito de container e Docker",
      "Instalação do Termius",
      "Instalação do Portainer e do Traefik",
      "Instalação do n8n",
      "Primeiro acesso ao n8n",
      "Visão geral do Portainer",
      "Como atualizar o n8n",
    ]),
    stack: [
      "Digital Ocean",
      "Hetzner",
      "Hostinger",
      "Easypanel",
      "Cloudflare",
      "Docker",
      "Portainer",
      "Traefik",
      "Postgres",
      "Redis",
      "Termius",
    ],
    flow: ["VPS", "Docker", "Traefik + DNS", "n8n + Postgres + Redis"],
    project: "Servidor próprio de n8n com domínio, HTTPS, Postgres e Redis",
    outcomes: [
      "Deploy autônomo de infraestrutura",
      "Domínio e DNS configurados",
      "n8n atualizável em produção",
    ],
  },
  {
    id: "apis",
    icon: "Plug",
    title: "Integração com APIs e requisições HTTP no n8n",
    tagline: "JSON, verbos HTTP, Postman e fluxos com loop",
    objective:
      "Integrar qualquer serviço, mesmo sem node nativo: entender JSON e verbos HTTP, testar no Postman e construir fluxos com loop, condicionais e planilhas do Google.",
    lessons: lessons("Intermediário", [
      "Introdução à seção",
      "Conceitos de JSON, APIs e verbos HTTP",
      "Como instalar o Postman",
      "Configuração de uma coleção no Postman",
      "Criação de um fluxo para realizar um cadastro na API com o n8n",
      "Criação de um fluxo com loop",
      "Cadastro da credencial do Google",
      "Cadastrar itens em uma planilha a partir da API",
      "Como utilizar um nó condicional no fluxo do n8n",
      "Desafio: fluxo que atualiza os preços no sistema a partir de uma nova tabela",
      "Correção do desafio",
    ]),
    stack: ["HTTP", "JSON", "Postman", "Google Sheets", "Loop", "IF"],
    flow: ["API", "HTTP Request", "Loop + Condicional", "Google Sheets"],
    project: "Fluxo que sincroniza dados entre API e planilha, com desafio corrigido",
    outcomes: [
      "Autonomia total em integrações",
      "Testes de API no Postman",
      "Fluxos com loop e condicionais",
    ],
  },
  {
    id: "webhooks",
    icon: "Radio",
    title: "Webhooks no n8n",
    tagline: "Receber eventos em tempo real e responder do jeito certo",
    objective:
      "Dominar os tipos de webhook do n8n, autenticação, respostas customizadas e redirecionamentos — aplicando tudo em um fluxo real de captação de leads.",
    lessons: lessons("Intermediário", [
      "Visão geral da seção",
      "Como funciona o webhook",
      "Tipos de webhook no n8n e tipos de resposta",
      "Respond to Webhook",
      "Autenticação no webhook",
      "Usando um redirect com a resposta",
      "Captando leads com o webhook – parte 1",
      "Captando leads com o webhook – parte 2",
    ]),
    stack: ["Webhook", "Respond to Webhook", "Autenticação", "Redirect"],
    flow: ["Evento externo", "Webhook", "Processamento", "Resposta / Redirect"],
    project: "Formulário de captação de leads conectado por webhook",
    outcomes: [
      "Endpoints próprios no n8n",
      "Respostas e redirects customizados",
      "Webhooks autenticados",
    ],
  },
  {
    id: "whatsapp",
    icon: "MessageCircle",
    title: "API de WhatsApp",
    tagline: "Evolution Go API, instâncias e community nodes",
    objective:
      "Conectar o WhatsApp aos seus fluxos: entender oficial vs não oficial, instalar a Evolution Go API, criar instâncias e testar tudo no n8n.",
    lessons: lessons("Intermediário", [
      "Visão geral da seção",
      "WhatsApp oficial versus não oficial",
      "APIs não oficiais e algumas observações",
      "Preparação para instalação da Evolution API",
      "Instalação da Evolution Go API",
      "Criação de instância na API Evolution",
      "Testes da Evolution Go e Swagger",
      "Testes da Evolution Go no n8n",
      "Instalação dos community nodes para a Evolution Go",
      "Teste de outra API do WhatsApp (uazapi)",
    ]),
    stack: ["Evolution Go API", "uazapi", "Swagger", "Community nodes", "Docker"],
    flow: ["WhatsApp", "Evolution Go API", "Community node", "n8n"],
    project: "Instância própria de WhatsApp integrada ao n8n",
    outcomes: [
      "API de WhatsApp instalada e testada",
      "Fluxo bidirecional de mensagens",
      "Comparação prática entre provedores",
    ],
  },
  {
    id: "prompt",
    icon: "Sparkles",
    title: "Engenharia de Prompt",
    tagline: "A camada que separa agente amador de agente profissional",
    objective:
      "Escrever prompts previsíveis e eficientes: entender limitações dos LLMs, tokenização, embeddings, técnicas de melhoria e um framework replicável.",
    lessons: lessons("Intermediário", [
      "Introdução à Engenharia de Prompt",
      "O que é um LLM e quais as limitações",
      "Modelos de LLMs mais conhecidos no mercado",
      "Tokenização e Embedding",
      "Diretrizes para criação de prompts",
      "Técnicas para melhorar o prompt – parte 1",
      "Técnicas para melhorar o prompt – parte 2",
      "Framework para um bom prompt",
      "Documentação da OpenAI para Engenharia de Prompt",
      "Visão geral da plataforma da API da OpenAI",
      "Markdown e XML no prompt",
      "Criação de conta na API da OpenAI",
    ]),
    stack: ["OpenAI", "LLMs", "Markdown", "XML", "Embeddings"],
    flow: ["Objetivo", "Framework de prompt", "LLM", "Saída controlada"],
    project: "Framework de prompts reutilizáveis para os seus agentes",
    outcomes: [
      "Prompts previsíveis e estruturados",
      "Uso de Markdown e XML no prompt",
      "Conta e plataforma da OpenAI dominadas",
    ],
  },
  {
    id: "agentes",
    icon: "Bot",
    title: "Agentes de IA no n8n",
    tagline: "Agente de atendimento completo, do webhook à resposta",
    objective:
      "Construir um agente de atendimento de verdade: normalização de dados, captação de leads no Supabase, memória profissional, áudio, imagem e PDF.",
    lessons: lessons("Avançado", [
      "Introdução aos agentes de IA e suas aplicações",
      "Criação de um agente de atendimento – apresentação do projeto",
      "Webhook para receber mensagens do WhatsApp",
      "Fixar os dados para testes e normalização dos dados",
      "Como filtrar a intervenção humana no fluxo",
      "Como captar informações dos leads de entrada",
      "Criação de uma conta no Supabase",
      "Criação de tabela no Supabase",
      "Criação da credencial do Supabase no n8n",
      "Como forçar a continuação do fluxo mesmo sem dados",
      "Adição de leads no fluxo com o Supabase",
      "Adição do agente de IA",
      "Adição de uma memória mais profissional para o agente no n8n",
      "Utilização do Switch para receber tipos de conteúdos diferentes",
      "Fazendo o agente entender áudio no WhatsApp",
      "Configurando a transcrição de áudio em texto",
      "Tratamento de imagens recebidas no fluxo",
      "Tratamento de arquivos PDF recebidos no fluxo e outros tipos",
      "Configuração do agente",
      "O prompt de sistema do agente explicado",
      "Envio da resposta através do WhatsApp",
    ]),
    stack: ["n8n AI Agent", "OpenAI", "Supabase", "WhatsApp", "Switch", "Transcrição"],
    flow: ["WhatsApp", "Normalização", "Supabase", "Agente", "Resposta"],
    project: "Agente de atendimento multimodal (texto, áudio, imagem e PDF)",
    outcomes: [
      "Agente de atendimento em produção",
      "Leads persistidos no Supabase",
      "Tratamento de áudio, imagem e documentos",
    ],
  },
  {
    id: "redis",
    icon: "Database",
    title: "Banco de dados Redis",
    tagline: "Buffer de mensagens, humanização e atendimento humano",
    objective:
      "Usar o Redis para agrupar mensagens, humanizar respostas e controlar o status do atendimento, incluindo a transferência para um atendente humano.",
    lessons: lessons("Avançado", [
      "Introdução ao banco de dados Redis",
      "Criação de um banco de dados Redis na nuvem",
      "Criação de uma credencial do Redis",
      "Conceito de fila e pilha no Redis",
      "Criação de um buffer de mensagens para o nosso agente",
      "Simulando várias mensagens e avaliando o resultado",
      "Como tornar a resposta mais humanizada",
      "Criação de um loop para enviar as mensagens ao destinatário",
      "Adição de uma tool para transferir o atendimento para um atendente humano",
      "Criação de um subfluxo para encaminhar atendimento ao humano",
      "Utilização do Redis para verificar o status do atendimento",
      "Adição do nó Chat Memory Manager para armazenar o histórico do atendente humano",
    ]),
    stack: ["Redis", "n8n", "Chat Memory Manager", "Subfluxos"],
    flow: ["Mensagens", "Buffer Redis", "Agente", "Humano (handoff)"],
    project: "Agente com buffer de mensagens e escalada para atendente humano",
    outcomes: [
      "Buffer e fila de mensagens",
      "Respostas humanizadas",
      "Handoff humano com histórico",
    ],
  },
  {
    id: "rag",
    icon: "BookOpen",
    title: "Agente com base vetorial – RAG no n8n",
    tagline: "Agentes que conhecem o seu negócio",
    objective:
      "Transformar arquivos do Google Drive em conhecimento consultável: preparar o Supabase como base vetorial, ingerir documentos e plugar o PGVector no agente.",
    lessons: lessons("Avançado", [
      "Introdução a RAG (Retrieval-Augmented Generation)",
      "Criação de um agente integrado com o RAG",
      "Criação das credenciais para o Google Drive",
      "Criação do fluxo no n8n para upload dos arquivos",
      "Preparação do Supabase para atuar como banco de dados vetorial",
      "Estratégia para substituição de conteúdo na base vetorial",
      "Adição do PGVector Store no fluxo principal",
      "Mudança no prompt e alimentação da base vetorial",
      "Testes finais no fluxo do agente",
    ]),
    stack: ["PGVector", "Supabase", "Google Drive", "OpenAI Embeddings"],
    flow: ["Google Drive", "Ingestão", "PGVector", "Agente"],
    project: "Agente RAG treinado na base de conhecimento da empresa",
    outcomes: [
      "Pipeline de ingestão de documentos",
      "Base vetorial no Supabase",
      "Respostas fundamentadas no seu conteúdo",
    ],
  },
  {
    id: "multiagentes",
    icon: "Network",
    title: "Multiagentes com n8n",
    tagline: "Orquestrador, especialistas e web scraping com Firecrawl",
    objective:
      "Dividir responsabilidades entre agentes especialistas coordenados por um orquestrador, alimentando cada um com conteúdo raspado da web.",
    lessons: lessons("Avançado", [
      "Introdução à seção e apresentação do projeto a ser desenvolvido",
      "Entendendo os multiagentes e sua arquitetura",
      "Criação do fluxo principal (Orquestrador)",
      "Criação do fluxo e uma introdução ao web scraping com Firecrawl",
      "Adição de um nó JavaScript para estruturar a saída de dados",
      "Loop para web scraping de todo o conteúdo do site",
      "Configuração da base vetorial no Supabase para receber o conteúdo",
      "Adição do subfluxo ao fluxo principal",
      "Analisando o prompt do agente orquestrador e do agente especialista",
      "Correção do bug e testes complementares",
      "Adição de fluxos para alimentar os outros subagentes especialistas",
      "Conclusão do projeto com os outros agentes especialistas",
    ]),
    stack: ["Firecrawl", "Supabase", "PGVector", "Subfluxos", "JavaScript"],
    flow: ["Orquestrador", "Roteamento", "Especialistas", "Base vetorial"],
    project: "Sistema multiagente alimentado por web scraping",
    outcomes: [
      "Arquitetura orquestrador + especialistas",
      "Web scraping com Firecrawl",
      "Subfluxos como agentes",
    ],
  },
  {
    id: "agendamento",
    icon: "CalendarClock",
    title: "Agente n8n para agendamentos",
    tagline: "Agendar, reagendar e cancelar na agenda do Google",
    objective:
      "Criar um agente que consulta disponibilidade, agenda, reagenda e cancela compromissos no Google Calendar de ponta a ponta.",
    lessons: lessons("Avançado", [
      "Agente n8n para agendamentos",
      "Criação do fluxo para o agente de atendimento",
      "Prompt para o agente de agendamentos",
      "Adição da ferramenta de agendamentos",
      "Criação das credenciais de agenda do Google",
      "Criar fluxo para buscar disponibilidade na agenda",
      "Criar fluxo para agendamento",
      "Criar fluxo de reagendamento",
      "Criar fluxo de cancelamento",
    ]),
    stack: ["Google Calendar", "n8n Tools", "WhatsApp"],
    flow: ["Contato", "Disponibilidade", "Agendamento", "Reagendar / Cancelar"],
    project: "Agente de agendamento completo integrado ao Google Calendar",
    outcomes: [
      "Integração com Google Calendar",
      "Ferramentas de agenda no agente",
      "Reagendamento e cancelamento automáticos",
    ],
  },
  {
    id: "mcp",
    icon: "Cpu",
    title: "MCP no n8n",
    tagline: "O padrão que conecta agentes a ferramentas",
    objective:
      "Entender quando o MCP faz sentido, migrar a solução de agendamento para MCP e conectar ferramentas externas — inclusive o Cursor — ao seu servidor.",
    lessons: lessons("Avançado", [
      "Introdução ao protocolo MCP",
      "Visão geral do protocolo MCP no n8n e adição do community node de MCP",
      "Quando se aplica ou não o uso de MCP em fluxos do n8n",
      "Modificando a solução de agendamento para usar MCP",
      "Adição do servidor MCP e ferramenta MCP",
      "Mudança no prompt para adequar às mudanças",
      "Adição das ferramentas de agendamento ao servidor MCP",
      "Verificação de erros no fluxo",
      "Ajustes finais do fluxo e testes com o MCP",
      "Conectando o Cursor ao MCP do n8n",
    ]),
    stack: ["MCP", "Community nodes", "Cursor", "Google Calendar"],
    flow: ["Agente", "MCP Client", "MCP Server", "Ferramentas"],
    project: "Servidor MCP próprio expondo as ferramentas de agendamento",
    outcomes: [
      "Domínio do protocolo MCP",
      "Ferramentas padronizadas e reutilizáveis",
      "Integração com clientes externos",
    ],
  },
];

export const TECHS = [
  "n8n",
  "OpenAI",
  "Supabase",
  "Docker",
  "Portainer",
  "Traefik",
  "Redis",
  "Postgres",
  "WhatsApp",
  "Evolution API",
  "PGVector",
  "Firecrawl",
  "Google Drive",
  "Google Calendar",
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
    a: "Sim. Você constrói agentes de atendimento, RAG, multiagentes e agendamento — exatamente os projetos que empresas contratam.",
  },
  {
    q: "E se eu não gostar?",
    a: `Você tem ${OFFER.guaranteeDays} dias de garantia incondicional. Basta pedir reembolso e devolvemos 100% do valor.`,
  },
];

# Correção do conteúdo do curso, contagem de aulas e preço

## O que muda

1. **Currículo real (12 capítulos, 151 aulas)** — substituir todo o conteúdo inventado pelo conteúdo do PDF anexado, capítulo por capítulo e aula por aula:

| # | Capítulo | Aulas |
|---|---|---|
| 1 | Introdução | 12 |
| 2 | Infraestrutura própria para o n8n | 25 |
| 3 | Integração com APIs e requisições HTTP no n8n | 11 |
| 4 | Webhooks no n8n | 8 |
| 5 | API de WhatsApp | 10 |
| 6 | Engenharia de Prompt | 12 |
| 7 | Agentes de IA no n8n | 21 |
| 8 | Banco de dados Redis | 12 |
| 9 | Agente com base vetorial — RAG no n8n | 9 |
| 10 | Multiagentes com n8n | 12 |
| 11 | Agente n8n para agendamentos | 9 |
| 12 | MCP no n8n | 10 |

Total: **151 aulas**.

2. **Contagem exibida** — trocar "50+ aulas" no hero por "150+ aulas", e usar "150+" (não o cálculo automático + "+") nas seções de currículo e CTA final.

3. **Preço** — `R$ 24,90` como valor único. Remover o preço antigo riscado (R$ 1.997) e o parcelamento (12x de R$ 97), que não fazem sentido nesse valor. Nada mais na oferta muda (garantia de 7 dias mantida).

## Detalhes técnicos

- `src/data/course.ts`: reescrever `MODULES` com os 12 capítulos e as 151 aulas reais (título de cada aula vindo do PDF). Como o PDF não traz duração por aula, o campo `duration` sai do tipo `Lesson` e o badge de duração é removido da UI; o badge de nível é mantido, atribuído por capítulo (1, 3, 4, 6 = Iniciante/Intermediário; 2, 7–12 = Intermediário/Avançado). Os campos `objective`, `tagline`, `stack`, `flow`, `project` e `outcomes` de cada capítulo são reescritos para refletir o que realmente é feito nele (ex.: cap. 2 usa Digital Ocean, Hetzner, Hostinger, Easypanel, Cloudflare, Termius, Portainer, Traefik; cap. 5 usa Evolution Go API e uazapi; cap. 10 usa Firecrawl).
- `OFFER`: `price: "R$ 24,90"`, remover `installments` e `oldPrice`.
- `src/components/landing/Hero.tsx`, `Curriculum.tsx`, `FinalCta.tsx`: ajustar textos de contagem e remover referências a duração/parcelamento/preço antigo.
- Os capítulos ficam com muitas aulas (até 25); a lista dentro do accordion passa a ter rolagem interna com altura máxima, para o accordion continuar utilizável como slide no modo VSL.

## Fora do escopo (confirme se quiser)

O PDF traz o título "n8n do Zero ao Profissional — Automações e Agentes de IA", diferente do título atual da página. Mantenho o atual salvo pedido contrário.

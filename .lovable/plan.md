# Modo VSL — navegação da página como slides

Um modo de gravação que transforma a landing page em um roteiro navegável: cada seção e cada módulo do accordion se torna um "capítulo", com destaque visual, contador e avanço/retorno por teclado ou controles na tela.

## Como vai funcionar

**Entrar e sair**
- Botão discreto "Modo VSL" no menu do topo e atalho de teclado `V`.
- Ao sair (`Esc` ou botão), a página volta ao estado normal.

**Capítulos**
A sequência de capítulos é montada automaticamente:
1. Abertura (hero)
2. Por que agora
3. O que você constrói
4. Conteúdo do curso (intro)
5. Módulo 01 … Módulo 12 (um capítulo por accordion)
6. Projetos
7. Para quem é
8. Diferencial / evolução
9. Depoimentos
10. FAQ
11. Oferta / checkout

**Navegação**
- `→` / `Espaço` / `Page Down` avança; `←` / `Page Up` volta; `Home` volta ao início.
- Cada avanço rola suavemente até o capítulo, e quando o capítulo é um módulo, abre aquele accordion e fecha os outros — um capítulo aberto por vez, como um slide.
- Clique nos controles também funciona (setas anterior/próximo).

**Destaque cinematográfico**
- O capítulo atual recebe glow neon e escala levemente maior; o resto da página escurece com leve blur (efeito "spotlight"), usando os tokens de cor já existentes.
- Transições suaves com a mesma curva de animação do design system.

**HUD de gravação**
- Barra flutuante inferior com: contador `07 / 23`, título do capítulo atual, próximo capítulo em texto menor, barra de progresso neon e setas.
- Botão para ocultar o HUD (`H`) caso você queira gravar a tela sem overlay, mantendo só os atalhos de teclado.
- O HUD não aparece na página normal — só no modo VSL.

**Estado na URL**
- O capítulo atual fica na URL como `?vsl=7`, então recarregar ou compartilhar o link retoma no mesmo ponto da gravação.

## Detalhes técnicos

- Novo `src/components/landing/vsl/VslProvider.tsx`: contexto com lista de capítulos, índice atual, `next/prev/goTo`, flags `active` e `hudVisible`; sincroniza `?vsl=N` via `useNavigate` + search params (replace, sem poluir o histórico).
- Registro de capítulos em `src/data/vsl.ts`, derivando os módulos de `MODULES` (`src/data/course.ts`) e usando os `id` de seção já existentes (`por-que`, `construir`, `conteudo`, `projetos`, `para-quem`, `diferencial`, `depoimentos`, `faq`, `checkout`).
- `Curriculum` passa a ler o capítulo ativo do contexto: quando o capítulo é um módulo, o `Accordion` opera em modo controlado single (valor = módulo do capítulo); fora do modo VSL, mantém o comportamento `multiple` atual.
- Destaque via atributos `data-vsl-state="active|dimmed"` aplicados no wrapper `Section`/`AccordionItem`, com as regras de spotlight em `src/styles.css` (`@utility`), respeitando `prefers-reduced-motion`.
- `src/components/landing/vsl/VslHud.tsx` para a barra de controle; listener de teclado num único `useEffect` no provider.
- Scroll com `scrollIntoView({ behavior: "smooth", block: "start" })` compensando a altura do header sticky.
- Nenhuma mudança em conteúdo, copy ou oferta; apenas apresentação e navegação.

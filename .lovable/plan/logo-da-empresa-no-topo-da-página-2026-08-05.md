# Logo da empresa no topo da página

A marca no canto superior esquerdo (ícone + "n8n Agents") passa a ser a logo da Academia da Nuvem, com link para o site da empresa.

## O que muda

- Substituir o ícone verde e o texto "n8n Agents" pela logo `logo-academia-da-nuvem.png` (já disponível no projeto).
- A logo abre `https://www.academiadanuvem.com.br` em nova aba (`target="_blank"`, `rel="noopener noreferrer"`).
- Altura da logo ajustada ao header: ~28px no mobile e ~32px no desktop, largura automática, com `alt="Academia da Nuvem"`.
- Suave redução de opacidade no hover, igual ao padrão já usado no rodapé.
- Nada mais na navegação muda: links de seção e botão "Comprar agora" permanecem iguais.

## Detalhes técnicos

- Arquivo: `src/components/landing/Nav.tsx`.
- Trocar o `<Link to="/">` do TanStack Router por um `<a href>` externo; remover os imports agora não usados (`Link`, ícone `Workflow`).
- Importar o ponteiro de asset `@/assets/logo-academia-da-nuvem.png.asset.json` e usar `.url` no `src` da imagem.

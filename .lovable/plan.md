# Remover prazo "em até 12x"

## O que muda

Substituir o texto do card "Pagamento seguro" na seção `FinalCta` para remover a menção a parcelamento, mantendo as demais formas de pagamento.

## Arquivo e alteração

- `src/components/landing/FinalCta.tsx`:
  - Card com ícone `CreditCard`, título "Pagamento seguro":
    - De: `"PIX, boleto ou cartão em até 12x."`
    - Para: `"PIX, boleto ou cartão."`

## Fora do escopo

Nenhuma outra alteração de conteúdo, design, preço, CTAs ou estrutura da página.

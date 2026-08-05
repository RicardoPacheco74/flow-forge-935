import logoAcademia from "@/assets/logo-academia-da-nuvem.png.asset.json";
import { OFFER } from "@/data/course";

const LINKS = [
  { href: "#por-que", label: "Por que agora" },
  { href: "#construir", label: "O que você constrói" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#projetos", label: "Projetos" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="https://www.academiadanuvem.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <img
            src={logoAcademia.url}
            alt="Academia da Nuvem"
            className="h-8 w-auto md:h-10"
          />
        </a>
        <div className="glass hidden items-center rounded-full px-1 py-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={OFFER.checkoutUrl}
          className="gradient-neon rounded-full px-5 py-2 text-xs font-medium text-n8n-foreground ring-1 ring-inset ring-white/40 shadow-[0_0_20px_-6px_color-mix(in_oklab,var(--neon)_70%,transparent)] transition-all hover:brightness-110"
        >
          Comprar agora
        </a>
      </nav>
    </header>
  );
}

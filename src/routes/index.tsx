import { createFileRoute } from "@tanstack/react-router";

import { Audience } from "@/components/landing/Audience";
import { Background } from "@/components/landing/Background";
import { BuildGrid } from "@/components/landing/BuildGrid";
import { Curriculum } from "@/components/landing/Curriculum";
import { Evolution } from "@/components/landing/Evolution";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Hero } from "@/components/landing/Hero";
import { Nav } from "@/components/landing/Nav";
import { SeoContext } from "@/components/landing/SeoContext";
import { Projects } from "@/components/landing/Projects";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhyNow } from "@/components/landing/WhyNow";
import logoAcademia from "@/assets/logo-academia-transparente.png.asset.json";
import ogImage from "@/assets/og-curso-n8n.jpg.asset.json";
import { FAQ, MODULES, OFFER } from "@/data/course";

const SITE_URL = "https://curso-n8n.academiadanuvem.cloud";
const COURSE_NAME = "n8n do Zero ao Profissional - Automações e Agentes de IA";
const TITLE = "Curso de n8n do Zero ao Profissional | Agentes de IA e Automação";
const DESCRIPTION =
  "Aprenda n8n do zero ao profissional e crie automações, agentes de IA, RAG, multiagentes, MCP e integrações com APIs, WhatsApp, Supabase e Docker.";
const SOCIAL_DESCRIPTION =
  "Curso de n8n do zero ao profissional: automações, agentes de IA, RAG, multiagentes, MCP e integrações reais com APIs, WhatsApp e Docker.";
const OG_IMAGE = `${SITE_URL}${ogImage.url}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: SOCIAL_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:site_name", content: "Academia da Nuvem" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1280" },
      { property: "og:image:height", content: "1280" },
      {
        property: "og:image:alt",
        content: "Curso de n8n com automações e agentes de inteligência artificial",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: SOCIAL_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "@id": `${SITE_URL}/#course`,
          name: COURSE_NAME,
          description: DESCRIPTION,
          inLanguage: "pt-BR",
          url: `${SITE_URL}/`,
          image: OG_IMAGE,
          educationalLevel: "Iniciante a avançado",
          about: [
            "n8n",
            "Automação de workflows",
            "Inteligência artificial",
            "Agentes de IA",
            "LLMs",
            "RAG",
            "MCP",
            "APIs e webhooks",
            "WhatsApp",
            "Supabase",
            "PostgreSQL",
            "Docker",
          ],
          teaches: MODULES.map((m) => m.title),
          author: { "@id": `${SITE_URL}/#organization` },
          provider: { "@id": `${SITE_URL}/#organization` },
          offers: {
            "@type": "Offer",
            price: OFFER.price.replace("R$ ", "").replace(",", "."),
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
            url: OFFER.checkoutUrl,
            validFrom: "2026-08-01",
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
            courseWorkload: "PT30H",
            inLanguage: "pt-BR",
          },
          syllabusSections: MODULES.map((m, i) => ({
            "@type": "Syllabus",
            position: i + 1,
            name: m.title,
            description: m.tagline,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "Academia da Nuvem",
          url: "https://academiadanuvem.com.br/",
          logo: `${SITE_URL}${logoAcademia.url}`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Cursos", item: `${SITE_URL}/#conteudo` },
            { "@type": "ListItem", position: 3, name: COURSE_NAME, item: `${SITE_URL}/` },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${SITE_URL}/#faq`,
          mainEntity: FAQ.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <WhyNow />
          <BuildGrid />
          <Curriculum />
          <Projects />
          <Audience />
          <Evolution />
          <Testimonials />
          <Faq />
          <SeoContext />
          <FinalCta />
        </main>
      </div>
    </div>
  );
}

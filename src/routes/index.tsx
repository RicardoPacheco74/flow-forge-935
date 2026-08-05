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
import { Projects } from "@/components/landing/Projects";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhyNow } from "@/components/landing/WhyNow";
import { FAQ, MODULES } from "@/data/course";

const SITE_URL = "https://curso-n8n.academiadanuvem.cloud";
const TITLE = "Automação e Agentes de IA com n8n | Curso Completo";
const DESCRIPTION =
  "Curso completo de n8n: automações, servidor próprio com Docker, APIs, WhatsApp, agentes de IA, RAG com PgVector, multiagentes e MCP. Do zero ao projeto real.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Automação e Criação de Agentes de IA com n8n",
          description: DESCRIPTION,
          inLanguage: "pt-BR",
          url: `${SITE_URL}/`,
          provider: {
            "@type": "Organization",
            name: "n8n Agents",
            url: SITE_URL,
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
            courseWorkload: "PT30H",
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
          "@type": "FAQPage",
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
          <FinalCta />
        </main>
      </div>
    </div>
  );
}

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
      { name: "twitter:card", content: "summary_large_image" },
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
          <h1 className="sr-only">
            Curso de Automação e Criação de Agentes de IA com n8n
          </h1>
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

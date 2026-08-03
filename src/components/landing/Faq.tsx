import { HelpCircle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/data/course";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Faq() {
  return (
    <Section id="faq" className="py-20 md:py-28">
      <SectionHeading eyebrow="Dúvidas frequentes" title="FAQ" />
      <Reveal delay={0.05} className="mt-12">
        <Accordion type="single" collapsible className="mx-auto flex max-w-3xl flex-col gap-3">
          {FAQ.map((item) => (
            <AccordionItem
              key={item.q}
              value={item.q}
              className="glass overflow-hidden rounded-2xl border-b-0 transition-colors data-[state=open]:border-neon/30"
            >
              <AccordionTrigger className="gap-4 px-5 py-4 text-left text-sm hover:no-underline md:text-base [&>svg]:text-neon">
                <span className="flex items-center gap-3">
                  <HelpCircle className="h-4 w-4 shrink-0 text-neon" />
                  {item.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 pl-12 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}

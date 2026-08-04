import { useState } from "react";
import {
  BadgeCheck,
  Clock,
  Gauge,
  Layers,
  Rocket,
  Target,
  Wrench,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MODULES, type Module } from "@/data/course";
import {
  Callout,
  Chip,
  FlowDiagram,
  GlassCard,
  Reveal,
  Section,
  SectionHeading,
  moduleIcon,
} from "./primitives";

const LEVEL_STYLES: Record<string, string> = {
  Iniciante: "text-neon border-neon/30 bg-neon/10",
  "Intermediário": "text-n8n border-n8n/30 bg-n8n/10",
  "Avançado": "text-foreground border-white/20 bg-white/8",
};

function ModuleBody({ module: mod }: { module: Module }) {
  return (
    <div className="grid gap-6 pt-2 lg:grid-cols-12">
      <div className="flex flex-col gap-5 lg:col-span-7">
        <Callout icon={Target} label="Objetivo do módulo">
          {mod.objective}
        </Callout>

        <div className="grid max-h-[420px] gap-3 overflow-y-auto pr-1">
          {mod.lessons.map((lesson, i) => (
            <div
              key={lesson.title}
              className="group/lesson flex items-start gap-4 rounded-2xl border border-border bg-white/[0.03] p-4 transition-colors hover:border-neon/25 hover:bg-neon/[0.04]"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 font-mono text-[11px] text-neon">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground">{lesson.title}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-md border px-2 py-0.5 font-mono text-[10px] ${LEVEL_STYLES[lesson.level]}`}
                  >
                    <Gauge className="mr-1 inline h-3 w-3" />
                    {lesson.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="flex flex-col gap-4 lg:col-span-5">
        <GlassCard interactive={false} className="rounded-2xl p-5">
          <p className="flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-muted-foreground">
            <Wrench className="h-3.5 w-3.5 text-neon" /> Tecnologias utilizadas
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {mod.stack.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </GlassCard>

        <GlassCard interactive={false} className="rounded-2xl p-5">
          <p className="flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-muted-foreground">
            <Layers className="h-3.5 w-3.5 text-neon" /> O que será desenvolvido
          </p>
          <div className="mt-4">
            <FlowDiagram steps={mod.flow} />
          </div>
        </GlassCard>

        <div className="relative overflow-hidden rounded-2xl border border-neon/25 bg-gradient-to-br from-neon/12 to-transparent p-5">
          <p className="flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-neon">
            <Rocket className="h-3.5 w-3.5" /> Projeto construído
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">{mod.project}</p>
        </div>

        <GlassCard interactive={false} className="rounded-2xl p-5">
          <p className="text-[11px] tracking-[0.16em] uppercase text-muted-foreground">
            Conhecimentos adquiridos
          </p>
          <ul className="mt-3 space-y-2.5">
            {mod.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2.5 text-sm text-foreground/85">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                {o}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}

export function Curriculum() {
  const [open, setOpen] = useState<string[]>([MODULES[0]!.id]);
  const totalLessons = MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const progress = Math.round((open.length / MODULES.length) * 100);

  return (
    <Section id="conteudo">
      <SectionHeading
        eyebrow="Conteúdo do curso"
        title={
          <>
            {MODULES.length} módulos, <span className="text-neon">{totalLessons}+ aulas</span> — abra
            capítulo por capítulo
          </>
        }
        description="Cada módulo é um capítulo completo: objetivo, aulas, tecnologias, fluxo construído e o projeto que sai da sua mão no final."
      />

      <Reveal delay={0.05} className="mt-12">
        <div className="glass flex flex-col gap-4 rounded-2xl p-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground">
              Progresso da exploração
            </span>
            <span className="font-mono text-xs text-neon">
              {open.length}/{MODULES.length}
            </span>
          </div>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8 md:max-w-md">
            <div
              className="gradient-neon h-full rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          <button
            type="button"
            onClick={() => setOpen(open.length === MODULES.length ? [] : MODULES.map((m) => m.id))}
            className="self-start rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground transition-colors hover:border-neon/40 hover:text-neon md:self-auto"
          >
            {open.length === MODULES.length ? "Recolher tudo" : "Expandir tudo"}
          </button>
        </div>
      </Reveal>

      <Accordion
        type="multiple"
        value={open}
        onValueChange={setOpen}
        className="mt-6 flex flex-col gap-4"
      >
        {MODULES.map((mod, i) => {
          const Icon = moduleIcon(mod.icon);
          const isOpen = open.includes(mod.id);
          return (
            <Reveal key={mod.id} delay={Math.min(i * 0.04, 0.2)}>
              <AccordionItem
                value={mod.id}
                className={`glass overflow-hidden rounded-3xl border-b-0 transition-all duration-500 ${
                  isOpen ? "glow-ring border-neon/30" : "hover:border-neon/20"
                }`}
              >
                <AccordionTrigger className="items-start gap-4 px-5 py-5 hover:no-underline md:px-7 md:py-6 [&>svg]:mt-2 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-neon">
                  <span className="flex min-w-0 flex-1 items-start gap-4">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-colors ${
                        isOpen
                          ? "border-neon/40 bg-neon/15 text-neon"
                          : "border-border bg-white/5 text-muted-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="font-mono text-[11px] tracking-[0.18em] text-neon">
                        MÓDULO {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-1 block font-display text-lg leading-tight font-light tracking-tight md:text-2xl">
                        {mod.title}
                      </span>
                      <span className="mt-1.5 block text-xs text-muted-foreground md:text-sm">
                        {mod.tagline}
                      </span>
                      <span className="mt-3 flex flex-wrap items-center gap-2">
                        <Chip className="border-neon/25 bg-neon/10 text-neon">
                          {mod.lessons.length} aulas
                        </Chip>
                        {mod.stack.slice(0, 3).map((t) => (
                          <Chip key={t}>{t}</Chip>
                        ))}
                      </span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-7 md:px-7">
                  <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
                  <ModuleBody module={mod} />
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          );
        })}
      </Accordion>
    </Section>
  );
}

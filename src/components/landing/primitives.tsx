import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import {
  Bot,
  BookOpen,
  CalendarClock,
  Cpu,
  Database,
  Gift,
  MessageCircle,
  Network,
  Plug,
  Server,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Bot,
  BookOpen,
  CalendarClock,
  Cpu,
  Database,
  Gift,
  MessageCircle,
  Network,
  Plug,
  Server,
  Sparkles,
  Workflow,
};

export function moduleIcon(name: string): LucideIcon {
  return ICONS[name] ?? Workflow;
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-7xl px-6 py-24 md:py-32", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, icon: Icon = Sparkles }: { children: ReactNode; icon?: LucideIcon }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs tracking-wide text-muted-foreground">
      <Icon className="h-3.5 w-3.5 text-neon" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="max-w-3xl font-display text-3xl leading-[1.1] font-light tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  );
}

export function GlassCard({
  children,
  className,
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-500",
        interactive &&
          "hover:-translate-y-1 hover:border-neon/30 hover:shadow-[0_20px_60px_-30px_color-mix(in_oklab,var(--neon)_60%,transparent)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-neon/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-white/5 px-2 py-1 font-mono text-[11px] tracking-wide text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Callout({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neon/20 bg-neon/5 p-5">
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-neon via-n8n to-transparent" />
      <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase text-neon">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-foreground/85">{children}</p>
    </div>
  );
}

export function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1">
      {steps.map((step, i) => (
        <div key={step} className="flex shrink-0 items-center gap-2">
          <div className="rounded-xl border border-border bg-surface-2/80 px-3 py-2 text-xs text-foreground/80">
            {step}
          </div>
          {i < steps.length - 1 ? (
            <svg width="28" height="8" viewBox="0 0 28 8" aria-hidden className="shrink-0">
              <line
                x1="0"
                y1="4"
                x2="28"
                y2="4"
                stroke="var(--neon)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="animate-dash"
                opacity="0.7"
              />
            </svg>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 md:text-base",
        variant === "primary"
          ? "gradient-neon text-n8n-foreground ring-1 ring-inset ring-white/40 shadow-[0_0_45px_-8px_color-mix(in_oklab,var(--neon)_70%,transparent)] hover:scale-[1.03] hover:shadow-[0_0_70px_-8px_color-mix(in_oklab,var(--neon)_85%,transparent)]"
          : "glass text-foreground hover:border-neon/40 hover:text-neon",
        className,
      )}
    >
      {children}
    </a>
  );
}

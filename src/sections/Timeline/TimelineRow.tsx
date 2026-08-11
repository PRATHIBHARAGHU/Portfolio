import { motion } from "framer-motion";
import { Award, FlaskConical, GraduationCap, Rocket } from "lucide-react";
import type { TimelineCategory, TimelineItem } from "@/data/types";
import { fadeUp } from "@/utils/motion";
import { cn } from "@/utils/cn";

const categoryMeta: Record<
  TimelineCategory,
  { icon: typeof GraduationCap; color: string }
> = {
  Education: { icon: GraduationCap, color: "var(--primary)" },
  Research: { icon: FlaskConical, color: "var(--accent)" },
  Hackathon: { icon: Rocket, color: "var(--primary)" },
  Project: { icon: Award, color: "var(--accent)" },
};

interface TimelineRowProps {
  item: TimelineItem;
  isLast: boolean;
}

export function TimelineRow({ item, isLast }: TimelineRowProps) {
  const meta = categoryMeta[item.category];
  const Icon = meta.icon;

  return (
    <motion.div variants={fadeUp} className="relative flex gap-6 pb-10">
      <div className="flex flex-col items-center">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
          style={{
            borderColor: `color-mix(in srgb, ${meta.color} 45%, transparent)`,
            background: `color-mix(in srgb, ${meta.color} 12%, transparent)`,
            color: meta.color,
          }}
        >
          <Icon size={16} strokeWidth={2} />
        </span>
        {!isLast && (
          <span className="mt-2 w-px flex-1 bg-[color-mix(in_srgb,var(--text)_10%,transparent)]" />
        )}
      </div>

      <div
        className={cn(
          "glass -mt-1 flex-1 rounded-2xl p-5",
          "transition-all duration-300 hover:border-[color-mix(in_srgb,var(--primary)_40%,transparent)]"
        )}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: meta.color }}
          >
            {item.category}
          </span>
          <span className="font-display text-sm font-semibold text-[var(--muted)]">
            {item.year}
          </span>
        </div>
        <h3 className="mt-2 font-display text-base font-semibold">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-[var(--primary)]">
          {item.organization}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/motion";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="Where I've been working" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Card hover={false} className="p-8 sm:p-10">
            <div className="flex flex-col justify-between gap-4 border-b border-[color-mix(in_srgb,var(--text)_8%,transparent)] pb-6 sm:flex-row sm:items-start">
              <div>
                <h3 className="font-display text-xl font-semibold">
                  {experience.role}
                </h3>
                <p className="mt-1 text-[var(--primary)]">
                  {experience.organization}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-[var(--muted)]">
                  <MapPin size={14} strokeWidth={2} />
                  {experience.location}
                </p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full border border-[color-mix(in_srgb,var(--accent)_35%,transparent)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
                {experience.period}
              </span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
              {experience.summary}
            </p>

            <motion.ul
              variants={staggerContainer(0.05)}
              className="mt-7 grid gap-3 sm:grid-cols-2"
            >
              {experience.responsibilities.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-2.5 text-sm text-[var(--text)]"
                >
                  <CheckCircle2
                    size={17}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0 text-[var(--primary)]"
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-7 flex flex-wrap gap-2">
              {experience.focus.map((tag) => (
                <Badge key={tag} tone="accent">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

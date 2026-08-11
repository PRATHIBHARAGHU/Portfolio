import { motion } from "framer-motion";
import {
  Braces,
  Cloud,
  Database,
  Layers,
  Wrench,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/motion";

const categoryIcons: Record<string, typeof Braces> = {
  Languages: Braces,
  Frameworks: Layers,
  Databases: Database,
  Tools: Wrench,
  Cloud: Cloud,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to build and ship"
          description="A practical toolkit spanning research, backend, frontend, and infrastructure."
        />

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.title] ?? Braces;
            return (
              <motion.div key={category.title} variants={fadeUp}>
                <Card className="h-full">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--primary)_14%,transparent)] text-[var(--primary)]">
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <h3 className="font-display text-base font-semibold">
                      {category.title}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-[color-mix(in_srgb,var(--text)_9%,transparent)] bg-[color-mix(in_srgb,var(--text)_3%,transparent)] px-3 py-1.5 text-sm text-[var(--text)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { achievements } from "@/data/achievements";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/motion";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition along the way"
        />

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((achievement) => (
            <motion.div key={achievement.title} variants={fadeUp}>
              <Card className="h-full">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] text-[var(--accent)]">
                  <Award size={18} strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold">
                  {achievement.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-[var(--primary)]">
                  {achievement.issuer}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

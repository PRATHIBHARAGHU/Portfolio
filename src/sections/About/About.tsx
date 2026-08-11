import { motion } from "framer-motion";
import { aboutParagraphs, aboutFocusAreas, statistics } from "@/data/about";
import { AINetworkIllustration } from "@/components/ui/AINetworkIllustration";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  fadeUp,
  slideInLeft,
  staggerContainer,
  viewportOnce,
} from "@/utils/motion";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Engineering intelligent systems, end to end"
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="order-2 mx-auto w-full max-w-sm lg:order-1"
          >
            <AINetworkIllustration />
          </motion.div>

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="order-1 lg:order-2"
          >
            <div className="space-y-5">
              {aboutParagraphs.map((paragraph) => (
                <motion.p
                  key={paragraph}
                  variants={fadeUp}
                  className="text-base leading-relaxed text-[var(--muted)]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
              {aboutFocusAreas.map((area) => (
                <Badge key={area}>{area}</Badge>
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer(0.06)}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {statistics.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="glass rounded-xl p-4"
                >
                  <p className="font-display text-2xl font-semibold text-gradient">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { timelineItems } from "@/data/timeline";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, viewportOnce } from "@/utils/motion";
import { TimelineRow } from "./TimelineRow";

export function Timeline() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Timeline"
          title="My academic & professional journey"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {timelineItems.map((item, index) => (
            <TimelineRow
              key={`${item.year}-${item.title}`}
              item={item}
              isLast={index === timelineItems.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

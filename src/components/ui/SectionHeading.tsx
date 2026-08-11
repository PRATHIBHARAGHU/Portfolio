import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/utils/motion";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "mb-14 max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
          {description}
        </p>
      )}
    </motion.div>
  );
}

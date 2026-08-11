import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { AINetworkIllustration } from "@/components/ui/AINetworkIllustration";
import { fadeUp, staggerContainer } from "@/utils/motion";

const roles = ["AI/ML Engineer", "Full Stack Developer", "Research Enthusiast"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center pt-28 pb-16"
    >
      <div className="container-px mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--primary)_35%,transparent)] bg-[color-mix(in_srgb,var(--primary)_8%,transparent)] px-4 py-1.5 text-xs font-medium text-[var(--primary)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Open to Research, ML &amp; full stack opportunities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Prathibha R</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-lg font-medium text-[var(--muted)] sm:text-xl"
          >
            {roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                <span className="text-[var(--text)]">{role}</span>
                {i < roles.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-[var(--muted)]" />
                )}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg"
          >
            Final-year AI/ML engineer building scalable, intelligent
            applications, currently researching AI-based control systems as a
            Machine Learning Research Intern at Manipal Institute of
            Technology.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <LinkButton
              href="/resume/Prathibha-R-Resume.pdf"
              download
              variant="primary"
              size="lg"
              icon={<Download size={17} strokeWidth={2} />}
            >
              Download Resume
            </LinkButton>
            <LinkButton
              href="#projects"
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={17} strokeWidth={2} />}
            >
              View Projects
            </LinkButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <AINetworkIllustration />
        </motion.div>
      </div>
    </section>
  );
}

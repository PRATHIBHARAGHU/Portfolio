import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { socialLinks } from "@/data/navigation";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { fadeUp, slideInLeft, slideInRight, viewportOnce } from "@/utils/motion";
import { ContactForm } from "./ContactForm";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  "file-down": Download,
} as const;

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Talk"
          description="Have a role, a research collaboration, or a project in mind? I'd love to hear about it."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Card hover={false} className="p-7 sm:p-9">
              <ContactForm />
            </Card>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-5"
          >
            <Card hover={false} className="p-7">
              <h3 className="font-display text-base font-semibold">
                Reach me directly
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                Prefer another channel? Find me here, or download my resume
                for a full overview of my background.
              </p>
              <div className="mt-6 space-y-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <motion.a
                      key={link.label}
                      variants={fadeUp}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      download={link.icon === "file-down" ? true : undefined}
                      className="flex items-center gap-3 rounded-xl border border-[color-mix(in_srgb,var(--text)_9%,transparent)] px-4 py-3 text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:border-[color-mix(in_srgb,var(--primary)_45%,transparent)] hover:bg-[color-mix(in_srgb,var(--primary)_6%,transparent)]"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-[var(--primary)]">
                        <Icon size={15} />
                      </span>
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

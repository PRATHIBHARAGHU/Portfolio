import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/data/types";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { fadeUp } from "@/utils/motion";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="group glass flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--primary)_45%,transparent)] hover:shadow-[0_20px_60px_-25px_var(--primary)]"
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-[color-mix(in_srgb,var(--text)_8%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--primary)_18%,transparent),color-mix(in_srgb,var(--accent)_14%,transparent))]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(color-mix(in srgb, var(--text) 30%, transparent) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <span className="relative font-display text-3xl font-semibold tracking-tight text-[var(--text)] opacity-80 transition-transform duration-500 group-hover:scale-105">
          {project.title
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 3)}
        </span>
        {project.featured && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[color-mix(in_srgb,var(--bg)_60%,transparent)] px-2.5 py-1 text-[11px] font-medium text-[var(--text)] backdrop-blur">
            <Sparkles size={11} strokeWidth={2} />
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold">
          {project.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[var(--muted)]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[color-mix(in_srgb,var(--text)_10%,transparent)] px-4 py-2 text-xs font-medium text-[var(--text)] transition-colors duration-200 hover:border-[color-mix(in_srgb,var(--primary)_45%,transparent)]"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-medium text-white transition-transform duration-200 hover:brightness-110 active:scale-95"
            >
              <ExternalLink size={14} strokeWidth={2} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, viewportOnce } from "@/utils/motion";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of full stack and AI-driven projects, from concept to deployment."
        />

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

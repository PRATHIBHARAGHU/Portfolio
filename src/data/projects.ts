import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "smartstock-ai",
    title: "SmartStock AI",
    description:
      "An intelligent inventory and stock forecasting platform that uses machine learning to predict demand trends and flag restocking needs before they become a problem.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL"],
    github: "https://github.com/PRATHIBHARAGHU/SmartstockAI",
    demo: "https://bugbusters-smartstock-ai-1--prathibhar070.replit.app/",
    featured: true,
  },
  {
  id: "jobsphere",
  title: "JobSphere",
  description:
    "A full stack job discovery and application tracking platform connecting candidates with opportunities through a clean, fast, and searchable interface.",
  tech: ["React", "FastAPI", "MongoDB", "Docker"],
  github: "https://github.com/PRATHIBHARAGHU/JobSphere",
  demo: "https://jobsphere.vercel.app",
  // "https://fastapiapp-kohl.vercel.app/""
  featured:true,
  },
  {
    id: "procheck-resumeai",
    title: "ProCheck — ResumeAI",
    description:
      "An AI-powered resume analysis tool that parses resumes, scores them against job descriptions, and generates targeted improvement suggestions for job seekers.",
    tech: ["Python", "Django", "React", "TypeScript"],
    github: "https://github.com/PRATHIBHARAGHU/ProCheck-ResumeAI",
    // demo: "In Progress",
    // featured: true,
  },
  {
    id: "researchpilot",
    title: "ResearchPilot",
    description:
      "A research workflow assistant that helps organize literature, summarize papers, and track experiment progress for academic and applied ML research.",
    tech: ["Python", "React", "SQLite", "REST APIs"],
    github: "https://github.com/PRATHIBHARAGHU/AI-Research-Workspace",
    // demo: "On going",
  },
];

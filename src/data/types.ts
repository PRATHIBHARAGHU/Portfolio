export interface NavLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Statistic {
  label: string;
  value: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  focus: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export type TimelineCategory =
  | "Education"
  | "Research"
  | "Hackathon"
  | "Project";

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  category: TimelineCategory;
  description: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "file-down";
}

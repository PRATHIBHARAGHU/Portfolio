import type { NavLink, SocialLink } from "./types";

const resumeHref = `${import.meta.env.BASE_URL}resume/Prathibha_R_Resume.pdf`;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/PRATHIBHARAGHU", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prathibharaghu/", icon: "linkedin" },
  { label: "Email", href: "mailto:prathibhar070@gmail.com", icon: "mail" },
  { label: "Resume", href: resumeHref, icon: "file-down" },
];

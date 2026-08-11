import { Mail } from "lucide-react";
import { socialLinks } from "@/data/navigation";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail } as const;

export function Footer() {
  const year = new Date().getFullYear();
  const links = socialLinks.filter((l) => l.icon !== "file-down");

  return (
    <footer className="relative border-t border-[color-mix(in_srgb,var(--text)_8%,transparent)]">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold">
            Designed &amp; Developed by Prathibha R
          </p>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Built with React, TypeScript and Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {links.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--text)_10%,transparent)] text-[var(--muted)] transition-colors duration-200 hover:border-[color-mix(in_srgb,var(--primary)_45%,transparent)] hover:text-[var(--text)]"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>

        <p className="text-xs text-[var(--muted)]">© {year} Prathibha R</p>
      </div>
    </footer>
  );
}

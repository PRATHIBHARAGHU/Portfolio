import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollLock } from "@/hooks/useScrollLock";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.href.replace("#", "")));
  useScrollLock(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "container-px mx-auto flex max-w-6xl items-center justify-between rounded-2xl transition-all duration-300",
          scrolled && "glass px-4 py-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.5)]"
        )}
      >
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight"
        >
          Prathibha<span className="text-gradient">.R</span>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-[var(--text)]"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                )}
                aria-current={isActive ? "true" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[color-mix(in_srgb,var(--text)_7%,transparent)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition-transform duration-200 hover:brightness-110 active:scale-95 sm:inline-flex"
          >
            Let's Talk
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--text)_10%,transparent)] lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="container-px mx-auto mt-2 max-w-6xl lg:hidden"
            aria-label="Mobile"
          >
            <div className="glass flex flex-col gap-1 rounded-2xl p-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[color-mix(in_srgb,var(--text)_6%,transparent)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleNavClick}
                className="mt-1 rounded-xl bg-[var(--primary)] px-4 py-3 text-center text-sm font-medium text-white"
              >
                Let's Talk
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

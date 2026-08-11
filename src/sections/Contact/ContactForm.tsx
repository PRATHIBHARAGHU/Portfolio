import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

const fieldClasses =
  "w-full rounded-xl border bg-[color-mix(in_srgb,var(--text)_3%,transparent)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors duration-200 placeholder:text-[var(--muted)] focus:border-[color-mix(in_srgb,var(--primary)_55%,transparent)]";

export function ContactForm() {
  const { values, errors, status, updateField, handleSubmit } =
    useContactForm();

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => updateField("name", e.target.value)}
          placeholder="Your full name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={cn(
            fieldClasses,
            errors.name
              ? "border-red-400/60"
              : "border-[color-mix(in_srgb,var(--text)_10%,transparent)]"
          )}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(
            fieldClasses,
            errors.email
              ? "border-red-400/60"
              : "border-[color-mix(in_srgb,var(--text)_10%,transparent)]"
          )}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="Tell me about your project or opportunity..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            fieldClasses,
            "resize-none",
            errors.message
              ? "border-red-400/60"
              : "border-[color-mix(in_srgb,var(--text)_10%,transparent)]"
          )}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        icon={<Send size={16} strokeWidth={2} />}
        className="w-full sm:w-auto"
      >
        Send Message
      </Button>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            role="status"
            className="flex items-center gap-2 rounded-xl border border-[color-mix(in_srgb,var(--accent)_35%,transparent)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-4 py-3 text-sm text-[var(--accent)]"
          >
            <CheckCircle2 size={16} strokeWidth={2} />
            Your email app should now open with the message ready to send.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

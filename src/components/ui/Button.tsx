import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--primary)] text-white hover:brightness-110 shadow-[0_0_0_1px_color-mix(in_srgb,var(--primary)_60%,transparent)]",
  secondary:
    "glass text-[var(--text)] hover:border-[color-mix(in_srgb,var(--primary)_50%,transparent)]",
  ghost:
    "text-[var(--text)] hover:bg-[color-mix(in_srgb,var(--text)_6%,transparent)]",
};

const sizeClasses: Record<Size, string> = {
  md: "text-sm px-5 py-2.5 gap-2",
  lg: "text-base px-6 py-3.5 gap-2.5",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none";

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      children,
      className,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  )
);
Button.displayName = "Button";

export const LinkButton = forwardRef<HTMLAnchorElement, AnchorProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      children,
      className,
      ...props
    },
    ref
  ) => (
    <a
      ref={ref}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </a>
  )
);
LinkButton.displayName = "LinkButton";

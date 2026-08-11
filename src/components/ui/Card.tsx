import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({ children, className, hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6",
        hover &&
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--primary)_45%,transparent)] hover:shadow-[0_20px_60px_-25px_var(--primary)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

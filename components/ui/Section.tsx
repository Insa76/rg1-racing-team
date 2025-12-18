// components/ui/Section.tsx

import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  id?: string;
  children: ReactNode;
  variant?: "dark" | "light" | "neutral" | "none";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

export default function Section({
  id,
  children,
  variant = "dark",
  size = "lg",
  fullWidth = false,
  className,
}: SectionProps) {
  return (
    <section
    id={id}
      className={clsx(
         "w-full scroll-mt-20",
        // Fondo
        variant === "dark" && "bg-neutral-900 text-white",
        variant === "light" && "bg-white text-neutral-900",
        variant === "neutral" && "bg-neutral-100 text-neutral-900",

        // Padding vertical
        size === "sm" && "py-12",
        size === "md" && "py-20",
        size === "lg" && "py-28",

        className
      )}
    >
      <div className={clsx(
        fullWidth ? "px-6" : "container mx-auto px-6"
      )}>
        {children}
      </div>
    </section>
  );
}

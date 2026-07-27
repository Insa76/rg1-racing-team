// components/ui/Section.tsx

import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
  fullWidth?: boolean;
}

export default function Section({
  id,
  children,
  className,
  size = "lg",
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative w-full scroll-mt-24 overflow-hidden",

        // Espaciado vertical
        size === "sm" && "py-16 md:py-20",
        size === "md" && "py-20 md:py-28",
        size === "lg" && "py-24 md:py-32 lg:py-36",

        // Hero controla su propia altura
        size === "hero" && "py-0",

        className
      )}
    >
      {/* Halo decorativo */}
      {size !== "hero" && (
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-[140px]" />
        </div>
      )}

      {/* Container */}
      <div
        className={clsx(
          "relative",
          fullWidth
            ? "w-full"
            : "mx-auto w-full max-w-7xl px-6 lg:px-8"
        )}
      >
        {children}
      </div>
    </section>
  );
}
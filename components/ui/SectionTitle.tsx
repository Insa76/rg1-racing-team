import { ReactNode } from "react";
import clsx from "clsx";

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  display?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  display = false,
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          {eyebrow}
        </p>
      )}

      <h2
        className={clsx(
          "text-secondary",
          display
            ? "font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.03em] md:text-6xl lg:text-7xl"
            : "font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
        )}
      >
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
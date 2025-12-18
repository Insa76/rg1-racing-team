// components/ui/Heading.tsx

import clsx from "clsx";

interface HeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  className?: string;
}

export default function Heading({
  title,
  subtitle,
  description,
  as = "h2",
  align = "left",
  className,
}: HeadingProps) {
  const Tag = as;

  return (
    <div
      className={clsx(
        align === "center" && "text-center",
        className
      )}
    >
      {subtitle && (
        <p className="text-neutral-400 text-xl font-semibold mb-2">
          {subtitle}
        </p>
      )}

      <Tag
        className={clsx(
          "font-heading uppercase tracking-racing",
          as === "h1" && "text-5xl md:text-6xl",
          as === "h2" && "text-4xl md:text-5xl",
          as === "h3" && "text-3xl md:text-4xl"
        )}
      >
        {title}
      </Tag>

      {description && (
        <p className="mt-4 max-w-2xl text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}

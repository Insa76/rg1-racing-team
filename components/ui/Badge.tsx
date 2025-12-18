// components/ui/Badge.tsx

import clsx from "clsx";

interface BadgeProps {
  children: string;
  variant?: "light" | "dark";
  className?: string;
}

export default function Badge({
  children,
  variant = "dark",
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full",
        variant === "dark" &&
          "bg-neutral-800 text-neutral-200",
        variant === "light" &&
          "bg-neutral-200 text-neutral-900",
        className
      )}
    >
      {children}
    </span>
  );
}

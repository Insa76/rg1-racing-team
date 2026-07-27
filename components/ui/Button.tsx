// components/ui/Button.tsx

import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300",

    // Focus
    "focus:outline-none focus:ring-2 focus:ring-primary/40",

    // Primary
    variant === "primary" &&
      "bg-primary text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30",

    // Secondary
    variant === "secondary" &&
      "bg-secondary text-white hover:opacity-90",

    // Outline
    variant === "outline" &&
      "border border-border bg-transparent text-secondary hover:border-primary hover:text-primary",

    // Ghost
    variant === "ghost" &&
      "bg-transparent text-secondary hover:bg-white/5",

    // Sizes
    size === "sm" && "px-4 py-2 text-sm",
    size === "md" && "px-6 py-3",
    size === "lg" && "px-8 py-4 text-lg",

    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
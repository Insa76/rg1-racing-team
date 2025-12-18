// components/ui/Button.tsx

import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center font-semibold transition rounded-lg",
    // Variants
    variant === "primary" &&
      "bg-white text-neutral-900 hover:bg-neutral-200",
    variant === "secondary" &&
      "bg-neutral-800 text-white hover:bg-neutral-700",
    variant === "ghost" &&
      "bg-transparent text-white hover:text-neutral-300",
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

  return <button className={classes}>{children}</button>;
}

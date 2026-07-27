"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
  glow = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-3xl",
        "border border-white/10",
        "bg-white/[0.03]",
        "backdrop-blur-xl",
        "shadow-[0_20px_80px_rgba(0,0,0,0.35)]",
        hover &&
          "transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_30px_90px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      {/* Glow */}
      {glow && (
        <div
          className="
            pointer-events-none
            absolute
            -top-24
            -right-24
            h-48
            w-48
            rounded-full
            bg-primary/20
            blur-3xl
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />
      )}

      {/* Borde superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative p-8">
        {children}
      </div>
    </div>
  );
}
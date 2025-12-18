// components/ui/Card.tsx

import clsx from "clsx";
import Link from "next/link";

interface CardCTA {
  label: string;
  href: string;
}

interface CardProps {
  number?: string;
  title: string;
  text?: string;
  image?: string;
  cta?: CardCTA;
  variant?: "default" | "outlined";
  className?: string;
}

export default function Card({
  number,
  title,
  text,
  image,
  cta,
  variant = "default",
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "flex gap-6",
        variant === "outlined" &&
          "border border-neutral-700 rounded-xl p-6",
        className
      )}
    >
      {/* Número */}
      {number && (
        <span className="text-4xl font-bold text-neutral-500 min-w-[48px]">
          {number}
        </span>
      )}

      <div className="space-y-2">
        {/* Imagen opcional */}
        {image && (
          <img
            src={image}
            alt={title}
            className="rounded-lg mb-4 w-full object-cover"
          />
        )}

        <h4 className="text-2xl font-semibold">{title}</h4>

        {text && (
          <p className="text-neutral-400 leading-relaxed">
            {text}
          </p>
        )}

        {cta && (
          <Link
            href={cta.href}
            className="inline-block mt-3 text-sm font-semibold text-white underline underline-offset-4 hover:text-neutral-300 transition"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </div>
  );
}

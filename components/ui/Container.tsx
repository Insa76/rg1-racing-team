// components/ui/Container.tsx

import clsx from "clsx";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "container mx-auto px-6",
        className
      )}
    >
      {children}
    </div>
  );
}

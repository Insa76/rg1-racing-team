// components/ui/IconBox.tsx

import { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  size?: number;
}

export default function IconBox({
  icon: Icon,
  size = 24,
}: IconBoxProps) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface">
      <Icon
        size={size}
        className="text-primary"
      />
    </div>
  );
}
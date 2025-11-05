import React from "react";
import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  href: string;
}

export const Chip = React.memo(function Chip({
  children,
  icon,
  href,
}: ChipProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-style-code inline-flex cursor-pointer items-center gap-1 rounded-sm bg-(--c-chip) px-1 py-0 backdrop-blur-md transition-all hover:bg-(--c-chip-active) hover:text-(--c-text-100)"
      )}
    >
      {icon && <div className="h-4 w-4 shrink-0">{icon}</div>}
      {children}
    </a>
  );
});

import type { ReactNode } from "react";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-bold tracking-[0.16em] uppercase ${className ?? "text-ink-2"}`}>
      {children}
    </p>
  );
}

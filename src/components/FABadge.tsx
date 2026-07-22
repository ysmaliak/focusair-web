import type { ReactNode } from "react";

export function FABadge({
  children,
  className,
  tilt = 0,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
}) {
  return (
    <span
      className={`bowlby tilted inline-block rounded-full border-[3px] border-white px-4 pt-2.5 pb-2 text-sm tracking-wide shadow-sticker ${className ?? ""}`}
      style={tilt !== 0 ? ({ "--tilt": `${tilt}deg` } as React.CSSProperties) : undefined}
    >
      {children}
    </span>
  );
}

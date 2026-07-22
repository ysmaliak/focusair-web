import type { CSSProperties } from "react";

export function Sticker({
  name,
  className,
  style,
  bare = false,
  alt = "",
}: {
  name: string;
  className?: string;
  style?: CSSProperties;
  bare?: boolean;
  alt?: string;
}) {
  return (
    <img
      src={`/stickers/${name}.webp`}
      alt={alt}
      aria-hidden={alt === "" ? true : undefined}
      draggable={false}
      className={`${bare ? "sticker-bare" : "sticker"} select-none ${className ?? ""}`}
      style={style}
    />
  );
}

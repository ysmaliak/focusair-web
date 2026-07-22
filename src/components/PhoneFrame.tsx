export function PhoneFrame({
  src,
  darkSrc,
  alt,
  className,
  eager = false,
}: {
  src: string;
  darkSrc?: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div
      className={`relative ${className ?? ""}`}
      style={{
        aspectRatio: "807 / 1666",
        containerType: "inline-size",
        filter: "drop-shadow(0 18px 30px var(--shade))",
      }}
    >
      <picture>
        {darkSrc ? <source media="(prefers-color-scheme: dark)" srcSet={darkSrc} /> : null}
        <img
          src={src}
          alt={alt}
          width={840}
          height={1826}
          fetchPriority={eager ? "high" : undefined}
          className="absolute"
          style={{ left: "4.34%", top: "1.89%", width: "91.2%", borderRadius: "14cqw" }}
        />
      </picture>
      <img
        src="/bezel.webp"
        alt=""
        aria-hidden
        width={807}
        height={1666}
        draggable={false}
        className="absolute inset-0 h-full w-full select-none"
      />
    </div>
  );
}

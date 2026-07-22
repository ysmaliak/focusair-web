export const APP_STORE_URL = "https://apps.apple.com/app/id6756526902";

export function AppStoreBadge({ className }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className={`springy inline-block ${className ?? ""}`}
    >
      <img
        src="/Download_on_the_App_Store_Badge_US-UK.svg"
        alt="Download on the App Store"
        width={166}
        height={55}
        className="h-12 w-auto sm:h-14"
      />
    </a>
  );
}

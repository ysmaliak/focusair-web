import { Link } from "@tanstack/react-router";
import { APP_STORE_URL } from "~/components/AppStoreBadge";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <nav className="border-outline bg-surface/85 shadow-card flex items-center gap-2.5 rounded-full border-[1.5px] py-2 pr-2 pl-2.5 backdrop-blur-md">
        <Link to="/" className="springy flex items-center gap-2.5 py-0.5" aria-label="FocusAir home">
          <img src="/app-icon.png" alt="" width={36} height={36} className="h-9 w-9 rounded-[30%]" />
          <span className="bowlby text-ink hidden pt-1 text-base sm:inline">FocusAir</span>
        </Link>
        <div className="bg-outline mx-1 h-7 w-px" />
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="springy bowlby bg-brand shadow-sticker rounded-full border-[2.5px] border-white px-5 pt-3 pb-2.5 text-sm text-white sm:text-base"
        >
          Get the app
        </a>
      </nav>
    </header>
  );
}

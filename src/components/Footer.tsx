import { Link } from "@tanstack/react-router";
import { Sticker } from "~/components/Sticker";

export function Footer() {
  return (
    <footer className="bg-navy relative overflow-clip text-white">
      <div className="mx-auto max-w-5xl px-6 pt-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <img src="/app-icon.png" alt="" width={40} height={40} className="h-10 w-10 rounded-[30%]" />
            <div>
              <p className="bowlby text-lg leading-none">FocusAir</p>
              <p className="mt-1.5 text-xs text-white/60">
                © {new Date().getFullYear()} FocusAir. Phone down. Wings up.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/80">
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <a href="mailto:support@focusair.app" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="relative mt-6 h-20" aria-hidden>
        <div className="absolute inset-x-0 top-1/2 border-t-2 border-dashed border-white/20" />
        <Sticker name="taxi" className="absolute right-10 bottom-3 w-24 sm:right-16 sm:w-28" />
      </div>
    </footer>
  );
}

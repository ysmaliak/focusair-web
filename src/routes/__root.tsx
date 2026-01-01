import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "FocusAir - Focus Better" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main className="flex-1 pt-24">
          <Outlet />
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav className="flex items-center gap-1 px-2 py-2 bg-white/70 backdrop-blur-md rounded-full shadow-lg shadow-black/5 border border-white/50">
        <Link
          to="/"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
        >
          <span className="text-lg font-bold">F</span>
        </Link>
        <div className="w-px h-6 bg-gray-200 mx-1" />
        <a
          href="https://apps.apple.com/app/focusair"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
        >
          Get the app
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} FocusAir
        </p>
        <div className="flex items-center gap-6">
          <Link
            to="/terms"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Terms
          </Link>
          <Link
            to="/privacy"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Privacy
          </Link>
          <a
            href="mailto:support@focusair.app"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

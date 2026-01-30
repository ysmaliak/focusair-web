import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import "./styles/app.css";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
      {/* Top overscroll background */}
      <div className="fixed top-0 left-0 right-0 h-screen -translate-y-full bg-gray-50 z-40" />
      <Header />
      <main className="flex-1 pt-20 sm:pt-24">{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 px-4">
      <nav className="flex items-center gap-1.5 px-2.5 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg shadow-black/[0.03] border border-gray-200/50">
        <Link
          to="/"
          className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:bg-gray-100 transition-colors"
        >
          <img src="/AppIcon.png" alt="FocusAir" className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg" />
        </Link>
        <div className="w-px h-5 sm:h-6 bg-gray-200 mx-1" />
        <a
          href="https://apps.apple.com/app/id6756526902"
          className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full transition-colors"
        >
          Get the app
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-6 sm:py-8 border-t border-gray-100 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2">
          <img src="/AppIcon.png" alt="" className="w-5 h-5 sm:w-6 sm:h-6 rounded-md" />
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} FocusAir
          </p>
        </div>
        <div className="flex items-center gap-5 sm:gap-6">
          <Link to="/terms" className="text-xs sm:text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Terms
          </Link>
          <Link to="/privacy" className="text-xs sm:text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Privacy
          </Link>
          <a
            href="mailto:support@focusair.app"
            className="text-xs sm:text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

// Download Page
function DownloadPage() {
  const appStoreUrl = 'https://apps.apple.com/app/id6756526902';

  React.useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = appStoreUrl;
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <img
        src="/AppIcon.png"
        alt="FocusAir App Icon"
        className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl shadow-2xl"
      />
      <h1 className="text-xl sm:text-2xl font-bold mt-5 sm:mt-6 mb-6 sm:mb-8 text-center text-gray-900">
        FocusAir: Deep Focus Timer
      </h1>
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="transform hover:scale-105 transition-transform duration-200"
      >
        <img
          src="/Download_on_the_App_Store_Badge_US-UK.svg"
          alt="Download on the App Store"
          className="h-14 sm:h-16 w-auto"
        />
      </a>

      <div className="fixed top-4 right-2 z-50 w-full max-w-xs">
        <div className="relative bg-white text-gray-900 px-5 pb-5 rounded-3xl shadow-xl border border-gray-200">
          <div className="absolute top-0 right-6 transform -translate-y-full w-0 h-0 border-t-[12px] border-t-transparent border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-white"></div>
          <div className="flex justify-center">
            <img
              src="/tiktok-icon.png"
              alt="TikTok Icon"
              className="w-20 h-20"
            />
          </div>
          <p className="text-center text-sm text-gray-600">
            On TikTok, tap the three dots (...) and select 'Open in browser' to download
          </p>
        </div>
      </div>
    </div>
  );
}

// Pages
function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] px-5 sm:px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-5 sm:mb-6 leading-[1.1]">
          Your focus is cleared for takeoff.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
          Every focus session is a flight. Track your progress, block distractions, and reach new altitudes of productivity.
        </p>
        <a
          href="https://apps.apple.com/app/id6756526902"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transform hover:scale-105 transition-transform duration-200"
        >
          <img
            src="/Download_on_the_App_Store_Badge_US-UK.svg"
            alt="Download on the App Store"
            className="h-12 sm:h-14 w-auto"
          />
        </a>
      </div>

      {/* Hero Image */}
      <div className="mt-12 sm:mt-16 mb-8 sm:mb-12 w-full max-w-4xl px-2 sm:px-4">
        <img
          src="/hero-image.png"
          alt="FocusAir App Screenshots"
          className="w-full h-auto max-h-[65vh] object-contain"
        />
      </div>
    </div>
  );
}

// Import page components
import TermsPage from "./pages/terms";
import PrivacyPage from "./pages/privacy";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import "./styles/app.css";

// Layout
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
      <Header />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
    </div>
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
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full transition-colors"
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
    <footer className="py-8 border-t border-gray-100 bg-white">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} FocusAir
        </p>
        <div className="flex items-center gap-6">
          <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Terms
          </Link>
          <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
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

// Pages
function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Focus better.
        </h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          FocusAir helps you stay focused and achieve more.
          <br className="hidden sm:block" />
          Available now on the App Store.
        </p>
        <a
          href="https://apps.apple.com/app/focusair"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-xl"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download on the App Store
        </a>
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
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
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

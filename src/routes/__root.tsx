import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Sticker } from "~/components/Sticker";
import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FocusAir — Turn focus into flight" },
      {
        name: "description",
        content:
          "FocusAir turns focus time into a flight game. Block distracting apps, board a flight, and land XP, stickers, and streaks. Free to fly on iOS.",
      },
      { property: "og:title", content: "FocusAir — Turn focus into flight" },
      {
        property: "og:description",
        content:
          "Block apps. Board a flight. Land XP, stickers, and streaks — focus is a flight now.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://focusair.app" },
      { property: "og:image", content: "https://focusair.app/og.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png?v=10", sizes: "1024x1024" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      {
        rel: "preload",
        href: "/fonts/bowlby-one-sc.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
    scripts: [{ children: "document.documentElement.dataset.js=''" }],
  }),
  component: () => <Outlet />,
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
});

function NotFound() {
  return (
    <div className="sky relative flex min-h-dvh flex-col items-center justify-center overflow-clip px-5 text-center text-white">
      <Sticker name="cloud-2" bare className="drifty absolute top-[10%] right-[8%] w-32" />
      <Sticker name="cloud-1" bare className="drifty absolute bottom-[12%] left-[8%] w-28" />
      <Sticker
        name="b737-side"
        className="floaty absolute top-[14%] -left-12 w-56 -rotate-[8deg] sm:w-80"
      />
      <p className="bowlby sticker-text text-night text-2xl">FocusAir</p>
      <h1 className="bowlby mt-6 text-[clamp(2.5rem,8vw,5rem)] leading-[1.03]">
        Off the <span className="text-gold">radar</span>
      </h1>
      <p className="mx-auto mt-4 max-w-md text-white/90">
        This gate doesn't exist. Let's taxi you back to the terminal.
      </p>
      <Link
        to="/"
        className="springy bowlby bg-night shadow-sticker mt-8 rounded-full border-[3px] border-white px-6 pt-3.5 pb-3 text-white"
      >
        Back to base
      </Link>
    </div>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F6F7FA" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#080A0F" />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

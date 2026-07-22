# FocusAir Web

Marketing site for the FocusAir iOS app, styled in the app's "Bold Sky" design language (Bowlby One SC display type, die-cut stickers, bright solid color).

## Tech Stack

- **Runtime**: [Bun](https://bun.sh)
- **Framework**: [TanStack Start](https://tanstack.com/start) (React, fully prerendered static output)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Deployment**: [Vercel](https://vercel.com) (static, `dist/client`)

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
bun run build
```

All four routes are prerendered to static HTML in `dist/client`.

## Deployment

The site is configured for Vercel deployment. Push to `main` to deploy automatically.

## Pages

- `/` - Landing page (hero, feature tour, download CTA)
- `/download` - Boarding-pass download page; auto-redirects to the App Store after 500ms (used as the TikTok/QR link)
- `/terms` - Terms of Service
- `/privacy` - Privacy Policy

## Assets

Screenshots (`public/captures`), sticker art (`public/stickers`), and the device bezel come from the iOS repo's `AppStore/src` pipeline; the app icon is the rendered App Store artwork (App ID 6756526902).

## Contact

support@focusair.app

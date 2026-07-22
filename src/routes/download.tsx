import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { APP_STORE_URL, AppStoreBadge } from "~/components/AppStoreBadge";
import { FABadge } from "~/components/FABadge";
import { Sticker } from "~/components/Sticker";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [{ title: "Download FocusAir" }],
  }),
  component: DownloadPage,
});

function DownloadPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = APP_STORE_URL;
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="sky relative flex min-h-dvh flex-col items-center justify-center overflow-clip px-5 py-10">
      <Sticker
        name="af1"
        className="absolute top-[6%] -left-10 w-52 -rotate-[8deg] sm:left-[4%] sm:w-72"
      />
      <Sticker name="cloud-2" bare className="absolute top-[12%] right-[8%] w-28 opacity-90" />
      <Sticker name="cloud-1" bare className="absolute bottom-[8%] left-[10%] w-24 opacity-80" />
      <Sticker
        name="balloon"
        className="absolute right-[6%] bottom-[14%] hidden w-20 rotate-[4deg] sm:block"
      />

      <div className="border-outline bg-surface shadow-card mb-8 flex w-full max-w-sm -rotate-[3deg] items-center gap-4 rounded-[24px] border-[1.5px] p-2.5 pr-6">
        <img
          src="/tiktok-icon.png"
          alt=""
          aria-hidden
          width={56}
          height={56}
          className="h-14 w-14 shrink-0 rounded-[22%]"
        />
        <p className="text-ink-2 text-sm">
          On TikTok? Tap <span className="text-ink font-semibold">⋯</span> and choose{" "}
          <span className="text-ink font-semibold">Open in browser</span> to download!
        </p>
      </div>

      <div className="border-outline bg-surface shadow-card relative w-full max-w-sm rounded-[28px] border-[1.5px]">
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between">
            <img
              src="/app-icon.png"
              alt="FocusAir app icon"
              width={64}
              height={64}
              className="shadow-sticker h-16 w-16 rounded-[30%]"
            />
            <FABadge tilt={3} className="bg-green text-white">
              Now boarding
            </FABadge>
          </div>
          <p className="bowlby sticker-text text-ink mt-5 text-4xl">FocusAir</p>
          <p className="text-ink-2 mt-2 text-sm">Deep Focus Timer — turn focus into flight.</p>
        </div>
        <div className="border-outline relative border-t-2 border-dashed">
          <div className="sky-notch absolute top-0 -left-3.5 h-6 w-6 -translate-y-1/2 rounded-full" />
          <div className="sky-notch absolute top-0 -right-3.5 h-6 w-6 -translate-y-1/2 rounded-full" />
        </div>
        <div className="p-6 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <PassSlot label="Flight" value="FA204" />
            <PassSlot label="Gate" value="1A" />
            <PassSlot label="Seat" value="1A" />
            <PassSlot label="Destination" value="Focus" />
          </div>
          <div className="mt-7 flex justify-center">
            <AppStoreBadge />
          </div>
        </div>
      </div>
    </div>
  );
}

function PassSlot({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="condensed text-ink-2 text-[10px] font-bold tracking-[0.08em] uppercase">{label}</p>
      <p className="bowlby text-ink mt-1 text-lg">{value}</p>
    </div>
  );
}

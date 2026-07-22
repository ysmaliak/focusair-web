import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";
import { AppStoreBadge } from "~/components/AppStoreBadge";
import { FABadge } from "~/components/FABadge";
import { PhoneFrame } from "~/components/PhoneFrame";
import { Reveal } from "~/components/Reveal";
import { Shell } from "~/components/Shell";
import { Sticker } from "~/components/Sticker";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const AIRPORTS = ["JFK", "LAX", "CDG", "NRT", "LHR", "SFO", "HND", "DXB", "SIN", "FCO", "BCN", "SYD"];

function delay(s: number): CSSProperties {
  return { "--pop-delay": `${s}s` } as CSSProperties;
}

function HomePage() {
  return (
    <Shell>
      <Hero />
      <AirportTicker />
      <div className="mt-12 sm:mt-16">
        <Stage tone="bg-brand text-white" first>
          <StageGrid
            plate={<Plate className="bg-night text-white">Booking</Plate>}
            headline={
              <>
                Book a flight to <span className="text-gold">focus</span>
              </>
            }
            headlineClass="text-white"
            body="Set your home airport, then pick where you're headed: a quick hop for homework, a long-haul for deep work. Search any airport on Earth and turn goals into missions — Rome for exam prep, Tokyo for a coding sprint."
            bodyClass="text-white/90"
            badge={
              <FABadge tilt={-5} className="bg-night slam absolute -top-4 -left-3 z-10 text-white sm:-left-8">
                JFK → Focus
              </FABadge>
            }
            phone={<PhoneFrame src="/captures/boarding-pass.webp" alt="Boarding pass builder screen in FocusAir" />}
            phoneProps={
              <>
                <Sticker name="passport" className="pop absolute -right-8 bottom-24 w-28 rotate-[8deg] sm:-right-18 sm:w-36" style={delay(0.2)} />
                <Sticker name="departures" className="pop absolute -bottom-8 -left-12 w-36 -rotate-[5deg] sm:-left-28 sm:w-52" style={delay(0.3)} />
              </>
            }
            stageProps={
              <Sticker name="tickets" className="pop absolute -top-4 left-[2%] w-36 rotate-[12deg] sm:top-2 sm:w-60" style={delay(0.35)} />
            }
          />
        </Stage>
        <Stage tone="bg-surface text-ink" slant="slant-r">
          <StageGrid
            flip
            plate={<Plate className="bg-cyan text-white">In flight</Plate>}
            headline={
              <>
                Lock in. <span className="text-cyan">Wheels up.</span>
              </>
            }
            headlineClass="text-ink"
            body="While you work, your plane crosses a real map from takeoff to landing, with live multipliers for clean, uninterrupted focus. Live Activity and Dynamic Island keep the countdown on your lock screen."
            bodyClass="text-ink-2"
            badge={
              <FABadge tilt={4} className="bg-cyan slam absolute text-white -top-4 -right-3 z-10 sm:-right-8">
                2.4× streak
              </FABadge>
            }
            phone={
              <PhoneFrame
                src="/captures/hud-light.webp"
                darkSrc="/captures/hud-dark.webp"
                alt="In-flight focus HUD with a plane crossing the map"
              />
            }
            phoneProps={
              <>
                <Sticker name="windsock" className="pop absolute top-24 -right-10 w-28 rotate-[8deg] sm:-right-20 sm:w-36" style={delay(0.2)} />
                <Sticker name="cloud-2" bare className="drifty absolute bottom-44 -left-12 hidden w-32 sm:block" />
              </>
            }
            stageProps={
              <Sticker name="b737-top" className="pop absolute right-[3%] -bottom-8 w-40 -rotate-[24deg] sm:w-56" style={delay(0.3)} />
            }
          />
        </Stage>
        <Stage tone="bg-night text-white" slant="slant-l">
          <StageGrid
            plate={<Plate className="bg-red text-white">Airplane Mode</Plate>}
            headline={
              <>
                Distractions? <span className="text-red">Grounded.</span>
              </>
            }
            headlineClass="text-white"
            body="Airplane Mode is free for everyone. Put social media, games, and doomscrolling on your no-fly list, and FocusAir blocks them with Apple's Screen Time controls until you land. Your session is protected, not just timed."
            bodyClass="text-white/85"
            badge={
              <FABadge tilt={-4} className="bg-red slam absolute -top-4 -left-3 z-10 text-white sm:-left-8">
                No-fly list
              </FABadge>
            }
            phone={<PhoneFrame src="/captures/airplane-mode.webp" alt="Airplane Mode screen with a no-fly list of blocked apps" />}
            phoneProps={
              <Sticker name="no-fly-list" className="pop absolute top-24 -left-12 w-36 -rotate-[8deg] sm:-left-28 sm:w-52" style={delay(0.2)} />
            }
            stageProps={
              <Sticker name="control-tower" className="pop absolute -bottom-10 left-[2%] w-40 rotate-[6deg] sm:w-60" style={delay(0.3)} />
            }
          />
        </Stage>
        <Stage tone="bg-sun text-ink-dark" slant="slant-r">
          <StageGrid
            flip
            plate={<Plate className="bg-night text-white">Rewards</Plate>}
            headline={
              <>
                Land it.{" "}
                <span className="text-white [text-shadow:0_2px_10px_rgba(10,20,40,0.3)]">
                  Loot it.
                </span>
              </>
            }
            headlineClass="text-ink-dark"
            body="Every flight banks XP and a Focus Score. Wheels down means loot: die-cut stickers to slap on your landing postcard, achievements for your collection, and progress toward your next rank."
            bodyClass="text-ink-dark/80"
            badge={
              <FABadge tilt={5} className="bg-green slam absolute text-white -top-4 -right-3 z-10 sm:-right-8">
                +3,400 XP
              </FABadge>
            }
            phone={<PhoneFrame src="/captures/wheels-down.webp" alt="Wheels-down landing celebration with sticker loot" />}
            phoneProps={
              <>
                <Sticker name="snow-globe" className="pop absolute top-32 -right-9 w-32 rotate-[8deg] sm:-right-18 sm:w-36" style={delay(0.2)} />
                <Sticker name="maneki-neko" className="pop absolute -right-7 -bottom-6 w-32 -rotate-[5deg] sm:-right-16 sm:w-36" style={delay(0.3)} />
              </>
            }
            stageProps={
              <>
                <Sticker name="safe" className="pop absolute -bottom-12 left-[2%] w-44 -rotate-[8deg] sm:w-64" style={delay(0.35)} />
                <Sticker name="party-popper" className="pop absolute top-6 right-[2%] w-36 rotate-[14deg] sm:w-44" style={delay(0.45)} />
              </>
            }
          />
        </Stage>
        <Stage tone="bg-surface text-ink" slant="slant-l">
          <StageGrid
            plate={<Plate className="bg-dusk text-white">Progression</Plate>}
            headline={
              <>
                Paper plane to <span className="text-dusk">Seat 1A</span>
              </>
            }
            headlineClass="text-ink"
            body="Rank up from Paper Plane through Window Seat, Frequent Flyer, and Jet Setter to Seat 1A — then keep going: the ladder tops out at Sky Legend. Keep your streak alive and fill the daily fuel gauge."
            bodyClass="text-ink-2"
            badge={
              <FABadge tilt={-4} className="bg-dusk slam absolute -top-4 -left-3 z-10 text-white sm:-left-8">
                Seat 1A
              </FABadge>
            }
            phone={<PhoneFrame src="/captures/rank-ladder.webp" alt="Rank ladder from Paper Plane to Sky Legend" />}
            phoneProps={
              <>
                <Sticker name="champagne" className="pop absolute top-28 -right-7 w-26 rotate-[10deg] sm:-right-16 sm:w-32" style={delay(0.2)} />
                <Sticker name="neck-pillow" className="pop absolute bottom-32 -left-12 w-36 -rotate-[8deg] sm:-left-24 sm:w-44" style={delay(0.3)} />
              </>
            }
            stageProps={
              <Sticker name="model-airplane" className="pop absolute right-[2%] -bottom-10 w-40 rotate-[8deg] sm:w-60" style={delay(0.35)} />
            }
          />
        </Stage>
        <HangarStage />
        <Stage tone="bg-surface text-ink" slant="slant-l">
          <StageGrid
            flip
            plate={<Plate className="bg-teal text-white">World tours</Plate>}
            headline={
              <>
                Tour the <span className="text-teal">world</span>
              </>
            }
            headlineClass="text-ink"
            body="Multi-stop tours chain your sessions into adventures. Hop across US cities or sprint through world capitals, and stamp every stop before the clock runs out."
            bodyClass="text-ink-2"
            badge={
              <FABadge tilt={5} className="bg-pink slam absolute -top-4 -right-3 z-10 text-white sm:-right-8">
                Stamped!
              </FABadge>
            }
            phone={<PhoneFrame src="/captures/tours.webp" alt="World tours map with multi-stop itineraries" />}
            phoneProps={
              <>
                <Sticker name="torii" className="pop absolute top-28 -left-10 w-30 -rotate-[8deg] sm:-left-20 sm:w-36" style={delay(0.2)} />
                <Sticker name="pyramid" className="pop absolute top-60 -right-10 w-30 rotate-[6deg] sm:-right-20 sm:w-36" style={delay(0.3)} />
              </>
            }
            stageProps={
              <>
                <Sticker name="eiffel" className="pop absolute -bottom-8 left-[6%] w-28 rotate-[4deg] sm:w-36" style={delay(0.35)} />
                <Sticker name="golden-gate" className="pop absolute right-[1%] -bottom-12 w-48 -rotate-[4deg] sm:w-72" style={delay(0.45)} />
                <Sticker name="big-ben" className="pop absolute top-8 right-[4%] hidden w-28 rotate-[8deg] sm:block" style={delay(0.55)} />
              </>
            }
          />
        </Stage>
        <FinalCta />
      </div>
    </Shell>
  );
}

function Hero() {
  return (
    <section className="sky relative overflow-clip pt-28 pb-16 text-white sm:pt-36 sm:pb-24">
      <Sticker name="cloud-1" bare className="drifty absolute top-[26%] left-[4%] hidden w-28 opacity-90 sm:block sm:w-40" />
      <Sticker name="cloud-2" bare className="drifty absolute top-[10%] right-[6%] w-28 opacity-90 sm:w-48" style={{ animationDelay: "-6s" }} />
      <Sticker name="cloud-3" bare className="drifty absolute bottom-[24%] left-[10%] hidden w-28 opacity-80 md:block" style={{ animationDelay: "-11s" }} />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <p className="bowlby sticker-text text-night hero-rise text-[clamp(2.1rem,6vw,3.6rem)]">
          FocusAir
        </p>
        <h1
          className="bowlby hero-rise mt-6 text-[clamp(2.6rem,8vw,5.4rem)] leading-[1.03]"
          style={{ "--rise-delay": "0.08s" } as CSSProperties}
        >
          Turn focus into <span className="text-gold">flight</span>
        </h1>
        <p
          className="hero-rise mx-auto mt-6 max-w-xl text-base text-white/90 sm:text-lg"
          style={{ "--rise-delay": "0.16s" } as CSSProperties}
        >
          Pick a destination, board, and lock in — while you study, write, or code, your plane
          crosses a real map from takeoff to landing. Land it, loot it, level up.
        </p>
        <div
          className="hero-rise mt-9 flex justify-center"
          style={{ "--rise-delay": "0.24s" } as CSSProperties}
        >
          <AppStoreBadge />
        </div>
      </div>
      <div
        className="hero-rise relative mx-auto mt-14 w-[min(80vw,380px)] sm:mt-16"
        style={{ "--rise-delay": "0.3s" } as CSSProperties}
      >
        <Sticker
          name="b737-side"
          className="floaty absolute top-4 -left-36 z-10 w-64 -rotate-[6deg] sm:-top-2 sm:-left-[30rem] sm:w-[28rem]"
        />
        <FABadge
          tilt={-7}
          className="bg-night hero-slam absolute top-36 -right-12 z-20 text-white sm:top-44 sm:-right-36"
        >
          Phone down. Wings up.
        </FABadge>
        <Sticker
          name="balloon"
          className="floaty absolute -top-10 -right-16 w-28 sm:-right-40 sm:w-32"
          style={{ animationDelay: "-3s" }}
        />
        <Sticker name="suitcase" className="absolute bottom-40 -left-32 hidden w-32 -rotate-[8deg] md:block" />
        <Sticker name="tickets" className="absolute -right-36 bottom-48 hidden w-36 rotate-[8deg] md:block" />
        <PhoneFrame src="/captures/home.webp" alt="FocusAir home screen with the flight map" eager />
      </div>
    </section>
  );
}

function AirportTicker() {
  return (
    <div className="mt-14 overflow-clip py-2 sm:mt-16" aria-hidden>
      <div className="bg-sunken mx-[-2%] w-[104%] -rotate-1 overflow-clip py-5 sm:py-6">
        <div className="marquee-track items-center gap-14 px-5">
          {[...AIRPORTS, ...AIRPORTS, ...AIRPORTS, ...AIRPORTS].map((code, i) => (
            <span key={i} className="bowlby text-ink-2/60 flex items-center gap-14 text-2xl whitespace-nowrap sm:text-3xl">
              {code}
              <img
                src="/stickers/b737-top.webp"
                alt=""
                className="h-10 w-10 rotate-90 object-contain sm:h-12 sm:w-12"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stage({
  tone,
  slant,
  first = false,
  children,
}: {
  tone: string;
  slant?: "slant-l" | "slant-r";
  first?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className={`stage relative overflow-clip ${tone} ${slant ?? ""} ${first ? "pt-20 sm:pt-24" : ""} pb-24 sm:pb-32`}
    >
      {children}
    </section>
  );
}

function Plate({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={`plate bowlby rounded-md px-4 pt-2.5 pb-2 text-sm tracking-wide ${className ?? ""}`}>
      <span>{children}</span>
    </span>
  );
}

function StageGrid({
  plate,
  headline,
  headlineClass,
  body,
  bodyClass,
  badge,
  phone,
  phoneProps,
  stageProps,
  flip = false,
}: {
  plate: ReactNode;
  headline: ReactNode;
  headlineClass: string;
  body: string;
  bodyClass: string;
  badge: ReactNode;
  phone: ReactNode;
  phoneProps?: ReactNode;
  stageProps?: ReactNode;
  flip?: boolean;
}) {
  return (
    <Reveal>
      {stageProps}
      <div className="rise relative mx-auto grid max-w-6xl items-center gap-14 px-6 sm:px-8 md:grid-cols-2 md:gap-20">
        <div className={flip ? "md:order-2" : ""}>
          {plate}
          <h2 className={`bowlby mt-5 text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.04] ${headlineClass}`}>
            {headline}
          </h2>
          <p className={`mt-6 max-w-md text-base leading-relaxed sm:text-lg ${bodyClass}`}>{body}</p>
        </div>
        <div className={flip ? "md:order-1" : ""}>
          <div className="relative mx-auto w-[min(66vw,270px)] sm:w-[360px]">
            {badge}
            {phone}
            {phoneProps}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function HangarStage() {
  return (
    <Stage tone="bg-navy text-white" slant="slant-r">
      <Reveal>
        <p className="bowlby pointer-events-none absolute -right-4 bottom-2 text-[clamp(4rem,13vw,10rem)] leading-none text-white/5 select-none">
          Concorde
        </p>
        <div className="rise relative mx-auto grid max-w-6xl items-center gap-14 px-6 sm:px-8 md:grid-cols-2 md:gap-20">
          <div>
            <Plate className="bg-gold text-white">The hangar</Plate>
            <h2 className="bowlby mt-5 text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.04]">
              Pick your <span className="text-gold">ride</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
              Fly the trusty 737, or earn your way into the whole fleet: the 777, the
              double-decker A380, the supersonic Concorde, even Air Force One — each with its own
              livery, stats, and personality.
            </p>
            <div className="relative mt-10 h-40 sm:h-48">
              <Sticker name="b777" className="pop absolute top-3 left-0 w-32 -rotate-[11deg] sm:w-40" style={delay(0.15)} />
              <Sticker name="a380" className="pop absolute -top-3 left-[20%] w-36 rotate-[7deg] sm:w-44" style={delay(0.25)} />
              <Sticker name="concorde" className="pop absolute top-12 left-[34%] z-10 w-40 -rotate-[15deg] sm:w-60" style={delay(0.3)} />
              <Sticker name="b737" className="pop absolute -top-1 right-[8%] w-32 rotate-[13deg] sm:w-40" style={delay(0.4)} />
              <Sticker name="af1" className="pop absolute top-16 -right-2 hidden w-36 -rotate-[4deg] sm:block sm:w-44" style={delay(0.5)} />
            </div>
          </div>
          <div className="relative mx-auto w-[min(66vw,270px)] sm:w-[360px]">
            <FABadge tilt={4} className="bg-gold slam absolute text-white -top-4 -right-3 z-10 sm:-right-8">
              Go supersonic
            </FABadge>
            <PhoneFrame src="/captures/hangar-concorde.webp" alt="The hangar with the Concorde selected" />
          </div>
        </div>
      </Reveal>
    </Stage>
  );
}

function FinalCta() {
  return (
    <Stage tone="sky text-white" slant="slant-r">
      <Reveal>
        <Sticker name="cloud-1" bare className="drifty absolute top-16 left-[6%] w-32 opacity-90" />
        <Sticker
          name="passenger-airplane"
          className="floaty absolute right-[3%] bottom-6 hidden w-48 -rotate-[8deg] sm:block sm:w-64"
        />
        <Sticker name="globe" className="pop absolute bottom-8 left-[8%] hidden w-36 md:block" style={delay(0.25)} />
        <div className="rise relative mx-auto max-w-3xl px-5 text-center">
          <h2 className="bowlby text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.03]">
            Free to <span className="text-gold">fly</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-white/90 sm:text-lg">
            Full app blocking, daily flights, sticker loot, ranks, and world tours — grab the
            app and see where your focus takes you.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <AppStoreBadge />
            <FABadge tilt={2} className="bg-night slam text-white">
              Gate's open.
            </FABadge>
          </div>
        </div>
      </Reveal>
    </Stage>
  );
}

import { PROCESS } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import { IconCompass, IconHammer, IconKey, IconLayers, IconRuler, IconSpark } from "./icons";

const ICONS = {
  compass: IconCompass,
  ruler: IconRuler,
  layers: IconLayers,
  hammer: IconHammer,
  key: IconKey,
};

export default function Process() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="process" ref={ref} className="relative overflow-hidden bg-pine py-24 text-paper lg:py-36">
      {/* faint blueprint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(241,238,230,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(241,238,230,.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-140px] bottom-[-140px] h-[460px] w-[460px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(195,154,94,0.35), transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="reveal flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-bronze-soft">
              <IconSpark className="h-3.5 w-3.5" /> Our process
            </p>
            <h2
              className="reveal mt-6 font-display uppercase leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 4.2vw, 4rem)", transitionDelay: "90ms" }}
            >
              Five steps. Zero chaos.
            </h2>
          </div>
          <p className="reveal max-w-sm text-[15px] leading-relaxed text-paper/60" style={{ transitionDelay: "180ms" }}>
            A typical journey runs ten to sixteen weeks from the first meeting to
            handover — shorter for compact apartments, longer for full houses.
          </p>
        </div>

        <ol className="relative mt-20 grid gap-12 md:grid-cols-5 md:gap-8">
          <span
            aria-hidden
            className="absolute left-0 top-6 hidden h-px w-full bg-paper/15 md:block"
          />
          {PROCESS.map((step, i) => {
            const Icon = ICONS[step.icon];
            return (
              <li key={step.title} className="reveal relative" style={{ transitionDelay: `${i * 110}ms` }}>
                <div className="relative z-10 flex items-center gap-4 md:block">
                  <span className="flex h-12 w-12 items-center justify-center border border-paper/25 bg-pine text-bronze-soft transition-all duration-500 hover:border-bronze-soft hover:bg-bronze-soft hover:text-pine">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-5xl text-paper/15 md:mt-6 md:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl uppercase tracking-wide text-paper">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/55">{step.text}</p>
              </li>
            );
          })}
        </ol>

        <div className="reveal mt-20 flex flex-wrap items-center justify-between gap-6 border border-paper/15 bg-ink/30 px-8 py-7" style={{ transitionDelay: "200ms" }}>
          <p className="font-display text-xl uppercase tracking-wide sm:text-2xl">
            Step one is a conversation, not a commitment.
          </p>
          <a
            href="#contact"
            className="group flex items-center gap-3 bg-bronze-soft px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:bg-paper"
          >
            Book a consultation
            <svg viewBox="0 0 34 14" className="h-3 w-7 stroke-current fill-none transition-transform duration-300 group-hover:translate-x-2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 7h30M24 1.5 31.5 7 24 12.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

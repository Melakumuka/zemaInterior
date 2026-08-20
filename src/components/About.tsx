import { useEffect, useRef, useState } from "react";
import { STATS, STUDIO_IMAGE } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import { IconSpark } from "./icons";

function useCountUp(target: number, run: boolean, duration = 1700) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return value;
}

function Stat({
  value,
  suffix,
  label,
  run,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  run: boolean;
  delay: number;
}) {
  const v = useCountUp(value, run);
  return (
    <div className="reveal border-t border-ink/15 pt-5" style={{ transitionDelay: `${delay}ms` }}>
      <p className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
        {v}
        <span className="text-bronze">{suffix}</span>
      </p>
      <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.22em] text-smoke">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const ref = useReveal<HTMLElement>();
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-paper py-24 lg:py-36">
      {/* ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-[560px] w-[560px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(165,124,66,0.22), transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-180px] bottom-0 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(29,42,34,0.16), transparent 65%)" }}
      />

      <div className="relative mx-auto grid max-w-[1500px] gap-16 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        {/* copy column */}
        <div className="lg:col-span-5">
          <p className="reveal flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-bronze">
            <IconSpark className="h-3.5 w-3.5" /> Design office · Warsaw
          </p>
          <h2
            className="reveal mt-6 font-display uppercase leading-[1.02] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.4rem, 4.2vw, 4rem)", transitionDelay: "90ms" }}
          >
            Where the drawing board meets the building site.
          </h2>
          <p className="reveal mt-8 max-w-md text-[15px] leading-relaxed text-ink/70" style={{ transitionDelay: "180ms" }}>
            Moovin Interiors is a Warsaw architectural studio that refuses to throw
            a concept over the wall. We design the interior, produce its technical
            documentation, and then build it with our own finishing crews — one
            team, one contract, one point of contact from the first sketch to the
            final key.
          </p>
          <p className="reveal mt-5 max-w-md text-[15px] leading-relaxed text-ink/70" style={{ transitionDelay: "240ms" }}>
            That is what we call the <em className="not-italic font-semibold text-bronze">Concierge model</em>:
            architects and site engineers sharing one schedule, one budget and one
            standard of finish — so the space you approved in 3D is the space you
            walk into.
          </p>
          <a
            href="#services"
            className="reveal group mt-9 inline-flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.26em] text-ink transition-colors hover:text-bronze"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="link-line">Explore the concierge model</span>
            <svg viewBox="0 0 34 14" className="h-3 w-8 stroke-current fill-none transition-transform duration-300 group-hover:translate-x-2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 7h30M24 1.5 31.5 7 24 12.5" />
            </svg>
          </a>

          <div ref={statsRef} className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10">
            {STATS.map((s, i) => (
              <Stat key={s.label} {...s} run={run} delay={i * 90} />
            ))}
          </div>
        </div>

        {/* image composition */}
        <div className="relative lg:col-span-7 lg:pl-14">
          <div className="reveal relative ml-6 sm:ml-12" style={{ transitionDelay: "120ms" }}>
            <span
              aria-hidden
              className="absolute -left-6 -top-6 -z-0 h-full w-full border border-bronze/50 sm:-left-12 sm:-top-8"
            />
            <div className="group relative overflow-hidden">
              <img
                src={STUDIO_IMAGE}
                alt="Material samples and sketches in the Moovin Interiors studio"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                loading="lazy"
              />
              <span className="absolute bottom-4 left-4 bg-ink/85 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.3em] text-paper/85 backdrop-blur-sm">
                The studio · ul. Wiejska 11
              </span>
            </div>

            {/* rotating badge */}
            <div className="absolute -bottom-12 -left-6 hidden h-36 w-36 sm:block lg:-left-24">
              <svg viewBox="0 0 120 120" className="spin-slow h-full w-full text-ink">
                <defs>
                  <path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <circle cx="60" cy="60" r="58" className="fill-paper" />
                <circle cx="60" cy="60" r="58" fill="none" stroke="currentColor" strokeOpacity="0.2" />
                <text className="fill-ink text-[9.5px] font-semibold uppercase" style={{ letterSpacing: "2.6px" }}>
                  <textPath href="#circ">from concept to keys · moovin interiors ·</textPath>
                </text>
              </svg>
              <IconSpark className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-bronze" />
            </div>
          </div>

          <div className="reveal absolute -bottom-10 right-0 hidden w-56 border-8 border-paper lg:block xl:w-64" style={{ transitionDelay: "260ms" }}>
            <img
              src="https://image.qwenlm.ai/generated-images/09862f26-af29-41da-b3fb-6ba2b1f46397/_result.png"
              alt="Essence — living room detail"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <p className="bg-ink py-2 text-center text-[9px] uppercase tracking-[0.3em] text-paper/70">
              Project Essence · detail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useCallback, useEffect, useState } from "react";
import type { Project } from "../data/site";
import { IconArrow, IconChevron, IconSpark } from "./icons";

const SLIDE_MS = 6400;

export default function HeroSlider({
  projects,
  onOpen,
}: {
  projects: Project[];
  onOpen: (p: Project) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = projects.length;

  const go = useCallback(
    (dir: 1 | -1) => setIdx((i) => (i + dir + total) % total),
    [total],
  );

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => go(1), SLIDE_MS);
    return () => window.clearInterval(t);
  }, [paused, go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const current = projects[idx];

  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[620px] overflow-hidden bg-ink text-paper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* slides */}
      {projects.map((p, i) => (
        <div
          key={p.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== idx}
        >
          <div className="h-full w-full overflow-hidden">
            <img
              src={p.image}
              alt={`${p.name} — ${p.category}`}
              className={`h-full w-full object-cover ${i === idx ? "kenburns" : ""}`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        </div>
      ))}

      {/* cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

      {/* scroll cue */}
      <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 items-center gap-3 lg:flex lg:left-10">
        <span className="relative block h-20 w-px overflow-hidden bg-paper/25">
          <span className="pulse-dot absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-bronze-soft" />
        </span>
        <span className="text-[10px] uppercase tracking-[0.4em] text-paper/60 [writing-mode:vertical-rl]">
          Scroll
        </span>
      </div>

      {/* slide copy */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-[1500px] px-6 pb-24 lg:px-10 lg:pb-20">
          <div key={idx} className="max-w-3xl">
            <p
              className="title-in mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.34em] text-bronze-soft"
              style={{ animationDelay: "0.05s" }}
            >
              <IconSpark className="h-3.5 w-3.5" />
              {current.type} — {current.location}
            </p>
            <h1
              className="title-in font-display uppercase leading-[0.92] tracking-tight"
              style={{
                animationDelay: "0.15s",
                fontSize: "clamp(3.4rem, 9.5vw, 8.5rem)",
              }}
            >
              {current.name}
            </h1>
            <p
              className="title-in mt-6 max-w-xl text-[15px] leading-relaxed text-paper/70"
              style={{ animationDelay: "0.25s" }}
            >
              {current.description.split(". ")[0]}.
            </p>
            <div className="title-in mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.35s" }}>
              <button
                onClick={() => onOpen(current)}
                className="group flex items-center gap-3 border border-bronze-soft bg-bronze-soft/10 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-bronze-soft transition-all duration-300 hover:bg-bronze-soft hover:text-ink"
              >
                View project
                <IconArrow className="h-3 w-7 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
              <a
                href="#projects"
                className="link-line text-[12px] font-medium uppercase tracking-[0.24em] text-paper/80 hover:text-paper"
              >
                All projects
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* controls */}
      <div className="absolute bottom-24 right-6 z-10 hidden items-center gap-5 md:flex lg:right-10">
        <span className="font-display text-sm tracking-[0.3em] text-paper/80">
          {String(idx + 1).padStart(2, "0")}
          <span className="mx-1.5 text-paper/35">/</span>
          <span className="text-paper/45">{String(total).padStart(2, "0")}</span>
        </span>
        <button
          onClick={() => go(-1)}
          aria-label="Previous project"
          className="flex h-12 w-12 items-center justify-center border border-paper/30 text-paper transition-all duration-300 hover:border-bronze-soft hover:bg-bronze-soft hover:text-ink"
        >
          <IconChevron className="h-3.5 w-3.5 rotate-180" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next project"
          className="flex h-12 w-12 items-center justify-center border border-paper/30 text-paper transition-all duration-300 hover:border-bronze-soft hover:bg-bronze-soft hover:text-ink"
        >
          <IconChevron className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* progress */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-[3px] bg-paper/15">
        <div
          key={`p-${idx}-${paused ? "p" : "r"}`}
          className={`h-full bg-bronze-soft ${paused ? "progress-run [animation-play-state:paused]" : "progress-run"}`}
        />
      </div>

      {/* slide index strip */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 md:flex">
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setIdx(i)}
            aria-label={`Go to ${p.name}`}
            className={`h-[3px] transition-all duration-500 ${
              i === idx ? "w-10 bg-bronze-soft" : "w-5 bg-paper/30 hover:bg-paper/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

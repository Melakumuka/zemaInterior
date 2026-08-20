import { useEffect } from "react";
import type { Project } from "../data/site";
import { IconChevron, IconClose, IconSpark } from "./icons";

/* ---- indicative floor-plan line drawings (three variants) ---- */
function FloorPlan({ variant }: { variant: number }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
  };
  return (
    <svg viewBox="0 0 400 250" className="h-auto w-full text-ink/70" role="img" aria-label="Indicative floor plan">
      {variant % 3 === 0 && (
        <g {...common}>
          <rect x="20" y="20" width="360" height="210" />
          <path d="M170 20v120M170 140h210M20 140h90M110 90v140" />
          <path d="M170 140a40 40 0 0 1 40-40" strokeDasharray="4 4" />
          <path d="M110 90a34 34 0 0 1 34 34" strokeDasharray="4 4" />
          <rect x="196" y="44" width="86" height="14" fill="currentColor" opacity="0.25" stroke="none" />
          <rect x="40" y="166" width="50" height="66" fill="currentColor" opacity="0.15" stroke="none" />
          <text x="272" y="92" fontSize="10" letterSpacing="2.5" fill="currentColor" stroke="none">LIVING</text>
          <text x="48" y="56" fontSize="10" letterSpacing="2.5" fill="currentColor" stroke="none">KITCHEN</text>
          <text x="42" y="196" fontSize="10" letterSpacing="2.5" fill="currentColor" stroke="none">BATH</text>
          <text x="128" y="205" fontSize="10" letterSpacing="2.5" fill="currentColor" stroke="none">SLEEP</text>
          <path d="M20 238h120M20 233v10M140 233v10" />
          <text x="60" y="228" fontSize="9" fill="currentColor" stroke="none">6.4 m</text>
        </g>
      )}
      {variant % 3 === 1 && (
        <g {...common}>
          <rect x="20" y="30" width="360" height="190" />
          <path d="M140 30v190M260 30v110M140 140h240" />
          <path d="M140 84a30 30 0 0 1 30 30" strokeDasharray="4 4" />
          <path d="M260 140a28 28 0 0 0-28-28" strokeDasharray="4 4" />
          <circle cx="80" cy="160" r="26" fill="currentColor" opacity="0.12" stroke="none" />
          <rect x="170" y="170" width="70" height="34" fill="currentColor" opacity="0.2" stroke="none" />
          <text x="52" y="80" fontSize="10" letterSpacing="2.5" fill="currentColor" stroke="none">LIVING</text>
          <text x="176" y="80" fontSize="10" letterSpacing="2.5" fill="currentColor" stroke="none">KITCHEN</text>
          <text x="288" y="80" fontSize="10" letterSpacing="2.5" fill="currentColor" stroke="none">STUDY</text>
          <text x="290" y="190" fontSize="10" letterSpacing="2.5" fill="currentColor" stroke="none">SLEEP</text>
          <path d="M20 12h160M20 7v10M180 7v10" />
          <text x="80" y="26" fontSize="9" fill="currentColor" stroke="none">8.2 m</text>
        </g>
      )}
      {variant % 3 === 2 && (
        <g {...common}>
          <rect x="30" y="20" width="340" height="210" />
          <path d="M30 130h130M160 20v210M260 130h110M260 130v100" />
          <path d="M160 130a36 36 0 0 1-36-36" strokeDasharray="4 4" />
          <rect x="60" y="48" width="66" height="14" fill="currentColor" opacity="0.25" stroke="none" />
          <circle cx="310" cy="70" r="22" fill="currentColor" opacity="0.12" stroke="none" />
          <rect x="186" y="180" width="52" height="32" fill="currentColor" opacity="0.15" stroke="none" />
          <text x="66" y="100" fontSize="10" letterSpacing="2.5" fill="currentColor" stroke="none">KITCHEN</text>
          <text x="62" y="190" fontSize="10" letterSpacing="2.5" fill="currentColor" stroke="none">LIVING</text>
          <text x="288" y="100" fontSize="10" letterSpacing="2.5" fill="currentColor" stroke="none">BATH</text>
          <text x="186" y="76" fontSize="10" letterSpacing="2.5" fill="currentColor" stroke="none">SLEEP</text>
          <path d="M378 20v110M373 20h10M373 130h10" />
          <text x="352" y="160" fontSize="9" fill="currentColor" stroke="none">5.6 m</text>
        </g>
      )}
    </svg>
  );
}

export default function ProjectModal({
  project,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true" aria-label={`Project ${project.name}`}>
      <button aria-label="Close project" onClick={onClose} className="absolute inset-0 cursor-zoom-out bg-ink/85 backdrop-blur-sm" />

      <div className="title-in relative grid h-[92vh] w-full max-w-6xl overflow-hidden bg-paper shadow-2xl lg:grid-cols-[1.15fr_1fr]">
        {/* image side */}
        <div className="relative hidden overflow-hidden lg:block">
          <img key={project.id} src={project.image} alt={project.name} className="kenburns h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/85 to-transparent p-6 text-paper">
            <span className="font-display text-sm tracking-[0.3em]">
              {String(index + 1).padStart(2, "0")} <span className="text-paper/40">/ {String(total).padStart(2, "0")}</span>
            </span>
            <div className="flex gap-2">
              <button onClick={onPrev} aria-label="Previous project" className="flex h-11 w-11 items-center justify-center border border-paper/40 transition-all hover:border-bronze-soft hover:bg-bronze-soft hover:text-ink">
                <IconChevron className="h-3 w-3 rotate-180" />
              </button>
              <button onClick={onNext} aria-label="Next project" className="flex h-11 w-11 items-center justify-center border border-paper/40 transition-all hover:border-bronze-soft hover:bg-bronze-soft hover:text-ink">
                <IconChevron className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* detail side */}
        <div className="relative flex h-full flex-col overflow-y-auto">
          <div className="flex items-start justify-between gap-4 p-6 sm:p-9">
            <div>
              <p className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-bronze">
                <IconSpark className="h-3 w-3" /> {project.type} · {project.category}
              </p>
              <h3 className="mt-4 font-display uppercase leading-none tracking-tight text-ink" style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}>
                {project.name}
              </h3>
            </div>
            <button onClick={onClose} aria-label="Close" className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink/25 text-ink transition-colors hover:border-bronze hover:bg-bronze hover:text-paper">
              <IconClose className="h-4 w-4" />
            </button>
          </div>

          {/* mobile image */}
          <div className="mx-6 mb-6 overflow-hidden lg:hidden">
            <img src={project.image} alt={project.name} className="aspect-[16/10] w-full object-cover" />
          </div>

          <div className="px-6 sm:px-9">
            <p className="text-[15px] leading-relaxed text-ink/75">{project.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-ink/12 py-6">
              {[
                ["Location", project.location],
                ["Area", project.area],
                ["Year", project.year],
                ["Status", project.status],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.26em] text-smoke">{k}</dt>
                  <dd className="mt-1.5 font-display text-lg text-ink">{v}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.26em] text-smoke">Scope</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.scope.map((s) => (
                <li key={s} className="border border-ink/20 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-ink/70">
                  {s}
                </li>
              ))}
            </ul>

            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.26em] text-smoke">Palette & materials</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.materials.map((m) => (
                <li key={m} className="bg-bone px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-ink/70">
                  {m}
                </li>
              ))}
            </ul>

            <div className="mt-8 border border-ink/15 bg-bone/60 p-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-smoke">Indicative floor plan</p>
                <span className="text-[10px] uppercase tracking-[0.2em] text-bronze">1 : 75</span>
              </div>
              <FloorPlan variant={index} />
            </div>
          </div>

          <div className="mt-auto p-6 sm:p-9">
            <a
              href="#contact"
              onClick={onClose}
              className="group flex w-full items-center justify-center gap-3 bg-ink px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-paper transition-colors duration-300 hover:bg-bronze"
            >
              Discuss a similar project
              <svg viewBox="0 0 34 14" className="h-3 w-7 stroke-current fill-none transition-transform duration-300 group-hover:translate-x-2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 7h30M24 1.5 31.5 7 24 12.5" />
              </svg>
            </a>

            {/* mobile nav */}
            <div className="mt-4 flex gap-2 lg:hidden">
              <button onClick={onPrev} className="flex flex-1 items-center justify-center gap-2 border border-ink/25 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-bronze hover:text-bronze">
                <IconChevron className="h-3 w-3 rotate-180" /> Prev
              </button>
              <button onClick={onNext} className="flex flex-1 items-center justify-center gap-2 border border-ink/25 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-bronze hover:text-bronze">
                Next <IconChevron className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

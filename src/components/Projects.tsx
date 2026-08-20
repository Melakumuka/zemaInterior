import type { Project } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import { useToast } from "./Toast";
import { IconArrowUpRight, IconSpark } from "./icons";

const HEIGHTS = [
  "h-[420px]",
  "h-[560px]",
  "h-[500px]",
  "h-[400px]",
  "h-[540px]",
  "h-[440px]",
  "h-[420px]",
  "h-[580px]",
  "h-[480px]",
];

export default function Projects({
  projects,
  onOpen,
}: {
  projects: Project[];
  onOpen: (p: Project) => void;
}) {
  const ref = useReveal<HTMLElement>();
  const toast = useToast();

  return (
    <section id="projects" ref={ref} className="relative bg-bone py-24 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="reveal flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-bronze">
              <IconSpark className="h-3.5 w-3.5" /> Portfolio
            </p>
            <h2
              className="reveal mt-6 font-display uppercase leading-[1.02] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.4rem, 4.2vw, 4rem)", transitionDelay: "90ms" }}
            >
              Selected interiors.
            </h2>
          </div>
          <p className="reveal text-[12px] font-medium uppercase tracking-[0.26em] text-smoke" style={{ transitionDelay: "160ms" }}>
            {projects.length} projects · 2022 — 2026
          </p>
        </div>

        <div className="mt-16 columns-1 gap-6 md:columns-2 xl:columns-3">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="reveal group relative mb-6 cursor-pointer break-inside-avoid overflow-hidden bg-ink"
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              onClick={() => onOpen(p)}
            >
              <div className={`${HEIGHTS[i % HEIGHTS.length]} overflow-hidden`}>
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.category}`}
                  className="h-full w-full object-cover opacity-95 transition-all duration-[1200ms] ease-out group-hover:scale-[1.07] group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              {/* index */}
              <span className="absolute left-5 top-5 font-display text-sm tracking-[0.3em] text-paper/85 mix-blend-difference">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* hover veil */}
              <span className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              {/* copy */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-paper">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-bronze-soft">
                  {p.category}
                </p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <h3 className="font-display text-3xl uppercase leading-none tracking-wide transition-transform duration-500 group-hover:-translate-y-1 sm:text-4xl">
                    {p.name}
                  </h3>
                  <span className="flex h-11 w-11 shrink-0 translate-y-3 items-center justify-center border border-paper/40 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:border-bronze-soft group-hover:bg-bronze-soft group-hover:text-ink">
                    <IconArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 max-h-0 overflow-hidden text-sm text-paper/65 transition-all duration-500 group-hover:max-h-12">
                  {p.area} · {p.year} · View project
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-14 flex justify-center" style={{ transitionDelay: "150ms" }}>
          <button
            onClick={() =>
              toast("That's the whole current portfolio — nine stories, zero filler.")
            }
            className="group flex items-center gap-4 border border-ink/30 px-9 py-5 text-[12px] font-semibold uppercase tracking-[0.26em] text-ink transition-all duration-300 hover:border-bronze hover:bg-bronze hover:text-paper"
          >
            See more projects
            <svg viewBox="0 0 34 14" className="h-3 w-8 stroke-current fill-none transition-transform duration-300 group-hover:translate-x-2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 7h30M24 1.5 31.5 7 24 12.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { SERVICES } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import { IconPlus, IconSpark } from "./icons";

export default function Services() {
  const ref = useReveal<HTMLElement>();
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="services" ref={ref} className="relative overflow-hidden bg-ink py-24 text-paper lg:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-[-160px] h-[480px] w-[480px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(165,124,66,0.28), transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="reveal flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-bronze-soft">
              <IconSpark className="h-3.5 w-3.5" /> What we do
            </p>
            <h2
              className="reveal mt-6 font-display uppercase leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 4.2vw, 4rem)", transitionDelay: "90ms" }}
            >
              One team, every step of the way.
            </h2>
          </div>
          <p className="reveal max-w-sm text-[15px] leading-relaxed text-paper/60" style={{ transitionDelay: "180ms" }}>
            Five disciplines under one roof. Pick the whole journey or start with a
            single step — the standard stays the same.
          </p>
        </div>

        <div className="mt-16 border-t border-paper/12">
          {SERVICES.map((s, i) => {
            const open = openIdx === i;
            return (
              <div key={s.title} className="reveal border-b border-paper/12" style={{ transitionDelay: `${i * 70}ms` }}>
                <button
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  aria-expanded={open}
                  className={`group flex w-full items-center gap-6 px-2 py-7 text-left transition-colors duration-500 sm:gap-10 sm:px-6 ${
                    open ? "bg-paper/[0.06]" : "hover:bg-paper/[0.04]"
                  }`}
                >
                  <span className={`font-display text-sm tracking-[0.3em] transition-colors ${open ? "text-bronze-soft" : "text-paper/40"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 font-display uppercase tracking-wide transition-all duration-500 ${
                      open ? "text-bronze-soft" : "text-paper group-hover:translate-x-2 group-hover:text-paper"
                    }`}
                    style={{ fontSize: "clamp(1.35rem, 2.6vw, 2.1rem)" }}
                  >
                    {s.title}
                  </span>
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center border transition-all duration-500 ${
                      open
                        ? "rotate-45 border-bronze-soft text-bronze-soft"
                        : "border-paper/25 text-paper/70 group-hover:border-paper/60"
                    }`}
                  >
                    <IconPlus className="h-3.5 w-3.5" />
                  </span>
                </button>
                <div className={`acc-panel ${open ? "open" : ""}`}>
                  <div>
                    <div className="grid gap-8 px-2 pb-9 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:pl-[calc(2.5rem+3.2rem)]">
                      <p className="max-w-xl text-[15px] leading-relaxed text-paper/65">{s.desc}</p>
                      <ul className="flex flex-wrap content-start gap-2.5">
                        {s.tags.map((t) => (
                          <li
                            key={t}
                            className="border border-paper/20 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-paper/70 transition-colors duration-300 hover:border-bronze-soft hover:text-bronze-soft"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

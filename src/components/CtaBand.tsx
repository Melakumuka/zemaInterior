import { CONTACT } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import { IconSpark } from "./icons";

export default function CtaBand() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-bronze py-20 text-ink lg:py-24">
      <IconSpark
        aria-hidden
        className="spin-slow pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-ink/10"
      />
      <IconSpark
        aria-hidden
        className="pointer-events-none absolute -bottom-20 left-1/4 h-48 w-48 rotate-12 text-paper/20"
      />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <div className="max-w-3xl">
            <p className="reveal text-[11px] font-bold uppercase tracking-[0.34em] text-ink/60">
              Ready when you are
            </p>
            <h2
              className="reveal mt-5 font-display uppercase leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.6rem)", transitionDelay: "90ms" }}
            >
              From the first sketch{" "}
              <span className="relative inline-block">
                to the final key.
                <svg
                  className="draw-line absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 300 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 10 C 60 3, 150 2, 297 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="text-ink/70"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div className="reveal flex flex-col gap-4 sm:flex-row" style={{ transitionDelay: "200ms" }}>
            <a
              href={CONTACT.phoneHref}
              className="group flex items-center justify-center gap-3 border-2 border-ink px-8 py-4 text-[12px] font-bold uppercase tracking-[0.24em] transition-all duration-300 hover:bg-ink hover:text-bronze-soft"
            >
              {CONTACT.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 bg-ink px-8 py-4 text-[12px] font-bold uppercase tracking-[0.24em] text-paper transition-colors duration-300 hover:bg-coal"
            >
              Start your project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

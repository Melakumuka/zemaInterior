import { useEffect, useState } from "react";
import { TESTIMONIALS } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import { IconChevron, IconQuote } from "./icons";

export default function Testimonials() {
  const ref = useReveal<HTMLElement>();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 7000);
    return () => window.clearInterval(t);
  }, []);

  const current = TESTIMONIALS[idx];

  return (
    <section ref={ref} className="relative overflow-hidden bg-coal py-24 text-paper lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-160px] top-[-120px] h-[440px] w-[440px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(165,124,66,0.3), transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <IconQuote className="reveal mx-auto h-9 w-12 text-bronze-soft" />

        <div className="relative mt-8 min-h-[190px] sm:min-h-[160px]">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={t.name}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                i === idx ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
              }`}
              aria-hidden={i !== idx}
            >
              <p className="font-display text-2xl leading-snug tracking-wide text-paper sm:text-3xl">
                “{t.quote}”
              </p>
            </blockquote>
          ))}
        </div>

        <div key={`meta-${idx}`} className="title-in mt-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-bronze-soft">
            {current.name}
          </p>
          <p className="mt-1.5 text-[12px] uppercase tracking-[0.2em] text-paper/45">
            {current.detail}
          </p>
        </div>

        <div className="reveal mt-10 flex items-center justify-center gap-6" style={{ transitionDelay: "150ms" }}>
          <div className="flex gap-2.5">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIdx(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-[3px] transition-all duration-500 ${
                  i === idx ? "w-10 bg-bronze-soft" : "w-5 bg-paper/25 hover:bg-paper/50"
                }`}
              />
            ))}
          </div>
          <span className="h-4 w-px bg-paper/15" aria-hidden />
          <button
            onClick={() => setIdx((idx + TESTIMONIALS.length - 1) % TESTIMONIALS.length)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center border border-paper/25 transition-all hover:border-bronze-soft hover:bg-bronze-soft hover:text-ink"
          >
            <IconChevron className="h-3 w-3 rotate-180" />
          </button>
          <button
            onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center border border-paper/25 transition-all hover:border-bronze-soft hover:bg-bronze-soft hover:text-ink"
          >
            <IconChevron className="h-3 w-3" />
          </button>
        </div>
      </div>
    </section>
  );
}

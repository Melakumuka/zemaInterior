import { useState } from "react";
import { POSTS } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import { useToast } from "./Toast";
import { IconArrowUpRight, IconSpark } from "./icons";

export default function Journal() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(0);
  const toast = useToast();

  return (
    <section id="journal" ref={ref} className="relative bg-paper py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        {/* sticky preview */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="reveal flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-bronze">
              <IconSpark className="h-3.5 w-3.5" /> From the journal
            </p>
            <h2
              className="reveal mt-6 font-display uppercase leading-[1.02] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.2rem, 3.6vw, 3.4rem)", transitionDelay: "90ms" }}
            >
              Notes from the studio floor.
            </h2>
            <p className="reveal mt-6 max-w-sm text-[15px] leading-relaxed text-ink/65" style={{ transitionDelay: "170ms" }}>
              Materials tested on real sites, mistakes we'd rather you didn't make,
              and the occasional love letter to Warsaw tenements.
            </p>

            <div className="reveal relative mt-10 hidden overflow-hidden lg:block" style={{ transitionDelay: "240ms" }}>
              {POSTS.map((post, i) => (
                <img
                  key={post.title}
                  src={post.image}
                  alt=""
                  aria-hidden
                  className={`aspect-[16/11] w-full object-cover transition-all duration-700 ease-out ${
                    i === active ? "opacity-100 scale-100" : "absolute inset-0 opacity-0 scale-[1.04]"
                  }`}
                  loading="lazy"
                />
              ))}
              <span className="absolute bottom-4 left-4 bg-ink/85 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-paper/85 backdrop-blur-sm">
                {POSTS[active].category} · {POSTS[active].read}
              </span>
            </div>
          </div>
        </div>

        {/* article list */}
        <div className="lg:col-span-7">
          <div className="border-t border-ink/15">
            {POSTS.map((post, i) => (
              <article
                key={post.title}
                onMouseEnter={() => setActive(i)}
                onClick={() => toast(`"${post.title}" — full article lives on the studio blog.`)}
                className="reveal group cursor-pointer border-b border-ink/15 px-2 py-8 transition-colors duration-500 hover:bg-bone sm:px-6"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.24em] text-smoke">
                  <span>{post.date}</span>
                  <span className="h-px w-6 bg-bronze" aria-hidden />
                  <span className="text-bronze">{post.category}</span>
                  <span className="ml-auto hidden sm:inline">{post.read}</span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-6">
                  <h3 className="font-display text-2xl uppercase leading-tight tracking-wide text-ink transition-colors duration-300 group-hover:text-bronze sm:text-3xl">
                    {post.title}
                  </h3>
                  <span className="mt-2 flex h-10 w-10 shrink-0 items-center justify-center border border-ink/25 text-ink transition-all duration-500 group-hover:border-bronze group-hover:bg-bronze group-hover:text-paper">
                    <IconArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-45" />
                  </span>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
              </article>
            ))}
          </div>

          <button
            onClick={() => toast("The complete journal is published on moovininteriors.pl — these are highlights.")}
            className="reveal group mt-10 inline-flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.26em] text-ink transition-colors hover:text-bronze"
            style={{ transitionDelay: "120ms" }}
          >
            <span className="link-line">Browse the full blog</span>
            <svg viewBox="0 0 34 14" className="h-3 w-8 stroke-current fill-none transition-transform duration-300 group-hover:translate-x-2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 7h30M24 1.5 31.5 7 24 12.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

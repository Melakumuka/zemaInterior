import { CONTACT, NAV, PROJECTS } from "../data/site";
import type { Project } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import { useToast } from "./Toast";
import { IconFacebook, IconInstagram, IconLinkedin, Logo } from "./icons";

const SOCIAL = [
  { name: "Instagram", url: CONTACT.socials[0].url, Icon: IconInstagram },
  { name: "Facebook", url: CONTACT.socials[1].url, Icon: IconFacebook },
  { name: "LinkedIn", url: CONTACT.socials[2].url, Icon: IconLinkedin },
];

export default function Footer({ onOpen }: { onOpen: (p: Project) => void }) {
  const ref = useReveal<HTMLElement>();
  const toast = useToast();

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-paper/10 bg-ink pt-16 text-paper">
      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="group inline-flex items-center gap-3">
              <Logo className="h-11 w-11 text-bronze-soft transition-transform duration-500 group-hover:rotate-90" />
              <span className="leading-none">
                <span className="block font-display text-2xl tracking-[0.22em]">ZEMA</span>
                <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.3em] text-bronze-soft">
                  Interior &amp; Finishing Works
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/55">
              An Addis Ababa studio combining interior design with turn-key
              finishing works in the Concierge model — one team from the first
              sketch to the final key.
            </p>
            <div className="mt-7 flex items-center gap-4">
              {SOCIAL.map(({ name, url, Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center border border-paper/20 text-paper/65 transition-all duration-300 hover:-translate-y-1 hover:border-bronze-soft hover:text-bronze-soft"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* explore */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-paper/40">Explore</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="link-line text-sm text-paper/70 transition-colors hover:text-bronze-soft">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* projects */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-paper/40">Projects</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {PROJECTS.map((p) => (
                <li key={p.id}>
                  <button onClick={() => onOpen(p)} className="link-line text-sm text-paper/70 transition-colors hover:text-bronze-soft">
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-paper/40">Studio</p>
            <ul className="mt-5 space-y-3 text-sm text-paper/70">
              <li>{CONTACT.address}</li>
              <li>
                <a href={CONTACT.phoneHref} className="link-line transition-colors hover:text-bronze-soft">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="link-line transition-colors hover:text-bronze-soft">
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-paper/45">{CONTACT.hours}</li>
            </ul>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-3 border border-bronze-soft/60 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.24em] text-bronze-soft transition-all duration-300 hover:bg-bronze-soft hover:text-ink"
            >
              Contact form
            </a>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="reveal pointer-events-none mt-16 select-none overflow-hidden" aria-hidden style={{ transitionDelay: "100ms" }}>
          <p className="outline-word -mb-[0.22em] whitespace-nowrap text-center font-display leading-none" style={{ fontSize: "clamp(6rem, 17vw, 17rem)" }}>
            ZEMA
          </p>
        </div>

        <div className="relative border-t border-paper/10 py-7">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-paper/40">
            <p>© 2026 Zema Interior and Finishing Works · Bole, Addis Ababa</p>
            <div className="flex items-center gap-6">
              <button onClick={() => toast("Privacy policy — available on the live site.")} className="link-line transition-colors hover:text-bronze-soft">
                Privacy policy
              </button>
              <button onClick={() => toast("Cookie settings — available on the live site.")} className="link-line transition-colors hover:text-bronze-soft">
                Cookies
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className="flex h-10 w-10 items-center justify-center border border-paper/20 text-paper/70 transition-all duration-300 hover:-translate-y-1 hover:border-bronze-soft hover:text-bronze-soft"
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 -rotate-90 stroke-current" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m4 2 8 6-8 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

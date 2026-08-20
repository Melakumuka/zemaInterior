import { useEffect, useState } from "react";
import { CONTACT, NAV } from "../data/site";
import { IconClose, IconMenu, IconPhone, Logo } from "./icons";
import TopBar from "./TopBar";

export default function Header({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100]">
        <TopBarWrap collapsed={scrolled} />
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "border-b border-paper/10 bg-ink/95 py-3 shadow-lg shadow-ink/40 backdrop-blur-md"
              : "bg-gradient-to-b from-ink/80 via-ink/30 to-transparent py-5"
          }`}
        >
          <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-6 lg:px-10">
            <a href="#home" className="group flex items-center gap-3 text-paper">
              <Logo className="h-10 w-10 text-bronze-soft transition-transform duration-500 group-hover:rotate-90" />
              <span className="leading-none">
                <span className="block font-display text-xl tracking-[0.22em]">MOOVIN</span>
                <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.42em] text-bronze-soft">
                  Interiors
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className={`link-line text-[12px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
                    active === n.id ? "text-bronze-soft" : "text-paper/75 hover:text-paper"
                  }`}
                >
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={CONTACT.phoneHref}
                className="hidden items-center gap-2.5 border border-paper/25 px-4 py-2.5 text-[12px] font-medium tracking-[0.14em] text-paper transition-all duration-300 hover:border-bronze-soft hover:bg-bronze-soft hover:text-ink xl:flex"
              >
                <IconPhone className="h-3.5 w-3.5" />
                {CONTACT.phoneDisplay}
              </a>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="flex h-11 w-11 items-center justify-center border border-paper/25 text-paper transition-colors duration-300 hover:border-bronze-soft hover:text-bronze-soft lg:hidden"
              >
                <IconMenu className="h-4 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* full-screen menu */}
      <div
        className={`fixed inset-0 z-[130] flex flex-col bg-ink text-paper transition-all duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 py-6 lg:px-10">
          <span className="flex items-center gap-3">
            <Logo className="h-10 w-10 text-bronze-soft" />
            <span className="font-display text-xl tracking-[0.22em]">MOOVIN</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center border border-paper/25 transition-colors hover:border-bronze-soft hover:text-bronze-soft"
          >
            <IconClose className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-1 px-6 lg:px-16">
          {NAV.map((n, i) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              style={{ animationDelay: open ? `${0.08 + i * 0.07}s` : "0s" }}
              className={`group flex items-baseline gap-4 border-b border-paper/10 py-3.5 ${
                open ? "title-in" : "opacity-0"
              }`}
            >
              <span className="text-[11px] tracking-[0.3em] text-bronze-soft">
                0{i + 1}
              </span>
              <span className="font-display text-4xl uppercase tracking-wide transition-colors duration-300 group-hover:text-bronze-soft sm:text-5xl">
                {n.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-between gap-4 px-6 pb-8 text-sm text-paper/60 lg:px-16">
          <span>{CONTACT.address}</span>
          <div className="flex items-center gap-6">
            <a href={CONTACT.phoneHref} className="link-line hover:text-bronze-soft">
              {CONTACT.phoneDisplay}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="link-line hover:text-bronze-soft">
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function TopBarWrap({ collapsed }: { collapsed: boolean }) {
  return <TopBar collapsed={collapsed} />;
}

import { useState } from "react";
import type { FormEvent } from "react";
import { CONTACT } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import { useToast } from "./Toast";
import {
  IconCheck,
  IconClock,
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconPin,
  IconSpark,
} from "./icons";

const SOCIAL = [
  { name: "Instagram", url: CONTACT.socials[0].url, Icon: IconInstagram },
  { name: "Facebook", url: CONTACT.socials[1].url, Icon: IconFacebook },
  { name: "LinkedIn", url: CONTACT.socials[2].url, Icon: IconLinkedin },
];

const EMPTY = { name: "", email: "", phone: "", type: "Apartment", message: "" };

export default function Contact() {
  const ref = useReveal<HTMLElement>();
  const toast = useToast();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof EMPTY) => (v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "A valid e-mail helps us reply.";
    if (form.message.trim().length < 10) errs.message = "A few words about the project — at least 10 characters.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      toast("Almost there — two or three fields need attention.");
      return;
    }
    setSent(true);
    toast("Message sent — we reply within one working day.");
  };

  const inputCls = (err?: string) =>
    `w-full border-b bg-transparent py-3 text-[15px] text-paper placeholder:text-paper/35 outline-none transition-colors duration-300 focus:border-bronze-soft ${
      err ? "border-red-400/70" : "border-paper/25"
    }`;

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-ink py-24 text-paper lg:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(165,124,66,0.3), transparent 65%)" }}
      />

      <div className="relative mx-auto grid max-w-[1500px] gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* info column */}
        <div>
          <p className="reveal flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-bronze-soft">
            <IconSpark className="h-3.5 w-3.5" /> Contact
          </p>
          <h2
            className="reveal mt-6 font-display uppercase leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 4.2vw, 4rem)", transitionDelay: "90ms" }}
          >
            Let's plan your interior.
          </h2>
          <p className="reveal mt-6 max-w-md text-[15px] leading-relaxed text-paper/60" style={{ transitionDelay: "170ms" }}>
            Send a message or simply call — the first consultation is free and
            comes with honest advice, whether or not we end up working together.
          </p>

          <ul className="mt-12 space-y-6">
            {[
              { Icon: IconPin, label: "Studio", value: CONTACT.address, href: "" },
              { Icon: IconPhone, label: "Phone", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
              { Icon: IconMail, label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { Icon: IconClock, label: "Hours", value: CONTACT.hours, href: "" },
            ].map(({ Icon, label, value, href }, i) => (
              <li key={label} className="reveal flex items-center gap-5" style={{ transitionDelay: `${220 + i * 70}ms` }}>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-paper/20 text-bronze-soft">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-paper/45">
                    {label}
                  </span>
                  {href ? (
                    <a href={href} className="link-line mt-1 inline-block text-[15px] text-paper transition-colors hover:text-bronze-soft">
                      {value}
                    </a>
                  ) : (
                    <span className="mt-1 block text-[15px] text-paper">{value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="reveal mt-12 flex items-center gap-4" style={{ transitionDelay: "400ms" }}>
            {SOCIAL.map(({ name, url, Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="flex h-11 w-11 items-center justify-center border border-paper/20 text-paper/70 transition-all duration-300 hover:-translate-y-1 hover:border-bronze-soft hover:text-bronze-soft"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <span className="ml-2 text-[11px] uppercase tracking-[0.24em] text-paper/40">
              @zema.interior
            </span>
          </div>

          {/* stylised map */}
          <div className="reveal relative mt-12 hidden overflow-hidden border border-paper/15 lg:block" style={{ transitionDelay: "460ms" }}>
            <svg viewBox="0 0 520 220" className="h-auto w-full text-paper/25" aria-hidden>
              <g stroke="currentColor" strokeWidth="1">
                {[40, 90, 140, 190, 240, 290, 340, 390, 440, 490].map((x) => (
                  <line key={x} x1={x} y1="0" x2={x} y2="220" opacity="0.35" />
                ))}
                {[30, 75, 120, 165].map((y) => (
                  <line key={y} x1="0" y1={y} x2="520" y2={y} opacity="0.35" />
                ))}
                <path d="M0 150 C 120 120, 200 175, 320 130 S 480 90, 520 110" strokeWidth="6" opacity="0.5" />
                <path d="M60 0 C 90 80, 70 140, 110 220" strokeWidth="4" opacity="0.4" />
                <path d="M350 0 C 330 60, 380 120, 360 220" strokeWidth="4" opacity="0.4" />
              </g>
              <g transform="translate(262,118)">
                <circle r="26" fill="rgba(195,154,94,0.15)" className="pulse-dot" />
                <circle r="7" fill="#c39a5e" />
                <circle r="13" fill="none" stroke="#c39a5e" strokeWidth="1.4" />
              </g>
              <text x="262" y="166" textAnchor="middle" fontSize="10" letterSpacing="3" fill="rgba(241,238,230,0.7)">
                BOLE ROAD · ADDIS ABABA
              </text>
            </svg>
          </div>
        </div>

        {/* form column */}
        <div className="reveal border border-paper/15 bg-coal/60 p-7 sm:p-10" style={{ transitionDelay: "200ms" }}>
          {sent ? (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
              <span className="flex h-16 w-16 items-center justify-center border border-bronze-soft text-bronze-soft">
                <IconCheck className="h-6 w-6" />
              </span>
              <h3 className="mt-7 font-display text-3xl uppercase tracking-wide">Thank you, {form.name.split(" ")[0]}.</h3>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-paper/60">
                Your message is on its way to the studio. We reply within one
                working day — usually much sooner.
              </p>
              <button
                onClick={() => {
                  setForm(EMPTY);
                  setSent(false);
                }}
                className="link-line mt-8 text-[12px] font-semibold uppercase tracking-[0.24em] text-bronze-soft"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <h3 className="font-display text-2xl uppercase tracking-wide">Tell us about the space</h3>
              <p className="mt-2 text-sm text-paper/50">Fields marked * are required.</p>

              <div className="mt-8 grid gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="f-name" className="text-[10px] font-semibold uppercase tracking-[0.26em] text-paper/55">
                    Name *
                  </label>
                  <input id="f-name" value={form.name} onChange={(e) => set("name")(e.target.value)} placeholder="Anna Kowalska" className={inputCls(errors.name)} />
                  {errors.name && <p className="mt-2 text-xs text-red-300">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="f-email" className="text-[10px] font-semibold uppercase tracking-[0.26em] text-paper/55">
                    E-mail *
                  </label>
                  <input id="f-email" type="email" value={form.email} onChange={(e) => set("email")(e.target.value)} placeholder="anna@example.com" className={inputCls(errors.email)} />
                  {errors.email && <p className="mt-2 text-xs text-red-300">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="f-phone" className="text-[10px] font-semibold uppercase tracking-[0.26em] text-paper/55">
                    Phone
                  </label>
                  <input id="f-phone" value={form.phone} onChange={(e) => set("phone")(e.target.value)} placeholder="+48 ___ ___ ___" className={inputCls()} />
                </div>
                <div>
                  <label htmlFor="f-type" className="text-[10px] font-semibold uppercase tracking-[0.26em] text-paper/55">
                    Project type
                  </label>
                  <div className="relative">
                    <select
                      id="f-type"
                      value={form.type}
                      onChange={(e) => set("type")(e.target.value)}
                      className="w-full appearance-none border-b border-paper/25 bg-transparent py-3 text-[15px] text-paper outline-none transition-colors duration-300 focus:border-bronze-soft"
                    >
                      {["Apartment", "House", "Penthouse", "Office", "Single room", "Other"].map((t) => (
                        <option key={t} value={t} className="bg-coal text-paper">
                          {t}
                        </option>
                      ))}
                    </select>
                    <svg viewBox="0 0 16 16" className="pointer-events-none absolute right-1 top-1/2 h-3.5 w-3.5 -translate-y-1/2 stroke-paper/60" fill="none" strokeWidth="1.5">
                      <path d="m3 6 5 5 5-5" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <label htmlFor="f-msg" className="text-[10px] font-semibold uppercase tracking-[0.26em] text-paper/55">
                  Message *
                </label>
                <textarea
                  id="f-msg"
                  rows={5}
                  value={form.message}
                  onChange={(e) => set("message")(e.target.value)}
                  placeholder="Location, size, timeline — and what the space should feel like."
                  className={`${inputCls(errors.message)} resize-none`}
                />
                {errors.message && <p className="mt-2 text-xs text-red-300">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="group mt-9 flex w-full items-center justify-center gap-3 bg-bronze-soft py-5 text-[12px] font-bold uppercase tracking-[0.26em] text-ink transition-colors duration-300 hover:bg-paper"
              >
                Send the brief
                <svg viewBox="0 0 34 14" className="h-3 w-7 stroke-current fill-none transition-transform duration-300 group-hover:translate-x-2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 7h30M24 1.5 31.5 7 24 12.5" />
                </svg>
              </button>
              <p className="mt-4 text-center text-[11px] text-paper/40">
                By sending the form you agree to be contacted about your project. No newsletters, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

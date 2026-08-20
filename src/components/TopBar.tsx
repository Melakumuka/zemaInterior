import { CONTACT, LANGUAGES } from "../data/site";
import { useToast } from "./Toast";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconPin,
} from "./icons";

const SOCIAL = [
  { name: "Instagram", url: CONTACT.socials[0].url, Icon: IconInstagram },
  { name: "Facebook", url: CONTACT.socials[1].url, Icon: IconFacebook },
  { name: "LinkedIn", url: CONTACT.socials[2].url, Icon: IconLinkedin },
];

export default function TopBar({ collapsed }: { collapsed: boolean }) {
  const toast = useToast();

  return (
    <div
      className={`hidden overflow-hidden border-b border-paper/10 bg-ink text-[11px] tracking-wider text-paper/70 transition-all duration-500 md:block ${
        collapsed ? "max-h-0 border-b-0 opacity-0" : "max-h-12 opacity-100"
      }`}
    >
      <div className="mx-auto flex h-10 max-w-[1500px] items-center justify-between gap-6 px-6 lg:px-10">
        <div className="flex min-w-0 items-center gap-6">
          <span className="flex items-center gap-2 whitespace-nowrap">
            <IconPin className="h-3.5 w-3.5 text-bronze-soft" />
            <span className="hidden lg:inline">{CONTACT.address}</span>
            <span className="lg:hidden">Addis Ababa, ET</span>
          </span>
          <a
            href={`mailto:${CONTACT.email}`}
            className="link-line flex items-center gap-2 whitespace-nowrap transition-colors hover:text-bronze-soft"
          >
            <IconMail className="h-3.5 w-3.5 text-bronze-soft" />
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.phoneHref}
            className="link-line hidden items-center gap-2 whitespace-nowrap transition-colors hover:text-bronze-soft sm:flex"
          >
            <IconPhone className="h-3.5 w-3.5 text-bronze-soft" />
            {CONTACT.phoneDisplay}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {SOCIAL.map(({ name, url, Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="text-paper/60 transition-all duration-300 hover:-translate-y-0.5 hover:text-bronze-soft"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>

          <span className="h-4 w-px bg-paper/15" aria-hidden />

          <div className="flex items-center gap-2.5">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() =>
                  l.active
                    ? toast("You're already viewing the English version.")
                    : toast(`${l.label} edition is coming soon — this demo is English only.`)
                }
                className={`transition-colors duration-300 ${
                  l.active
                    ? "font-semibold text-bronze-soft"
                    : "text-paper/45 hover:text-paper"
                }`}
                aria-label={`Switch to ${l.label}`}
              >
                {l.code}
              </button>
            ))}
          </div>

          <span className="h-4 w-px bg-paper/15" aria-hidden />

          <a
            href={CONTACT.phoneHref}
            className="link-line whitespace-nowrap text-paper/80 transition-colors hover:text-bronze-soft"
          >
            Call us
          </a>
          <a
            href="#contact"
            className="bg-bronze-soft px-3.5 py-1.5 font-semibold uppercase text-ink transition-colors duration-300 hover:bg-paper"
          >
            Contact form
          </a>
        </div>
      </div>
    </div>
  );
}

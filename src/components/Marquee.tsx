import { MARQUEE_ITEMS } from "../data/site";
import { IconSpark } from "./icons";

export default function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      className="marquee overflow-hidden border-y border-paper/10 bg-ink py-5 text-paper"
      aria-hidden
    >
      <div className="marquee-track flex w-max items-center gap-10">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-10 whitespace-nowrap font-display text-2xl uppercase tracking-[0.18em] text-paper/70"
              >
                {item}
                <IconSpark className="h-4 w-4 text-bronze-soft" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

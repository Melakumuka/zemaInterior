import { useEffect, useRef } from "react";

/**
 * Observes every `.reveal` element inside the referenced container and
 * adds the `in` class once it enters the viewport (with optional stagger
 * provided via inline transition-delay).
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets: Element[] = Array.from(root.querySelectorAll(".reveal"));
    if (root.classList.contains("reveal")) targets.push(root);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}

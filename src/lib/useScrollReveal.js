import { useLayoutEffect } from "react";

// [selector, direction]. Later entries win when an element matches twice.
//  "up"    = slides up from below (default)   "down"  = drops in from the top
//  "left"  = slides in from the left          "right" = slides in from the right
const ITEMS = [
  [".section>.eyebrow", "left"], [".section>div>.eyebrow", "left"],
  [".intro-copy>*", "right"], [".section-heading>p", "right"],
  [".investment-image", "left"], [".investment-copy>*", "right"],
  [".investors.reverse .investment-image", "right"], [".investors.reverse .investment-copy>*", "left"],
  [".newsletter-image", "left"], [".newsletter-copy>*", "right"],
  [".contact-copy>*", "right"],
  [".stats>div", "up"], [".tl-row", "up"], [".tl-year", "left"], [".tl-img", "right"],
  [".responsibility-item", "right"], [".store-buttons", "left"], [".filter-list", "down"],
];
const OFFSET = { left: ["-70px", "0px"], right: ["70px", "0px"], up: ["0px", "40px"], down: ["0px", "-45px"] };

export default function useScrollReveal() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const dirs = new Map();
    ITEMS.forEach(([sel, dir]) => document.querySelectorAll(sel).forEach((el) => dirs.set(el, dir)));
    // elements that animate themselves (text generate / tilt cards) are skipped
    const els = [...dirs.keys()].filter((el) => !el.classList.contains("tg") && !el.classList.contains("tilt"));
    const set = new Set(els);
    els.forEach((el) => {
      el.classList.add("reveal");
      const [rx, ry] = OFFSET[dirs.get(el)];
      el.style.setProperty("--rx", rx);
      el.style.setProperty("--ry", ry);
      const siblings = [...el.parentElement.children].filter((c) => set.has(c));
      el.style.setProperty("--rd", `${Math.min(siblings.indexOf(el), 5) * 90}ms`); // stagger
    });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

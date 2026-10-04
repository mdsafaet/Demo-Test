import { useEffect, useRef, useState } from "react";

// "$1.2B" -> { prefix:"$", target:1.2, decimals:1, comma:false, pad:0, suffix:"B" }
function parse(value) {
  const m = String(value).match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/);
  if (!m) return null;
  const raw = m[2];
  const decimals = (raw.split(".")[1] || "").length;
  return {
    prefix: m[1],
    suffix: m[3],
    target: parseFloat(raw.replace(/,/g, "")),
    decimals,
    comma: raw.includes(","),
    pad: /^0\d/.test(raw) ? raw.length : 0, // keeps "04" as "04"
  };
}

function format(n, p) {
  let out = p.comma
    ? n.toLocaleString("en-US", { minimumFractionDigits: p.decimals, maximumFractionDigits: p.decimals })
    : n.toFixed(p.decimals);
  if (p.pad) out = out.padStart(p.pad, "0");
  return p.prefix + out + p.suffix;
}

/** Counts up from 0 to the number inside `value` ("45+", "$1.2B", "3,200", "100%") when scrolled into view. */
export default function CountUp({ value, duration = 1800, from = 0 }) {
  const p = parse(value);
  const ref = useRef(null);
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [text, setText] = useState(p && !reduced ? format(from, p) : String(value));

  useEffect(() => {
    if (!p || reduced) return;
    const el = ref.current;
    let raf = 0;
    const run = () => {
      const t0 = performance.now();
      const tick = (now) => {
        const k = Math.min(1, (now - t0) / duration);
        const eased = k === 1 ? 1 : 1 - Math.pow(2, -10 * k); // easeOutExpo
        setText(format(from + (p.target - from) * eased, p));
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { run(); io.disconnect(); } },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span ref={ref} className="countup">{text}</span>;
}

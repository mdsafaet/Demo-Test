import { Children, Fragment, cloneElement, isValidElement, useEffect, useRef, useState } from "react";

// Splits every string inside `node` into <span class="tg-word">; keeps <br />, <em> etc. intact.
function split(node, counter) {
  if (typeof node === "string" || typeof node === "number") {
    return String(node).split(/(\s+)/).map((part) => {
      if (!part) return null;
      if (/^\s+$/.test(part)) return " ";
      const i = counter.n++;
      return (
        <span key={i} className="tg-word" style={{ transitionDelay: `${Math.min(i * 45, 1400)}ms` }}>
          {part}
        </span>
      );
    });
  }
  if (isValidElement(node)) {
    if (node.type === Fragment) return Children.toArray(node.props.children).map((c) => split(c, counter));
    if (typeof node.type === "string" && node.type !== "br") {
      return cloneElement(node, undefined, ...Children.toArray(node.props.children).map((c) => split(c, counter)));
    }
  }
  return node; // <br />, components (e.g. TextLink), etc.
}

/**
 * "Text generate" effect: words fade/blur in one after another when scrolled into view.
 * <TextGenerate as="h2" className="x">Hello <em>world</em></TextGenerate>
 */
export default function TextGenerate({ as: Tag = "span", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect(); } },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const counter = { n: 0 };
  return (
    <Tag ref={ref} className={`tg${show ? " in-view" : ""} ${className}`.trim()} {...rest}>
      {Children.toArray(children).map((c) => split(c, counter))}
    </Tag>
  );
}

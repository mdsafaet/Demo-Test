import { useEffect, useRef } from "react";

const REST = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";

/**
 * 3D tilt card. Same inline style as react-parallax-tilt:
 *   will-change: transform; transition: 1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99);
 *   transform: perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
 * <Tilt as="article" className="project-card">...</Tilt>
 */
export default function Tilt({ as: Tag = "div", className = "", max = 8, scale = 1.02, children, ...rest }) {
  const ref = useRef(null);

  // fade the card in the first time it enters the viewport
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("tilt-in"); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const move = (e) => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateX(${(-y * 2 * max).toFixed(2)}deg) rotateY(${(x * 2 * max).toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
  };
  const leave = () => { ref.current.style.transform = REST; };

  return (
    <Tag
      ref={ref}
      className={`tilt ${className}`.trim()}
      style={{ willChange: "transform", transition: "1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99)", transform: REST }}
      onMouseMove={move}
      onMouseLeave={leave}
      {...rest}
    >
      {children}
    </Tag>
  );
}

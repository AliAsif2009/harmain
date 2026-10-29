import { useEffect, useRef } from "react";

/** Silver follow cursor; native pointer remains usable on touch and reduced-motion devices. */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!media.matches) return;
    let targetX = -100, targetY = -100, ringX = -100, ringY = -100;
    let raf = 0;
    const move = (ev: MouseEvent) => {
      targetX = ev.clientX; targetY = ev.clientY;
      if (dot.current) { dot.current.style.transform = `translate3d(${targetX}px,${targetY}px,0)`; dot.current.style.opacity = "1"; }
      if (ring.current) ring.current.style.opacity = "1";
      ring.current?.classList.toggle("is-hovering", !!(ev.target instanceof Element && ev.target.closest("a, button, [role=button], input, select, textarea")));
    };
    const leave = () => { if (dot.current) dot.current.style.opacity = "0"; if (ring.current) ring.current.style.opacity = "0"; };
    const tick = () => {
      ringX += (targetX - ringX) * .17;
      ringY += (targetY - ringY) * .17;
      if (ring.current) ring.current.style.transform = `translate3d(${ringX}px,${ringY}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseout", leave);
    tick();
    return () => { document.removeEventListener("mousemove", move); document.removeEventListener("mouseout", leave); cancelAnimationFrame(raf); };
  }, []);
  return <><div ref={dot} aria-hidden="true" className="custom-cursor-dot" /><div ref={ring} aria-hidden="true" className="custom-cursor-ring" /></>;
}

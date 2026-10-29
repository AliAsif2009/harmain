import { useEffect, useState } from "react";

/** Cover the first render immediately; finish before revealing the page. */
export function OpeningIntro() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    document.body.classList.add("intro-playing");
    const timer = window.setTimeout(() => setShow(false), 3550);
    return () => { window.clearTimeout(timer); document.body.classList.remove("intro-playing"); };
  }, []);
  useEffect(() => { if (!show) document.body.classList.remove("intro-playing"); }, [show]);
  if (!show) return null;
  return (
    <div className="haramain-intro" aria-label="Haramain Royal Fabrics opening animation" role="status">
      <div className="haramain-intro__inner">
        <svg className="haramain-intro__mark" viewBox="0 0 120 120" focusable="false" aria-hidden="true">
          <path d="M22 90 V28 M22 59 H68 M68 28 V90" />
          <path d="M68 90 V28 H90 Q112 28 112 50 Q112 67 90 67 H68" />
          <path d="M88 67 L113 91" />
        </svg>
        <div className="haramain-intro__name">Haramain</div>
        <div className="haramain-intro__sub">ROYAL FABRICS</div>
      </div>
    </div>
  );
}

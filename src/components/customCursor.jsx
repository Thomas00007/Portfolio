import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    // --- move ---
    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // dot leci 1:1 i jest wycentrowany
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    // --- ring lag animation ---
    let rafId = 0;

    const animate = () => {
      const speed = 0.15;
      ringX += (mouseX - ringX) * speed;
      ringY += (mouseY - ringY) * speed;

      // ring: translate + centrowanie + skala z CSS zmiennej
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(var(--ring-scale, 1))`;

      rafId = requestAnimationFrame(animate);
    };
    animate();

    // --- hover (działa dla elementów dodanych później) ---
    const HOVER_SELECTOR = "a, button, .cursor-hoverable";

    const onOver = (e) => {
      const target = e.target.closest?.(HOVER_SELECTOR);
      if (target) document.documentElement.classList.add("cursor-hover");
    };

    const onOut = (e) => {
      const from = e.target.closest?.(HOVER_SELECTOR);
      const to = e.relatedTarget?.closest?.(HOVER_SELECTOR);

      // jeśli wychodzisz z hoverowalnego i nie wchodzisz w inny hoverowalny
      if (from && !to) document.documentElement.classList.remove("cursor-hover");
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);

      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);

      document.documentElement.classList.remove("cursor-hover");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}

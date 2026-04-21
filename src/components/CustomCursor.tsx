"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [mode, setMode] = useState<"default" | "hover" | "view">("default");

  useEffect(() => {
    const touch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(touch);
    if (touch) return;

    document.body.classList.add("custom-cursor-active");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const cursorHint = target.closest<HTMLElement>("[data-cursor]");
      if (cursorHint?.dataset.cursor === "view") {
        setMode("view");
      } else if (target.closest("a, button, [data-cursor='hover']")) {
        setMode("hover");
      } else {
        setMode("default");
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        aria-hidden
        data-mode={mode}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        aria-hidden
        data-mode={mode}
      >
        <span className="cursor-ring-label">{mode === "view" ? "VIEW" : ""}</span>
      </div>
    </>
  );
}

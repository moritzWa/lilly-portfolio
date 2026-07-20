"use client";

import { useEffect, useRef } from "react";

const SNIPPETS = [
  "const",
  "let",
  "=>",
  "useState",
  "useEffect",
  "{}",
  "()",
  "import",
  "export",
  "return",
  "async",
  "await",
  "props",
  "null",
  "===",
  ".map()",
  ".filter()",
  "&&",
  "type",
  "interface",
  "<div>",
  "</div>",
  "className",
  "function",
  "if ()",
  "for ()",
  "true",
  "false",
  "npm run dev",
  "git commit",
  "React",
  "0",
  "1",
];

type Drop = {
  x: number;
  y: number;
  speed: number;
  text: string;
  opacity: number;
  fontSize: number;
};

export default function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let drops: Drop[] = [];

    const randomSnippet = () =>
      SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];

    const makeDrop = (columnX: number, startAbove = false): Drop => ({
      x: columnX,
      y: startAbove
        ? -Math.random() * height
        : Math.random() * height,
      speed: 6 + Math.random() * 10,
      text: randomSnippet(),
      opacity: 0.05 + Math.random() * 0.1,
      fontSize: 11 + Math.random() * 3,
    });

    const setup = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const columnGap = 110;
      const columns = Math.ceil(width / columnGap);
      drops = Array.from({ length: columns }, (_, i) =>
        makeDrop(i * columnGap + Math.random() * 40, true)
      );
    };

    setup();

    let frameId: number;
    let lastTime = 0;

    const render = (time: number) => {
      frameId = requestAnimationFrame(render);
      if (time - lastTime < 33) return; // ~30fps, keep it light
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      for (const drop of drops) {
        ctx.font = `${drop.fontSize}px "Courier New", monospace`;
        ctx.fillStyle = `rgba(238, 100, 162, ${drop.opacity})`;
        ctx.fillText(drop.text, drop.x, drop.y);
        drop.y += drop.speed * 0.05;

        if (drop.y > height + 20) {
          Object.assign(drop, makeDrop(drop.x));
          drop.y = -20;
        }
      }
    };

    if (!prefersReducedMotion) {
      frameId = requestAnimationFrame(render);
    }

    const handleResize = () => setup();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}

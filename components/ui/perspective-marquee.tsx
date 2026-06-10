"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface PerspectiveMarqueeProps {
  items: string[];
  /** Velocidad en píxeles por milisegundo. */
  speed?: number;
  className?: string;
}

export function PerspectiveMarquee({
  items,
  speed = 0.08,
  className,
}: PerspectiveMarqueeProps) {
  const trackRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track || items.length === 0) return;

    let frame = 0;
    let offsetX = 0;
    let lastTime: number | null = null;

    // Hay 3 sets repetidos; el ancho de uno permite el loop infinito.
    const getSetWidth = () => track.scrollWidth / 3;

    const animate = (ts: number) => {
      frame = requestAnimationFrame(animate);
      if (lastTime === null) lastTime = ts;
      const delta = ts - lastTime;
      lastTime = ts;

      const setWidth = getSetWidth();
      offsetX -= speed * delta;
      if (setWidth > 0 && Math.abs(offsetX) >= setWidth) offsetX += setWidth;
      track.style.transform = `translateX(${offsetX}px)`;

      // Blur + opacidad dinámicos según la distancia al centro de la pantalla.
      const center = window.innerWidth / 2;
      const children =
        track.querySelectorAll<HTMLElement>("[data-marquee-item]");
      children.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const dist = Math.abs(center - itemCenter);
        const norm = Math.min(dist / center, 1);
        item.style.filter = `blur(${norm * 7}px)`;
        item.style.opacity = `${1 - norm * 0.45}`;
      });
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [items, speed]);

  // 3 repeticiones para un loop continuo.
  const rendered = [...items, ...items, ...items];

  return (
    <div className={cn("relative w-full overflow-hidden bg-black", className)}>
      <section className="relative flex h-[260px] w-full items-center justify-center overflow-hidden [perspective:1200px]">
        {/* Fade lateral */}
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(90deg, #000000 0%, transparent 18%, transparent 82%, #000000 100%)",
          }}
        />
        {/* Fade vertical */}
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(180deg, #000000 0%, transparent 28%, transparent 72%, #000000 100%)",
          }}
        />

        <div className="flex w-full items-center justify-start [transform:rotateX(8deg)_rotateY(-28deg)] [transform-style:preserve-3d]">
          <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
            {rendered.map((text, i) => (
              <span
                key={i}
                data-marquee-item
                className="inline-block select-none pr-16 text-[clamp(36px,5.5vw,72px)] font-bold tracking-[-0.03em] text-white"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName,
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);
  // id único por instancia para que varios GooeyText no compartan el filtro.
  const filterId = `gooey-${React.useId().replace(/:/g, "")}`;

  React.useEffect(() => {
    const current = text1Ref.current;
    const next = text2Ref.current;
    if (!current || !next || texts.length === 0) return;

    let frame = 0;
    let index = 0;
    let morph = 0; // tiempo transcurrido dentro del morph actual
    let cooldown = cooldownTime; // tiempo restante mostrando la palabra fija
    let lastTime = performance.now();

    // Estado inicial: palabra actual nítida, siguiente oculta.
    current.textContent = texts[index % texts.length];
    next.textContent = texts[(index + 1) % texts.length];

    const showStable = () => {
      current.style.filter = "";
      current.style.opacity = "100%";
      next.style.filter = "";
      next.style.opacity = "0%";
    };

    const applyMorph = (fraction: number) => {
      // `next` entra (de borroso a nítido), `current` sale (de nítido a borroso).
      next.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      next.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const inv = 1 - fraction;
      current.style.filter = `blur(${Math.min(8 / inv - 8, 100)}px)`;
      current.style.opacity = `${Math.pow(inv, 0.4) * 100}%`;
    };

    const animate = (now: number) => {
      frame = requestAnimationFrame(animate);
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      // Fase de espera: palabra estable.
      if (cooldown > 0) {
        cooldown -= dt;
        showStable();
        return;
      }

      // Fase de morph.
      morph += dt;
      const fraction = morph / morphTime;

      if (fraction >= 1) {
        // Morph terminado: la "siguiente" pasa a ser la actual.
        index = (index + 1) % texts.length;
        current.textContent = texts[index % texts.length];
        next.textContent = texts[(index + 1) % texts.length];
        morph = 0;
        cooldown = cooldownTime;
        showStable();
        return;
      }

      applyMorph(fraction);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={cn("relative", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id={filterId}>
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="flex items-center justify-center"
        style={{ filter: `url(#${filterId})` }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute inline-block select-none text-center text-6xl md:text-[60pt]",
            "text-foreground",
            textClassName
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inline-block select-none text-center text-6xl md:text-[60pt]",
            "text-foreground",
            textClassName
          )}
        />
      </div>
    </div>
  );
}

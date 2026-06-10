"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Progreso de scroll de la sección: 0 = arriba del todo, 1 = scroll completo.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Todo arranca en 0 y va "apareciendo" conforme bajas con el scroll.
  const beamWidth = useTransform(scrollYProgress, [0, 0.8], ["0rem", "30rem"]);
  const beamOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const glowWidth = useTransform(scrollYProgress, [0, 0.8], ["0rem", "16rem"]);
  const lineWidth = useTransform(scrollYProgress, [0, 0.8], ["0rem", "30rem"]);
  const haloOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.4]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.7], [60, 0]);

  return (
    // Sección alta para tener recorrido de scroll; el lamp queda "pegado".
    <section
      ref={ref}
      className={cn("relative h-[200vh] w-full bg-black", className)}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md z-0">
        <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
          <motion.div
            style={{
              width: beamWidth,
              opacity: beamOpacity,
              // En Tailwind v4 cambia la composición de `--tw-gradient-stops`,
              // así que escribimos el gradiente cónico explícito. (cyan-500 = #B566FF)
              backgroundImage:
                "conic-gradient(from 70deg at center top, #B566FF, transparent, transparent)",
            }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible text-white"
          >
            <div className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          <motion.div
            style={{
              width: beamWidth,
              opacity: beamOpacity,
              backgroundImage:
                "conic-gradient(from 290deg at center top, transparent, transparent, #B566FF)",
            }}
            className="absolute inset-auto left-1/2 h-56 text-white"
          >
            <div className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
          <motion.div
            style={{ opacity: haloOpacity }}
            className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#B566FF] blur-3xl"
          ></motion.div>
          <motion.div
            style={{ width: glowWidth }}
            className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[#B566FF] blur-2xl"
          ></motion.div>
          <motion.div
            style={{ width: lineWidth }}
            className="absolute inset-auto z-50 h-0.5 -translate-y-[7rem] bg-[#B566FF] "
          ></motion.div>

          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
        </div>

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-50 flex -translate-y-80 flex-col items-center px-5"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

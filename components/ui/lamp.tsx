"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const beamWidth = useTransform(scrollYProgress, [0, 0.85], ["0rem", "30rem"]);
  const beamOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const glowWidth = useTransform(scrollYProgress, [0, 0.85], ["0rem", "16rem"]);
  const lineWidth = useTransform(scrollYProgress, [0, 0.85], ["2rem", "30rem"]);
  const haloOpacity = useTransform(scrollYProgress, [0, 0.55], [0, 0.4]);
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.65], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.2, 0.65], [56, 0]);

  return (
    <section
      ref={ref}
      className={cn("relative h-[170svh] w-full bg-black", className)}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
          <motion.div
            className="absolute inset-auto right-1/2 h-56 overflow-visible text-white"
            style={{
              width: beamWidth,
              opacity: beamOpacity,
              backgroundImage:
                "conic-gradient(from 70deg at center top, #B566FF, transparent, transparent)",
            }}
          >
            <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-black [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>

          <motion.div
            className="absolute inset-auto left-1/2 h-56 text-white"
            style={{
              width: beamWidth,
              opacity: beamOpacity,
              backgroundImage:
                "conic-gradient(from 290deg at center top, transparent, transparent, #B566FF)",
            }}
          >
            <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-black [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>

          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl" />
          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
          <motion.div
            className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#B566FF] blur-3xl"
            style={{ opacity: haloOpacity }}
          />
          <motion.div
            className="absolute inset-auto z-30 h-36 -translate-y-[6rem] rounded-full bg-[#B566FF] blur-2xl"
            style={{ width: glowWidth }}
          />
          <motion.div
            className="absolute inset-auto z-50 h-0.5 -translate-y-[7rem] bg-[#B566FF]"
            style={{ width: lineWidth }}
          />
          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black" />
        </div>

        <motion.div
          className="relative z-50 flex -translate-y-80 flex-col items-center px-5"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

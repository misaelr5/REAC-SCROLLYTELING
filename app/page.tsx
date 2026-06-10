"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { PerspectiveMarquee } from "@/components/ui/perspective-marquee";

const services = ["Marketing", "Desarrollo Web", "Automatizaciones"];

const painPoints = [
  '"No sé cómo aparecer en Google."',
  '"Tengo Instagram pero no me escribe nadie."',
  '"No tengo una web."',
  '"No sé cómo hacer una campaña de marketing."',
  '"No tengo un buen flujo de trabajo."',
  '"Quiero automatizar procesos."',
];

function MarqueeSection() {
  const ref = useRef<HTMLDivElement>(null);
  // Aparición guiada por scroll, igual que el resto de la web.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }}>
      <PerspectiveMarquee items={painPoints} />
    </motion.div>
  );
}

function ScrollHint() {
  const { scrollY } = useScroll();
  // Se desvanece apenas empiezas a bajar.
  const opacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2 text-[#cda3ff]"
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="relative w-full bg-black">
      <ScrollHint />

      {/* Hero con efecto lamp (la aparición la controla el scroll desde LampContainer) */}
      <LampContainer>
        <h2 className="bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text pb-0 pt-2 text-center text-5xl font-semibold leading-none tracking-tight text-transparent md:text-8xl">
          Reac Studio
        </h2>

        <div className="-mt-1 flex h-[48px] w-full items-center justify-center md:-mt-3 md:h-[70px]">
          <GooeyText
            texts={services}
            morphTime={1.8}
            cooldownTime={1.2}
            className="font-semibold"
            textClassName="whitespace-nowrap text-[#b566ff] text-3xl md:text-5xl"
          />
        </div>
      </LampContainer>

      {/* Marquee 3D con frases de dolor del cliente */}
      <MarqueeSection />
    </main>
  );
}

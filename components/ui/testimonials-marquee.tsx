"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Reac Studio rearmó toda nuestra estrategia digital. En tres meses pasamos de no aparecer en Google a recibir consultas todos los días.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    name: "Carlos Méndez",
    role: "Dueño de restaurante",
  },
  {
    text: "La web nueva es rapidísima y convierte muchísimo mejor. Triplicamos las ventas online sin aumentar el gasto en publicidad.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    name: "Laura Sánchez",
    role: "Emprendedora e-commerce",
  },
  {
    text: "Las automatizaciones me devolvieron más de 10 horas por semana. Ahora el equipo se enfoca en lo que de verdad importa.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    name: "Marcos Torres",
    role: "Consultor independiente",
  },
  {
    text: "Teníamos Instagram hace años pero nadie nos escribía. Cambiaron el enfoque y en dos meses llenamos la agenda de la clínica.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    name: "Ana Rodríguez",
    role: "Directora de clínica",
  },
  {
    text: "Profesionalismo total. Entendieron el negocio desde el primer día y entregaron exactamente lo que necesitábamos, sin vueltas.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    name: "Sofía Herrera",
    role: "Gerente de marketing",
  },
  {
    text: "El branding y la identidad visual que crearon elevaron por completo la percepción de la marca. Nos ven como otra empresa.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
    name: "Diego Fernández",
    role: "Fundador de startup",
  },
  {
    text: "Lo que más valoro es la transparencia. Reportes claros, métricas reales y mejoras constantes mes a mes.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
    name: "Javier Morales",
    role: "Director comercial",
  },
  {
    text: "Pasamos de hojas de cálculo caóticas a un sistema que se gestiona solo. La operación nunca estuvo tan ordenada.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    name: "Valentina Cruz",
    role: "Analista de operaciones",
  },
  {
    text: "Nuestra presencia online y las conversiones mejoraron muchísimo. La inversión se recuperó en el primer trimestre.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    name: "Mateo Giménez",
    role: "Responsable de e-commerce",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsMarquee() {
  return (
    <section className="bg-black py-24 relative">
      <div className="container z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <span className="text-[#b566ff] text-xs font-mono tracking-[0.3em] uppercase">
            / Testimonios
          </span>
          <h2 className="bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent text-4xl md:text-5xl font-semibold tracking-tight mt-5 text-center leading-none">
            Lo que dicen de nosotros
          </h2>
          <div className="h-px w-16 bg-[#b566ff]/60 mt-5" />
          <p className="text-center mt-5 text-white/40 text-sm font-light tracking-wide">
            Negocios reales que confiaron en Reac Studio y crecieron.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}

"use client";

import { OfferCarousel, type Offer } from "@/components/ui/offer-carousel";
import { motion } from "framer-motion";

// Datos de ejemplo — reemplazar por proyectos reales más adelante.
const projects: Offer[] = [
  {
    id: 1,
    slug: "bistro-norte",
    imageSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Proyecto de restaurante",
    tag: "Marketing",
    title: "Bistró Norte",
    description: "+340% en reservas con SEO local y campañas.",
    brandLogoSrc: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=80&auto=format&fit=crop",
    brandName: "Bistró Norte",
    promoCode: "Caso de éxito",
    href: "#bistro-norte",
  },
  {
    id: 2,
    slug: "tienda-lumen",
    imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Proyecto e-commerce",
    tag: "Desarrollo Web",
    title: "Tienda Lumen",
    description: "Web nueva que triplicó las ventas online.",
    brandLogoSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=80&auto=format&fit=crop",
    brandName: "Lumen Store",
    promoCode: "Caso de éxito",
    href: "#tienda-lumen",
  },
  {
    id: 3,
    slug: "consultora-vega",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Proyecto de automatización",
    tag: "Automatizaciones",
    title: "Consultora Vega",
    description: "Flujos automáticos: −10h de trabajo manual por semana.",
    brandLogoSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=80&auto=format&fit=crop",
    brandName: "Grupo Vega",
    promoCode: "Caso de éxito",
    href: "#consultora-vega",
  },
  {
    id: 4,
    slug: "clinica-aura",
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Proyecto de clínica",
    tag: "Marketing",
    title: "Clínica Aura",
    description: "Agenda llena en 60 días con una estrategia de redes.",
    brandLogoSrc: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=80&auto=format&fit=crop",
    brandName: "Clínica Aura",
    promoCode: "Caso de éxito",
    href: "#clinica-aura",
  },
  {
    id: 5,
    slug: "estudio-kora",
    imageSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Proyecto de branding",
    tag: "Branding",
    title: "Estudio Kora",
    description: "Identidad visual completa para un relanzamiento.",
    brandLogoSrc: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=80&auto=format&fit=crop",
    brandName: "Kora",
    promoCode: "Caso de éxito",
    href: "#estudio-kora",
  },
];

export function ProjectsSection() {
  return (
    <section id="proyectos" className="bg-black py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-start mb-12"
        >
          <span className="text-[#b566ff] text-xs font-mono tracking-[0.3em] uppercase">
            / Proyectos
          </span>
          <h2 className="bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent text-4xl md:text-5xl font-semibold tracking-tight mt-5 leading-none">
            Casos de éxito
          </h2>
          <div className="h-px w-16 bg-[#b566ff]/60 mt-5" />
          <p className="text-white/40 text-sm font-light tracking-wide mt-5 max-w-md">
            Una muestra del trabajo que hicimos para negocios reales. Deslizá para ver más.
          </p>
        </motion.div>

        <OfferCarousel offers={projects} />
      </div>
    </section>
  );
}

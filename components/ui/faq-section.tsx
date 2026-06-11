"use client";

import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { motion } from "motion/react";

const items = [
  {
    id: "1",
    title: "¿Cuánto tarda un proyecto?",
    content:
      "Depende del alcance. Una landing puede estar lista en 1–2 semanas; una web completa o un sistema de automatizaciones, entre 3 y 6 semanas. Te damos un plazo concreto después del diagnóstico inicial.",
  },
  {
    id: "2",
    title: "¿Trabajan con cualquier rubro?",
    content:
      "Sí. Hemos trabajado con restaurantes, e-commerce, clínicas, consultores y startups. Antes de empezar estudiamos tu negocio y tu competencia para diseñar una estrategia hecha a medida, sin plantillas.",
  },
  {
    id: "3",
    title: "¿Qué incluye el servicio de marketing?",
    content:
      "SEO para aparecer en Google, gestión de contenido en redes, y campañas de pago optimizadas. Todo con reportes claros y métricas reales que medimos y mejoramos mes a mes.",
  },
  {
    id: "4",
    title: "¿Ofrecen mantenimiento después de entregar?",
    content:
      "Sí. Ofrecemos planes de soporte y optimización continua para que tu web, tus campañas y tus automatizaciones sigan funcionando y escalando con el tiempo.",
  },
  {
    id: "5",
    title: "¿Cómo empezamos a trabajar juntos?",
    content:
      "Escribinos por el canal que prefieras. Agendamos una llamada de diagnóstico gratuita, entendemos qué necesitás y te enviamos una propuesta clara con plazos y precios.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-black py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <span className="text-[#b566ff] text-xs font-mono tracking-[0.3em] uppercase">
            / Preguntas frecuentes
          </span>
          <h2 className="bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent text-4xl md:text-5xl font-semibold tracking-tight mt-5 leading-none">
            ¿Tenés dudas?
          </h2>
          <div className="h-px w-16 bg-[#b566ff]/60 mt-5" />
        </motion.div>

        <Accordion type="single" collapsible className="w-full" defaultValue="1">
          {items.map((item) => (
            <AccordionItem value={item.id} key={item.id} className="py-2 border-[#b566ff]/10">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center gap-3 py-3 text-left text-[15px] font-semibold leading-6 text-white transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&>svg]:-order-1 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:text-[#b566ff]">
                  {item.title}
                  <Plus
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 text-[#b566ff] transition-transform duration-200"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="pb-3 ps-7 text-white/50 leading-relaxed">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

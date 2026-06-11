"use client"

import * as React from "react"
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
} from "@/components/ui/animated-cards-stack"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Carlos M.",
    profession: "Dueño de restaurante",
    result: "+340% reservas",
    description:
      "Antes no aparecía en Google. Ahora tengo reservas todos los fines de semana gracias a la estrategia que me armaron.",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "testimonial-2",
    name: "Laura S.",
    profession: "E-commerce",
    result: "×3 ventas en 90 días",
    description:
      "La web nueva convierte muchísimo mejor. El diseño y la velocidad hacen toda la diferencia.",
    avatarUrl:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: "testimonial-3",
    name: "Marcos T.",
    profession: "Consultor independiente",
    result: "−10h / semana",
    description:
      "Las automatizaciones me ahorran más de 10 horas a la semana. Ahora me enfoco solo en lo que importa.",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: "testimonial-4",
    name: "Ana R.",
    profession: "Directora de clínica",
    result: "Agenda llena en 60 días",
    description:
      "Teníamos Instagram desde hace años pero nadie nos escribía. Cambiaron la estrategia y llenamos la agenda.",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-black px-8 py-20">

      {/* Header */}
      <div className="text-center mb-2 flex flex-col items-center gap-4">
        <span className="text-[#b566ff] text-xs font-mono tracking-[0.3em] uppercase">
          / Clientes
        </span>
        <h2 className="bg-gradient-to-br from-slate-100 to-slate-500 bg-clip-text text-transparent text-4xl md:text-5xl font-semibold tracking-tight leading-none">
          Lo que dicen<br />nuestros clientes
        </h2>
        <div className="h-px w-24 bg-[#b566ff]/60" />
        <p className="text-white/30 text-sm font-light tracking-wide max-w-xs">
          Resultados reales. Sin plantillas, sin copy-paste.
        </p>
      </div>

      {/* Cards — estructura idéntica a la original para preservar la animación */}
      <ContainerScroll className="container h-[300vh]">
        <div className="sticky left-0 top-0 h-svh w-full py-12">
          <CardsContainer className="mx-auto size-full h-[460px] w-[360px]">
            {TESTIMONIALS.map((t, index) => (
              <CardTransformed
                key={t.id}
                arrayLength={TESTIMONIALS.length}
                variant="dark"
                index={index + 2}
              >
                {/* Badge resultado */}
                <div className="w-full flex justify-between items-center">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#b566ff]/50 uppercase">
                    Reac Studio
                  </span>
                  <span className="text-[11px] font-mono text-[#b566ff] border border-[#b566ff]/30 px-2 py-0.5 rounded-sm tracking-wide">
                    {t.result}
                  </span>
                </div>

                {/* Quote */}
                <div className="flex flex-col gap-2 text-center">
                  <span className="text-[#b566ff]/25 text-5xl font-serif leading-none select-none self-start -mb-2">"</span>
                  <p className="text-white/65 text-sm leading-relaxed tracking-wide">
                    {t.description}
                  </p>
                </div>

                {/* Persona */}
                <div className="w-full">
                  <div className="h-px w-full bg-[#b566ff]/10 mb-4" />
                  <div className="flex items-center gap-3">
                    <Avatar className="!size-9 border border-[#b566ff]/20 grayscale">
                      <AvatarImage src={t.avatarUrl} alt={t.name} />
                      <AvatarFallback className="bg-[#b566ff]/10 text-[#b566ff] text-xs">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="block text-sm font-semibold text-white tracking-tight leading-none">
                        {t.name}
                      </span>
                      <span className="block text-[11px] text-white/30 mt-0.5 tracking-wide">
                        {t.profession}
                      </span>
                    </div>
                  </div>
                </div>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  )
}

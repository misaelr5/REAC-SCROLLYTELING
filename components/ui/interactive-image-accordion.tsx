"use client"

import React, { useState } from 'react';
import { HoverButton } from '@/components/ui/hover-glow-button';

interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
}

const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: 'Marketing Digital',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Desarrollo Web',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Automatizaciones',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Estrategia',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop',
  },
];

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        border border-[#b566ff]/15
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isActive ? 'grayscale-0' : 'grayscale'}`}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://placehold.co/400x450/0a0010/b566ff?text=Reac';
        }}
      />
      {/* Overlay oscuro + tinte púrpura */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
      <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'} bg-[#b566ff]/10`} />

      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap tracking-tight
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0'
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90 text-white/70'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-black font-sans">
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Texto / CTA */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col gap-6">
            <span className="text-[#b566ff] text-xs font-mono tracking-[0.3em] uppercase">
              / Empecemos
            </span>
            <h2 className="bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              ¿Listo para hacer<br />crecer tu negocio?
            </h2>
            <div className="h-px w-16 bg-[#b566ff]/60 mx-auto md:mx-0" />
            <p className="text-white/40 text-base font-light tracking-wide max-w-md mx-auto md:mx-0">
              Contanos qué necesitás y diseñamos la estrategia exacta para tu caso. Sin plantillas, sin vueltas.
            </p>
            <div className="mt-2">
              <HoverButton href="#contacto" className="shadow-[0_0_40px_-12px_#b566ff]">
                Hablemos
              </HoverButton>
            </div>
          </div>

          {/* Acordeón de imágenes */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-2">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

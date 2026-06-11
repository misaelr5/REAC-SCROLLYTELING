"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Offer {
  id: string | number;
  /** Ancla única para enlazar al proyecto, ej: "bistro-norte" → #bistro-norte */
  slug?: string;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  brandLogoSrc: string;
  brandName: string;
  promoCode?: string;
  href: string;
}

interface OfferCardProps {
  offer: Offer;
}

const OfferCard = React.forwardRef<HTMLAnchorElement, OfferCardProps>(({ offer }, ref) => (
  <motion.a
    ref={ref}
    id={offer.slug}
    href={offer.href}
    target={offer.href.startsWith("http") ? "_blank" : undefined}
    rel={offer.href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="relative flex-shrink-0 w-[300px] h-[380px] rounded-2xl overflow-hidden group/card snap-start border border-[#b566ff]/15 scroll-mt-24"
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    style={{ perspective: "1000px" }}
  >
    {/* Imagen */}
    <img
      src={offer.imageSrc}
      alt={offer.imageAlt}
      className="absolute inset-0 w-full h-2/4 object-cover transition-transform duration-500 group-hover/card:scale-110"
    />
    {/* Contenido */}
    <div className="absolute bottom-0 left-0 right-0 h-2/4 bg-[#060606] p-5 flex flex-col justify-between">
      <div className="space-y-2">
        <div className="flex items-center text-xs text-white/40">
          <Tag className="w-4 h-4 mr-2 text-[#b566ff]" />
          <span className="font-mono tracking-wide uppercase">{offer.tag}</span>
        </div>
        <h3 className="text-xl font-bold text-white leading-tight tracking-tight">{offer.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed">{offer.description}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[#b566ff]/10">
        <div className="flex items-center gap-3">
          <img
            src={offer.brandLogoSrc}
            alt={`${offer.brandName} logo`}
            className="w-8 h-8 rounded-full bg-white/5 object-cover grayscale"
          />
          <div>
            <p className="text-xs font-semibold text-white">{offer.brandName}</p>
            {offer.promoCode && <p className="text-xs text-white/40">{offer.promoCode}</p>}
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#b566ff]/10 flex items-center justify-center text-[#b566ff] transform transition-all duration-300 group-hover/card:rotate-[-45deg] group-hover/card:bg-[#b566ff] group-hover/card:text-black">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  </motion.a>
));
OfferCard.displayName = "OfferCard";

export interface OfferCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  offers: Offer[];
}

const OfferCarousel = React.forwardRef<HTMLDivElement, OfferCarouselProps>(
  ({ offers, className, ...props }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
      if (scrollContainerRef.current) {
        const { current } = scrollContainerRef;
        const scrollAmount = current.clientWidth * 0.8;
        current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };

    return (
      <div ref={ref} className={cn("relative w-full group", className)} {...props}>
        {/* Botón izquierda */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -translate-y-1/2 left-0 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-[#b566ff]/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 hover:border-[#b566ff]/50"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Contenedor scrollable */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        {/* Botón derecha */}
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-[#b566ff]/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 hover:border-[#b566ff]/50"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    );
  }
);
OfferCarousel.displayName = "OfferCarousel";

export { OfferCarousel, OfferCard };

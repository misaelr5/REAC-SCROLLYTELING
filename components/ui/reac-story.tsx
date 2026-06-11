'use client';

import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

export function ReacStory() {
  return (
    <FlowArt aria-label="Servicios Reac Studio">

      {/* 01 — Intro */}
      <FlowSection aria-label="Quiénes somos" style={{ backgroundColor: '#000', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b566ff]">01 — Reac Studio</p>
        <hr className="my-[2vw] border-none border-t border-white/15" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent">
            Crecé
            <br />
            Sin
            <br />
            Límites
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/15" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed text-white/60">
          Marketing, desarrollo web y automatizaciones que trabajan juntos para hacer crecer tu negocio. Sin plantillas, sin ruido — solo resultados.
        </p>
      </FlowSection>

      {/* 02 — Marketing */}
      <FlowSection aria-label="Marketing" style={{ backgroundColor: '#b566ff', color: '#0a0010' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — Servicio</p>
        <hr className="my-[2vw] border-none border-t border-black/30" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Marke
            <br />
            ting
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/30" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Estrategias digitales que conectan tu marca con las personas correctas.
        </p>
        <hr className="my-[2vw] border-none border-t border-black/30" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">SEO</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
              Aparecé en Google cuando tus clientes te buscan. Posicionamiento real y medible.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Contenido</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
              Redes que generan conversaciones, no solo likes. Contenido con intención.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Campañas</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
              Pauta optimizada que convierte presupuesto en clientes, no en impresiones vacías.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 03 — Desarrollo Web */}
      <FlowSection aria-label="Desarrollo Web" style={{ backgroundColor: '#0a0010', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b566ff]">03 — Servicio</p>
        <hr className="my-[2vw] border-none border-t border-white/15" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Desa
            <br />
            rrollo
            <br />
            Web
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/15" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed text-white/60">
          Sitios rápidos, modernos y optimizados para convertir visitas en clientes.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/15" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#b566ff]">Velocidad</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/50">
              Cada segundo cuenta. Webs que cargan al instante y retienen al visitante.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#b566ff]">Diseño</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/50">
              Interfaces que se sienten premium y guían al usuario hacia la acción.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#b566ff]">Conversión</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/50">
              Diseño y código pensados para un solo objetivo: que te contraten.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 04 — Automatizaciones */}
      <FlowSection aria-label="Automatizaciones" style={{ backgroundColor: '#b566ff', color: '#0a0010' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — Servicio</p>
        <hr className="my-[2vw] border-none border-t border-black/30" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Auto
            <br />
            mati
            <br />
            zar
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/30" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Eliminá las tareas repetitivas y dejá que los sistemas trabajen por vos.
        </p>
        <hr className="my-[2vw] border-none border-t border-black/30" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Flujos</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
              Procesos conectados que se ejecutan solos. Sin errores, sin olvidos.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Tiempo</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
              Recuperá horas cada semana para enfocarte en lo que realmente importa.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Escala</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
              Crecé sin sumar caos. Sistemas que aguantan cuando el volumen sube.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 05 — CTA */}
      <FlowSection aria-label="Empecemos" style={{ backgroundColor: '#000', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b566ff]">05 — Empecemos</p>
        <hr className="my-[2vw] border-none border-t border-white/15" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent">
            ¿List
            <br />
            o?
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/15" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed text-white/60">
          Contanos qué necesitás y diseñamos la estrategia exacta para tu negocio. Hablemos.
        </p>
      </FlowSection>

    </FlowArt>
  );
}

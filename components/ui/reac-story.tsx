'use client';

import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

export function ReacStory() {
  return (
    <FlowArt aria-label="Servicios Reac Studio">

      {/* 01 — Intro */}
      <FlowSection aria-label="Quiénes somos" style={{ backgroundColor: '#000', color: '#fff' }}>
        <div className="flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-20 text-center">
          <h2 className="text-[clamp(2.2rem,5.5vw,5.5rem)] font-bold leading-[1.1] tracking-tight bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent max-w-[18ch]">
            Tu negocio no necesita más ruido.<br className="hidden md:block" /> Necesita un sistema.
          </h2>

          <ul className="flex flex-col gap-3 text-[clamp(0.95rem,1.6vw,1.15rem)] text-white/50 font-light">
            {[
              "Consultas que no se responden a tiempo.",
              "Campañas que no se miden.",
              "Webs que se ven bien, pero no convierten.",
              "Clientes que llegan, preguntan y se enfrían.",
            ].map((item) => (
              <li key={item} className="flex items-center justify-center gap-2">
                <span className="text-[#b566ff] text-lg leading-none">—</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="max-w-[48ch] text-[clamp(0.9rem,1.4vw,1.05rem)] font-light leading-relaxed text-white/30 border-t border-white/10 pt-8">
            Con nosotros podés convertir esa presencia digital desordenada en un sistema comercial más claro, medible y eficiente.
          </p>
        </div>
      </FlowSection>

      {/* 02 — Marketing */}
      <FlowSection aria-label="Marketing" style={{ backgroundColor: '#2d0a5e', color: '#fff' }}>
        <div className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-20 text-center">
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-tight uppercase tracking-tight text-white">
            Marketing
          </h2>
          <p className="max-w-[48ch] text-[clamp(1rem,2vw,1.3rem)] font-normal leading-relaxed text-white/80">
            Estrategias digitales para atraer clientes, generar consultas y convertir atención en oportunidades reales.
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-2 w-full max-w-3xl">
            {[
              { title: "Estrategia", body: "Definimos qué comunicar, a quién hablarle y cómo diferenciar tu negocio." },
              { title: "Campañas", body: "Creamos campañas en Meta Ads y Google Ads orientadas a consultas, tráfico y ventas." },
              { title: "Contenido", body: "Ordenamos tu presencia digital con mensajes y piezas pensadas para generar confianza." },
            ].map(({ title, body }) => (
              <div key={title} className="max-w-[20ch] text-center">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#c98fff]">{title}</p>
                <p className="text-sm font-medium leading-relaxed text-white/70">{body}</p>
              </div>
            ))}
          </div>
          <p className="max-w-[44ch] text-sm font-semibold leading-relaxed text-white/50 border-t border-white/10 pt-8 italic">
            No se trata de publicar más. Se trata de comunicar mejor.
          </p>
        </div>
      </FlowSection>

      {/* 03 — Desarrollo Web */}
      <FlowSection aria-label="Desarrollo Web" style={{ backgroundColor: '#0a0010', color: '#fff' }}>
        <div className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-20 text-center">
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-tight uppercase tracking-tight text-white">
            Desarrollo Web
          </h2>
          <p className="max-w-[48ch] text-[clamp(1rem,2vw,1.3rem)] font-normal leading-relaxed text-white/80">
            Creamos páginas claras, modernas y pensadas para convertir visitas en clientes.
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-2 w-full max-w-3xl">
            {[
              { title: "Landing pages", body: "Páginas enfocadas en vender un servicio o captar consultas." },
              { title: "Sitios institucionales", body: "Webs profesionales para mostrar tu negocio de forma seria y ordenada." },
              { title: "Tiendas online", body: "E-commerce en WooCommerce, Shopify o Tienda Nube para vender con estructura." },
            ].map(({ title, body }) => (
              <div key={title} className="max-w-[20ch] text-center">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#b566ff]">{title}</p>
                <p className="text-sm font-medium leading-relaxed text-white/70">{body}</p>
              </div>
            ))}
          </div>
          <p className="max-w-[44ch] text-sm font-semibold leading-relaxed text-white/50 border-t border-white/10 pt-8 italic">
            Una web no es solo una vidriera. Es una herramienta comercial.
          </p>
        </div>
      </FlowSection>

      {/* 04 — Automatizaciones */}
      <FlowSection aria-label="Automatizaciones" style={{ backgroundColor: '#2d0a5e', color: '#fff' }}>
        <div className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-20 text-center">
          <h2 className="text-[clamp(2.4rem,7vw,7rem)] font-bold leading-tight uppercase tracking-tight text-white">
            Automatizaciones con IA
          </h2>
          <p className="max-w-[48ch] text-[clamp(1rem,2vw,1.3rem)] font-normal leading-relaxed text-white/80">
            Automatizamos procesos para ahorrar tiempo, ordenar consultas y mejorar el seguimiento comercial.
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-2 w-full max-w-4xl">
            {[
              { title: "Captación", body: "Conectamos formularios, WhatsApp y canales de contacto." },
              { title: "IA y respuestas", body: "Creamos asistentes automáticos para responder y guiar consultas." },
              { title: "Seguimiento", body: "Organizamos leads, clientes y oportunidades en un sistema claro." },
              { title: "Control", body: "Armamos CRM, planillas o dashboards para medir mejor el negocio." },
            ].map(({ title, body }) => (
              <div key={title} className="max-w-[18ch] text-center">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#c98fff]">{title}</p>
                <p className="text-sm font-medium leading-relaxed text-white/70">{body}</p>
              </div>
            ))}
          </div>
          <p className="max-w-[44ch] text-sm font-semibold leading-relaxed text-white/50 border-t border-white/10 pt-8 italic">
            Automatizar es ordenar tu negocio para vender mejor y escalar.
          </p>
        </div>
      </FlowSection>

      {/* 05 — CTA */}
      <FlowSection aria-label="Empecemos" style={{ backgroundColor: '#000', color: '#fff' }}>
        <div className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-20 text-center">
          <h2 className="text-[clamp(2rem,5.5vw,5rem)] font-bold leading-tight tracking-tight bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent max-w-[22ch]">
            ¿Querés ordenar tu presencia digital?
          </h2>
          <p className="max-w-[44ch] text-[clamp(1rem,2vw,1.2rem)] font-normal leading-relaxed text-white/60">
            Hablemos de tu negocio y veamos qué sistema necesita para vender mejor.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#b566ff] text-black text-sm font-bold tracking-wide hover:bg-[#c98fff] transition-colors"
            >
              Agendar diagnóstico
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-white/20 text-white/70 text-sm font-medium tracking-wide hover:text-white hover:border-white/40 transition-colors"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </FlowSection>

    </FlowArt>
  );
}

import { LampContainer } from "@/components/ui/lamp";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { PerspectiveMarquee } from "@/components/ui/perspective-marquee";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { WavyBlock, WavyBlockItem } from "@/components/ui/wavy-text-block";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { ContainerTextScroll } from "@/components/ui/container-text-scroll";
import { ReacStory } from "@/components/ui/reac-story";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PinnedTextSection } from "@/components/ui/pinned-text-section";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import { TestimonialsMarquee } from "@/components/ui/testimonials-marquee";
import { FaqSection } from "@/components/ui/faq-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { HoverButton } from "@/components/ui/hover-glow-button";
import Footer4Col from "@/components/ui/footer-column";

const services = ["Marketing", "Desarrollo Web", "Automatizaciones"];

const painPoints = [
  '"No sé cómo aparecer en Google."',
  '"Tengo Instagram pero no me escribe nadie."',
  '"No tengo una web."',
  '"No sé cómo hacer una campaña de marketing."',
  '"No tengo un buen flujo de trabajo."',
  '"Quiero automatizar procesos."',
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black">

      {/* ── Hero ── scroll-driven lamp (ya tiene pinned + scroll animation) */}
      <LampContainer>
        <h1 className="bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text pb-0 pt-2 text-center text-5xl font-semibold leading-none text-transparent md:text-8xl">
          Reac Studio
        </h1>
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

      {/* ── Scroll arrow ── fade in desde abajo */}
      <ScrollReveal direction="up" delay={0.2} className="flex w-full justify-center -mt-8 pb-6">
        <div className="flex flex-col items-center gap-1 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b566ff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </ScrollReveal>

      {/* ── Marquee ── fade + scale al entrar */}
      <ScrollReveal direction="scale" duration={1} margin="-40px">
        <PerspectiveMarquee items={painPoints} />
      </ScrollReveal>

      {/* ── Servicios ── story scroll con stacking GSAP */}
      <ReacStory />

      {/* ── Showcase visual ── tilt scroll (ya tiene animación) */}
      <ScrollReveal direction="up" distance={60} duration={0.9} margin="-60px">
        <section className="bg-black" style={{ perspective: "1000px" }}>
          <ContainerTextScroll
            titleComponent={
              <div className="flex flex-col items-center gap-4">
                <span className="text-[#b566ff] text-xs font-mono tracking-[0.3em] uppercase">
                  / Reac Studio
                </span>
                <h2 className="bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent text-4xl md:text-6xl font-semibold tracking-tight leading-none">
                  Resultados que<br />se ven
                </h2>
                <div className="h-px w-16 bg-[#b566ff]/60" />
                <p className="text-white/40 text-sm font-light tracking-wide max-w-sm">
                  Diseño, estrategia y tecnología trabajando juntos para hacer crecer tu negocio.
                </p>
              </div>
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80"
              alt="Dashboard de resultados"
              className="w-full h-full object-cover object-top opacity-40"
              draggable={false}
            />
          </ContainerTextScroll>
        </section>
      </ScrollReveal>

      {/* ── Proyectos / Portfolio ── carrusel horizontal */}
      <ScrollReveal direction="up" distance={48} duration={0.9} margin="-60px">
        <ProjectsSection />
      </ScrollReveal>

      {/* ── CTA texto ── pinned: entra, se queda, sale */}
      <PinnedTextSection className="bg-black">
        <section className="px-8 flex flex-col items-center justify-center gap-10">
          <h2 className="text-4xl md:text-6xl font-light text-center text-white/40 leading-tight max-w-4xl">
            Tu{" "}
            <AnimatedTextCycle
              words={["negocio", "marca", "empresa", "web", "equipo", "producto"]}
              interval={2800}
              className="text-[#b566ff]"
            />{" "}
            merece crecer de verdad
          </h2>
          <HoverButton href="#contacto" className="shadow-[0_0_40px_-12px_#b566ff]">
            Empecemos
          </HoverButton>
        </section>
      </PinnedTextSection>

      {/* ── Testimonials ── card stack scroll (ya tiene animación) */}
      <ScrollReveal direction="up" distance={40} duration={0.8} margin="-40px">
        <TestimonialsSection />
      </ScrollReveal>

      {/* ── Wavy cierre ── fade in + las palabras ya tienen wavy scroll */}
      <ScrollReveal direction="none" duration={1.2} margin="-40px">
        <section className="bg-black overflow-hidden py-24">
          <WavyBlock className="flex flex-col justify-start items-start gap-6">
            {["Marketing", "Automatizaciones", "Desarrollo Web", "Estrategia", "Resultados", "Crecimiento", "Reac Studio"].map((title, index) => (
              <WavyBlockItem key={title} index={index}>
                <h2 className="text-[9.3vw] font-bold leading-none tracking-tighter uppercase whitespace-nowrap text-white/10 hover:text-white/30 transition-colors duration-300">
                  {title}
                </h2>
              </WavyBlockItem>
            ))}
          </WavyBlock>
        </section>
      </ScrollReveal>

      {/* ── Testimonios en columnas (marquee vertical) ── */}
      <TestimonialsMarquee />

      {/* ── Preguntas frecuentes ── */}
      <FaqSection />

      {/* ── CTA final ── acordeón interactivo de servicios */}
      <ScrollReveal direction="up" distance={48} duration={0.9} margin="-60px">
        <LandingAccordionItem />
      </ScrollReveal>

      {/* ── Footer ── */}
      <Footer4Col />

    </main>
  );
}

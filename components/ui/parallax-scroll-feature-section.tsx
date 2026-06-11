'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'

const sections = [
    {
        id: 1,
        title: "Marketing",
        description: "Estrategias digitales que conectan tu marca con las personas correctas. Desde SEO y contenido hasta campañas de pago, hacemos que te encuentren.",
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80',
        reverse: false
    },
    {
        id: 2,
        title: "Automatizaciones",
        description: "Elimina las tareas repetitivas y deja que los sistemas trabajen por ti. Flujos de trabajo inteligentes que ahorran tiempo y reducen errores.",
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&q=80',
        reverse: true
    },
    {
        id: 3,
        title: "Desarrollo Web",
        description: "Sitios y aplicaciones web rápidas, modernas y optimizadas para convertir visitas en clientes. Diseño y código que trabajan juntos.",
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&q=80',
        reverse: false
    }
]

function ScrollSection({ section, index }: { section: typeof sections[0]; index: number }) {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const textOpacity  = useTransform(scrollYProgress, [0, 0.02, 0.965, 0.985], [0, 1, 1, 0])
    const textY        = useTransform(scrollYProgress, [0, 0.02, 0.965, 0.985], [28, 0, 0, -18])
    const imgOpacity   = useTransform(scrollYProgress, [0, 0.02, 0.965, 0.985], [0, 1, 1, 0])
    const clipPath     = useTransform(scrollYProgress, [0.01, 0.14], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])
    const labelOpacity = useTransform(scrollYProgress, [0, 0.018, 0.965, 0.985], [0, 1, 1, 0])

    return (
        <div ref={containerRef} className="h-[220vh]">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className={`flex items-center justify-center md:gap-40 gap-20 px-10 md:px-24 w-full max-w-6xl ${section.reverse ? 'flex-row-reverse' : ''}`}>

                    <motion.div style={{ opacity: textOpacity, y: textY }} className="flex flex-col gap-4 max-w-sm">
                        <motion.span style={{ opacity: labelOpacity }} className="text-[#b566ff] text-xs font-mono tracking-[0.3em] uppercase">
                            / 0{index + 1}
                        </motion.span>
                        <h2 className="text-5xl md:text-6xl font-semibold text-white leading-none tracking-tight">
                            {section.title}
                        </h2>
                        <div className="h-px w-12 bg-[#b566ff]/50" />
                        <p className="text-white/50 text-base leading-relaxed">
                            {section.description}
                        </p>
                    </motion.div>

                    <motion.div style={{ opacity: imgOpacity, clipPath }} className="relative hidden md:block shrink-0">
                        <img
                            src={section.imageUrl}
                            className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-lg"
                            alt={section.title}
                        />
                        <div className="absolute inset-0 rounded-lg ring-1 ring-[#b566ff]/20 pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export function ParallaxScrollFeatureSection() {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start start", "end end"],
    })

    // Pico 1: transición Mkt → Auto (~33%)   Pico 2: Auto → Web (~66%)
    // Rangos más estrechos = flash más rápido
    const flashOpacity = useTransform(
        scrollYProgress,
        [0.326, 0.335, 0.344,  0.656, 0.665, 0.674],
        [0,     1,     0,       0,     1,     0]
    )

    return (
        <div ref={wrapperRef} className="bg-black relative">
            {sections.map((section, index) => (
                <ScrollSection key={section.id} section={section} index={index} />
            ))}

            {/* Un solo overlay de flash, controlado por el scroll del wrapper completo */}
            <motion.div
                style={{ opacity: flashOpacity }}
                className="fixed inset-0 bg-black pointer-events-none"
                aria-hidden
            />
        </div>
    )
}

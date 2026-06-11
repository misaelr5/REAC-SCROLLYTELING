"use client"

import { motion, useSpring, useScroll } from "motion/react"

export function ScrollLinked() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <motion.div
            style={{
                scaleX,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                originX: 0,
                backgroundColor: "#b566ff",
                zIndex: 9999,
            }}
        />
    )
}

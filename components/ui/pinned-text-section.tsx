"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface PinnedTextSectionProps {
  children: React.ReactNode
  className?: string
}

export function PinnedTextSection({ children, className }: PinnedTextSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Fade in on enter, hold, fade out on exit
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    [0, 1, 1, 0]
  )
  // Scale up on enter
  const scale = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0.85, 1]
  )
  // Subtle upward drift
  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [40, 0, 0, -40]
  )

  return (
    <div ref={containerRef} className={`relative h-[160vh] ${className ?? ""}`}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div style={{ opacity, scale, y }}>
          {children}
        </motion.div>
      </div>
    </div>
  )
}

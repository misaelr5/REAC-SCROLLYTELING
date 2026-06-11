"use client"

import { motion, HTMLMotionProps } from "framer-motion"

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale" | "none"
  distance?: number
  duration?: number
  once?: boolean
  margin?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 48,
  duration = 0.8,
  once = true,
  margin = "-80px",
  className,
  ...props
}: ScrollRevealProps) {
  const initial: Record<string, number> = { opacity: 0 }
  const animate: Record<string, number> = { opacity: 1 }

  if (direction === "up")    { initial.y = distance;  animate.y = 0 }
  if (direction === "down")  { initial.y = -distance; animate.y = 0 }
  if (direction === "left")  { initial.x = distance;  animate.x = 0 }
  if (direction === "right") { initial.x = -distance; animate.x = 0 }
  if (direction === "scale") { initial.scale = 0.88;  animate.scale = 1 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

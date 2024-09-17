"use client"

import { useEffect } from "react"
import { MotionValue, motion, useSpring, useTransform } from "framer-motion"
import { DefaultText } from "../presets/className"

interface AnimatedNumberProps {
  value: number
  mass?: number
  stiffness?: number
  damping?: number
  precision?: number
  format?: (value: number) => string
  onAnimationStart?: () => void
  onAnimationComplete?: () => void
}

export function Custom({
  value,
  mass = 0.8,
  stiffness = 75,
  damping = 15,
  precision = 0,
  format = (num) => num.toLocaleString(),
  onAnimationStart,
  onAnimationComplete,
}: AnimatedNumberProps) {
  const spring = useSpring(value, { mass, stiffness, damping })
  const display: MotionValue<string> = useTransform(spring, (current: number) => // typeof number is a fix rn / Need to Test dis
    format(parseFloat(current.toFixed(precision)))
  )

  useEffect(() => {
    spring.set(value)
    if (onAnimationStart) onAnimationStart()
    const unsubscribe = spring.onChange(() => {
      if (spring.get() === value && onAnimationComplete) onAnimationComplete()
    })
    return () => unsubscribe()
  }, [spring, value, onAnimationStart, onAnimationComplete])

  return <motion.span className={DefaultText}>{display}</motion.span>
}

export function SpringNumbers({
    value,
    onAnimationStart,
    onAnimationComplete,
}: AnimatedNumberProps) {
    return (
        <Custom
            value={value}
            mass={1.3}
            stiffness={50}
            damping={15}
            onAnimationStart={onAnimationStart}
            onAnimationComplete={onAnimationComplete}
        />
    )
}
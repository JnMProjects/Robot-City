"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@components/twm"

interface ProgressProps  extends Omit<React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, "color"> {
  color?: { [key: number]: string }
  bg?: string
  value: number // Stelle sicher, dass value ein number ist
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, color, bg="bg-l-sec dark:bg-d-sec", ...props }, ref) => {
  const colorClasses = React.useMemo(() => {
    if (!color) return 'bg-l-prim dark:bg-d-prim duration-700'; // Default

    const sortedKeys = Object.keys(color).map(Number).sort((a, b) => a - b);
    for (let i = sortedKeys.length - 1; i >= 0; i--) {
      const threshold = sortedKeys[i];
      if (value >= threshold) {
        return color[threshold];
      }
    }

    return ''; 
  }, [color, value]);



  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full ",
        bg,
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 transition-all",
          colorClasses
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})

Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
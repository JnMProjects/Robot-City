"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"
import { AnimatePresence, MotionConfig, motion } from "framer-motion"
import { X } from "react-feather"

import { cn } from "@components/twm"

const TRANSITION = {
  type: "spring",
  bounce: 0.05,
  duration: 0.3,
}

function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, handler])
}

interface ScaleUpContextType {
  isOpen: boolean
  openScaleUp: () => void
  closeScaleUp: () => void
  uniqueId: string
  note: string
  setNote: (note: string) => void
}

const ScaleUpContext = createContext<ScaleUpContextType | undefined>(undefined)

function useScaleUp() {
  const context = useContext(ScaleUpContext)
  if (!context) {
    throw new Error("useScaleUp must be used within a ScaleUpProvider")
  }
  return context
}

function useScaleUpLogic() {
  const uniqueId = useId()
  const [isOpen, setIsOpen] = useState(false)
  const [note, setNote] = useState("")

  const openScaleUp = () => setIsOpen(true)
  const closeScaleUp = () => {
    setIsOpen(false)
    setNote("")
  }

  return { isOpen, openScaleUp, closeScaleUp, uniqueId, note, setNote }
}

interface ScaleUpRootProps {
  children: React.ReactNode
  className?: string
}

export function ScaleUpRoot({ children, className }: ScaleUpRootProps) {
  const ScaleUpLogic = useScaleUpLogic()

  return (
    <ScaleUpContext.Provider value={ScaleUpLogic}>
      <MotionConfig transition={TRANSITION}>
        <div
          className={cn(
            "relative flex items-center justify-center isolate",
            className
          )}
        >
          {children}
        </div>
      </MotionConfig>
    </ScaleUpContext.Provider>
  )
}

interface ScaleUpTriggerProps {
  children: React.ReactNode
  className?: string
}

export function ScaleUpTrigger({children, className }: ScaleUpTriggerProps) {
  const { openScaleUp, uniqueId } = useScaleUp()

  return (
    <>
        <motion.button
          key="button"
          layoutId={`ScaleUp-${uniqueId}`}
          className={cn(
            "flex h-9 items-center border border-zinc-950/10 bg-white px-3 text-zinc-950 dark:border-zinc-50/10 dark:bg-zinc-700 dark:text-zinc-50",
            className
          )}
          style={{
            borderRadius: 8,
          }}
          onClick={openScaleUp}
        >
          <motion.span layoutId={`ScaleUp-label-${uniqueId}`} className="text-sm">
            {children}
          </motion.span>
        </motion.button>
    </>
  )
}

interface ScaleUpContentProps {
  children: React.ReactNode
  className?: string
  header?: string
}

export function ScaleUpContent({header, children, className }: ScaleUpContentProps) {
  const { isOpen, closeScaleUp, uniqueId } = useScaleUp()
  const formContainerRef = useRef<HTMLDivElement>(null)

  useClickOutside(formContainerRef, closeScaleUp)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeScaleUp()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [closeScaleUp])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={formContainerRef}
          layoutId={`ScaleUp-${uniqueId}`}
          className={cn(
            "absolute h-[200px] w-[364px] overflow-hidden border border-zinc-950/10 bg-white outline-none dark:bg-zinc-700 z-50", // Changed z-90 to z-50
            className
          )}
          style={{
            borderRadius: 12,
            top: "auto", // Remove any top positioning
            left: "auto", // Remove any left positioning
            transform: "none", // Remove any transform
          }}
        >
            {header && <ScaleUpHeader>{header}</ScaleUpHeader>}
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface ScaleUpFormProps {
  children: React.ReactNode
  onSubmit?: (note: string) => void
  className?: string
}

export function ScaleUpForm({
  children,
  onSubmit,
  className,
}: ScaleUpFormProps) {
  const { note, closeScaleUp } = useScaleUp()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(note)
    closeScaleUp()
  }

  return (
    <form
      className={cn("flex h-full flex-col", className)}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  )
}

interface ScaleUpLabelProps {
  children: React.ReactNode
  className?: string
}

export function ScaleUpLabel({ children, className }: ScaleUpLabelProps) {
  const { uniqueId, note } = useScaleUp()

  return (
    <motion.span
      layoutId={`ScaleUp-label-${uniqueId}`}
      aria-hidden="true"
      
      style={{
        opacity: note ? 0 : 1,
      }}
      className={cn(
        "absolute left-4 top-3 select-none text-sm text-zinc-500 dark:text-zinc-400",
        className
      )}
    >
      {children}
    </motion.span>
  )
}

interface ScaleUpTextareaProps {
  className?: string
}

export function ScaleUpTextarea({ className }: ScaleUpTextareaProps) {
  const { note, setNote } = useScaleUp()

  return (
    <textarea
      className={cn(
        "h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none",
        className
      )}
      autoFocus
      value={note}
      onChange={(e) => setNote(e.target.value)}
    />
  )
}

interface ScaleUpFooterProps {
  children: React.ReactNode
  className?: string
}

export function ScaleUpFooter({ children, className }: ScaleUpFooterProps) {
  return (
    <div
      key="close"
      className={cn("flex justify-between px-4 py-3", className)}
    >
      {children}
    </div>
  )
}

interface ScaleUpCloseButtonProps {
  className?: string
}

export function ScaleUpCloseButton({ className }: ScaleUpCloseButtonProps) {
  const { closeScaleUp } = useScaleUp()

  return (
    <button
      type="button"
      className={cn("flex items-center", className)}
      onClick={closeScaleUp}
      aria-label="Close ScaleUp"
    >
      <X size={16} className="text-zinc-900 dark:text-zinc-100" />
    </button>
  )
}

interface ScaleUpSubmitButtonProps {
  className?: string
  text?: string
}

export function ScaleUpSubmitButton({ text="Submit", className }: ScaleUpSubmitButtonProps) {
  return (
    <button
      className={cn(
        "relative ml-1 flex h-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 bg-transparent px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:text-zinc-50 dark:hover:bg-zinc-800",
        className
      )}
      type="submit"
      aria-label={text}
    >
      {text}
    </button>
  )
}

export function ScaleUpHeader({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "px-4 py-2 font-semibold text-zinc-900 dark:text-zinc-100",
        className
      )}
    >
      {children}
    </div>
  )
}

export function ScaleUpBody({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn("p-4", className)}>{children}</div>
}

// New component: ScaleUpButton
export function ScaleUpButton({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-4 py-2 text-left text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

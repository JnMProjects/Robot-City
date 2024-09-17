import { ShaderLensBlur } from "@/components/effects/shaders/LensBlur";
import { DefaultText } from "@/components/presets/className";
import { cn } from "@/components/twm";
import { TextAnimate } from "@/components/ui/TextAnimate";
import { motion } from "framer-motion";
import { Honk } from "next/font/google";
import Image from "next/image";

const BSpice = Honk({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-bungee-spice",
})

export default function ShaderTestPage() {
    return (
        <main className="bg-black relative w-screen h-screen">
            <section className="relative flex items-center justify-center translate-y-2/4 z-0"><ShaderLensBlur /></section>
            <motion.div className="relative flex items-center justify-center translate-y-2/4 -translate-y-10 z-1 invert no" initial={
                {
                    y: -10,
                    opacity: 0
                }
            }>
                <Image src="/athenaeum.png" className="touch-none pointer-events-none no" aria-disabled alt="Athenaeum Stade Logo" width={200} height={300}  />
            </motion.div>
            <section className="relative flex items-center justify-center translate-y-2/4 translate-y-5 z-2">
                <h1><TextAnimate className={cn("font-bold font-bungeeSpice ",BSpice.className)} text="Loading Web-App" type="calmInUp" /></h1>
            </section>
        </main>
    )
}
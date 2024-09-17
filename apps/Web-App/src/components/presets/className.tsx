
import { Oxanium, Bungee_Spice } from "next/font/google";
const oxanium = Oxanium({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oxanium",
});

const bungeeSpice = Bungee_Spice({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bungee-spice",
})



export const DefaultWrapper: string = `${oxanium.variable} ${bungeeSpice.variable} font-oxanium bg-l-bg dark:bg-d-bg text-l-txt dark:text-d-txt duration-700`


export const DefaultText: string = `font-oxanium text-l-txt dark:text-d-txt duration-700`

export const DefaultHeader: string = `font-bungee-spice text-l-txt dark:text-d-txt duration-700 mb-4 text-2xl font-bold`
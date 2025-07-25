import type React from "react"
import type { Metadata } from "next"
import { Inter, Anton } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
})

export const metadata: Metadata = {
  title: "Umbraco in the City - Manchester",
  description: "Join the Umbraco community in Manchester for a day of inspiring talks, workshops, and networking.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, anton.variable)}>
        {children}
      </body>
    </html>
  )
}

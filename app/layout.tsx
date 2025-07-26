import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { cn } from "@/lib/utils"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Umbraco in the City - Manchester",
  description: "Join the Umbraco community in Manchester for a day of inspiring talks, workshops, and networking.",
    generator: 'claude.code'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const targetDate = "2025-11-07T09:00:00"

  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-brand-dark antialiased")}>
        <div className="text-white min-h-screen overflow-hidden relative">
          <Header 
            targetDate={targetDate}
            statusText="TICKETS COMING SOON"
            buttonText={{
              mobile: "Buy Now",
              desktop: "Buy Tickets"
            }}
            buttonDisabled={true}
          />
          
          {children}
          
          <Footer 
            copyrightText="© 2025 Umbraco in the City: Manchester. Celebrating the Umbraco community."
            showBeeIcon={true}
          />
        </div>
      </body>
    </html>
  )
}

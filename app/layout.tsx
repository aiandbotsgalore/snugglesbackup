import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Snuggles - The Cognitive Anomaly",
  description: "Cuddly. Critical. Coming for Your Beliefs. A cognitive anomaly wrapped in polyester.",
  keywords: "snuggles, cognitive anomaly, teddy bear, philosophy, logic, pattern recognition",
  authors: [{ name: "Snuggles Archive" }],
  openGraph: {
    title: "Snuggles - The Cognitive Anomaly",
    description: "Cuddly. Critical. Coming for Your Beliefs.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  )
}

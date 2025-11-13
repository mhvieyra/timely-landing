import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Timely - Domina tu tiempo, potencia tu productividad",
  description:
    "Timely es tu asistente de productividad inteligente. Timer Pomodoro, gestión de tareas, análisis profundo y gamificación. 100% gratis.",
  openGraph: {
    title: "Timely - Domina tu tiempo, potencia tu productividad",
    description: "Timely es tu asistente de productividad inteligente. 100% gratis.",
    url: "https://timely.lat",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

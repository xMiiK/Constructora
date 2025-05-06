import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Constructora - Análisis de Archivos',
  description: 'Aplicación para análisis de archivos de construcción',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white min-h-screen flex items-center justify-center`}>
        {children}
      </body>
    </html>
  )
} 
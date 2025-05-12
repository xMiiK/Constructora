import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'

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
      <body className={`${inter.className} bg-white min-h-screen`}>
        <header className="w-full py-4 px-6">
          <div className="container mx-auto flex justify-center">
            <Image
              src="/images/logo.svg"
              alt="Logo Constructora"
              width={250}
              height={50}
              priority
            />
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
} 
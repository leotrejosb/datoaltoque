import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// Asegúrate de que estas rutas sean correctas
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'datoaltoque | Perfiles Digitales Profesionales',
  description: 'Eleva tu networking con soluciones digitales para equipos y profesionales.',
  keywords: 'perfiles digitales, networking profesional, soluciones B2B, tarjetas digitales',
  authors: [{ name: 'datoaltoque' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      {/* Estas clases ahora funcionarán gracias al Paso 1 */}
      <body className="bg-white text-text-primary font-sans">
        <Navbar />
        {/* Aplicamos las clases del contenedor aquí */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
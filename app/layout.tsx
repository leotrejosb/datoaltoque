import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  // ... (tus metadatos)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      {/* 1. Añadimos flex flex-col y min-h-screen al <body> */}
      <body className="bg-white text-text-primary font-sans flex flex-col min-h-screen">
        <Navbar />
        
        {/* 2. Añadimos flex-grow a <main> para que "empuje" al footer */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
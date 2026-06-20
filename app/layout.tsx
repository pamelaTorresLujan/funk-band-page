import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Anton } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const anton = Anton({
  variable: '--font-anton',
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'NAPA SURFERS — Funk crudo desde 420',
  description:
    'Napa Surfers: banda de funk. Groove sucio, vientos calientes y mucho ritmo. Escuchá en Spotify, mirá los videos y vení a un show.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1a1813',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${anton.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

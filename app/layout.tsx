import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NAPA SURFERS',
  description:
    'Napa Surfers: banda de funk. Groove sucio, vientos calientes y mucho ritmo. Escuchá en Spotify, mirá los videos y vení a un show.',
  generator: 'v0.app',
  icons: [
    {
      rel: 'icon',
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Napa%20logo%20png%202-sTz9xAHkYq0lItuO2F8OEQPQbOYqVF.png',
    },
  ],
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
    <html lang="es" className="dark bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

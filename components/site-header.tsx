"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const NAV = [
  { label: "Música", href: "#musica" },
  { label: "Videos", href: "#videos" },
  { label: "Banda", href: "#banda" },
  { label: "Shows", href: "#shows" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4d01ba88-6ce8-4df3-8a20-633bd9af7c5b-F4qj7FSfF98hZ41lj6eTjh2qfxfjsa.png"
            alt="Logo de Napa Surfers"
            className="h-14 w-auto md:h-16"
          />
          <span className="sr-only">Napa Surfers</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://open.spotify.com/intl-es/artist/6IQgnDEqf8NIiQibKH6xwS"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Escuchar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 font-mono text-sm uppercase tracking-[0.15em] text-foreground/90 hover:bg-card"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://open.spotify.com/intl-es/artist/6IQgnDEqf8NIiQibKH6xwS"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center font-mono text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground"
            >
              Escuchar en Spotify
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

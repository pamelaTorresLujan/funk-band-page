import { Disc3, Video, Camera } from "lucide-react"

const SOCIAL = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/intl-es/artist/6IQgnDEqf8NIiQibKH6xwS",
    Icon: Disc3,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/watch?v=sOloZUBjQwY",
    Icon: Video,
  },
  { label: "Instagram", href: "https://www.instagram.com/napa.surfers/", Icon: Camera },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Napa%20logo%20png%202-sTz9xAHkYq0lItuO2F8OEQPQbOYqVF.png"
            alt="Logo completo de Napa Surfers"
            className="h-40 w-auto md:h-56"
          />

          <div className="flex flex-wrap items-center justify-center gap-3">
            {SOCIAL.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-foreground/85 transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </div>

          <a
            href="mailto:contacto@napasurfers.com"
            className="font-mono text-sm uppercase tracking-[0.15em] text-secondary hover:underline"
          >
            napasurfers@gmail.com
          </a>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Napa Surfers</span>
          <span>Funk · Surf · Since 420</span>
        </div>
      </div>
    </footer>
  )
}

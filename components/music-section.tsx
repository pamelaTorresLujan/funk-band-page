import { SectionHeading } from "./section-heading"

export function MusicSection() {
  return (
    <section id="musica" className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <SectionHeading index="01" title="Música" />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-border bg-card p-2">
          <iframe
            title="Napa Surfers en Spotify"
            src="https://open.spotify.com/embed/artist/6IQgnDEqf8NIiQibKH6xwS?utm_source=generator&theme=0"
            width="100%"
            height="480"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="font-heading text-4xl uppercase leading-tight text-foreground md:text-5xl">
            Subí el <span className="text-secondary">volumen</span>
          </h3>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Todo nuestro repertorio vive en Spotify, Youtube Music 
            y otras plataformas de streaming.
            Dale play, seguinos y guardá lo que más te pegue.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://open.spotify.com/intl-es/artist/6IQgnDEqf8NIiQibKH6xwS"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-secondary px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-secondary-foreground transition-transform hover:-translate-y-0.5"
            >
              Abrir en Spotify
            </a>
            <a
              href="https://www.youtube.com/watch?v=sOloZUBjQwY"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-foreground/25 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Canal de YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

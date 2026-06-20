import { Play, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative h-[78vh] w-full overflow-hidden grain">
      {/* background image */}
      <img
        src="/assets/grupo-2.jpeg"
        alt="Los integrantes de Napa Surfers"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 md:px-8 md:pb-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-secondary">
          Funk · Groove · Villa Mercedes
        </p>
        <h1 className="font-heading text-[18vw] leading-[0.82] tracking-tight text-foreground md:text-[12rem]">
          NAPA
          <br />
          <span className="text-primary">SURFERS</span>
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/85 md:text-lg">
          Napa Surfers navegando las olas mas incomprendidas del Funk 
          fusionando rock, reggae, hip hop, jazz, soul y ritmos latinos
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="https://open.spotify.com/intl-es/artist/6IQgnDEqf8NIiQibKH6xwS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Play className="size-4 fill-current" />
            Escuchar ahora
          </a>
          <a
            href="#videos"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-secondary hover:text-secondary"
          >
            Ver videos
          </a>
        </div>

        <a
          href="#musica"
          className="mt-12 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/60 transition-colors hover:text-foreground"
        >
          <ArrowDown className="size-3.5 animate-bounce" />
          Bajá el volumen, subí el ritmo
        </a>
      </div>
    </section>
  )
}

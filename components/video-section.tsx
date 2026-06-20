import { SectionHeading } from "./section-heading"

const VIDEOS = [
  {
    id: "sOloZUBjQwY",
    title: "Sesión en vivo",
    note: "Directo desde el sótano",
  },
  {
    id: "8XmxNr_h9lI",
    title: "Video oficial",
    note: "Groove + cámara en mano",
  },
]

export function VideoSection() {
  return (
    <section id="videos" className="relative bg-card grain">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading index="02" title="Videos" />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {VIDEOS.map((v) => (
            <div key={v.id} className="group">
              <div className="overflow-hidden rounded-2xl border border-border bg-background">
                <div className="relative aspect-video">
                  <iframe
                    title={v.title}
                    src={`https://www.youtube.com/embed/${v.id}`}
                    className="absolute inset-0 size-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-heading text-2xl uppercase text-foreground">
                  {v.title}
                </h3>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">
                  {v.note}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

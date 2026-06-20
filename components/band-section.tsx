import { SectionHeading } from "./section-heading"

const GALLERY = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-19%20at%2011.15.24%20PM%20%284%29-A7v6QrH8K7QBLRb51PCMflT5JW3aNf.jpeg",
    alt: "Guitarrista tocando una Stratocaster en vivo",
    span: "row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-19%20at%2011.15.24%20PM%20%283%29-Mq5iJjW9Sgmzkxa0559vKHwHMTfjy6.jpeg",
    alt: "Percusionista con camisa floreada tocando campanas",
    span: "",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-19%20at%2011.15.24%20PM%20%288%29-d3s6Khb9PE0URwRnXkDTuclpKfAxfo.jpeg",
    alt: "Vocalista con jersey de los Ravens cantando",
    span: "",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-19%20at%2011.15.24%20PM%20%286%29-gTlqCl9fkHOFWtU3RaJKKjN4LMtAKB.jpeg",
    alt: "Bajista con buzo verde tocando un bajo rojo",
    span: "row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-19%20at%2011.15.24%20PM%20%285%29-23B4UJxi2c91xGWa4b3rRsG08P1cnk.jpeg",
    alt: "Baterista con gorro morado detrás de un platillo",
    span: "",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-19%20at%2011.18.04%20PM-iMaX5DE8O4CpRxqDd6iUTI5EmXPFnL.jpeg",
    alt: "Vocalista cantando intensamente en blanco y negro",
    span: "",
  },
]

export function BandSection() {
  return (
    <section id="banda" className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <SectionHeading index="03" title="La banda" />

      {/* group photo + intro */}
      <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-19%20at%2011.15.24%20PM-MxngROIZoy8q1bQyESQOu8IbeqtaVc.jpeg"
            alt="Foto grupal de los integrantes de Napa Surfers"
            className="size-full object-cover"
          />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">
            Ocho cabezas, un solo groove
          </p>
          <h3 className="mt-3 font-heading text-4xl uppercase leading-tight text-foreground md:text-5xl">
            Una fiesta que no querés que termine
          </h3>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Napa Surfers navegando las olas mas incomprendidas del Funk 
            fusionando rock, reggae, hip hop, jazz, soul y ritmos latinos
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["Voz", "Guitarra", "Bajo", "Batería", "Percusión", "Vientos"].map(
              (role) => (
                <li
                  key={role}
                  className="rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-foreground/80"
                >
                  {role}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      {/* live gallery */}
      <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-3 md:auto-rows-[240px]">
        {GALLERY.map((img) => (
          <div
            key={img.src}
            className={`group relative overflow-hidden rounded-xl border border-border ${img.span}`}
          >
            <img
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              className="size-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

import { SectionHeading } from "./section-heading"
import { MapPin } from "lucide-react"

const SHOWS = [
  { date: "12 SEP", city: "Villa Mercedes", venue: "?", status: "Entradas" },
  // { date: "26 JUL", city: "La Plata", venue: "Galpón 420", status: "Entradas" },
  // { date: "09 AGO", city: "Rosario", venue: "Bar Marítimo", status: "Agotado" },
  // { date: "23 AGO", city: "Córdoba", venue: "Patio Funk", status: "Entradas" },
  // { date: "06 SEP", city: "Mar del Plata", venue: "La Ola", status: "Pronto" },
];

export function ShowsSection() {
  return (
    <section id="shows" className="relative bg-card grain">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading index="04" title="Shows" />

        <ul className="mt-10 divide-y divide-border border-y border-border">
          {SHOWS.map((show) => {
            const sold = show.status === "Agotado"
            const soon = show.status === "Pronto"
            return (
              <li
                key={`${show.date}-${show.city}`}
                className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-5">
                  <span className="font-heading text-2xl uppercase text-primary md:text-3xl">
                    {show.date}
                  </span>
                  <div>
                    <p className="font-heading text-xl uppercase text-foreground md:text-2xl">
                      {show.city}
                    </p>
                    <p className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      <MapPin className="size-3.5" />
                      {show.venue}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  disabled={sold || soon}
                  className={`w-full rounded-full px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.12em] transition-transform sm:w-auto ${
                    sold
                      ? "cursor-not-allowed border border-border text-muted-foreground"
                      : soon
                        ? "cursor-not-allowed border border-secondary/40 text-secondary"
                        : "bg-primary text-primary-foreground hover:-translate-y-0.5"
                  }`}
                >
                  {show.status}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

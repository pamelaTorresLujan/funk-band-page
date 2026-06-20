const ITEMS = [
  "NAPA SURFERS",
  "SINCE 420",
  "SURFEANDO",
  "GROOVE",
]

export function MarqueeStrip() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden border-y-2 border-primary bg-primary py-3">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="mx-6 font-heading text-2xl uppercase tracking-wide text-primary-foreground md:text-3xl"
          >
            {item}
            <span className="ml-12 text-primary-foreground/50">✺</span>
          </span>
        ))}
      </div>
    </div>
  )
}

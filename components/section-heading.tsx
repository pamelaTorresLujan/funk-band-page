export function SectionHeading({
  index,
  title,
}: {
  index: string
  title: string
}) {
  return (
    <div className="flex items-end gap-4 border-b border-border pb-4">
      <span className="font-mono text-sm text-primary">[{index}]</span>
      <h2 className="font-heading text-5xl uppercase leading-none tracking-tight text-foreground md:text-7xl">
        {title}
      </h2>
    </div>
  )
}

import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { MarqueeStrip } from "@/components/marquee-strip"
import { MusicSection } from "@/components/music-section"
import { VideoSection } from "@/components/video-section"
import { BandSection } from "@/components/band-section"
import { ShowsSection } from "@/components/shows-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative bg-background">
      <SiteHeader />
      <Hero />
      <MarqueeStrip />
      <MusicSection />
      <VideoSection />
      <BandSection />
      <ShowsSection />
      <SiteFooter />
    </main>
  )
}

import { Navigation } from "@/components/navigation"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"

export default function ServicePage() {
  return (
    <main>
      <Navigation />
      <ServiceHero />
      <ServiceFeatures />
    </main>
  )
}

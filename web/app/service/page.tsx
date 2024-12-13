import { Navigation } from "@/components/navigation"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white relative">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url("/service-background.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">
        <Navigation />
        <ServiceHero />
        <ServiceFeatures />
      </div>
    </main>
  )
}


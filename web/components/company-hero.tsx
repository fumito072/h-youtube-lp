import Image from "next/image"

export function CompanyHero() {
  return (
    <div className="relative h-screen">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/tokyo-skyline.jpg"
          alt="Tokyo skyline"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-cyan-400/80" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-24">
        <div className="min-h-[calc(100vh-6rem)] flex items-center">
          <h1 className="text-7xl font-bold text-white tracking-tight">
            Company
          </h1>
        </div>
      </div>
    </div>
  )
}


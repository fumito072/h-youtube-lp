import Image from "next/image"

export function ServiceHero() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Geometric Pattern Background */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `linear-gradient(45deg, #f1f1f1 25%, transparent 25%),
                           linear-gradient(-45deg, #f1f1f1 25%, transparent 25%),
                           linear-gradient(45deg, transparent 75%, #f1f1f1 75%),
                           linear-gradient(-45deg, transparent 75%, #f1f1f1 75%)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }}
      />
      
      <div className="container mx-auto px-4 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          <div className="space-y-8">
            <h1 className="text-7xl font-bold tracking-tight text-gray-900">
              Service
            </h1>
          </div>
          
          <div className="relative">
            {/* Blue Circle Background */}
            <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
            
            {/* Phone Mockup */}
            <div className="relative transform rotate-12">
              <Image
                src="/phone-mockup.png"
                alt="Phone mockup with social media apps"
                width={400}
                height={800}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


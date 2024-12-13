import Image from "next/image"

export function Hero() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      
      <div className="container mx-auto px-4 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          <div className="space-y-8 text-gray-800">
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
                src="/placeholder.svg"
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


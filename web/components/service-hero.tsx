import Image from "next/image"

export function ServiceHero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          <div className="space-y-8">
            <h1 className="text-7xl font-bold tracking-tight text-gray-900">
              Service
            </h1>
            <p className="text-xl text-gray-700">
              メディアエイドのサービスは、最新のテクノロジーと創造的なアプローチを組み合わせ、
              お客様のビジネスに革新的なソリューションを提供します。
            </p>
          </div>
          
          <div className="relative">
            {/* Overlay PNG Image */}
            <div className="relative z-20">
              <Image
                src="/service-iphone-image.png"
                alt="Service illustration"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Blue Circle Background */}
            <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-blue-200 rounded-full opacity-50 blur-3xl z-10"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

